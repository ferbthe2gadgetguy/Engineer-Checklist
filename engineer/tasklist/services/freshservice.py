# For testing purposes
from django.conf import settings
from django.template.loader import render_to_string
import requests

def build_report_html(report, steps, ticket=None): # In the future, put this above testing purposes

    return render_to_string(
        "tasklist/report_reply.html",
        {
            "report": report,
            "steps": steps,
            "ticket": ticket,
            "ticket_id": ticket["id"] if ticket else None
        }
    )

# url = f"{settings.FRESHSERVICE_DOMAIN}/api/v2/tickets" # Reminder that this creates tickets, not replies to them


# def create_test_ticket(dry_run=True): # If only testing, make True. If a new ticket can be submitted, make False.

    
#     payload = { # Run this for when it's time to test out integration
#     "subject": "TEST - Django Freshservice API Integration",
#     "description": "This is an API connectivity test. Please ignore.",
#     "email": "your.email@example.com",
#     "priority": 1,
#     "status": 2,

#     # payload = {
#     #     "subject": f"Service Report - {report['machine_description']}",
#     #     "description": build_description(report, steps),
#     #     "email": report["email"],
#     #     "priority": 1,
#     #     "status": 2,
#     # } # Save for later

# }

#     if dry_run:
#         print(payload)
#         return None

#     response = requests.post(
#         url,
#         auth=(settings.FRESHSERVICE_API_KEY, "X"),
#         json=payload,
#         timeout=10, # Useful/Important. Keeps things from loading forever
#     )

#     print(response.status_code)
#     print(response.text)

#     response.raise_for_status()

#     return response



def reply_to_ticket(ticket_id, report, steps, dry_run=True):

    html = build_report_html(
    report,
    steps,
    ticket={
        "id": ticket_id
    })

    payload = {
        "body": html
    }

    reply_url = (
        f"{settings.FRESHSERVICE_DOMAIN}"
        f"/api/v2/tickets/{ticket_id}/reply"
    )

    if dry_run:
        print("=== URL ===")
        print(reply_url)

        print("\n=== PAYLOAD ===")
        print(payload)

        return payload

    response = requests.post(
        reply_url,
        auth=(settings.FRESHSERVICE_API_KEY, "X"),
        json=payload,
        timeout=10,
    )

    response.raise_for_status()
    return response
