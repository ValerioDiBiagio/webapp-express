const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');

const moviesRouter = require('./routers/movies');

const notFound = require('./middlewares/notFound');
const errorsHandler = require('./middlewares/handleErrors');

app.use(cors({
    origin: process.env.FE_APP
}));

app.use(express.static('public'));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Homepage');
})

app.use('/movies', moviesRouter);

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
    console.log(`webapp listening at port ${port}`);
})