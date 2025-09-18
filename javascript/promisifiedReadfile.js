let fs=require("fs");
function readthefile(resolve){
 let p= fs.readFile("a.txt","utf-8",function(err,data){//anonymous function
    resolve(data)})
 
 }
function readfile(){
    return new Promise(readthefile)
}
const p=readfile()
function callback(data){
    console.log(data)
}
p.then(callback)