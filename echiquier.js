function dragStart(event) {
  event.target.style.opacity = 0;
  event.dataTransfer.setData("text", "white-queen");
}

function allowDrop(event) {
  event.preventDefault();
  event.target.style.opacity = 0.8;
}

function leaveDrop(event) {
  event.target.style.opacity = 1;
}

const pageContent = document.querySelector(".block-page");
const wrapper = document.querySelector(".wrapper");

// H6 on drop events

function droph6(event) {
  event.preventDefault();
  const idQueen = event.dataTransfer.getData("text");
  const idSquare = event.target.getAttribute("draggable-id");
  if (idQueen === idSquare) {
    const audio = new Audio("capture.webm");
    audio.play();
    const whiteQueen = document.getElementById("white-queen");
    event.target.appendChild(whiteQueen);
    event.target.style.opacity = 1;
    pageContent.classList.add("motionh6-out");
    setTimeout(cvIn, 700);
    function cvIn() {
      var cv = document.querySelector(".cvvictor");
      cv.classList.add("motionh6-in");
      setTimeout(introduireCV, 500);
      function introduireCV() {
        cv.style.opacity = 1;
        cv.style.visibility = "visible";
      }
    }
  }
}

const blackKing = document.getElementById("black-king");

// F4 on drop events

function dropf4(event) {
  event.preventDefault();
  const idQueen = event.dataTransfer.getData("text");
  const idSquare = event.target.getAttribute("draggable-id");
  if (idQueen === idSquare) {
    const audio = new Audio("capture.webm");
    audio.play();
    const whiteQueen = document.getElementById("white-queen");
    event.target.appendChild(whiteQueen);
    event.target.style.opacity = 1;
    setTimeout(kingMotion, 800);

    function kingMotion(event) {
      const g7 = document.querySelector(".g7");
      g7.appendChild(blackKing);
      const audio = new Audio("move-self.webm");
      audio.play();
      setTimeout(modalPop, 500);

      function modalPop(event) {
        var modal = document.querySelector(".modal-escape-bg");
        modal.classList.add("modal-escape-bg-active");
      }
    }
  }
}

const whiteQueen = document.getElementById("white-queen");

// G5 on drop events

function dropg5(event) {
  event.preventDefault();
  const idQueen = event.dataTransfer.getData("text");
  const idSquare = event.target.getAttribute("draggable-id");
  if (idQueen === idSquare) {
    const audio = new Audio("capture.webm");
    audio.play();
    event.target.appendChild(whiteQueen);
    event.target.style.opacity = 1;
    setTimeout(modalPop, 700);
    function modalPop(event) {
      var modal = document.querySelector(".modal-pat-bg");
      modal.classList.add("modal-pat-bg-active");
    }
  }
}

// Events when hovering a square with the queen "in hand"

function dragEnd(event) {
  event.target.style.opacity = 1;
}

function showDrop(event) {
  event.target.style.opacity = 0.8;
}

// Help Button Events

const consigne = document.querySelector(".instructions");
const lienAide = consigne.querySelector("#help");
const caseAide = wrapper.querySelectorAll('div[aide-id="help"]');

lienAide.addEventListener("click", function (event) {
  event.preventDefault();
  caseAide.forEach(function (item) {
    item.classList.toggle("help-squares");
  });
});

// Solution Button Events

const lienSoluce = consigne.querySelector("#solution");

lienSoluce.addEventListener("click", function (event) {
  event.preventDefault();
  caseAide[2].classList.toggle("guide-squares");
  setTimeout(ajouterCase2, 150);

  function ajouterCase2() {
    caseAide[1].classList.toggle("guide-squares");
  }

  setTimeout(ajouterCase3, 300);

  function ajouterCase3() {
    caseAide[0].classList.toggle("solution-squares");
  }
});

// Skip Button Event

var skipgameButton = document.getElementById("skip");

skipgameButton.addEventListener("click", function (event) {
  event.preventDefault();
  pageContent.classList.add("motionh6-out");
  setTimeout(cvIn, 700);
  function cvIn() {
    var cv = document.querySelector(".cvvictor");
    cv.classList.add("motionh6-in");
    setTimeout(introduireCV, 500);
    function introduireCV() {
      cv.style.opacity = 1;
      cv.style.visibility = "visible";
    }
  }
});

// White Rook Events

const whiteRook = document.getElementById("white-rook");

