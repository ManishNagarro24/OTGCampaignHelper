import get_data
import gpt

def explaination(raw_story):
    prompt=f"Your role is of an interpreter that takes raw stories of fundraising pages.You need explain the story in simple english language."
    prompt+=f"Given story {raw_story} in raw format."
    prompt+="Give response as a paragraph"
    response_text=gpt.callopenai_story(prompt)
    return response_text
def get_labels(raw_story):
    prompt=f"Your role is to provide a list of emotions that the author is expecting to receive in the comment when he will post his story in a fundraising page"
    prompt+=f"Here is the story {raw_story}"
    prompt+="Give response in this format only-[list of expected emotions]"
    response_text=gpt.callopenai_story(prompt)
    return response_text
def get_keywords(raw_story):
    prompt=f"Your role is to extract major keywords from the story so that it can be later used to suggest user to use these keywords for the success of story"
    prompt=f"Story-{raw_story}"
    prompt+="Give response in this format '[list of keywords]'"
    response_text=gpt.callopenai_story(prompt)
    return response_text
def prepare_training_data():
    stories=get_data.get_stories()
    data_train={}
    for story in stories:
        story_summary=explaination(stories[story])
        story_emotion_labels=get_labels(stories[story])
        story_keywords=get_keywords(stories[story])
        data_train[story]={"summary":story_summary,"story_emotion_labels":story_emotion_labels,"story_keywords":story_keywords}
    return data_train
def prepare_training_data_comments():
    comments=get_data.get_comments()
    return comments
