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
	if (date) {
		return date.toDateString();
	}
})

Handlebars.registerHelper('JSONForSchool',function(versionId){
  var version = SurveyVersions.findOne({'_id' : versionId}, {limit: 1});
  var school = Schools.findOne({'_id': version.school_id});
  var additional = Additional.findOne({'version_id': versionId});
  var classrooms = Classrooms.find({'version_id': versionId}).fetch();
  var contactpeople = ContactPeople.findOne({'version_id': versionId});
  var electricity = Electricity.findOne({'version_id': versionId});
  var grades = Grades.findOne({'version_id': versionId});
  var labs = Labs.findOne({'version_id': versionId});
  var libraries = Libraries.findOne({'version_id': versionId});
  var nutrition = Nutrition.findOne({'version_id': versionId});
  var security = Security.findOne({'version_id': versionId});
  var sanitation = Sanitation.findOne({'version_id': versionId});
  var specialneeds = SpecialNeeds.findOne({'version_id': versionId});
  var sports = Sports.findOne({'version_id': versionId});
  var electronicConnectivity = ElectronicConnectivity.findOne({'version_id': versionId});


  var flattenedSchool = flattenSchool(school);
  var flattenedGrades = flattenGrades(grades);
  $.extend(flattenedSchool, flattenedGrades );

	$.each(classrooms, function(i, classroom) {
  	  console.log(classroom);
  		var flattenedClassroom = flattenClassroom('Classroom ' + i, classroom);
  		$.extend(flattenedSchool, flattenedClassroom);
   });

  // console.log(ret);
  return JSON.stringify(flattenedSchool);

});

function flattenSchool(item) {
	var flattenedItem = {
		'Name' : item.schoolDetails.INSTITUTION_NAME,
		'District': item.schoolDetails.DISTRICT_NAME,
		'Telephone': item.schoolDetails.TELEPHONE_NO,
		'Street Number': item.schoolDetails.STREET_NO,
		'Street Name' :item.schoolDetails.STREET_NAME,
		'Township or Village' :item.schoolDetails.TOWNSHIP_OR_VILLAGE_NAME,
		'Suburb': item.schoolDetails.SUBURB,
		'Town or City': item.schoolDetails.TOWN_OR_CITY,
		'Postal Code': item.schoolDetails.POSTAL_CODE,
		'Province' :item.schoolDetails.PROVINCE_NAME,
		'Neims number' :item.schoolDetails.NEIMS_NUMBER,
		'Classification' :item.schoolDetails.CLASSIFICATION,
		'Is Principal Cooperative' :item.schoolDetails.principalCooperative,
	}

	return flattenedItem;
}

function flattenGrades(item) {	
	var flattenedItem = {
		'Total No. Teachers in School' : item.totalTeachersInSchool,
		'Total No. Students in School': item.totalStudentsInSchool,
	}

	if (item.gradeR) {
		var grade = flattenGrade('Grade R', item.gradeR);

		$.extend(flattenedItem, grade);
	}
	if (item.grade1) {
		var grade = flattenGrade('Grade 1', item.grade1);
		$.extend(flattenedItem, grade);
	}
	if (item.grade2) {
		var grade = flattenGrade('Grade 2', item.grade2);
		$.extend(flattenedItem, grade);
	}
	if (item.grade3) {
		var grade = flattenGrade('Grade 3', item.grade3);
		$.extend(flattenedItem, grade);
	}
	if (item.grade4) {
		var grade = flattenGrade('Grade 4', item.grade4);
		$.extend(flattenedItem, grade);
	}
	if (item.grade5) {
		var grade = flattenGrade('Grade 5', item.grade5);
		$.extend(flattenedItem, grade);
	}
	if (item.grade6) {
		var grade = flattenGrade('Grade 6', item.grade6);
		$.extend(flattenedItem, grade);
	}
	if (item.grade7) {
		var grade = flattenGrade('Grade 7', item.grade7);
		$.extend(flattenedItem, grade);
	}
	if (item.grade8) {
		var grade = flattenGrade('Grade 8', item.grade8);
		$.extend(flattenedItem, grade);
	}
	if (item.grade9) {
		var grade = flattenGrade('Grade 9', item.grade9);
		$.extend(flattenedItem, grade);
	}
	if (item.grade10) {
		var grade = flattenGrade('Grade 10', item.grade10);
		$.extend(flattenedItem, grade);
	}
	if (item.grade11) {
		var grade = flattenGrade('Grade 11', item.grade11);
		$.extend(flattenedItem, grade);
	}
	if (item.grade12) {
		var grade = flattenGrade('Grade 12', item.grade12);
		$.extend(flattenedItem, grade);
	}

	

	return flattenedItem;
}

function flattenGrade (gradeName, item) {
	var attr1 = gradeName + ' - No. Male Students';
	var attr2 = gradeName + ' - No. Female Students';
	var attr3 = gradeName + ' - Total No. Students';
	var attr4 = gradeName + ' - Total No. Teachers';
	var attr5 = gradeName + ' - Total No. Classrooms'
	var attr6 = gradeName + ' - Comment';

	var data = {};
	data[attr1] =  item.numberOfMaleStudents;
	data[attr2] = item.numberOfFemaleStudents;
	data[attr3] = item.totalNumberOfStudents;
	data[attr4] = item.totalNumberOfTeachers;
	data[attr5] = item.totalNumberOfClassRooms;
	data[attr6] = item.comment;

	return data;
}

function flattenClassroom (name,item) {

	var attr1 = name + ' - No. Students in Class';
	var attr2 = name + ' - Total No. Windows';
	var attr3 = name + ' - Total No. Broken Windows';
	var attr4 = name + ' - Teacher has Desk';
	var attr5 = name + ' - Teacher has Chair';
	var attr6 = name + ' - Total No. Desks';
	var attr7 = name + ' - Total No. Broken Desks'
	var attr8 = name + ' - Total No. Chairs';
	var attr9 = name + ' - Total No. Broken Chairs';
	var attr10 = name + ' - How is classroom used';
	var attr11 = name + ' - Ceiling is damaged';
	var attr12 = name + ' - Comment';

	var data = {};

	data[attr1] =  item.numberOfStudents;
	data[attr2] = item.totalNumberOfWindows;
	data[attr3] = item.totalNumberOfBrokenWindows;
	data[attr4] = item.teachHasDesk;
	data[attr5] = item.teacherHasChair;
	data[attr6] = item.totalNumberOfDesks;
	data[attr7] =  item.totalNumberOfBrokenDesks;
	data[attr8] = item.totalNumberOfChairs;
	data[attr9] = item.totalNumberOfBrokenChairs;
	data[attr10] = item.showIsClassroomUsed;
	data[attr11] = item.ceilingOrFloorHasHole;
	data[attr12] = item.comment;

	return data;
}


  
  
   

