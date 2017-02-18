const path = require('path');

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.set('port', (process.env.PORT || 3001));

// set up our express application
app.use(require('helmet')());
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// routes =====================================================================

require('./routes')(app); // load routes and pass in the app

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});


app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});





