const path = require('node:path');
const fs = require('node:fs');

const uploadFile = path.join(__dirname,'/upload')

function writeUpload(fileName){
    const writeStream = fs.createWriteStream(`${uploadFile}${path.sep}${fileName}`,{flags:'w'});
    return writeStream;
}

module.exports = {
    writeUpload,
}