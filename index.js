require("dotenv-safe").config();
const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


console.log(process.env.SECRET);

app.get('/', (req, res) => {
    res.send({
        message: 'ok'
    });
});

app.listen(1234);