//Definition:Callback hell, also known as "Pyramid of Doom," is a situation that arises in JavaScript (and other programming languages with similar asynchronous paradigms) when multiple asynchronous operations are nested within each other, leading to deeply indented and hard-to-read code. This typically happens when you have a series of asynchronous functions that depend on the results of previous ones, and you use callbacks to handle the results.
// question:
// 1. logs hi after 1 second
// 2. logs hello 3 seconds after step 1
// 3. logs hello there 5 seconds after step 2
function setTimeoutPromisified(ms) {
 return new Promise(resolve => setTimeout(resolve, ms));
}
//callback hell 
setTimeout(function () {
    console.log("hi");
    setTimeout(function () {
    console.log("hello");
    setTimeout(function () {
    console.log("hello there");
    }, 5000);
    }, 3000);
   }, 1000);
    //then hell or callback hell in promisified func
   function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
   }
   setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    setTimeoutPromisified(3000).then(function () {
    console.log("hello");
    setTimeoutPromisified(5000).then(function () {
    console.log("hello there");
    });
  });
});
