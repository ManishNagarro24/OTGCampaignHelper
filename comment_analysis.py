import openai
import json

openai.api_key = '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'

def analyze_comment(story,data):
    # Load the JSON file containing the comments

    # Iterate over each comment in the JSON file
    for comment_obj in data['comments']:
        comment = comment_obj['comment']
        # Remove previous comments if prompt exceeds 500 tokens
        prompt = f"Story: {story},Comment:{comment}.Give all the dominant emotions expressed as a list"

        response = openai.Completion.create(
            engine='text-davinci-003',
            prompt=prompt,
            n=1,
            stop=None,
            temperature=0.7
        )
        
        # Extract score and dominant emotions from response
        response_text = response.choices[0].text

        # Remove leading and trailing spaces
        response_text = response_text.strip()

        # Split the string into a list
        emotion_list = response_text.split('\n')

        # Remove empty elements and extract emotions without numbering
        emotion_list = [emotion.split('. ')[-1] for emotion in emotion_list if emotion]

        emotion_list = [string.replace("-", "") for string in emotion_list]

        # Update comment object with score and dominant emotions
        comment_obj['dominant_emotions'] = emotion_list
        # Set the previous score for the next iteration
        # Save the updated JSON file after processing each comment
        with open('comments_updated.json', 'w') as file:
            json.dump(data, file)
def extract_score_and_emotions(response_text):
    emotions = eval(response_text)
    return emotions