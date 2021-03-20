const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000


app.get('/', (req, res) => {
   res.send("Hello World!");
})


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

//app.use(express.static("public"));
app.listen(port, () => {
   console.log(`App is running at port: ${port}`);
})