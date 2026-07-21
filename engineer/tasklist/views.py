from django.shortcuts import render, HttpResponse
from .forms import TechnicalStepFormSet, ReportForm
from datetime import datetime
from .services.freshservice import create_test_ticket
from django.http import JsonResponse
from django.conf import settings


# Note to future me: this tells urls.py, views.home specifically, that you are trying to retrieve this
    #return HttpResponse("Hello, World!")  # Admin is (username: admin) (password:password123)
# Create your views here.
def home(request):
    report_form = ReportForm()
    formset = TechnicalStepFormSet()

    return render(
        request,
        "tasklist/home.html",
        {
            "report_form": report_form,
            "formset": formset,
        }
    )

def create_report(request):

    if request.method == "POST":
        print("POST RECEIVED")
        report_form = ReportForm(request.POST)
        formset = TechnicalStepFormSet(request.POST)

        if report_form.is_valid() and formset.is_valid():
            print("REPORT")
            print(report_form.cleaned_data)

            print("STEPS")

            steps = []

            for form in formset:
                if form.cleaned_data and not form.cleaned_data.get("DELETE", False):
                    step = form.cleaned_data.copy()

                    step["incomplete"] = (
                        not step.get("minutes_consumed")
                        or not step.get("troubleshooting")
                        or (
                            not step.get("successful")
                            and not step.get("failed")
                        )
                    )

                    steps.append(step)
    #           KEEPING THIS HERE AS FAILSAFE. DO NOT UNCOMMENT.
    #           It makes home.html create a ticket.
    #         response = create_ticket(
    #     # report=report_form.cleaned_data, # Comment temporarily these two for testings
    #     # steps=steps,
    # )
    #         if response is not None:
    #             print(response.status_code)
    #             print(response.text)
    

            return render(
            request,

            "tasklist/report.html",
            {
                "report": report_form.cleaned_data,
                "steps": steps,
            }
            )
    else:
        report_form = ReportForm()
        formset = TechnicalStepFormSet()

    return render(
        request,
        "tasklist/home.html",
        {
            "report_form": report_form,
            "formset": formset,
        }
    )

def send_to_freshservice(request):

    if request.method != "POST":
        return JsonResponse(
            {"success": False},
            status=405
        )


    try:

        response = create_test_ticket(
            report=request.session["report"],
            steps=request.session["steps"]
            # ADD WHEN YOU ARE READY TO ADD VARIABLES
        )


        if response.status_code == 201:

            ticket = response.json()["ticket"]

            ticket_id = ticket["id"]


            return JsonResponse(
                {
                    "success": True,
                    "ticket_url":
                    f"{settings.FRESHSERVICE_DOMAIN}/a/tickets/{ticket_id}"
                }
            )


        return JsonResponse(
            {"success": False}
        )


    except Exception as e:

        print(e)

        return JsonResponse(
            {"success": False}
        ) 
    
