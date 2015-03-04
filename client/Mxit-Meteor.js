

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


	//Generic setting of session items
	Handlebars.registerHelper('setSelectedDoc',function(schoolId, collection_name){
		var doc = "unknown";
		var session_item_name = "unknown";
		if (collection_name === "additional") {
			doc = Additional.findOne({'school_id' : schoolId});
			session_item_name = "selectedAdditionalDoc";
		}

		else if (collection_name === "sanitation") {
			doc = Sanitation.findOne({'school_id' : schoolId});
			session_item_name = "selectedSanitationDoc";
		}

		else if (collection_name === "classrooms") {
			doc = Classrooms.findOne({'school_id' : schoolId});
			session_item_name = "selectedClassroomsDoc";
		}
		else if (collection_name === "contactperson") {
			doc = ContactPeople.findOne({'school_id' : schoolId});
			session_item_name = "selectedContactPersonDoc";
		}
		else if (collection_name === "electricity") {
			doc = Electricity.findOne({'school_id' : schoolId});
			session_item_name = "selectedElectricityDoc";
		}
		else if (collection_name === "grades") {
			doc = Grades.findOne({'school_id' : schoolId});
			session_item_name = "selectedGradesDoc";
		}
		else if (collection_name === "labs") {
			doc = Labs.findOne({'school_id' : schoolId});
			session_item_name = "selectedLabsDoc";
		}
		else if (collection_name === "nutrition") {
			doc = Nutrition.findOne({'school_id' : schoolId});
			session_item_name = "selectedNutritionDoc";
		}
		else if (collection_name === "security") {
			doc = Security.findOne({'school_id' : schoolId});
			session_item_name = "selectedSecurityDoc";
		}
		else if (collection_name === "specialneeds") {
			doc = SpecialNeeds.findOne({'school_id' : schoolId});
			session_item_name = "selectedSpecialNeedsDoc";
		}
		else if (collection_name === "sports") {
			doc = SportsFields.findOne({'school_id' : schoolId});
			session_item_name = "selectedSportsDoc";
		}


		Session.set(session_item_name, doc);
		Session.set("current_session_item_name", session_item_name);

	});

	Handlebars.registerHelper('selectedDoc', function() {
		var currentSessionItemName = Session.get("current_session_item_name");
		console.log("Getting selected doc for: " + currentSessionItemName);

		return Session.get(Session.get(currentSessionItemName));
	});

	Handlebars.registerHelper('autoformType', function() {
		var currentSessionItemName = Session.get("current_session_item_name");

		console.log("Autoform type for: " + currentSessionItemName);

		var autoformType = "insert";
		if (Session.get(currentSessionItemName) != null) {
			autoformType =  "update";
		} 
		console.log(autoformType);
		return autoformType;
	});



}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

