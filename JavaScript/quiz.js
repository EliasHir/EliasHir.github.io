function QuizQ(text, options, answer) {
    this.text = text;
    this.options = options;
    this.answer = answer;
}

const questions = [
    new QuizQ("How many capitals has Iran had?", ["5", "8", "13", "28"], 3),
    new QuizQ("How many potato variations is there in Peru?", ["5", "2800", "176", "1900"], 1),
    new QuizQ("Who drink more coffee? Finns or New Yorkers?", ["finns", "new yorkers", "-", "-"], 0),
    new QuizQ("Of which there are more in Australia; humans or Kangaroos?", ["humans", "kangaroos", "-", "-"], 1)
];

function startQuiz() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const currentQuestion = questions[i];

        const userAnswer = prompt(currentQuestion.text + "\n" + currentQuestion.options.join("\n"));
        
        if (userAnswer && userAnswer.trim() === currentQuestion.options[currentQuestion.answer]) {
            score++;
            alert("You got it!");
        } else {
            alert("Not quite...");
        }
    }

    alert("You scored " + score + " out of " + questions.length);
}

//Random Image Generator
document.getElementById("myButtonGenerator").addEventListener("click", async function() {
    try {
        const RanImgSrc = "https://picsum.photos/500/300?random=" + new Date().getTime();
        const response = await fetch(RanImgSrc);
        
        if (!response.ok) {
            throw new Error("Response failed");
        }

        document.getElementById("randomImage").src = RanImgSrc;
        document.getElementById("randomImage").style.display = "block";
    } catch (error) {
        console.error("An unexpected error occured...", error);
        alert("An unexpected error occured...");
    }
});

setTimeout(reminderAlert, 6000);

function reminderAlert()
{
    alert("Remember to pay attention to the main page before taking the quiz...");
}
