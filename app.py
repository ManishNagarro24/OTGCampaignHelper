from flask import Flask, request, jsonify
from flask_cors import CORS
import gpt
app = Flask(__name__)
CORS(app)

@app.route('/generatecontent', methods=['POST'])
def generate_content():
    # Logic to generate content
    # ...
    

    # Return the generated content
    return jsonify({'message': 'Content generated successfully'})

@app.route('/regeneratecontent', methods=['POST'])
def regenerate_content():
    # Logic to regenerate content
    # ...

    # Return the regenerated content
    return jsonify({'message': 'Content regenerated successfully'})

@app.route('/generateimage', methods=['POST'])
def generate_image():
    print("called")
    if request.method == 'OPTIONS':
        # Handle preflight request
        response = app.make_default_options_response()
    else:
        text = request.json['Prompt']
        image_url=gpt.call_gpt_image(text)

        # Return the image URL as JSON response
        response = jsonify({'image_url': image_url})
    return response
@app.route('/regenerateimage', methods=['POST'])
def regenerate_image():
    # Logic to regenerate image
    # ...

    # Return the regenerated image
    return jsonify({'message': 'Image regenerated successfully'})

if __name__ == '__main__':
    app.run(debug=True)
