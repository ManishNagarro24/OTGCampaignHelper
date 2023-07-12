import semantic_similarity
import root
emotion_mapping = {
    "sad": ["compassion", "empathy", "support"],
    "helplessness": ["hope", "solidarity", "generosity"],
    "excited": ["enthusiasm", "anticipation", "gratitude"],
    "inspired": ["motivation", "empowerment", "pride"],
    "grateful": ["appreciation", "thankfulness", "contentment"],
    "hopeful": ["optimism", "determination", "encouragement"],
    "joyful": ["happiness", "celebration", "delight"],
    "graceful": ["kindness", "generosity", "forgiveness"],
    "moved": ["touched", "inspired", "overwhelmed"],
    "gracious": ["appreciative", "thankful", "benevolent"],
    "motivated": ["driven", "committed", "passionate"],
    "blessed": ["fortunate", "lucky", "privileged"],
    "optimistic": ["positive", "confident", "hopeful"],
    "humbled": ["modest", "respectful", "honored"],
    "courageous": ["brave", "fearless", "determined"],
    "supportive": ["encouraging", "loyal", "helpful"],
    "appreciative": ["grateful", "thankful", "admiring"],
    "generous": ["charitable", "giving", "selfless"],
    "proud": ["accomplished", "satisfied", "glorious"],
    "empathetic": ["understanding", "caring", "sensitive"],
}


def get_expected_emotions(emotion):
    expected_emotions=[]
    print(emotion)
    for key in emotion_mapping:
        key=root.find_root(key)
        similarity=semantic_similarity.calculate_similarity(emotion,key)
        if(similarity>0.8):
            expected_emotions+=emotion_mapping[key]
    return expected_emotions