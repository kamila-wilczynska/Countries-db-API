const pool = require('../src/db')


//get all
const getCountries = (req, res) => {
	pool.query("SELECT * FROM countries", (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	})

}


//get by id SELECT * FROM students WHERE id=$1
const getCountryById = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query("SELECT * FROM countries WHERE id=$1", [id], (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	})
}



const addCountry = (req, res) => {
	const { country, capital, interesting_fact, image_url } = req.body;

	pool.query(
		'INSERT INTO countries (country, capital, interesting_fact, image_url) VALUES ($1, $2, $3, $4)',
		[country, capital, interesting_fact, image_url],
		(error, results) => {
			if (error) {
				console.error('Error executing insert query', error);
				return res.status(500).json({ error: 'Internal Server Error' });
			}
			res.status(201).json({ message: 'Country added successfully' });
		}
	);
};


module.exports = {
	getCountries,
	getCountryById,
	addCountry
}
