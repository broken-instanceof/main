var a = require('module-a'),
	Ctor = require('shared');

var instanceFromThisModule = new Ctor();
instanceFromThisModule.speak();

var instanceFromA = a();
instanceFromA.speak();

if (instanceFromThisModule instanceof Ctor){
	console.log('no problem here.');
}

// but from another module and it won't work

if (instanceFromA instanceof Ctor){
	console.log('Great job!');
} else {
	console.log('This is less than ideal.');
}

// both instances are instantiated with the same constructor, but instanceof doesn't think so.


