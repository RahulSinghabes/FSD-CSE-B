//a promise that expects a function that perform an actual asynchronous task

// once the async task is complete,call the argument of that function,passing in the data obtained from the async task
// that data will be passed to the function you define in'then'

// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//    }
// function callback(){
//     console.log("callback done")
// }
// // setTimeout(callback,5000)//callback approach
// setTimeoutPromisified(5000).then(callback)//promised based approach
//resolve is a function that is used to fulfill a Promise, meaning it marks the Promise as successfully completed and passes a result value to .then() callbacks.


//it can also be written as
function dosyncop(resolve){
    setTimeout(resolve,10000)
}
function setTimeoutPromisified(ms) {//it will return the object of promise class
    return new Promise(dosyncop)
}
function callback(){
    console.log("hi there")
}
function callback2(){
    console.log("hi there2")
}
let p=setTimeoutPromisified()
p.then(callback)//multiple then can be called
p.then(callback2)
console.log("hi")