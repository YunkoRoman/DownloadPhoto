const express = require('express');
const fs = require('fs');
const path = require('path');
const request = require('request');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/facebook_image', async (req, res) => {

    const  options = await{
        method: 'GET',
        uri:'https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-9/66098646_2282643112051620_5567912168499707904_n.jpg?_nc_cat=109&_nc_oc=AQl6ByVBarekmyeQ3hLwvPMNFsBYVLKvfbtryh2J0HzQRYe1Vd8NrTvvSTrvxuIv9BU&_nc_ht=scontent.flwo1-1.fna&oh=75e01beed01900de975dc623168110a9&oe=5DB41FCF'
    };
     await request(options).pipe(fs.createWriteStream('facebook.jpg')).on('close' ,function () {
         console.log("Done");
        res.sendFile(path.join(__dirname, './facebook.jpg'))
    });

});
app.listen(3000, err => {
    if (err) console.log(err);
    console.log('Server listen on port 3000')});