let students = [];

function addStudent() {

    let regNo = document.getElementById("regNo").value.trim();
    let branch = document.getElementById("branch").value;

    if (regNo === "" || branch === "") {
        alert("Please fill all fields.");
        return;
    }

    let duplicate = students.find(
        student => student.regNo === regNo
    );

    if (duplicate) {
        alert("Registration Number already exists.");
        return;
    }

    students.push({
        regNo: regNo,
        branch: branch
    });

    displayStudents();

    document.getElementById("regNo").value = "";
    document.getElementById("branch").value = "";
}

function displayStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach(student => {

        table.innerHTML += `
        <tr>
            <td>${student.regNo}</td>
            <td>
                <span class="badge bg-primary">
                    ${student.branch}
                </span>
            </td>
        </tr>
        `;
    });

    document.getElementById("studentCount").innerText =
        students.length;
}

function generateSeats() {

    if (students.length === 0) {
        alert("No students registered.");
        return;
    }

    let shuffledStudents = [...students];

    for (let i = shuffledStudents.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [shuffledStudents[i], shuffledStudents[j]] =
        [shuffledStudents[j], shuffledStudents[i]];
    }

    let seatTable =
        document.getElementById("seatTable");

    seatTable.innerHTML = "";

    shuffledStudents.forEach((student, index) => {

        seatTable.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${student.regNo}</td>
            <td>
                <span class="badge bg-success">
                    ${student.branch}
                </span>
            </td>
        </tr>
        `;
    });
}