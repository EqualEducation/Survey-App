if (Meteor.isServer) {

  Meteor.publish("schools", function() {
    return Schools.find({});
  });

  Meteor.publish("grades", function(schoolId, surveyId) {
    return Schools.find({'_id' : schoolId, 'survey._id' : surveyId});
  });

  Meteor.publish("school_surveys", function(schoolId) {
  	return Schools.find({'_id' : schoolId}, {'surveys' : 1});
  });

   Meteor.publish("school_survey", function(surveyId) {
    return Schools.find({'surveys' : {$elemMatch: {'survey_id' : surveyId}}}, {_id: 0, 'surveys.$': 1});
  });

  Meteor.publish("schoolsWithSurveys", function() {
  	return Schools.find({ surveys: { $exists : true}});
  });

  Meteor.publish("school_grades", function(schoolId) {
  	return Schools.find({'_id' : schoolId}, {'grades' : 1});
  });

  Meteor.publish("schoolnames", function () {
    return Schools.find({}, {'INSTITUTION_NAME' : 1}, {sort: {'INSTITUTION_NAME': 'asc'}});
  });

//   Meteor.publish("schools", function () {
//     return Schools.find({},{sort: {'schoolDetails.INSTITUTION_NAME': 1}}, {sort: {'schoolDetails.INSTITUTION_NAME': 'asc'}});
//   });

//   Meteor.publish("electronicConnectivity", function () {
//     return ElectronicConnectivity.find();
//   });


//   Meteor.publish("contactpeople", function () {
//     return ContactPeople.find();
//   });

//   Meteor.publish("grades", function () {
//     return Grades.find();
//   });

//   Meteor.publish("sports", function () {
//     return Sports.find();
//   });
  
//   Meteor.publish("libraries", function () {
//     return Libraries.find();
//   });

//   Meteor.publish("labs", function () {
//     return Labs.find();
//   });
//   Meteor.publish("individuallabs", function () {
//     return IndividualLabs.find();
//   });
//   Meteor.publish("security", function () {
//     return Security.find();
//   });
//   Meteor.publish("sanitation", function () {
//     return Sanitation.find();
//   });

//   Meteor.publish("sanitationblocks", function () {
//     return SanitationBlocks.find();
//   });

//   Meteor.publish("additional", function () {
//     return Additional.find();
//   });
//   Meteor.publish("classrooms", function () {
//     return Classrooms.find();
//   });
//   Meteor.publish("nutrition", function () {
//     return Nutrition.find();
//   });
//   Meteor.publish("electricity", function () {
//     return Electricity.find();
//   });
//   Meteor.publish("specialneeds", function () {
//     return SpecialNeeds.find();
//   });

//  Meteor.publish("surveyVersions", function () {
//     return SurveyVersions.find();
//   });

// //API
// // Accounts.connection = DDP.connect("http://app.equaleducation.org.za");
//   Meteor.users.allow({
//     update: function(userId, docs, fields, modifier) {
//         return true;
//         }
//     });

// Meteor.publish("allUsers", function () {
//   return Meteor.users.find();
//   });


// Meteor.publish('school_profile', function(versionId, schoolId) { 
//   check(versionId, String);
//       var version =  SurveyVersions.find({'_id' : versionId}, {limit: 1});
//       var school = Schools.find({'_id': schoolId});

//       var additional = Additional.find({'version_id': versionId});
//       var classrooms = Classrooms.find({'version_id': versionId});
//       var contactpeople = ContactPeople.find({'version_id': versionId});
//       var electricity = Electricity.find({'version_id': versionId});
//       var labs = Labs.find({'version_id': versionId});
//       var libraries = Libraries.find({'version_id': versionId});
//       var nutrition = Nutrition.find({'version_id': versionId});
//       var sanitation = Sanitation.find({'version_id': versionId});
//       var specialneeds = SpecialNeeds.find({'version_id': versionId});
//       var sports = Sports.find({'version_id': versionId});
//       var telephone = ElectronicConnectivity.find({'version_id': versionId});
//       var security = Security.find({'version_id': versionId});
//       var grades = Grades.find({'version_id': versionId});

//       return [version, school, additional, classrooms, contactpeople, electricity, labs, libraries, nutrition,sanitation,specialneeds, sports, telephone, security, grades];

// });



}
