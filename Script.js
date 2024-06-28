function generateCourseFields() {
    const totalCourses = document.getElementById('totalCourses').value;
    const courseFieldsContainer = document.getElementById('courseFields');
    courseFieldsContainer.innerHTML = '';

    for (let i = 1; i <= totalCourses; i++) {
        const courseField = document.createElement('div');
        courseField.innerHTML = `
            <label for="course${i}">Course ${i} Code: </label>
            <input type="text" id="course${i}Code" name="course${i}Code" required>
            <label for="grade${i}"> Grade: </label>
            <input type="text" id="grade${i}" name="grade${i}" required>
            <br>
        `;
        courseFieldsContainer.appendChild(courseField);
    }

    document.getElementById('gradesForm').style.display = 'block';
}

function calculateCGPA() {
    const totalCourses = document.getElementById('totalCourses').value;
    const gradeData = {
        'A': 4.0,
        'B': 3.0,
        'C': 2.0,
        'D': 1.0,
        'F': 0.0
    };

    const courseCredits = {
        'CS101': 3,
        'MATH101': 4,
        'ENG101': 2,
        'Life Skills 1': 0,
        'Ecology and Environment': 0,
        'Functions of Several Variables': 10,
        'ME1480': 7,
        // Add more courses and their credits here
    };

    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 1; i <= totalCourses; i++) {
        const courseCode = document.getElementById(`course${i}Code`).value;
        const grade = document.getElementById(`grade${i}`).value.toUpperCase();

        if (courseCredits[courseCode] !== undefined && gradeData[grade] !== undefined) {
            totalCredits += courseCredits[courseCode];
            totalGradePoints += gradeData[grade] * courseCredits[courseCode];
        } else {
            alert(`Invalid course code or grade for Course ${i}.`);
            return;
        }
    }

    const cgpa = totalGradePoints / totalCredits;
    document.getElementById('cgpa').innerText = cgpa.toFixed(2);
    document.getElementById('result').style.display = 'block';
}
