// Game Container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let counterDiv = document.querySelector(".counter");
// Array containing image URLs
let url = "https://cdn.glitch.global/8b39c63a-49d2-47b1-953e-";
let clickedIds = [];

let cards = [
    "9b78d9740ade/card1.jpg?v=1710954511246",
    "9b78d9740ade/card2.jpg?v=1710954631735",
    "9b78d9740ade/Gaming-setup.jpg?v=1710954987349 ",
    "9b78d9740ade/Purple-car.jpg?v=1710955053295 ",
    "9b78d9740ade/Yellow-car.jpg?v=1710955150577 ",
    "9b78d9740ade/Black-car.jpg?v=1710955202405",
    "9b78d9740ade/Baller.jpg?v=1710955254688 ",
    "9b78d9740ade/Skull-emoji.jpg?v=1710955307629 ",


];

let counter = 0;

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    counter = counter + 1;
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
        counterDiv.innerHTML = (" The game was played " + counter + " times ");


    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log(" Deck has " + cards.length + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend", "<div style='background-image: url(" + url + card + ")' class='card'>");

        }
    }
};
console.log(" Now the deck has " + cards.length + " cards. ");
buttonDouble.style.color = "silver";
// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    let i = 0;
    game.innerHTML = "";
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend", "<div style='background-image: url(" + url + card + ")'id='" + i + "' class='card'>");
   i = i + 1;       

    }
};

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}




// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (let card of cards) {
        console.log(i + " " + card);
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;

    }
};

// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.
$(document).click(function (event) {
let clickedId = event.target.id;
 console.log(clickedId);
    if (clickedId !== "") {
document.getElementById(clickedId).style.backgroundImage = "url('" + url + cards[clickedId] + "')";
    clickedIds.push(clickedId);
    console.log(clickedIds);
    if (clickedIds.length === 2){
    let card1picture = document.getElementById(clickedIds[0]).style.backgroundImage;
        let card2picture = document.getElementById(clickedIds[1]).style.backgroundImage;
        console.log(card1picture);
        console.log(card2picture);
        if (card1picture === card2picture) {
        console.log("Match");
        document.getElementById(clickedIds[0]).id = "";
        document.getElementById(clickedIds[1]).id = "";
        clickedIds = [];
        console.log(clickedIds);
        }
    } else if (clickedIds.length > 2) {
    document.getElementById(clickedIds[0]).style.backgroundImage = "";
  document.getElementById(clickedIds[1]).style.backgroundImage = "";  
        clickedIds = [];
        clickedIds.push(clickedId);
        console.log(clickedIds);
    
    }
   }
});



// Get the id property of the clicked thing.
