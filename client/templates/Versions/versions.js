Template.version_selection.events({
  "click .btn-back" : function() {
    Router.go('/schools/select');
    return false;
  }, 
  "click .open-modal" : function(e,t) {
    $("#modal_version").modal("show");
  },
});

Template.modal_version.events({
  "click .btn-save" : function() {
      console.log('button clicked');
      $('#versions1').submit();
      return false;
    }, 
});

Template.modal_version_update.events({
  "click .btn-save" : function() {
      $('#versions2').submit();
      return false;
    }, 
});

Template.version.events({
  "click .btn-edit" : function() {
        Session.set('selectedVersionId',this._id);
        $("#modal_version_update").modal("show");
    }, 
     "click .btn-delete" : function() {
        SurveyVersions.remove({'_id' : this._id});
    }, 
    "click .btn-duplicate" : function(e,t) {
        Session.set('duplicateVersionId',this._id);
        $("#modal_version").modal("show");
    },
});

Template.modal_version.rendered = function() {
    AutoForm.resetForm('versions1');
}


Template.registerHelper('selectedVersion',function(){
    var versionId = Session.get("selectedVersionId");

    if (versionId) {
      var version = SurveyVersions.findOne({'_id' : versionId});
      return version;
    }

    return null;
});

Template.registerHelper('currentVersionId',function(){
      var schoolId = Session.get('selectedSchoolId');
      var school = Schools.findOne({'_id': schoolId});

      return school.current_version_id;
});

Template.registerHelper('versions',function(){
  var schoolId = Session.get("selectedSchoolId");
  var versions = SurveyVersions.find({'school_id' : schoolId});
  return versions;
});

Template.registerHelper('hasVersions',function(){
  var schoolId = Session.get("selectedSchoolId");
  var versions = SurveyVersions.find({'school_id' : schoolId});
  if (versions.count() > 0) {
    return true;
  }
  return false;
});

AutoForm.addHooks(['versions1', 'versions2'], {
onSuccess: function(operation, new_version_id, template) 
    {   
      var selected_schoolId = Session.get('selectedSchoolId');
      var selected_school = Schools.findOne({'_id': selected_schoolId});
      var versionId_to_duplicate = Session.get('duplicateVersionId');

      if (versionId_to_duplicate != undefined) {
        console.log('duplication');
        copy('security', Security, new_version_id, versionId_to_duplicate);
        Schools.update(selected_schoolId, {$set: {current_version_id: new_version_id}});

      } else {
          console.log('new or edit');
          Schools.update(selected_schoolId, {$set: {current_version_id: new_version_id}});
      }

      $('#modal_version').modal('hide')
      $('#modal_version_update').modal('hide')
      Session.set('duplicateVersionId',null);
 
    },
    onError: function() 
    {
        alert('Error saving version');
    }, onSubmit: function() {
      alert('on submit called');
    }
});

function copy(collection, subscription, new_version_id, current_version_id) {
  Meteor.subscribe(collection);
  var copy = subscription.findOne({'version_id' : current_version_id});

  if (copy!=undefined) {
    copy._id = null;
    copy.version_id = new_version_id;
    subscription.insert(copy); 
  }
}