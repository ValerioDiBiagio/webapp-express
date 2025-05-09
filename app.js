const express = require('express');
const app = express();
const port = 3000;

const moviesRouter = require('./routers/movies')

app.get('/', (req, res) => {
    res.send('Homepage');
})

app.use('/api/movies', moviesRouter);

app.listen(port, () => {
    console.log(`webapp listening at port ${port}`);
})