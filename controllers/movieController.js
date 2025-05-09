const connection = require('../data/db.js');

function index(req, res) {

    //    const sql = 'SELECT * FROM movies;'

    const sql =
        `SELECT 
      movies.*, AVG(reviews.vote) AS average_reviews
   FROM
      movies
    LEFT JOIN
      reviews ON movies.id = reviews.movie_id
    GROUP BY
      movies.id`

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                errorMessage: 'Database connection error'
            })
        }

        res.json(results);
    })
}


function show(req, res) {

    const { id } = req.params

    const sql = 'SELECT * FROM movies WHERE id = ?;'

    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                errorMessage: 'Database connection error'
            })
        }
        if (results.length === 0) {
            return res.status(404).json({
                errorMessage: 'No records found',
                id
            })
        }

        const movie = results[0];

        const sql = 'SELECT * FROM db_movies.reviews WHERE movie_id = ?';

        connection.query(sql, [id], (err, results) => {
            if (err) {
                console.log(err);
            }

            movie.reviews = results;

            res.json(movie);
        })
    })

}

module.exports = {
    index,
    show
}