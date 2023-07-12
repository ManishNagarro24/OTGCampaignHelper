import openai
import json
openai.api_key = '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'
def callopenai_story():
    stories={}
    with open('story.json', 'r') as json_file:
        stories=json.load(json_file)
    prompt=f"Here are stories {stories} of fundraising for animal shelter cause.Based on the above fundraising stories give the most successful and reason why it is best among other fundraising stories.On basis of it create a new story which will achieve gaol sooner."
    response = openai.Completion.create(
            engine='text-davinci-003',
            prompt=prompt,
            n=1,
            stop=None,
            temperature=0.7,
            max_tokens=2000
        )
    response_text = response.choices[0].text
    print(response_text)
if __name__ == "__main__":
    callopenai_story()