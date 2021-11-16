const path = require('path')
const fs = require('fs')
const sharp = require('sharp')

const directoryPath = path.join(__dirname, 'images');

height = parseInt(process.argv[2]) 
width = parseInt(process.argv[3])

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Ha habido un error: ' + err);
    }

    files.map(file => {
        sharp(`./images/${file}`)
            .resize({ height, width, fit: 'contain' })
            .toFile(`./resized/${file}`)
    })
});

