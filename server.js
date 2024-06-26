const express = require('express')
const app = express();
const port = 3000;
const countriesRouter = require('./src/routes');
const cors = require('cors');
const path = require('path'); 



app.use(express.static(path.join(__dirname, 'public')));

// get data from the form formularza
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

// main endpoint
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.use('/api/countries', countriesRouter);

app.listen(port, () => console.log(`app listening on port ${port}`));