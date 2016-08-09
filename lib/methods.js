Meteor.methods({
    'addHacker': function(newHackerObject){
        Hackers.insert(newHackerObject);
    }
});
