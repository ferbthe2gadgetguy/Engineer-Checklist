const templates = {

    pm: {

        fields: {

            problem: "Preventive Maintenance",
            machine_description: "HP Laptop 15s",
            asset_tag: "N/A",
            serial_number: "",
            product_number: "",
            parts_installed: "",
            parts_needed: "",
            spare_parts: "",
            ct_code: "",
            fid: "",
            os_ver: "",
            end_remarks: "Preventive Maintenance has been completed",
        },

        rows: [
        
            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Checked and Verified Unit",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power On",
                successful: true,
                remarks: "Able to boot"
            },
            
            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power off",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Disassembled Base Enclosure",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Disassembled Battery",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Disassembled RAM",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Disassembled heat sink and fan",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 5,
                tick_mark: true,
                troubleshooting: "Remove and clean old thermal paste",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 5,
                tick_mark: true,
                troubleshooting: "Assembled all components",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Assembled Battery",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Assembled base enclosure",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power on",
                successful: true,
                remarks: "Able to boot"
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Run Diagnostic Test (System Board) Test",
                successful: true,
                remarks: "PASS ID:"
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Run Diagnostic Tool (Processor Check)",
                successful: true,
                remarks: "PASS ID:"
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Run Diagnostic Tool (Memory)",
                successful: true,
                remarks: "PASS ID:"
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Run Diagnostic Tool (SSD) 1st Test",
                successful: true,
                remarks: "PASS ID:"
            },

            {
                minutes_consumed: 25,
                tick_mark: true,
                troubleshooting: "Run Diagnostic Tool (SSD) 2nd Test",
                successful: true,
                remarks: "PASS ID:"
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Run Diagnostic Tool (Keyboard)",
                successful: true,
                remarks: "PASS ID:"
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Run Diagnostic Tool (Fan Speed) Test",
                successful: true,
                remarks: "PASS ID:"
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Run Diagnostic Tool (Fan Thermal) Test",
                successful: true,
                remarks: "PASS ID:"
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power off",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Turn over to",
                successful: true,
                remarks: ""
            }

        ]

    },
    
    bat: {

        fields: {

            problem: "Laptop is not charging",
            serial_number: "",
            machine_description: "HP Laptop 15s",
            product_number: "",
            asset_tag: "",
            parts_installed: "",
            parts_needed: "",
            spare_parts: "",
            ct_code: "",
            fid: "",
            os_ver: "",
            end_remarks: "Resolved - New Battery",
        },

        rows: [
        
            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Checked and Verified Unit",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Disassembled Base Enclosure",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Disassembled old Battery",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Assembled new Battery",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power on",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power off",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Run Diagnostic Tool (Battery Test)",
                successful: true,
                remarks: "PASS ID:"
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Run Diagnostic Tool (Keyboard Test)",
                successful: true,
                remarks: "PASS ID:"
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Run Diagnostic Tool (System Fast Test): \nProcessor \nBattery \nSSD \nWireless Module \nSystem Board",
                successful: true,
                remarks: "PASS ID:"
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Charged unit",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Stressed Test Battery",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Turnover to OSS",
                successful: true,
                remarks: ""
            },

        ]

    },

    isokey: {

        fields: {

            problem: "Device wont boot",
            serial_number: "",
            machine_description: "HP Laptop 15s",
            product_number: "",
            asset_tag: "",
            parts_installed: "",
            parts_needed: "",
            spare_parts: "",
            ct_code: "",
            fid: "",
            os_ver: "",
            end_remarks: "For Part Request - Top Cover with Keyboard",
        },

        rows: [
        
            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Checked and Verified Unit",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Verified Reported Problem",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power On",
                failed: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power On (Connected to Type C Charger Ports 1 and 2)",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Disassembled Base Enclosure",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Separated Top Cover with Keyboard from Display Assembly",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: 'Unplug Top Cover with keyboard "ribbon cable"',
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power On using Type-C Docking Station",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power Off",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Disassembled all components from Top Cover with Keyboard (Reported Unit)",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power On (Spare Unit)",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power Off (Spare Unit)",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Disassembled Base Enclosure (Spare Unit)",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Disassembled Battery (Spare Unit)",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Isolated System Board (Spare Unit) to Reported Unit",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Isolated System Board (Reported Unit) to Spare Unit",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Assembled all components (Spare Unit)",
                successful: true,
                remarks: ""
            },  

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Assembled Battery (Spare Unit)",
                successful: true,
                remarks: ""
            }, 

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Assembled Base Enclosure (Spare Unit)",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power On (Spare Unit)",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power Off (Spare Unit)",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Assembled all components from Top Cover with Keyboard (Reported Unit)",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Assembled Battery (Reported Unit)",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Assembled Base Enclosure (Reported Unit)",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Power Off (Reported Unit)",
                successful: true,
                remarks: ""
            },

            {
                minutes_consumed: 2,
                tick_mark: true,
                troubleshooting: "Turnover to OSS",
                successful: true,
                remarks: ""
            },

        ]

    },

};

function loadTemplate(template) {

    const tbody = Report.tbody;
    const totalForms = Report.totalForms;

    tbody.innerHTML = "";
    totalForms.value = 0;

    // Fill the normal fields
    for (const [fieldName, value] of Object.entries(template.fields)) {

        const field = document.getElementById(`id_${fieldName}`);

        if (!field) continue;

        field.value = value;
    }

     template.rows.forEach(rowData => {

    Report.addRow();

    const row = Report.tbody.lastElementChild;

    row.querySelector("input[name$='minutes_consumed']")
        .value = rowData.minutes_consumed;

    row.querySelector("[name$='tick_mark']")
        .checked = rowData.tick_mark;

    row.querySelector("textarea[name$='troubleshooting']")
        .value = rowData.troubleshooting;

    row.querySelector("input[name$='successful']")
        .checked = rowData.successful;

    const failed =
    row.querySelector("input[name$='failed']");

    if (failed) {
        failed.checked = rowData.failed;
    }

    row.querySelector("textarea[name$='remarks']")
        .value = rowData.remarks;

});

    Report.renumberForms();
    updateEndTime();

}

function initTemplates() {

    const fabButton =
        document.getElementById("fab-button");

    const templatePanel =
        document.getElementById("template-panel");

    fabButton.addEventListener("click", () => {

        templatePanel.classList.toggle("show");

    });

    document
        .querySelectorAll(".template-option")
        .forEach(button => {

            button.addEventListener("click", () => {

                loadTemplate(
                    templates[button.dataset.template]
                );

                templatePanel.classList.remove("show");

           });

        });

}