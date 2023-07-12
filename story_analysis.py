import openai

openai.api_key = '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'
def analyze_story(story):
    prompt=f"Here is a {story} posted by a fundraiser.What dominant emotions are expressed by the story content which is the cause of fundraising. Give response as a list of string"
    response = openai.Completion.create(
            engine='text-davinci-003',
            prompt=prompt,
            n=1,
            stop=None,
            temperature=0.7,
            maximum_length=256
        )
    response_text = response.choices[0].text
    return response_text

