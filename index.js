var a = require('module-a'),
	Ctor = require('shared');


var instanceFromA = a();

if (instanceFromA instanceof Ctor){
	console.log('Great job!');
} else {
	console.log('This is less than ideal.');
}



