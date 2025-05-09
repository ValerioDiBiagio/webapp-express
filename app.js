const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.send('Homepage');
})

app.listen(port, () => {
    console.log(`webapp listening at port ${port}`);
})