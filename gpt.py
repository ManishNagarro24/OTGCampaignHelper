import openai
import json
openai.api_key = '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'
def call_gpt(cause,suggestions):
    prompt=f"Your role is to create a fundraiser story for getting donation {cause} cause and these suggestions {suggestions}.Create a fundraising story"
    response = openai.Completion.create(
            engine='text-davinci-003',
            prompt=prompt,
            n=1,
            stop=None,
            temperature=0.7,
            max_tokens=2000
        )
    response_text = response.choices[0].text
    return response_text

def call_gpt_image(user_input):
    prompt=f"Generate real life image related to {user_input} in landscape format 1000px wide and 400px height.This image will be used in a fundraising story to take donations for {user_input}. Use real life image."
    response = openai.Image.create(
    prompt=prompt,
    n=1,
    size="1024x1024"
    )
    image_url = response['data'][0]['url']
    print(image_url)
    return image_url