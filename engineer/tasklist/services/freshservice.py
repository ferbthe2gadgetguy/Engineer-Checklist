# import requests
# url = "https://microbaseincorporatedhelpdesk.freshservice.com/api/v2/tickets"

# def create_ticket(report, steps, dry_run=False):

#     if dry_run:
#         print("=== PAYLOAD ===")
#         subject = f"Service Report - {report['machine_description']}"
#         f"{report['problem']}"
#         # These two above are just for testings
#         return None

#         response = requests.post(
#         url,
#         auth=("API KEY", "X"),
#         json=payload
#     )
        
#         response.raise_for_status()

#     return response

# For testing purposes
from django.conf import settings
import requests


url = f"{settings.FRESHSERVICE_DOMAIN}/api/v2/tickets"


def create_ticket(dry_run=True):

    payload = {
        "subject": "Django API Test",
        "description": "Testing Freshservice connection",
        "email": "test@example.com",
        "priority": 1,
        "status": 2
    }

    if dry_run:
        print(payload)
        return None

    response = requests.post(
        url,
        auth=(settings.FRESHSERVICE_API_KEY, "X"),
        json=payload,
        timeout=10, # Useful/Important. Keeps things from loading forever
    )

    print(response.status_code)
    print(response.text)

    response.raise_for_status()

    return response