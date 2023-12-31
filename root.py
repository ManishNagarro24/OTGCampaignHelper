emotion_roots ={
    "compassion": "compassion",
    "compassionate": "compassion",
    "empathy": "empathy",
    "empathetic": "empathy",
    "sympathy": "sympathy",
    "sympathetic": "sympathy",
    "sadness": "sad",
    "sad": "sad",
    "joy": "joy",
    "joyful": "joy",
    "anger": "anger",
    "angry": "anger",
    "love": "love",
    "loving": "love",
    "fear": "fear",
    "fearful": "fear",
    "surprise": "surprise",
    "surprised": "surprise",
    "disgust": "disgust",
    "disgusted": "disgust",
    "happiness": "happiness",
    "happy": "happiness",
    "grief": "grief",
    "grieving": "grief",
    "hope": "hope",
    "hopeful": "hope",
    "confusion": "confusion",
    "confused": "confusion",
    "excitement": "excitement",
    "excited": "excitement",
    "frustration": "frustration",
    "frustrated": "frustration",
    "gratitude": "gratitude",
    "grateful": "gratitude",
    "pride": "pride",
    "proud": "pride",
    "shame": "shame",
    "shameful": "shame",
    "envy": "envy",
    "envious": "envy",
    "loneliness": "loneliness",
    "lonely": "loneliness",
    "anxiety": "anxiety",
    "anxious": "anxiety",
    "curiosity": "curiosity",
    "curious": "curiosity",
    "optimism": "optimism",
    "optimistic": "optimism",
    "despair": "despair",
    "despairing": "despair",
    "satisfaction": "satisfaction",
    "satisfied": "satisfaction",
    "regret": "regret",
    "regretful": "regret",
    "contentment": "contentment",
    "content": "contentment",
    "affection": "affection",
    "affectionate": "affection",
    "disappointment": "disappointment",
    "disappointed": "disappointment",
    "awe": "awe",
    "awesome": "awe",
    "jealousy": "jealousy",
    "jealous": "jealousy",
    "relief": "relief",
    "relieved": "relief",
    "guilt": "guilt",
    "guilty": "guilt",
    "anticipation": "anticipation",
    "anticipating": "anticipation",
    "boredom": "boredom",
    "bored": "boredom",
    "hatred": "hatred",
    "hateful": "hatred",
    "resentment": "resentment",
    "resentful": "resentment",
    "empowerment": "empowerment",
    "empowered": "empowerment",
    "remorse": "remorse",
    "remorseful": "remorse",
    "amusement" : "amuse"
}
def find_root(word):
    for words in emotion_roots:
        if(words==word):
            return emotion_roots[word]
    return word
