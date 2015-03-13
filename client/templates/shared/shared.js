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
	}
	else if (collection_name === "sanitation") {
		doc = Sanitation.findOne({'school_id' : schoolId});
	}
	else if (collection_name === "classrooms") {
		doc = Classrooms.findOne({'school_id' : schoolId});
	}
	else if (collection_name === "contactperson") {
		doc = ContactPeople.findOne({'school_id' : schoolId});
	}
	else if (collection_name === "electricity") {
		doc = Electricity.findOne({'school_id' : schoolId});
	}
	else if (collection_name === "grades") {
		doc = Grades.findOne({'school_id' : schoolId});
	}
	else if (collection_name === "libraries") {
		doc = Libraries.findOne({'school_id' : schoolId});
	}
	else if (collection_name === "labs") {
		doc = Labs.findOne({'school_id' : schoolId});
	}
	else if (collection_name === "nutrition") {
		doc = Nutrition.findOne({'school_id' : schoolId});
	}
	else if (collection_name === "security") {
		doc = Security.findOne({'school_id' : schoolId});
	}
	else if (collection_name === "specialneeds") {
		doc = SpecialNeeds.findOne({'school_id' : schoolId});
	}
	else if (collection_name === "sports") {
		doc = Sports.findOne({'school_id' : schoolId});
	}
	else if (collection_name === "schools") {
		doc = Schools.findOne({'school_id' : schoolId});
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


AutoForm.addHooks(['survey1', 'survey2', 'survey3', 'survey4', 'survey5', 'survey6', 'survey7', 'survey9', 'survey10', 'survey11', 'survey12', 'survey13'], {

      onSuccess: function(operation, result, template) {  
        console.log("Succes result: " + result);
        console.log("Success operation: " + operation);
      },
      onError: function(operation, error, template) {
        // alert('Could not save the form. Please check all fields are filled in correctly' + error);

      },
      onSubmit : function(insertDoc, updateDoc, currentDoc) {
        console.log("Submit: ");
        // doc.groupId = /*Get the group id*/;
        // this.done(); //We've finished
        return true; //Let autoForm do his default job now
      }
    });

