

if (Meteor.isClient) {

	Handlebars.registerHelper('setSelectedSchoolDoc',function(schoolId){
	    Session.set("selectedSchoolId", schoolId);
	});

	Handlebars.registerHelper('selectedSchoolDoc',function(){
    	return Schools.findOne(Session.get("selectedSchoolId"));
	});


	Handlebars.registerHelper('selectedContactDoc',function(){
    	return ContactPeople.findOne(Session.get("selectedSchoolId"));
	});


  	Handlebars.registerHelper('schools',function(){
		return Schools.find();
	});

	Handlebars.registerHelper('blocks',function(){
		return SanitationBlocks.find();
	});

	Handlebars.registerHelper('schoolNameWithId',function(schoolId){
		var school = Schools.findOne(schoolId);
		if (school) {
				  	return school.schoolDetails.INSTITUTION_NAME;

		}
	});

	Handlebars.registerHelper('isEqual', function(string1, string2) {
		return string1 === string2;
	});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}