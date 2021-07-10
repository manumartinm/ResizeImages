const path = require('path')
const fs = require('fs')
const sharp = require('sharp')

const directoryPath = path.join(__dirname, 'images');
const newImageHeight = 200
const newImageWidth = 100

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Ha habido un error: ' + err);
    }

    files.map(file => {
        sharp(`./images/${file}`)
            .resize({ height: newImageHeight, width: newImageWidth })
            .toFile(`./resized/resize_${file}`)
    })
});

