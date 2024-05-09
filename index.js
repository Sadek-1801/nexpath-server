const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// middleware
require("dotenv").config();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send('nexpath server is running')
})
app.listen(port, () => {
    console.log(`nexpath server is running on ${port}`)
})