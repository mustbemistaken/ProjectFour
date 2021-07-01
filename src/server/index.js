let projectData = {};
let recentText = [];

const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const cors = require('cors');
const { builtinModules } = require('module');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

app.use(cors());


var textapi = {
    application_key: process.env.API_KEY
 };

 console.log(textapi.application_key);


app.use(express.static('dist'))

console.log(__dirname)




app.post( '/readForm', async (req, res) =>{

    let form = {
        apikey: process.env.API_KEY,
        formData:  req.body.formtext,
        lang: "en"
      }

    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${form.apikey}&of=json&txt=${form.formData}&lang=${form.lang}`)
    try{
        const newData = await response.json();

        projectData=newData;
  
        recentText.push(newData);

        res.send(newData)

    }catch(e){
        console.log("Error Found", e);
    }

})


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

