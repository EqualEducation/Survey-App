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

AutoForm.addHooks(['versions1', 'versions2'], {
onSuccess: function(operation, result, template) 
    {   
        $('#modal_version').modal('hide')
        $('#modal_version_update').modal('hide')
 
    },
    onError: function() 
    {
        alert('Error saving version');
      }
    });