// Form related variables
const studentForm = document.querySelector(".student-form");
const tableBody = document.querySelector(".student-table__body");
//Initialize array to store student objects
const students = [];

studentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const studentNameInput = document.querySelector("#student-name").value.trim();
    const emailInput = document.querySelector("#student-email").value.trim();
    const courseSelected = document.querySelector("#student-course").value.trim();
    //Normally at this point, you'd dp input validation but the exercise doesn't ask for this. In fact,
    //the exercise actually wants us to just straight up capture the input and submit it to the table. No need for all of this, but it's good exercise.
    if (studentNameInput == "" || emailInput == "" || courseSelected == "") {
        return console.log(`Form is not fully filled out, no object has been created`);
    } else {
        console.log(`Form submitted`);
        console.log(
            `Form details:\nFull name: ${studentNameInput}\nStudent email: ${emailInput}\nSelected course: ${courseSelected}`,
        );
        //Create a random Unique User ID for the object ---- IMPORTANT
        const id = crypto.randomUUID();
        console.log(`Unique ID generated`);
        //Create a student object
        const student = {
            id,
            studentNameInput,
            emailInput,
            courseSelected,
        };
        console.log(
            `Student object created with:\nStudent name: ${studentNameInput}\nStudent email: ${emailInput}\nSelected course: ${courseSelected}`,
        );
        document.querySelector(".student-form").reset();
        //Adds the student to the initalized array above
        students.push(student);
        console.log(`Object stored in students array`);
        const newTableRow = tableBody.insertRow();
        console.log(`1. Table row created`);
        const a = newTableRow.insertCell(0);
        a.innerHTML = studentNameInput;
        const b = newTableRow.insertCell(1);
        b.innerHTML = emailInput;
        const c = newTableRow.insertCell(2);
        c.innerHTML = courseSelected;

    }
});
