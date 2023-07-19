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