const express = require('express');
const app = express();

const courses = [
	{id: 1,	name: 'Javascript'},
	{id: 2, name:'Java'},
	{id: 3, name: 'Spring'}
];

app.get('/', (req, res) => {
	res.send('Hello world');
});

app.get('/courses', (req, res) => {
	res.send(courses);
});

app.get('/courses/:id', (req, res) => {
	const course = courses.find(c => c.id === parseInt(req.params.id));
	if(!course)
	res.status(404).send('Course id does not exist');
	else
	res.send(course.name);
});

app
const port = process.env.PORT || 8082;
app.listen(port, () =>
	console.log(`listening to port ${port}`));
