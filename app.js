let express = require('express');
let app = express();
const lessonsData = require('./public/lessons.json');
const userData = require('./public/user.json');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World!');
});
  
app.get('/lessons', function (req, res) {
    res.json(lessonsData);
});

app.get('/user', function (req, res) {
    res.json(userData);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
  