// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";
// Get Array From Letters
let lettersArray = Array.from(letters);

//select Letters Containers

let lettersContainer = document.querySelector(".letters");

//Genetate letters
lettersArray.forEach((letter) => {
  //Create Span
  let span = document.createElement("span");
  //create Letter text Node
  let theLetter = document.createTextNode(letter);
  //Append The letter The span
  span.appendChild(theLetter);
  //Add class on span
  span.className = "letter-box";
  //Append Span To The letter Container
  lettersContainer.appendChild(span);
});

//Object Of Word + Categories
const Words = {
  programing: [
    "php",
    "javaScript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "prestige",
    "Inception",
    "parasite",
    "interstellar",
    "whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma",
    "Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};
//Get random Preoptry

let allKeys = Object.keys(Words);
// Random Number Depend On Key Length
let randomProNumber = Math.floor(Math.random() * allKeys.length);
// console.log(randomProNumber)
// Category
let randomPropName = allKeys[randomProNumber];
console.log(randomPropName);

// Category Words
let randomProValue = Words[randomPropName];
// console.log(randomProValue)

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomProValue.length);
// The chosen word
let randomValueValue = randomProValue[randomValueNumber];
//set  Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// select letters-guess container

let lettersGuessContainer = document.querySelector(".letters-guess");
// convertchosen Array

let lettersAndSpace = Array.from(randomValueValue);

//creat span deppend and word

lettersAndSpace.forEach((letter) => {
  //creat span
  let span = document.createElement("span");

  // if letter on spacing
  if (letter === " ") {
    span.className = "with-space";
  }
  // Apend span to the Letter Guess Container
  lettersGuessContainer.appendChild(span);
});
//select Gusess Span
let guessSpan = document.querySelectorAll(".letters-guess span");
//set The Chose Status
// let theStatus = false;

//set Wrong Attemps
let wrongAttempts = 0;
let theDraw = document.querySelector(".hangman-draw");

//Handel
document.addEventListener("click", (e) => {
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let theStatus = false;
    // Get Clicked Letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();
    //the chosen word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());
    theChosenWord.forEach((word, wordIndex) => {
      //if the clicked Letter Equal To One of The Chosen word Letter
      if (theClickedLetter === word) {
        // set status to Correct
        theStatus = true;
        guessSpan.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = word;
          }
        });
      }
    });
    if (theStatus !== true) {
      //Increase The Wrong Attempts
      wrongAttempts++;

      if (wrongAttempts === 8) {
        endGame();
        lettersContainer.classList.add("finished");
      }
      //Add Class Wrong On The Draw Element
      theDraw.classList.add(`Wrong-${wrongAttempts}`);
    }
  }
});
// EndGame;
function endGame() {
  let div = document.createElement("div");
  let divtext = document.createTextNode(
    `Game Over , The Word Is ${randomValueValue}`
  );
  div.appendChild(divtext);
  div.className = "Popup";
  div.style = "font-size:18px;color: black;"
  document.body.appendChild(div);
}

let ar = [8, 7, 6, 4, 3, 2, 1];

function swap(a, b) {
  return ([a, b] = [b, a]);
}

// console.log(swap(1,2))

// print(ar)
console.log("#".repeat(40));

// function select(arr){
//     for(let i =0 ; i < arr.length -1; i++){
//         let min =i ;
//         for(let k = i+1; k < arr.length;k++ ){
//             if(arr[k] < arr[min]){
//                 min = k
//               return  swap(arr[min],arr[i])
//             }
//         }
//     }
// }

let arr = [9, 8, 7, 4, 5, 6, 1, 3, 10, 12, 18, 92, 20];

// selectionSort([9,8,7,6,5,4,3,2,1])
function selectionSort(inputArr) {
  let n = inputArr.length;
  for (let i = 0; i < n; i++) {
    min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
      if (min == j) {
        let temp = inputArr[min];
        inputArr[min] = inputArr[i];
        inputArr[i] = temp;
      }
    }
  }
  return inputArr;
}
selectionSort(arr);
console.log(selectionSort(arr));

// let tmp = inputArr[i];
// inputArr[i] = inputArr[min];
// inputArr[min] = tmp;

// let arr = [1,50,30,10,60,80]

// function Bubble(arr ){
//    let  n = arr.length
//     let temp = 0;
//     for(let i=0; i < n ;i++ ){
//         for( let j = 1 ; j < n-i ;j++){
//             if(arr[j-1] > arr[j]){
//                 temp =  arr[j-1]
//                 arr[j-1] = arr[j]
//                 arr[j] = temp;
//             }
//         }
//     }
// }

// for(let k = 0; k < arr.length;  k++ ){
//     console.log(Bubble(arr ))
// }

// function swap(a,b){
//     let temp = a
//     a = b
//     b = temp
// }
// function print (arr,size){
//     for(let i = 0 ; i < size ; i++){
//         console.log(arr[i])
//     }
// }
// function bubbleSort(arr,size){
//     for(let j = 0 ; j <size ; j++){
//         for(let k = 0; k < size-j-1;k++){
//             if(arr[k + 1 ] < arr[k]) {
//             swap(arr[k +1],arr[k])
//         }
//     }
// }
// }

// console.log(bubbleSort([5,8,7,9,2,1,3],7))
