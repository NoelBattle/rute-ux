const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

//app.use(express.static("public"));
app.listen(port, () => {
   console.log(`App is running at port: ${port}`);
})