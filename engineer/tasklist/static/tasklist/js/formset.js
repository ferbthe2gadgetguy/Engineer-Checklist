function initFormset() {

    const addButton =
        document.getElementById("add-row");

    const tbody = Report.tbody;


    Report.renumberForms = function() {

        const rows =
            Report.tbody.querySelectorAll(".form-row");


        rows.forEach((row, index) => {

            row.querySelectorAll(
                "input, textarea, select"
            )
            .forEach(field => {

                field.name =
                    field.name.replace(
                        /form-\d+-/,
                        `form-${index}-`
                    );

                field.id =
                    field.id.replace(
                        /form-\d+-/,
                        `form-${index}-`
                    );

            });

        });


        Report.totalForms.value =
            rows.length;

    };


    Report.addRow = function() {

        const formNum =
            Number(Report.totalForms.value);


        let template =
            document.getElementById(
                "empty-form"
            ).innerHTML;


        template =
            template.replace(
                /__prefix__/g,
                formNum
            );


        Report.tbody.insertAdjacentHTML(
            "beforeend",
            template
        );


        Report.totalForms.value =
            formNum + 1;

    };


    addButton.addEventListener("click", () => {

        Report.addRow();

        Report.updateEndTime();

    });


    tbody.addEventListener("click", (e) => {

        if (!e.target.classList.contains("delete-row"))
            return;


        const rows =
            tbody.querySelectorAll(".form-row");


        if (rows.length <= 1) {
            alert("At least one row is required.");
            return;
        }


        e.target.closest("tr").remove();


        Report.renumberForms();

        Report.updateEndTime();

    });


    tbody.addEventListener("change", (e) => {

        const target = e.target;


        if (target.matches("input[name$='successful']")) {

            const row =
                target.closest(".form-row");

            const failed =
                row.querySelector(
                    "input[name$='failed']"
                );

            if (target.checked && failed) {
                failed.checked = false;
            }
        }


        if (target.matches("input[name$='failed']")) {

            const row =
                target.closest(".form-row");

            const successful =
                row.querySelector(
                    "input[name$='successful']"
                );

            if (target.checked && successful) {
                successful.checked = false;
            }
        }

    });

}
