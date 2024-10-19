document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); //Prevent the page from refreshing when submitting results

    let name = document.getElementById('name').value;
    let nameResult = name ? name : "You have one, though?";

    let ageGroup = document.querySelector('input[name="ageGroup"]:checked');
    let ageGroupResult = ageGroup ? ageGroup.nextElementSibling.innerText : "Surely you haven't forgotten?";

    let educationResults = [];
    document.querySelectorAll('input[name="school"]:checked').forEach(function(checkbox) {
        educationResults.push(checkbox.nextElementSibling.innerText);
    });
    let educationResult = educationResults.length > 0 ? educationResults.join(', ') : "Nothing yet? Back to the desk you go, then.";

    //Show survey results in the appearing div
    document.getElementById('nameResult').innerText = nameResult;
    document.getElementById('ageGroupResult').innerText = ageGroupResult;
    document.getElementById('educationResult').innerText = educationResult;

    document.getElementById('surveyResults').style.display = 'block';
});

//functions for the buttons under the table
function myButton1() {
  alert("Here is additional fact for you: Vatican ATMs speak Latin.");
}

function myButton2() {
  alert("...Does anyone understand it, though?");
}

function myButton3() {
    var txt;
    if (confirm("Did you like the facts?")) {
      txt = "Glad to hear it!";
    } else {
      txt = "That's too bad. Let's move on then...";
    }
    document.getElementById("popup").innerHTML = txt;
  }