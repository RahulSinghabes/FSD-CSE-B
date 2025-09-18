function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}   
//no callback hell for promisified approach
setTimeoutPromisified(1000)
 .then(function () {
 console.log("hi");
 return setTimeoutPromisified(3000);
 })
 .then(function () {
 console.log("hello");
 return setTimeoutPromisified(5000);
 })
 .then(function () {
 console.log("hello there");
 });
//no callback hell for callback approach by using seperate function
 function step3Done() {
    console.log("hello there");
   }
   function step2Done() {
    console.log("hello");
    setTimeout(step3Done, 5000);
   }
   function step1Done() {
    console.log("hi");
    setTimeout(step2Done, 3000);
   }
   setTimeout(step1Done, 1000)