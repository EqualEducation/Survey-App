  FlashMessages.configure({
    autoHide: true,
    hideDelay: 5000,
    autoScroll: true
  });

//SCHOOL
Handlebars.registerHelper('setSelectedSchoolDoc',function(schoolId){
    Session.set("selectedSchoolId", schoolId);
    var school = Schools.findOne({'_id': schoolId});
    if (school) {
 	   Session.set("selectedSchoolName", school.INSTITUTION_NAME);
	}
});

Handlebars.registerHelper('selectedSchoolDoc',function(){
	return Schools.findOne(Session.get("selectedSchoolId"));
});


Handlebars.registerHelper('schoolName',function(schoolId){
	return Session.get("selectedSchoolName");
});

Handlebars.registerHelper('selectedSchoolId',function(){
	return Session.get("selectedSchoolId");
});


//BLOCKS
Handlebars.registerHelper('blocks',function(){
	return SanitationBlocks.find();
});


//FUNCTIONS
Handlebars.registerHelper('isEqual', function(string1, string2) {
	return string1 === string2;
});



Handlebars.registerHelper('autoformType', function() {
	var autoformType = "insert";
	if (Session.get("selectedSchoolDoc") != null) {
		autoformType =  "update";
	} 
	return autoformType;
});

Handlebars.registerHelper('autoformTypeForAddSchool', function() {
	var autoformType = "insert";
	if (Session.get("selectedSchoolId") != null) {
		autoformType =  "update";
	} 
	return autoformType;
});

Handlebars.registerHelper('userIsVerified', function(){
  if(Meteor.user()!=undefined) {
    if(Meteor.user().emails[0].verified==true) {
      return Meteor.user().emails[0].verified;
    }
  }
});

Handlebars.registerHelper('userIsAdmin', function(){
  if(Meteor.user()!=undefined) {
    if(Meteor.user().checked==true) {
      return Meteor.user().checked;
    }
  }

  return false;
});



Handlebars.registerHelper('print', function(toPrint) {
	console.log(toPrint);
})

Handlebars.registerHelper('dateToString', function(date) {
	if (date) {
		return date.toDateString();
	}
})
