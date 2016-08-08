
Hackers = new Mongo.Collection('Hackers');


if (Meteor.isServer) {
	Meteor.publish('Hackers', function hackerPublish() {
		return Hackers.find({
			allegiance: 'White Hat'
		});
	});
}

