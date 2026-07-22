function initSortable() {

    new Sortable(Report.tbody, {
        animation: 150,
        handle: ".drag-handle",

        onEnd() {
            Report.renumberForms();
            Report.updateEndTime();
        }
    });

}