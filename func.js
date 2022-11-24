// higher function

let arr = [1, 2, 3, 4];
let newArr = [];
for (i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + arr[i]);
}

//*-------------------- map------------------------------

// let arrMap = arr.map((e) => e *10)//shorthand

console.log(newArr);
let arrMap = arr.map(function (el, ind, ar) {
    return el * 10;
});
console.log(arrMap);

//----------------------- practice ------------------------
let upperCase = "aHmEd";

// switchToUpper
let switchToUpper = upperCase
    .split("")
    .map(function (el) {
        return el.toLocaleUpperCase();
    })
    .join("");
console.log(switchToUpper);

let ignNum = "ah23m21e9d";

// remove the number inside a string
let rmvNum = ignNum
    .split("")
    .map((el) => (isNaN(parseInt(el)) ? el : ""))
    .join("");
console.log(rmvNum);
// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

//* --------------------filter----------------------
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumber = numbers.filter((el) => el % 2 === 0);

console.log(evenNumber);

/*
Filter
Filter Longest Word By Number  //* exercise 1 
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let filterSen = sentence
    .split(" ")
    .filter((el) => el.length <= 4)
    .join(" ");
console.log(filterSen);
// --------------------------------------------------------------------------------------------------------------------

// Ignore Numbers  //* exercise 2
let ignoreNumbers = "Elz123er40o";
let ignoreNum = ignoreNumbers
    .split("")
    .filter((el) => isNaN(el))
    .join("")
    .toUpperCase();
console.log(ignoreNum);
// --------------------------------------------------------------------------------------------------------------------

// Filter Strings + Multiply
let mix = "A13BS2ZX";
let filterMix = mix
    .split("")
    .filter((el) => !isNaN(parseInt(el)))
    .map((el) => el * el)
    .join("");

console.log(filterMix);
// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------

//* reduce

let theBiggest = ["ahmed", "mohamed", "ibrahim"];
let big = theBiggest.reduce(function (acc, current) {
    return acc.length > current.length ? acc : current;
});
console.log(big);

let removeChars = ["E", "@", "l", "@", "Z", "@", "E", "R", "@", "O"];
let zero = removeChars
    .filter(function (el) {
        return !el.startsWith("@");
    })
    .reduce(function (acc, current) {
        return `${acc}${current}`;
    });
console.log(zero);

// another example
let ages = [10, 20, 30, 40, 50, 60];
let theBiggestAge = ages.reduce(function (acc, current) {
    return acc > current ? acc : current;
});
console.log(theBiggestAge);
//----------------------------------

// forEach

let allLis = document.querySelectorAll("ul li");

allLis.forEach(function (el) {
    el.onclick = function () {
        allLis.forEach(function (el) {
            el.classList.remove("Active");
        });
        this.classList.add("Active");
    };
});

// console.log(allLis)
// allLis.forEach(function(el){
//     el.onclick = function(){
//         allLis.forEach(function(el){
//             el.classList.remove("active")
//         })
//         this.classList.add("active")
//     }
// })

// challenge
let myString = "1,2,3,ee,1,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,Z";
//let myString = "1,2,3,ee,1,z,e,r,o,_,w,e,b,_,s,c,g,o,o,1,2,0,z"

let newString = myString
    .split(",")
    .filter((el) => !parseInt(el))
    .map((el) => (el !== el.toUpperCase() ? el : ""))
    .map((el) => {
        if (el.length > true) {
            el.split("");
            return el[0];
        } else {
            return el;
        }
    })
    .map((el) => (el == "z" || "b" ? `${el} ` : el))
    .join("");

console.log(newString);
// --------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
