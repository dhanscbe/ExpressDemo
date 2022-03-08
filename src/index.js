//Joi is a class
const Joi = require('joi');
const express = require('express');
const app = express();
//This line is added since we include req.body.name
//This helps to read the json file from the request body
app.use(express.json());

const courses = [
	{ id: 1, name: 'Javascript' },
	{ id: 2, name: 'Java' },
	{ id: 3, name: 'Spring' }
];

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.get('/courses', (req, res) => {
	res.send(courses);
});

app.get('/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if (!course)
		res.status(404).send('Course id does not exist');
	else
		res.send(course.name);
});

app.post('/courses', (req, res) => {

	/*	if(req.body.name == null || req.body.name.length < 6){
		res.status(400).send('Name is required or name should be minimum 6 characters');
		return;
	}*/

	const schema = Joi.object({
		name: Joi.string().min(6).required()
	});
	const result = schema.validate(req.body);
	console.log(result);

	if (result.error) {
		res.status(400).send(result.error.details[0].message);
		return;
	}
	else {
		const course = {
			id: courses.length + 1,
			name: req.body.name
		};
		courses.push(course);
		res.send(courses);
	}
});

const port = process.env.PORT || 8082;
app.listen(port, () =>
	console.log(`listening to port ${port}`));
