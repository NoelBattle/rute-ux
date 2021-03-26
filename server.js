const express = require('express') ;
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express();
const port = process.env.PORT || 8080
const publicPath = path.join(__dirname, '..', 'public');


if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.use(express.static(path.join(__dirname, 'build')));
/*
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });
 */
 
 app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
  });
  

app.listen(port, () => {
   console.log(`App is running at port`);
})