import streamlit as st
import json

# Function to save user responses to JSON file
def save_responses(responses):
    with open('user_responses.json', 'w') as file:
        json.dump(responses, file)

# Function to retrieve questions from backend Python code
def get_questions():
    # Replace this with your own backend code to generate questions
    questions = [
        {
            'id': 1,
            'question': 'What kind of pet you have?',
            'type': 'text'
        },
        {
            'id': 2,
            'question': 'How old are you?',
            'type': 'number'
        },
        {
            'id': 3,
            'question': 'What is your favorite color?',
            'type': 'text'
        }
    ]
    return questions

# Main Streamlit app
def main():
    st.title('Modular Chatbot')

    # Retrieve questions from backend Python code
    questions = get_questions()

    # Initialize user responses dictionary
    responses = {}

    # Iterate through questions
    for question in questions:
        question_id = question['id']
        question_text = question['question']
        question_type = question['type']

        # Display question on the left side of the page as a textbox
        col1 = st.sidebar
        with col1:
            response = st.text_input(f"Question {question_id}", key=question_id, value=question_text)

        # Collect response on the right side of the page
        col2 = st
        with col2:
            if question_type == 'text':
                response = col2.text_input("", key=question_id, value="", on_change=True, on_submit=True)
            elif question_type == 'number':
                response = col2.number_input("", key=question_id, value=0, on_change=True, on_submit=True)
            else:
                response = None

            # Save response to dictionary
            responses[question_id] = response

        # Save responses to JSON file upon submission
        if response is not None:
            save_responses(responses)

if __name__ == '__main__':
    main()
