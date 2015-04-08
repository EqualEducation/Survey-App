if (Meteor.isServer) {

  Meteor.publish("schoolnames", function (schoolId) {
    if (schoolId) {
       return Schools.find({'_id' : schoolId}, {'schoolDetails.INSTITUTION_NAME' : 1}, {sort: {'schoolDetails.INSTITUTION_NAME': 'asc'}});
    }
    return Schools.find({}, {'schoolDetails.INSTITUTION_NAME' : 1}, {sort: {'schoolDetails.INSTITUTION_NAME': 'asc'}});
  });

  Meteor.publish("schools", function () {
    return Schools.find({},{sort: {'schoolDetails.INSTITUTION_NAME': 1}}, {sort: {'schoolDetails.INSTITUTION_NAME': 'asc'}});
  });

  Meteor.publish("electronicConnectivity", function (versionId) {
    return ElectronicConnectivity.find({'version_id' : versionId});
  });


  Meteor.publish("contactpeople", function (versionId) {
    return ContactPeople.find({'version_id' : versionId});
  });

  Meteor.publish("grades", function (versionId) {
    return Grades.find({'version_id' : versionId});
  });

  Meteor.publish("sports", function (versionId) {

    return Sports.find({'version_id' : versionId});
  });
  
  Meteor.publish("libraries", function (versionId) {
    return Libraries.find({'version_id' : versionId});
  });

  Meteor.publish("labs", function (versionId) {
    return Labs.find({'version_id' : versionId});
  });
  Meteor.publish("individuallabs", function (versionId) {
    return IndividualLabs.find({'version_id' : versionId});
  });
  Meteor.publish("security", function (versionId) {
    return Security.find({'version_id' : versionId});
  });
  Meteor.publish("sanitation", function (versionId) {
    return Sanitation.find({'version_id' : versionId});
  });

  Meteor.publish("sanitationblocks", function (versionId) {
    return SanitationBlocks.find({'version_id' : versionId});
  });

  Meteor.publish("additional", function (versionId) {
    return Additional.find({'version_id' : versionId});
  });
  Meteor.publish("classrooms", function (versionId) {
        // check(versionId);

    return Classrooms.find({'version_id' : versionId});
  });
  Meteor.publish("nutrition", function (versionId) {
    return Nutrition.find({'version_id' : versionId});
  });
  Meteor.publish("electricity", function (versionId) {
    return Electricity.find({'version_id' : versionId});
  });
  Meteor.publish("specialneeds", function (versionId) {

    return SpecialNeeds.find({'version_id' : versionId});
  });

 Meteor.publish("surveyVersions", function (versionId) {
  if(versionId) {
    return SurveyVersions.find({'_id' : versionId});
  }
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
  check(versionId, String);
      var version =  SurveyVersions.find({'_id' : versionId}, {limit: 1});
      var school = Schools.find({'_id': schoolId});

      var additional = Additional.find({'version_id': versionId});
      var classrooms = Classrooms.find({'version_id': versionId});
      var contactpeople = ContactPeople.find({'version_id': versionId});
      var electricity = Electricity.find({'version_id': versionId});
      var labs = Labs.find({'version_id': versionId});
      var libraries = Libraries.find({'version_id': versionId});
      var nutrition = Nutrition.find({'version_id': versionId});
      var sanitation = Sanitation.find({'version_id': versionId});
      var specialneeds = SpecialNeeds.find({'version_id': versionId});
      var sports = Sports.find({'version_id': versionId});
      var telephone = ElectronicConnectivity.find({'version_id': versionId});
      var security = Security.find({'version_id': versionId});
      var grades = Grades.find({'version_id': versionId});

      return [version, school, additional, classrooms, contactpeople, electricity, labs, libraries, nutrition,sanitation,specialneeds, sports, telephone, security, grades];

});

function MapCode() {
  emit(this.school_id,
  {
    "details": this.City,
    "lat":  this.Latitude,
    "lon":  this.Longitude
  });
}


function /*object*/ ReduceCode(key, arr_values) {
  // 1) Key 2) An array of values (number of values outputted from Map step)
  //Therefore the reduceCode and map
}




}
