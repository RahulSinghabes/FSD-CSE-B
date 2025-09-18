let fs =require("fs")
function print(err,data){
    console.log("error is:",err)
    console.log("data is:",data)
}
function timeout(){
    console.log("timout done!")

}
fs.readFile("a.txt","utf-8",print)//after reading the file it callbacks the third argument print
fs.readFile("b.txt","utf-8",print)
console.log("done!")
setTimeout(timeout,10000)
console.log("after timeout")