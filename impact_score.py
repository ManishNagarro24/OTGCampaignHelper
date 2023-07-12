import main_analysis
import emotion_mapping
import re

def get_impact_score():
    story_em=main_analysis.analyze()
    story_em.split(",")
    story_em = re.sub(r'[^\w\s]', '', story_em)
    story_em=story_em.split()
    expected_emotions=emotion_mapping.get_expected_emotions(story_em[0])
    print(expected_emotions)

if __name__ == "__main__":
    get_impact_score()