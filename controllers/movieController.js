const connection = require('../data/db.js');

function index(req, res) {
    res.send('All movies');

}


function show(req, res) {
    res.send('Single movies');

}

module.exports = {
    index,
    show
}