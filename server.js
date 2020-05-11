
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({entended: true}))
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public'))) // public static folder is hosted here
app.use('/api', require('./routes/api').route)

app.post('/auth', function(request, response) {
    var username = request.body.username;
    
    console.log("Somebody tries to access");
    response.send('hello');
    console.log(username)
    
    
});





app.listen(2211, () => console.log('Server started at http://localhost:2211'))