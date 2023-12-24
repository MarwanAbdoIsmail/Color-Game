// ^=======> HTML ELEMENTS
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var rgbSyntax = document.getElementById("rgbSyntax");
var colorsContainer = document.getElementById("colorsContainer");
var getColorsBtn = document.getElementById("getColorsBtn");

// &=======|> App Variables
var levels = {
  easy: {
    name: "easy",
    numberOfCards: 3,
  },
  hard: {
    name: "hard",
    numberOfCards: 6,
  },
};
var selectedLevel = "easy";
var correctAnswer;

// ?=======|> Functions

function generateRandomColors() {
  var red = Math.trunc(Math.random() * 256);
  var green = Math.trunc(Math.random() * 256);
  var blue = Math.trunc(Math.random() * 256);
  var color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

function getNewQuestion(level) {
  var numberOfCards = levels[level].numberOfCards;
  var colors = [];
  for (let i = 0; i < numberOfCards; i++) {
    colors.push(generateRandomColors());
  }
  correctAnswer = colors[Math.floor(Math.random() * numberOfCards)];
  rgbSyntax.innerHTML = correctAnswer;
  display(colors);
  checkAnswer();
}
function display(arr) {
  var colorCardsHTML = "";
  for (let i = 0; i < arr.length; i++) {
    colorCardsHTML += `<div class="color-card col-md-4">
      <div class="inner h-100 rounded"
       style="background-color: ${arr[i]}">
      </div>
     </div>
    `;
  }
  colorsContainer.innerHTML = `
 <div class="row g-4 py-4">
   ${colorCardsHTML}
   </div>
   `;
}
function checkAnswer() {
  var items = document.querySelectorAll(".color-card .inner");
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function (e) {
      if (e.target.style.backgroundColor == correctAnswer) {
        alert("Congratulations 🎉");
        getNewQuestion(selectedLevel);
      } else {
        alert("Try again 🔁");
        getNewQuestion(selectedLevel);
      }
    });
  }
}

getNewQuestion( selectedLevel );

// !=======>   EVENTS
easyBtn.addEventListener("click", function () {
  selectedLevel = "easy";
  easyBtn.classList.add("active");
  hardBtn.classList.remove("active");
  getNewQuestion(selectedLevel);
});
hardBtn.addEventListener("click", function () {
  selectedLevel = "hard";
  hardBtn.classList.add("active");
  easyBtn.classList.remove("active");
  getNewQuestion(selectedLevel);
});
getColorsBtn.addEventListener("click", function () {
  getNewQuestion(selectedLevel);
});
