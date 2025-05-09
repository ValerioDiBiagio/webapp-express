const express = require('express');
const app = express();
const port = process.env.PORT;

const moviesRouter = require('./routers/movies');

const notFound = require('./middlewares/notFound');
const errorsHandler = require('./middlewares/handleErrors');

app.get('/', (req, res) => {
    res.send('Homepage');
})

app.use('/api/movies', moviesRouter);

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
    console.log(`webapp listening at port ${port}`);
})