const Report = {
    tbody: null,
    totalForms: null,
    addRow: null,
    renumberForms: null,
    updateEndTime: null,
};


document.addEventListener("DOMContentLoaded", () => {

    Report.tbody =
        document.getElementById("formset-body");

    Report.totalForms =
        document.getElementById("id_form-TOTAL_FORMS");

    Report.updateEndTime = updateEndTime;

    initSortable();
    initFormset();
    initTemplates();

    document.addEventListener("input", (e) => {

        if (
            e.target.id === "id_activity_start" ||
            e.target.matches("input[name$='minutes_consumed']")
        ) {
            Report.updateEndTime();
        }

    });

});