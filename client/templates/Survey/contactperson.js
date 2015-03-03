Meteor.subscribe('contactpeople');

Template.survey1.helpers({
  		selectedContactPersonDoc: function () {
  			var schoolId = Session.get("selectedSchoolId");
 	    	var doc = ContactPeople.find({'school_id' : schoolId});
 	    	return doc;
  		}

 });