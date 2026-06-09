let students = [];

function addStudent(){

    let regNo =
        document.getElementById("regNo").value;

    let branch =
        document.getElementById("branch").value;

    if(regNo === "" || branch === ""){

        alert("Fill all fields");

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

function displayStudents(){

    let table =
        document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach(student => {

        table.innerHTML +=

        `<tr>

            <td>${student.regNo}</td>

            <td>${student.branch}</td>

        </tr>`;
    });
}

function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        let j =
        Math.floor(Math.random()*(i+1));

        [array[i],array[j]]
        =
        [array[j],array[i]];
    }

    return array;
}

function generateLayout(){

    let rows =
    parseInt(
        document.getElementById("rows").value
    );

    let cols =
    parseInt(
        document.getElementById("cols").value
    );

    let capacity =
    parseInt(
        document.getElementById("capacity").value
    );

    let totalSeats =
    rows * cols * capacity;

    if(students.length > totalSeats){

        alert(
        "Classroom capacity insufficient!"
        );

        return;
    }

    let classroom =
    document.getElementById("classroom");

    classroom.innerHTML = "";

    let shuffled =
    shuffle([...students]);

    let studentIndex = 0;

    for(let r=0;r<rows;r++){

        let rowDiv =
        document.createElement("div");

        rowDiv.className =
        "classroom-row";

        for(let c=0;c<cols;c++){

            let bench =
            document.createElement("div");

            bench.className =
            "bench";

            let title =
            document.createElement("div");

            title.className =
            "bench-title";

            title.innerHTML =
            `Bench ${r+1}-${c+1}`;

            bench.appendChild(title);

            for(let s=0;s<capacity;s++){

                if(studentIndex
                    < shuffled.length){

                    let studentDiv =
                    document.createElement("div");

                    studentDiv.className =
                    "student";

                    studentDiv.innerHTML =
                    shuffled[studentIndex].regNo;

                    bench.appendChild(
                        studentDiv
                    );

                    studentIndex++;
                }
            }

            rowDiv.appendChild(
                bench
            );
        }

        classroom.appendChild(
            rowDiv
        );
    }
}