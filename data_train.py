import pandas as pd
import collect_and_label_stories
import json

def create_data_train_table():
    data_dict=collect_and_label_stories.prepare_training_data()
    # Create an empty list to store the story headings
    story_headings = []

    # Create an empty list to store the feature dictionaries
    feature_dicts = []

    # Iterate over the dictionary and separate the story headings and feature dictionaries
    for story_heading, features in data_dict.items():
        story_headings.append(story_heading)
        feature_dicts.append(features)
    # Convert feature dictionaries to DataFrame
    df = pd.DataFrame(feature_dicts)
    # Add the story headings column
    df['story_heading'] = story_headings
    # Print the resulting DataFrame
    # Convert DataFrame to HTML table
    df.to_csv('data_train_story.csv', index=False)

    comment_data_dict=collect_and_label_stories.prepare_training_data_comments()
    json_string = json.dumps(comment_data_dict)

    # Save the JSON string to a file
    with open('data_train_comment.json', 'w') as file:
        file.write(json_string)


if __name__ == "__main__":
    create_data_train_table()