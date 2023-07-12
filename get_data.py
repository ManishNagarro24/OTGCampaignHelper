import http.client
import json
from bs4 import BeautifulSoup
import re
import justgiving_api
import gpt
import pandas as pd

page_short_name_list=["hiscoxabseilchallenge2023","sponsoraprayerspace-philippines-ss","sarah-and-alex-half-marathon","thebigsleepforme2015","rosa-listenathon",
                          "fundraisingfaulkner","barrattandtreetops","onedayonepound","ldifme","grandpasrainbowhair"]  
stories={}
def clean_stories(html_string):
    # Create a BeautifulSoup object
    soup = BeautifulSoup(html_string, 'lxml')

    # Find all the <p> tags
    paragraphs = soup.find_all('p')

    # Extract the text from the paragraphs while excluding text within any tags
    extracted_text = ""
    for paragraph in paragraphs:
        prettified_string = paragraph.prettify()
        cleaned_string = re.sub('<.*?>', '', prettified_string)
        extracted_text+=cleaned_string
    return extracted_text
    

def get_stories():
    stories={}
    for page_name in page_short_name_list:
        response=justgiving_api.get_response_by_page_short_name(page_name)
        if(response!=""):
            print(response)
            cleaned_story=clean_stories(response["story"])
            cleaned_story=cleaned_story.replace("\n", " ")
            words = cleaned_story.split()
            modified_string = " ".join(words)
            stories[page_name]=modified_string
    return stories

def get_comments():
    comments={}
    df = pd.read_csv('output.csv')

    # Iterate over each content in the "content" column
    for content,heading in df['Summary'],df['heading']:
        # Pass each content to your function
        prompt=f"Given {content} as story generate about 50 comments and amount donated in each comment ranging from 10$-100$ of supporters who have donated for the cause.Keep in mind all causes are positive."
        prompt+="Give response as [{comment1:comment1,amount1:amount1},{comment2:comment2,amount2:amount2}.......]"
        response_text=gpt.callopenai_story(prompt)
        comments[heading]=response_text