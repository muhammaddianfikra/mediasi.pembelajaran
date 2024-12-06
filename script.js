document.getElementById("startQuiz").addEventListener("click", function () {
    document.getElementById("quizArea").style.display = "block";
});

function checkAnswer(isCorrect) {
    const feedback = document.getElementById("quizFeedback");
    if (isCorrect) {
        feedback.textContent = "Jawaban Anda benar!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Jawaban Anda salah. Coba lagi!";
        feedback.style.color = "red";
    }
}
function toggleMateri(id) {
    const shortText = document.getElementById(`${id}-short`);
    const fullText = document.getElementById(`${id}-full`);
    if (fullText.style.display === "none") {
        fullText.style.display = "block";
        shortText.style.display = "none";
    } else {
        fullText.style.display = "none";
        shortText.style.display = "block";
    }
}
