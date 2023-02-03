// Array of words
let words = [
  "hope",
  "grind",
  "jam",
  "bee",
  "deny",
  "profit",
  "meaning",
  "trivial",
  "available",
  "urgency",
  "law",
  "physical",
  "use",
  "fraction",
  "overview",
  "brick",
  "earthquake",
  "second",
  "sulphur",
  "beef",
  "highway",
  "silver",
  "uniform",
  "scrap",
  "sigh",
  "computing",
  "cathedral",
  "kneel",
  "lawyer",
  "empirical",
  "review",
  "helmet",
  "federation",
  "toll",
  "approval",
  "remedy",
  "muggy",
  "dirty",
  "bleed",
  "seat",
  "banish",
  "transform",
  "glide",
  "disk",
  "room",
  "conflict",
  "truth",
  "laser",
  "critic",
  "father",
  "mild",
  "bark",
  "scrape",
  "descent",
  "stumble",
  "patent",
  "charity",
  "secular",
  "copyright",
  "polite",
  "swell",
  "height",
  "visit",
  "authority",
  "truth",
  "bench",
  "put",
  "epicalyx",
  "carry",
  "peanut",
  "continuous",
  "sweater",
  "heavy",
  "try",
  "horse",
  "iron",
  "situation",
  "nut",
  "aviation",
  "establish",
  "salmon",
  "of",
  "art",
  "advice",
  "laundry",
  "regret",
  "mistreat",
  "extort",
  "cucumber",
  "joint",
  "detector",
  "monstrous",
  "coffee",
  "fail",
  "suit",
  "pardon",
  "control",
  "ash",
  "move",
  "wing",
  // "east",
  // "creed",
  // "inject",
  // "decrease",
  // "formation",
  // "wolf",
  // "snatch",
  // "broken",
  // "arrogant",
  // "bathroom",
  // "disaster",
  // "average",
  // "tool",
  // "sailor",
  // "at",
  // "stress",
  // "established",
  // "injury",
  // "album",
  // "morning",
  // "zone",
  // "bland",
  // "bag",
  // "horoscope",
  // "fail",
  // "stick",
  // "committee",
  // "needle",
  // "absence",
  // "practical",
  // "secretion",
  // "fit",
  // "cultivate",
  // "contempt",
  // "word",
  // "wrong",
  // "heal",
  // "civilization",
  // "unaware",
  // "chin",
  // "colony",
  // "handicap",
  // "magnetic",
  // "left",
  // "snow",
  // "protect",
  // "warn",
  // "Click to save this word!",
  // "look",
  // "recruit",
  // "Click to save this word!",
  // "confront",
  // "appointment",
  // "nest",
  // "embark",
  // "calorie",
  // "avant-garde",
  // "pasture",
  // "referee",
  // "apparatus",
  // "twin",
  // "royalty",
  // "planet",
  // "vigorous",
  // "column",
  // "team",
  // "rice",
  // "entitlement",
  // "shop",
  // "coup",
  // "diagram",
  // "dominant",
  // "unaware",
  // "reputation",
  // "behavior",
  // "charge",
  // "industry",
  // "frown",
  // "generate",
  // "roll",
  // "toss",
  // "church",
  // "traction",
  // "commemorate",
  // "stream",
  // "circle",
  // "improve",
  // "board",
  // "performer",
  // "poem",
  // "ceiling",
  // "help",
  // "rack",
  // "lick",
  // "president",
  // "reign",
  // "haunt",
  // "fixture",
  // "lesson",
  // "cooperate",
];

// Setting Levels
const lvls = {
  Easy: 6,
  Normal: 3,
  Hard: 2,
};

// Default Level
let defaultLevelName = "Normal"; // Change level from here
let defaultLevelSeconds = lvls[defaultLevelName];

// Selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// Setting Level name, seconds, score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// Disable Paste event
input.onpaste = function () {
  return false;
};

// Start Game
startButton.onclick = function () {
  this.remove();
  input.focus();

  // Generate Word Function
  genWords();
};

function genWords() {
  // Get Random Word
  let randomWord = words[Math.floor(Math.random() * words.length)];
  // console.log(randomWord);
  // get Word Index
  let wordIndex = words.indexOf(randomWord);
  // console.log(wordIndex);
  // Remove Word From Array
  words.splice(wordIndex, 1);
  // Show Random Word
  theWord.innerHTML = randomWord;
  // Empty Upcoming words
  upcomingWords.innerHTML = "";
  // Generate words
  for (let i = 0; i < words.length; i++) {
    // Create Div
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upcomingWords.appendChild(div);
  }
  // Call Start play funciton
  startPlay();
}

function startPlay() {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      clearInterval(start);
      // Compare words
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // console.log("Match");
        // Empty Input Field
        input.value = "";
        // increase score
        scoreGot.innerHTML++;
        // Call Generate Word Function
        if (words.length > 0) {
          genWords();
        } else {
          let span = document.createElement("span");
          span.className = "success";
          let spanText = document.createTextNode("Success!");
          span.appendChild(spanText);
          finishMessage.appendChild(span);
          // Remove upcoming words box
          upcomingWords.remove();
        }
      } else {
        let span = document.createElement("span");
        span.className = "fail";
        let spanText = document.createTextNode("Game Over");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
}
