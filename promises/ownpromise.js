
let fs=require("fs");
class promise2{
   constructor(fn){
    function afterdone(){
       this.resolve()
    }
    fn(afterdone)
   }
   then(callback){
    this.resolve=callback
   }
}
function dosyncop(resolve){
    setTimeout(resolve,10000)
}
function setTimeoutPromisified(ms) {
    return new Promise(dosyncop)
}
function callback(){
    console.log("hi there")
}
setTimeoutPromisified().then(callback)