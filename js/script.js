document.getElementById('assessment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const totalQuestions = parseInt(document.getElementById('total-questions').value);
    const correctAnswers = parseInt(document.getElementById('correct-answers').value);
    const incorrectAnswers = parseInt(document.getElementById('incorrect-answers').value);

    const studentName = document.getElementById('student-name').value;
    const courseName = document.getElementById('course-name').value;
    const instructorName = document.getElementById('instructor-name').value;

    if (totalQuestions < 0 || correctAnswers < 0 || incorrectAnswers < 0) {
        alert('Please enter non-negative values for all fields');
        return;
    }

    if (correctAnswers + incorrectAnswers !== totalQuestions) {
        alert('The sum of correct and incorrect answers should equal the total questions');
        return;
    }

    const loader = document.getElementById('loader');
    const formBox = document.getElementsByClassName('assessment-form-box')[0];
    loader.style.display = 'block';
    formBox.style.display = 'none';

    setTimeout(function() {
        const score = (correctAnswers / totalQuestions) * 100;

        const resultBox = document.getElementById('result-box');
        resultBox.innerHTML = `
            <h2>Assessment Results</h2>
            <p>Name: ${studentName}</p>
            <p>Course: ${courseName}</p>
            <p>Instructor: ${instructorName}</p>
            <p>Total Questions: ${totalQuestions}</p>
            <p>Correct Answers: ${correctAnswers}</p>
            <p>Incorrect Answers: ${incorrectAnswers}</p>
            <p>Score: ${score.toFixed(2)}%</p>
          `;

        loader.style.display = 'none';
        resultBox.style.display = 'block';
    }, 1000);


});