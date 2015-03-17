
Meteor.startup(function () {
	console.log('START UP!');
	console.log(JSON.stringify(process.env.DISABLE_WEBSOCKETS));

  	process.env.DISABLE_WEBSOCKETS=true;
	Kadira.connect('WnzQkYKHQHQaLd2pt', '94e5a1b5-b85d-4077-a3ac-ecffdd2dc9f8');

	console.log(JSON.stringify(process.env.DISABLE_WEBSOCKETS));


});