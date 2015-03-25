 Meteor.subscribe('allUsers'); 


Template.registerHelper('users',function(){
  var users = Meteor.users.find(); 
  return users;
});

Template.manage_users.events({
  "click .toggle-checked": function () {

  	if (this.checked == undefined) {
  		Meteor.users.update(this._id, {$set: {checked: true}});
  		console.log('checked: ' + this.checked);
  		return;

  	} 
  		 Meteor.users.update(this._id, {$set: {checked: !this.checked}});
  },
});