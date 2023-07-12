import http,http.client
import json

app_id = '72bade96'

host = 'api.staging.justgiving.com'

def get_response_by_page_short_name(page_name):
    endpoint = f'/{app_id}/v1/fundraising/pages/{page_name}'
    headers = {
        'Host': host,
        'Content-Type': 'application/json'
    }

    conn = http.client.HTTPSConnection(host)
    conn.request('GET', endpoint, headers=headers)

    response = conn.getresponse()
    # Process the response
    if response.status == 200:
        data = response.read().decode('utf-8')
        json_data = json.loads(data)
        return json_data
        # Handle the data as needed
    conn.close()
    return ""
def get_all_pages():
    endpoint = f'/{app_id}/v1/fundraising/pages'
    headers = {
        'Host': host,
        'Content-Type': 'application/json',
        'Authorization' : 'Basic dmFsaWRAanVzdGdpdmluZy5jb206cGFzc3dvcmQ='
    }

    conn = http.client.HTTPSConnection(host)
    conn.request('GET', endpoint, headers=headers)

    response = conn.getresponse()
    print(response.status)
    # Process the response
    if response.status == 200:
        data = response.read().decode('utf-8')
        json_data = json.loads(data)
        print(json_data)
        # Handle the data as needed
    conn.close()

if __name__ == "__main__":
    get_all_pages()
