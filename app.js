let express = require('express');
let app = express();

//JSON files with lesson and user data
const lessonsData = require('./public/lessons.json');
const userData = require('./public/user.json');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});

//'GET' route to return lesson data
app.get('/lessons', function (req, res) {
    res.json(lessonsData);
});

//'GET' route to return user data
app.get('/user', function (req, res) {
    res.json(userData);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
  
