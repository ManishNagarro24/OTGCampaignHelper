import openai
import json
openai.api_key = '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'
def call_gpt(prompt):
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
    prompt=f"Generate image related to {user_input}.This image will be used in a fundraising story to take donations for {user_input}"
    response = openai.Image.create(
    prompt=prompt,
    n=1,
    size="1024x1024"
    )
    image_url = response['data'][0]['url']
    print(image_url)
    return image_url