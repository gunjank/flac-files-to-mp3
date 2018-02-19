/*jslint es6 */
'use strict'
const f2m = require("flac-to-mp3");
const fs = require('fs');
const path = require('path');
//
const flacFilePath = "C:\\temp\\del";//** YOUR FLAC DIRECTORY */
const dirPath = path.resolve(flacFilePath); 
const ext = ".flac";

console.log("Flac to mp3 convertor - https://www.linkedin.com/in/gunjankumar/");

let filesList = [];
console.log(filesList);
fs.readdir(dirPath, function (err, files) {
    filesList = files.filter(function (e) {
        return path.extname(e).toLowerCase() === ext
    });
    if (filesList.length > 0) {
        filesList.forEach(element => {
            convertor(dirPath + "\\" + element);// windows concatenation
            // use directory+file path concatenation / or \ as per your OS [mac or windows]
        });
    }
});

const convertor = (filePath => {
    console.log(filePath);
    f2m.convert(
        filePath,
        function (data) {
            console.log(data.err.toString())//it will log detail in progress data, wait for completion
        }
    );
});