whiteRook.addEventListener("click", function (event) {
  const whiteRookSquares = wrapper.querySelectorAll(
    'div[hover-id="white-rook"], .d6, .h8'
  );
  whiteRookSquares.forEach(function (item) {
    if (item.classList.contains("white-rook-defense-square")) {
      item.classList.remove("white-rook-defense-square");
    } else {
      item.classList.add("white-rook-defense-square");
    }
  });
});

whiteRook.addEventListener("mouseenter", function (event) {
  var rookText = document.querySelector(".white-rook-text");
  rookText.classList.add("white-rook-text_hover");
});

whiteRook.addEventListener("mouseleave", function (event) {
  var rookText = document.querySelector(".white-rook-text");
  rookText.classList.remove("white-rook-text_hover");
});

// White Knight Events

var whiteKnight = document.getElementById("white-knight");

whiteKnight.addEventListener("mouseenter", function (event) {
  var whiteKnightText = document.querySelector(".white-knight-text");
  whiteKnightText.classList.add("white-knight-text_hover");
});

whiteKnight.addEventListener("mouseleave", function (event) {
  var whiteKnightText = document.querySelector(".white-knight-text");
  whiteKnightText.classList.remove("white-knight-text_hover");
});

whiteKnight.addEventListener("click", function (event) {
  const caseCavalier = wrapper.querySelectorAll('div[hover-id="white-knight"]');
  caseCavalier.forEach(function (item) {
    if (item.classList.contains("white-knight-defense-square")) {
      item.classList.remove("white-knight-defense-square");
    } else {
      item.classList.add("white-knight-defense-square");
    }
  });
});

// White Queen Events

var queenInstructions = document.getElementById("instructions-white-queen");
queenInstructions.addEventListener("mouseenter", function (event) {
  var whiteQueenText = document.querySelector(".white-queen-text");
  whiteQueenText.classList.add("white-queen-text_hover");
});

queenInstructions.addEventListener("mouseleave", function (event) {
  var whiteQueenText = document.querySelector(".white-queen-text");
  whiteQueenText.classList.remove("white-queen-text_hover");
});

whiteQueen.addEventListener("mouseenter", function (event) {
  var whiteQueenText = document.querySelector(".white-queen-text");
  whiteQueenText.classList.add("white-queen-text_hover");
});

whiteQueen.addEventListener("mouseleave", function (event) {
  var whiteQueenText = document.querySelector(".white-queen-text");
  whiteQueenText.classList.remove("white-queen-text_hover");
});

whiteQueen.addEventListener("click", function (event) {
  const queenSquares = wrapper.querySelectorAll(
    'div[hover-id="white-queen"], .d2, .d3, .d4, .e5, .g5, .h6, .e8'
  );
  queenSquares.forEach(function (item) {
    if (item.classList.contains("white-queen-defense-square")) {
      item.classList.remove("white-queen-defense-square");
    } else {
      item.classList.add("white-queen-defense-square");
    }
  });
});

// White King Events

const whiteKing = document.getElementById("white-king");
whiteKing.addEventListener("mouseenter", function (event) {
  var whiteKingText = document.querySelector(".white-king-text");
  whiteKingText.classList.add("white-king-text_hover");
});

whiteKing.addEventListener("mouseleave", function (event) {
  var whiteKingText = document.querySelector(".white-king-text");
  whiteKingText.classList.remove("white-king-text_hover");
});

whiteKing.addEventListener("click", function (event) {
  const whiteKingSquares = wrapper.querySelectorAll(
    'div[hover-id="white-king"], .e1, .e2, .f2, .g1'
  );
  whiteKingSquares.forEach(function (item) {
    if (item.classList.contains("white-king-defense-square")) {
      item.classList.remove("white-king-defense-square");
    } else {
      item.classList.add("white-king-defense-square");
    }
  });
});

// Black King Events

var blackKingInstructions = document.getElementById("instructions-black-king");
blackKingInstructions.addEventListener("mouseenter", function (event) {
  var blackKingText = document.querySelector(".black-king-text");
  blackKingText.classList.add("black-king-text_hover");
});

blackKingInstructions.addEventListener("mouseleave", function (event) {
  var blackKingText = document.querySelector(".black-king-text");
  blackKingText.classList.remove("black-king-text_hover");
});

blackKing.addEventListener("mouseenter", function (event) {
  var blackKingText = document.querySelector(".black-king-text");
  blackKingText.classList.add("black-king-text_hover");
});

blackKing.addEventListener("mouseleave", function (event) {
  var blackKingText = document.querySelector(".black-king-text");
  blackKingText.classList.remove("black-king-text_hover");
});

