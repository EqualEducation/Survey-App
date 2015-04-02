if (Meteor.isServer) {

  Meteor.publish("schoolnames", function () {
    return Schools.find({}, {'schoolDetails.INSTITUTION_NAME' : 1}, {sort: {'schoolDetails.INSTITUTION_NAME': 'asc'}});
  });

  Meteor.publish("schools", function () {
    return Schools.find({},{sort: {'schoolDetails.INSTITUTION_NAME': 1}}, {sort: {'schoolDetails.INSTITUTION_NAME': 'asc'}});
  });

  Meteor.publish("electronicConnectivity", function () {
    return ElectronicConnectivity.find();
  });


  Meteor.publish("contactpeople", function () {
    return ContactPeople.find();
  });

  Meteor.publish("grades", function () {
    return Grades.find();
  });

  Meteor.publish("sports", function () {
    return Sports.find();
  });
  
  Meteor.publish("libraries", function () {
    return Libraries.find();
  });

  Meteor.publish("labs", function () {
    return Labs.find();
  });
  Meteor.publish("individuallabs", function () {
    return IndividualLabs.find();
  });
  Meteor.publish("security", function () {
    return Security.find();
  });
  Meteor.publish("sanitation", function () {
    return Sanitation.find();
  });

  Meteor.publish("sanitationblocks", function () {
    return SanitationBlocks.find();
  });

  Meteor.publish("additional", function () {
    return Additional.find();
  });
  Meteor.publish("classrooms", function () {
    return Classrooms.find();
  });
  Meteor.publish("nutrition", function () {
    return Nutrition.find();
  });
  Meteor.publish("electricity", function () {
    return Electricity.find();
  });
  Meteor.publish("specialneeds", function () {
    return SpecialNeeds.find();
  });

 Meteor.publish("surveyVersions", function () {
    return SurveyVersions.find();
  });

//API
// Accounts.connection = DDP.connect("http://app.equaleducation.org.za");
  Meteor.users.allow({
    update: function(userId, docs, fields, modifier) {
        return true;
        }
    });

Meteor.publish("allUsers", function () {
  return Meteor.users.find();
  });


Meteor.publish('school_profile', function(versionId, schoolId) { 
  console.log(versionId);

  check(versionId, String);
  var version =  SurveyVersions.find({'_id' : versionId}, {limit: 1});
  var school = Schools.find({'_id': schoolId});
  var security = Security.find({'version_id': versionId});
  var grades = Grades.find({'version_id': versionId});

  return [version, school, security, grades];

});

}
