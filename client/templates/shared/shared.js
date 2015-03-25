//SCHOOL
Handlebars.registerHelper('setSelectedSchoolDoc',function(schoolId){
    Session.set("selectedSchoolId", schoolId);
    var school = Schools.findOne({'_id': schoolId});
    if (school) {
 	   Session.set("selectedSchoolName", school.schoolDetails.INSTITUTION_NAME);
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

//SURVEY
Handlebars.registerHelper('setSelectedSurveyVersionDoc',function(versionId){
    Session.set("selectedSurveyVersionId", versionId);
    var version = SurveyVersions.findOne({'_id': versionId});
    if (version) {
 	   Session.set("selectedSurveyVersionName", version.name);
	}
});

Handlebars.registerHelper('selectedSurveryVersionDoc',function(){
	return SurveyVersions.findOne(Session.get("selectedSurveyVersionId"));
});

Handlebars.registerHelper('surveyVersionName',function(){
	return Session.get("selectedSurveyVersionName");
});


Handlebars.registerHelper('selectedVersionId',function(){
	return Session.get("selectedSurveyVersionId");
});


//CONTACT
Handlebars.registerHelper('selectedContactDoc',function(){
	return ContactPeople.findOne(Session.get("selectedSchoolId"));
});

//BLOCKS
Handlebars.registerHelper('blocks',function(){
	return SanitationBlocks.find();
});


//FUNCTIONS
Handlebars.registerHelper('isEqual', function(string1, string2) {
	return string1 === string2;
});


//Generic setting of session items
Handlebars.registerHelper('setSelectedDoc',function(versionId, collection_name){
	var doc = "unknown";
	var selected_doc = "selected_doc";
	Session.set(selected_doc, null);

	if (collection_name === "additional") {
		doc = Additional.findOne({'version_id' : versionId});
	}
	else if (collection_name === "electronicConnectivity") {
		doc = ElectronicConnectivity.findOne({'version_id' : versionId});
	}
	else if (collection_name === "sanitation") {
		doc = Sanitation.findOne({'version_id' : versionId});
	}
	else if (collection_name === "classrooms") {
		doc = Classrooms.findOne({'version_id' : versionId});
	}
	else if (collection_name === "contactperson") {
		doc = ContactPeople.findOne({'version_id' : versionId});
	}
	else if (collection_name === "electricity") {
		doc = Electricity.findOne({'version_id' : versionId});
	}
	else if (collection_name === "grades") {
		doc = Grades.findOne({'version_id' : versionId});
	}
	else if (collection_name === "libraries") {
		doc = Libraries.findOne({'version_id' : versionId});
	}
	else if (collection_name === "labs") {
		doc = Labs.findOne({'version_id' : versionId});
	}
	else if (collection_name === "nutrition") {
		doc = Nutrition.findOne({'version_id' : versionId});
	}
	else if (collection_name === "security") {
		doc = Security.findOne({'version_id' : versionId});
	}
	else if (collection_name === "specialneeds") {
		doc = SpecialNeeds.findOne({'version_id' : versionId});
	}
	else if (collection_name === "sports") {
		doc = Sports.findOne({'version_id' : versionId});
	}
	else if (collection_name === "schools") {
		doc = Schools.findOne({'version_id' : versionId});
	}

	Session.set("selected_doc", doc);

});

Handlebars.registerHelper('selectedDoc', function() {
	var doc = Session.get("selected_doc");
	return doc;
});

Handlebars.registerHelper('autoformType', function() {
	var autoformType = "insert";
	if (Session.get("selected_doc") != null) {
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
	return date.toDateString();
})
