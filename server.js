const express = require('express') ;
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express();
const port = process.env.PORT || 8080
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(path.join(__dirname, 'build')));
/*
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });
 */

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}


 
 app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + 'app/client/build/index.html'));
  });
  

app.listen(port, () => {
   console.log(`App is running at port`);
})