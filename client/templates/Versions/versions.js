Template.registerHelper('schools',function(){
  var schoolId = Session.get("selectedSchoolId");
  var schools = Schools.find();
  return schools;
});


// Template.version_selection.events({
//   "click .btn-back" : function() {
//     Router.go('/schools/select');
//     return false;
//   }, 
//   "click .open-modal" : function(e,t) {
//     $("#modal_version").modal("show");
//   },
// });

// Template.modal_version.events({
//   "click .btn-save" : function() {
//       $('#versions1').submit();
//       return false;
//     }, 
// });

// Template.modal_version_update.events({
//   "click .btn-save" : function() {
//       $('#versions2').submit();
//       return false;
//     }, 
// });

// Template.version.events({
//   "click .btn-edit" : function() {
//         Session.set('selectedVersionId',this._id);
//         $("#modal_version_update").modal("show");
//     }, 
//      "click .btn-delete" : function() {
//         // SurveyVersions.remove({'_id' : this._id});
//     }, 
//     "click .btn-duplicate" : function(e,t) {
//         Session.set('duplicateVersionId',this._id);
//         $("#modal_version").modal("show");
//     },
//     "click .toggle-checked": function () {
//       console.log("toggle " + this._id);
//       console.log(this.isVerified);
//       // SurveyVersions.update(this._id, {$set: {'isVerified': !this.isVerified}});
//   },
// });

// Template.modal_version.rendered = function() {
//     AutoForm.resetForm('versions1');
// }


// Template.registerHelper('selectedVersion',function(){
//     var versionId = Session.get("selectedVersionId");

//     if (versionId) {
//       var version = SurveyVersions.findOne({'_id' : versionId});
//       return version;
//     }

//     return null;
// });


// Template.registerHelper('verifiedVersionId',function(){
//       var schoolId = Session.get('selectedSchoolId');
//       var school = Schools.findOne({'_id': schoolId});

//       return school.verified_version_id;
// });


// Template.registerHelper('hasSurveys',function(){
//   var schoolId = Session.get("selectedSchoolId");
//   var surveys = Schools.find({'_id' : schoolId}, {'surveys' : 1});
//   if (surveys.count() > 0) {
//     return true;
//   }
// //   return false;
// // });

// AutoForm.addHooks(['versions1', 'versions2'], {
// onSuccess: function(operation, new_version_id, template) 
//     {   
//         // if (operation == 'insert') {
//         //   var selected_schoolId = Session.get('selectedSchoolId');
//         //   var selected_school = Schools.findOne({'_id': selected_schoolId});
//         //   var versionId_to_duplicate = Session.get('duplicateVersionId');

//         //   if (versionId_to_duplicate != undefined) {
//         //     copy('security', Security, new_version_id, versionId_to_duplicate);
//         //     copy('electronicConnectivity', ElectronicConnectivity, new_version_id, versionId_to_duplicate);
//         //     copy('contactpeople', ContactPeople, new_version_id, versionId_to_duplicate);
//         //     copy('grades', Grades, new_version_id, versionId_to_duplicate);
//         //     copy('sports', Sports, new_version_id, versionId_to_duplicate);
//         //     copy('libraries', Libraries, new_version_id, versionId_to_duplicate);
//         //     copy('individuallabs', IndividualLabs, new_version_id, versionId_to_duplicate);
//         //     copy('sanitation', Sanitation, new_version_id, versionId_to_duplicate);
//         //     copy('sanitationblocks', SanitationBlocks, new_version_id, versionId_to_duplicate);
//         //     copy('additional', Additional, new_version_id, versionId_to_duplicate);
//         //     copy('classrooms', Classrooms, new_version_id, versionId_to_duplicate);
//         //     copy('nutrition', Nutrition, new_version_id, versionId_to_duplicate);
//         //     copy('electricity', Electricity, new_version_id, versionId_to_duplicate);
//         //     copy('specialneeds', SpecialNeeds, new_version_id, versionId_to_duplicate);
//         //     copy('surveyVersions', SurveyVersions, new_version_id, versionId_to_duplicate);


//         //   } 

//         //   Schools.update(selected_schoolId, {$set: {hasVersions: true}});


//         // }
//         // $('#modal_version').modal('hide')
//         // $('#modal_version_update').modal('hide')
//          // Session.set('duplicateVersionId',null);
 
//     },
//     onError: function() 
//     {
      
//         alert('Error saving version');
//     }, onSubmit: function() {
//       alert('on submit called');
//     }
// });

// function copy(collection, subscription, new_version_id, current_version_id) {
//   Meteor.subscribe(collection);
//   var copy = subscription.findOne({'version_id' : current_version_id});

//   if (copy!=undefined) {
//     // copy._id = null;
//     delete copy._id;
//     copy.version_id = new_version_id;
//     subscription.insert(copy); 
//   }
// }