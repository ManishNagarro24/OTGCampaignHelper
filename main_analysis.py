import json
import comment_analysis
import story_analysis
story_emotions_list=[]
def analyze():
    #with open('comments.json', 'r') as file:
        #comments = json.load(file)
    with open('story.txt', 'r') as file:
        story=file.read()
    #comment_analysis.analyze_comment(story,comments)
    story_emotions_list=story_analysis.analyze_story(story)
    return story_emotions_list
