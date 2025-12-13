import os
import requests

API_ENDPOINT ="http://127.0.0.1:8000"


def check_health():
    res = requests.get(f"{API_ENDPOINT}/api/health")
    print(res.json())

def play_data():
    res = requests.get(f"{API_ENDPOINT}/api/playdata")
    print(res.json())


def post_data(surname: str, firstname: str)->None:
    try:
        result = requests.post(f"{API_ENDPOINT}/api/send", json={"firstname":firstname, "surname": surname})
        if result.status_code == 200:
            print(result.json())
        else:
            print(f"Error: {result.status_code} - {result.text}")
    except requests.exceptions.RequestException as e:
        print(f"Request failed: {e}")


if __name__=="__main__":
    ##check_health()
    #post_data("Ogunleye", "Adeola")
    play_data()

