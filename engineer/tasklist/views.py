from django.shortcuts import render, HttpResponse
from .forms import TechnicalStepFormSet, ReportForm
from datetime import datetime


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
        report_form = ReportForm(request.POST)
        formset = TechnicalStepFormSet(request.POST)

        if report_form.is_valid() and formset.is_valid():
            print(report_form.cleaned_data)

            for form in formset:
                print(form.cleaned_data)

    else:
        report_form = ReportForm()
        formset = TechnicalStepFormSet()

    return render(
        request,
        "home.html",
        {
            "report_form": report_form,
            "formset": formset,
        }
    )