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


Handlebars.registerHelper('selectedContactDoc',function(){
	return ContactPeople.findOne(Session.get("selectedSchoolId"));
});

// Handlebars.registerHelper('schools',function(){
// 	return Schools.find();
// });

Handlebars.registerHelper('blocks',function(){
	return SanitationBlocks.find();
});

Handlebars.registerHelper('schoolName',function(schoolId){
	return Session.get("selectedSchoolName");
});

Handlebars.registerHelper('isEqual', function(string1, string2) {
	return string1 === string2;
});


//Generic setting of session items
Handlebars.registerHelper('setSelectedDoc',function(schoolId, collection_name){
	var doc = "unknown";
	var selected_doc = "selected_doc";
	Session.set(selected_doc, null);

	// console.log("searching for "  + collection_name + " with school id " + schoolId);
	if (collection_name === "additional") {
		doc = Additional.findOne({'school_id' : schoolId});
		// session_item_name = "selectedAdditionalDoc";
	}

	else if (collection_name === "sanitation") {
		doc = Sanitation.findOne({'school_id' : schoolId});
		// session_item_name = "selectedSanitationDoc";
	}

	else if (collection_name === "classrooms") {
		doc = Classrooms.findOne({'school_id' : schoolId});
		// session_item_name = "selectedClassroomsDoc";
	}
	else if (collection_name === "contactperson") {
		doc = ContactPeople.findOne({'school_id' : schoolId});
		// session_item_name = "selectedContactPersonDoc";
	}
	else if (collection_name === "electricity") {
		// console.log('ELECTRICITY');
		doc = Electricity.findOne({'school_id' : schoolId});
		// session_item_name = "selectedElectricityDoc";
	}
	else if (collection_name === "grades") {
		doc = Grades.findOne({'school_id' : schoolId});
		// session_item_name = "selectedGradesDoc";
	}
	else if (collection_name === "libraries") {
		doc = Libraries.findOne({'school_id' : schoolId});
		// session_item_name = "selectedLabsDoc";
	}
	else if (collection_name === "labs") {
		doc = Labs.findOne({'school_id' : schoolId});
		// session_item_name = "selectedLabsDoc";
	}
	else if (collection_name === "nutrition") {
		doc = Nutrition.findOne({'school_id' : schoolId});
		// session_item_name = "selectedNutritionDoc";
	}
	else if (collection_name === "security") {
		doc = Security.findOne({'school_id' : schoolId});
		// session_item_name = "selectedSecurityDoc";
	}
	else if (collection_name === "specialneeds") {
		doc = SpecialNeeds.findOne({'school_id' : schoolId});
		// session_item_name = "selectedSpecialNeedsDoc";
	}
	else if (collection_name === "sports") {
		doc = Sports.findOne({'school_id' : schoolId});
		// session_item_name = "selectedSportsDoc";
	}
	Session.set("selected_doc", doc);

});

Handlebars.registerHelper('selectedDoc', function() {
	var doc = Session.get("selected_doc");
	// console.log(doc);
	return doc;
});

Handlebars.registerHelper('autoformType', function() {
	var autoformType = "insert";
	if (Session.get("selected_doc") != null) {
		autoformType =  "update";
	} 
	return autoformType;
});



