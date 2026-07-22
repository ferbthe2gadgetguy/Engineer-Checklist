from django import forms
from django.forms import formset_factory


class TechnicalStepForm(forms.Form):
    minutes_consumed = forms.IntegerField()

    tick_mark = forms.BooleanField(required=False, initial=True)

    troubleshooting = forms.CharField(
        widget=forms.Textarea(attrs={
            "rows": 2,
            "placeholder": "What were you troubleshooting?"
        })
    )

    successful = forms.BooleanField(required=False)
    failed = forms.BooleanField(required=False)

    remarks = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={"rows": 2,
        "placeholder": "Anything to say?"
        })
    )

    def clean(self):
        cleaned_data = super().clean()

        successful = cleaned_data.get("successful")
        failed = cleaned_data.get("failed")

        if not successful and not failed:
            raise forms.ValidationError(
                "Please mark the step as Successful or Failed."
            )

        return cleaned_data


TechnicalStepFormSet = formset_factory(
    TechnicalStepForm,
    extra=1,
    can_delete=True
)


class ReportForm(forms.Form):
    # activity_time = forms.CharField(
    #     required=False,
    #     widget=forms.Textarea(attrs={
    #         "rows": 2,
    #         "placeholder": "0000-0000"
    #     })
    # )
    # Trying something out.

    activity_date = forms.DateField(
        widget=forms.DateInput(
            attrs={"type": "date"}
        )
    )

    activity_start = forms.TimeField(
        widget=forms.TimeInput(attrs={"type": "time"})
    )

    activity_end = forms.TimeField(
        required=False,
        widget=forms.TimeInput(
            attrs={
                "type": "time",
                "readonly": True
            }
        )
    )

    problem = forms.CharField(
        widget=forms.Textarea(attrs={
            "rows": 2,
            "placeholder": "Why were you contacted?"
        })
    )

    ticket_id = forms.CharField(
    max_length=20,
    widget=forms.TextInput(
        attrs={
           "placeholder": "(e.g. 12345)"
            #"\nFound in the Freshservice URL after /a/tickets/."
        }
    )
)

    serial_number = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={
            "rows": 2,
            "placeholder": "Serial number"
        })
    )

    product_number = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={
            "rows": 2,
            "placeholder": "Product number"
        })
    )

    machine_description = forms.CharField(
        widget=forms.Textarea(attrs={
            "rows": 2,
            "placeholder": "Product's model"
        })
    )

    asset_tag = forms.CharField(
        widget=forms.Textarea(attrs={
            "rows": 2,
            "placeholder": "Product's asset tag"
        })
    )

    parts_installed = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={
            "rows": 2,
            "placeholder": "What was installed?"
        })
    )

    parts_needed = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={
            "rows": 2,
            "placeholder": "Which part was needed?"
        })
    )

    spare_parts = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={
            "rows": 2,
            "placeholder": "Product's spare parts tag"
        })
    )

    ct_code = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={
            "rows": 2,
            "placeholder": "Product's Commodity Tracking"
        })
    )

    fid = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={
            "rows": 2,
            "placeholder": "Product's Failure ID"
        })
    )

    end_remarks = forms.CharField(
        widget=forms.Textarea(attrs={
            "rows": 2,
            "placeholder": "Mark x if no ?"
        })
    )

    os_ver = forms.CharField(
        required=False,
        widget=forms.Textarea(attrs={
            "rows": 2,
        })
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        for field_name, field in self.fields.items():
            field.widget.attrs.update({
                "class": "form-input"
            })

            if self.errors.get(field_name):
                field.widget.attrs.update({
                    "class": "form-input input-error"
                })

