document.getElementById('submit-test').addEventListener('click', function () {
    // Correct answers
    const correctAnswers = {
        q1: 'C', // A and 7
        q2: 'D', // 11:00 AM
        q3: 'B'  // 56
    };

    // Collect user's answers
    const userAnswers = {};
    for (const question in correctAnswers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption) {
            userAnswers[question] = selectedOption.value;
        }
    }

    // Calculate the score
    let score = 0;
    for (const question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }

    // Redirect based on score (pass if score >= 2)
    if (score >= 2) {
        window.location.replace("passed.html");
    } else {
        window.location.replace("failed.html");
    }
});
