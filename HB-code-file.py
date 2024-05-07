import requests
import json

# Sample payload data
payload = {
    'event': 'build',
    'message': 'Hello Hemachitra yu'
}

def send_webhook():
    try:
        # Send POST request to the webhook URL with JSON payload
        response = requests.post(webhook_url, json=payload)
        # Check response status code
        if response.status_code == 200:
            print('Webhook sent gsuccessfully!')
        else:
            print(f'Failed to send webhook. Status code: {response.status_code}')
    except Exception as e:
        print(f'Error sending webhook: {str(e)}')

if __name__ == '__main__':
    send_webhook()
