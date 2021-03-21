const express = require('express') ;
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express();
const port = process.env.PORT || 8080
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

// Loading evnironmental variables here
/*
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()
*/

/*

if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use('/static', express.static(path.join(__dirname, '../build/static')))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'))
	})
}


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.set( 'port', ( process.env.PORT || 5000 ));
*/

// Start node server


// Serve up static assets (usually on heroku)
/*
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))
}
*/
//app.use(express.static("public"));
app.listen(port, () => {
   console.log(`App is running at port`);
})