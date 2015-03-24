

Template.registerHelper('users',function(){
  var users = Meteor.users.find({},{'checked' : 1, 'emails' : 1, 'profile':1});
  return users;
});

Template.manage_users.events({
  "click .toggle-checked": function () {

  	if (this.admin == undefined) {
  		Meteor.users.update(this._id, {$set: {checked: true}});
  		console.log('checked: ' + this.checked);
  		return;

  	} 
  		 Meteor.users.update(this._id, {$set: {checked: !this.checked}});
  },
});