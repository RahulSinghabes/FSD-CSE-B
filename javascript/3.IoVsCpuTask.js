let fs=require("fs")

function print(err,data){
    console.log("error is:",err)
    console.log("data is:",data)
}
function timeout(){
    console.log('timeout')

}
//i/o intensive task(synchronous)
const ans=fs.readFileSync("a.txt","utf-8")
console.log(ans)
//i/o intensive task(asynchronous)
setTimeout(timeout,1000)
let c=0;
//cpu intensive task
for(let i=0;i<10000000000;i++){
    c++;
}
console.log(c);
console.log("hi babe")
const ans1=fs.readFileSync("a.txt","utf-8")
console.log(ans1)
fs.readFile("a.txt","utf-8",print)