blackKing.addEventListener("click", function (event) {
  const blackKingSquares = wrapper.querySelectorAll(
    'div[hover-id="black-king"], .h8, .g8, .h6'
  );
  blackKingSquares.forEach(function (item) {
    if (item.classList.contains("black-king-defense-square")) {
      item.classList.remove("black-king-defense-square");
    } else {
      item.classList.add("black-king-defense-square");
    }
  });
});

// Escape Modal Buttons Events

// Retry Button Events

var retryEscape = document.querySelector(".retry-escape>i");
var textRetryEscape = document.querySelector(".retry-escape>p");

retryEscape.addEventListener("mouseenter", function () {
  textRetryEscape.classList.add("modal-escape-visible");
});

retryEscape.addEventListener("mouseleave", function () {
  textRetryEscape.classList.remove("modal-escape-visible");
});

retryEscape.addEventListener("click", function () {
  document.location.reload();
});

// Skip Button Events

var skipEscape = document.querySelector(".skip-escape>i");
var textSkipEscape = document.querySelector(".skip-escape>p");

skipEscape.addEventListener("mouseenter", function () {
  textSkipEscape.classList.add("modal-escape-visible");
});

skipEscape.addEventListener("mouseleave", function () {
  textSkipEscape.classList.remove("modal-escape-visible");
});

skipEscape.addEventListener("click", function () {
  var modal = document.querySelector(".modal-escape-bg");
  modal.classList.remove("modal-escape-bg-active");
  pageContent.classList.add("motionh6-out");
  setTimeout(cvIn, 700);
  function cvIn() {
    var cv = document.querySelector(".cvvictor");
    cv.classList.add("motionh6-in");
    setTimeout(introduireCV, 500);
    function introduireCV() {
      cv.style.opacity = 1;
      cv.style.visibility = "visible";
    }
  }
});

// Pat Modal Buttons Events

// Retry Button Events

var retryPat = document.querySelector(".retry-pat>i");
var textRetryPat = document.querySelector(".retry-pat>p");

retryPat.addEventListener("mouseenter", function () {
  textRetryPat.classList.add("modal-escape-visible");
});

retryPat.addEventListener("mouseleave", function () {
  textRetryPat.classList.remove("modal-escape-visible");
});

retryPat.addEventListener("click", function () {
  document.location.reload();
});

// Skip Button Events

var skipPat = document.querySelector(".skip-pat>i");
var textSkipPat = document.querySelector(".skip-pat>p");

skipPat.addEventListener("mouseenter", function () {
  textSkipPat.classList.add("modal-escape-visible");
});

skipPat.addEventListener("mouseleave", function () {
  textSkipPat.classList.remove("modal-escape-visible");
});

skipPat.addEventListener("click", function (event) {
  var modal = document.querySelector(".modal-pat-bg");
  modal.classList.remove("modal-pat-bg-active");
  pageContent.classList.add("motionh6-out");
  setTimeout(cvIn, 700);
  function cvIn() {
    var cv = document.querySelector(".cvvictor");
    cv.classList.add("motionh6-in");
    setTimeout(introduireCV, 500);
    function introduireCV() {
      cv.style.opacity = 1;
      cv.style.visibility = "visible";
    }
  }
});

// CV Buttons Events

// Download Button Events

var downloadButton = document.querySelector(".download>i");
var textdownloadButton = document.querySelector(".download>p");

downloadButton.addEventListener("mouseenter", function () {
  textdownloadButton.classList.add("cv-buttons-hover");
});

downloadButton.addEventListener("mouseleave", function () {
  textdownloadButton.classList.remove("cv-buttons-hover");
});

downloadButton.addEventListener("click", function () {
  window.open("VICTOR MARTIN.pdf");
});

// Contact Button Events

var contactButton = document.querySelector(".contact>i");
var textcontactButton = document.querySelector(".contact>p");

contactButton.addEventListener("mouseenter", function () {
  textcontactButton.classList.add("cv-buttons-hover");
});

contactButton.addEventListener("mouseleave", function () {
  textcontactButton.classList.remove("cv-buttons-hover");
});

contactButton.addEventListener("click", function () {
  window.open("mailto:vicmartindev@gmail.com", "_blank");
});

// LinkedIn Button Events

var linkedinButton = document.querySelector(".linkedin>i");
var textlinkedinButton = document.querySelector(".linkedin>p");

linkedinButton.addEventListener("mouseenter", function () {
  textlinkedinButton.classList.add("cv-buttons-hover");
});

linkedinButton.addEventListener("mouseleave", function () {
  textlinkedinButton.classList.remove("cv-buttons-hover");
});

linkedinButton.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/victor-martin-44102753", "_blank");
});
