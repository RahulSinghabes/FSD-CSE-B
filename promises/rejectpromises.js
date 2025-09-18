const fs = require("fs");
function readFileAsync() {//promisified fs.readfile
 return new Promise(function (resolve, reject) {
 fs.readFile("jxa.txt", "utf-8", function (err, data) {
 if (err) {
 reject("Error while reading file");
 } else {
 resolve(data);
 }
 });
 });
}

function onDone(data) {
 console.log(data);
}
function onError(err) {
 console.log("Error: " + err);
}
readFileAsync().then(onDone).catch(onError);
// readFileAsync().then(function (data) {
//     console.log(data);
//    }).catch(function (err) {
//         console.log("Error: " + err)});