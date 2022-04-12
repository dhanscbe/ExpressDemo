/**
 * 
 */
import fetch from 'node-fetch'
const doSomethingAsync = () => {
	return new Promise(resolve => {
		setTimeout(() => resolve('Did Something'), 3);
	})
}

const doSomething = async () => {
	console.log(await doSomethingAsync());
}

console.log('Before');
doSomething();
console.log('After');

const afunction = (async () => {
	return 'test';
})

afunction().then();

const getFirstCourseData = () => {
	return fetch('http://localhost:8082/courses/1') // get users list
		.then(response => {
			console.log(response.statusText);
		console.log(response.json()) })// parse JSON
		.then(courses => {
			console.log(courses)
		}) // pick first user
		.catch(err => console.error("Error ==="+err))
}

getFirstCourseData()
