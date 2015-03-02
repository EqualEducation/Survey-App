Meteor.subscribe("schooldetails");

if (Meteor.isClient) {

  Template.schools.events({
      "click .btn-back" : function() {
        Router.go('/');
        return false;
      },
  });

AutoForm.hooks({
  insertSchoolForm: {
      onSuccess: function(operation, result, template) {  
      alert('School saved!');
      Router.go('/');
      },
    }
  });
}






