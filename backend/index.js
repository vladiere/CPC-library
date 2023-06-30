const express = require('express');
require('dotenv').config()

const port = process.env.SERVER_PORT

const app = express();

app.use(express.json());



app.listen(port, () => {
    console.log(`listening on port ${port}`);
})