 function updateEndTime() {

    const startField =
        document.getElementById("id_activity_start");

    const endField =
        document.getElementById("id_activity_end");

    if (!startField || !endField || !startField.value) {
    return;
    }

    let totalMinutes = 0;

    document
        .querySelectorAll(
            "input[name$='minutes_consumed']"
        )
        .forEach(input => {

            totalMinutes +=
                Number(input.value || 0);
        });

    const [hours, mins] =
        startField.value.split(":").map(Number);

    const startDate = new Date();

    startDate.setHours(hours, mins, 0, 0);

    startDate.setMinutes(
        startDate.getMinutes() + totalMinutes
    );

    const endHours =
        String(startDate.getHours())
            .padStart(2, "0");

    const endMins =
        String(startDate.getMinutes())
            .padStart(2, "0");

    endField.value =
        `${endHours}:${endMins}`;
}