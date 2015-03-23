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
});

Template.list_versions.helpers({
      versions: function () {
        var schoolId = Session.get("selectedSchoolId");
        var versions = SurveyVersions.find({'school_id' : schoolId});
        return versions;
      }
    });

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

AutoForm.addHooks(['versions1', 'versions2'], {
onSuccess: function(operation, result, template) 
    {   
      var schoolId = Session.get('selectedSchoolId');
      var school = Schools.findOne({'_id': schoolId});
      var currentVersionId = school.current_version_id;

      if (currentVersionId != undefined) {
        copy('security', Security, result, currentVersionId);
        Schools.update(schoolId, {$set: {current_version_id: result, previous_version_id: currentVersionId}});

      } else {
          Schools.update(schoolId, {$set: {current_version_id: result}});
      }

      $('#modal_version').modal('hide')
      $('#modal_version_update').modal('hide')
 
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