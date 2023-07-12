from sklearn.metrics.pairwise import cosine_similarity
import gensim.downloader as api
import root

glove_model = api.load('glove-wiki-gigaword-100')

def calculate_similarity(emotion1,emotion2):
    # Calculate similarity between emotions using GloVe

    emotion1=root.find_root(emotion1.lower())
    emotion2=root.find_root(emotion2.lower())
    similarity = glove_model.similarity(emotion1, emotion2)
    return similarity

if __name__ == "__main__":
    calculate_similarity()