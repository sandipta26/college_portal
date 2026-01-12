const timetable = {
    Monday: [
        ["9:30 - 10:30", "BREAK 😀"],
        ["10:30 - 11:30", "Robotics"],
        ["11:30 - 12:30", "Robotics"],
        ["12:30 - 1:30", "LUNCH 🍽️"],
        ["1:30 - 2:30", "RDBMS"],
        ["2:30 - 3:30", "RDBMS"],
        ["3:30 - 4:30", "DA"],
        ["4:30 - 5:30", "DA"]
    ],
    Tuesday: [
        ["9:30 - 10:30", "SE"],
        ["10:30 - 11:30", "BREAK 😀"],
        ["11:30 - 12:30", "BREAK 😀"],
        ["12:30 - 1:30", "LUNCH 🍽️"],
        ["1:30 - 2:30", "RDBMS"],
        ["2:30 - 3:30", "RDBMS"],
        ["3:30 - 4:30", "BREAK 😀"],
        ["4:30 - 5:30", "DA"]
    ],
    Wednesday: [
        ["9:30 - 10:30", "DA"],
        ["10:30 - 11:30", "Robotics"],
        ["11:30 - 12:30", "BREAK 😀"],
        ["12:30 - 1:30", "LUNCH 🍽️"],
        ["1:30 - 2:30", "CLOUD"],
        ["2:30 - 3:30", "CLOUD"],
        ["3:30 - 4:30", "SKILL"],
        ["4:30 - 5:30", "SKILL"]
    ],
    Thursday: [
        ["9:30 - 10:30", "RDBMS"],
        ["10:30 - 11:30", "DA"],
        ["11:30 - 12:30", "BREAK 😀"],
        ["12:30 - 1:30", "LUNCH 🍽️"],
        ["1:30 - 2:30", "RDBMS"],
        ["2:30 - 3:30", "DA"],
        ["3:30 - 4:30", "DA"],
        ["4:30 - 5:30", "DA"]
    ],
    Friday: [
        ["9:30 - 10:30", "Robotics"],
        ["10:30 - 11:30", "Robotics"],
        ["11:30 - 12:30", "BREAK 😀"],
        ["12:30 - 1:30", "LUNCH 🍽️"],
        ["1:30 - 2:30", "SE"],
        ["2:30 - 3:30", "SE"],
        ["3:30 - 4:30", "SKILL"],
        ["4:30 - 5:30", "SKILL"]
    ],
    Saturday: [
        ["9:30 - 10:30", "CLOUD"],
        ["10:30 - 11:30", "BREAK 😀"],
        ["11:30 - 12:30", "BREAK 😀"],
        ["12:30 - 1:30", "LUNCH 🍽️"],
        ["1:30 - 2:30", "SKILL"],
        ["2:30 - 3:30", "SKILL"],
        ["3:30 - 4:30", "SE"],
        ["4:30 - 5:30", "SE"]
    ]
};

let currentDate = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function isSecondSaturday(date) {
    return date.getDay() === 6 && Math.ceil(date.getDate() / 7) === 2;
}

function loadTable() {
    const dayName = days[currentDate.getDay()];

    document.getElementById("dateTime").innerHTML =
        new Date().toLocaleString();

    document.getElementById("todayHeading").innerText =
        `${dayName} - ${currentDate.toDateString()}`;

    const table = document.getElementById("verticalTable");
    table.querySelectorAll("tr:not(:first-child)").forEach(r => r.remove());

    if (dayName === "Sunday" || isSecondSaturday(currentDate)) {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td colspan="2">Holiday 🎉</td>`;
        table.appendChild(tr);
        return;
    }

    timetable[dayName].forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${row[0]}</td><td>${row[1]}</td>`;
        table.appendChild(tr);
    });
}

function changeDay(step) {
    currentDate.setDate(currentDate.getDate() + step);
    loadTable();
}

setInterval(loadTable, 1000);
loadTable();