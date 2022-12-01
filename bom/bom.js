//* alert
// window.alert("hello");
//* confirm  return a message ok or cancel
// window.confirm("this is confirm");
//* prompt to take  value from the client
//prompt("are you ok?");

//---------------------------------------------//---------------------------------------------

//* set time out to do function  after time just one time

let counter = setTimeout(function () {
    console.log("settimeout");
}, 4000);
console.log(counter);
//---------------------------------------------

let btn = document.querySelector(".btn");
//---------------------------------------------

//* set interval to repeat  function every part of time
let counterInt = setInterval(() => {
    console.log("i'm from interval");
}, 4000);

btn.addEventListener("click", function () {
    clearTimeout(counter);
    clearInterval(counterInt);
});
