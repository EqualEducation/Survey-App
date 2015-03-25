var saveButtonClicked = false;

Template.schools.rendered = function(){
    $.material.init(); 

  AutoForm.resetForm('insertSchoolForm');
}

Template.schools.events({
      "click .btn-back" : function() {
        Router.go('/');
        return false;
      },
      "click .btn-save" : function() {

        var name = AutoForm.getFieldValue("schoolDetails.INSTITUTION_NAME", "insertSchoolForm");
        var classification = AutoForm.getFieldValue("schoolDetails.CLASSIFICATION", "insertSchoolForm");
        var province = AutoForm.getFieldValue("schoolDetails.PROVINCE_NAME", "insertSchoolForm");

        if (!name || !classification || !province) {
          alert('Error saving school');
          saveButtonClicked = false;

          return false;
        }
        saveButtonClicked = true;
        $('#insertSchoolForm').submit();

        return false;
      },
  });

Template.search.events({
     "click .btn-delete" : function() {
        Schools.remove({'_id' : this._id});
    }, 
    "click .toggle-checked": function (e) {
      var isChecked = e.currentTarget.checked;
      // if (isChecked) {
      //   EasySearch.getComponentInstance({ index: 'schools' }).search({"current_version_id": {$exists:true}});
      // } else {
      //   EasySearch.getComponentInstance({ index: 'schools' }).search();
      // }

       var instance = EasySearch.getComponentInstance({
        index: 'schools'});

      EasySearch.changeProperty('schools', 'onlyShowSchoolsWithVersions', isChecked);

      instance.triggerSearch();


  },
});


AutoForm.hooks({
  insertSchoolForm: {
      onSuccess: function(operation, result, template) {  
        if (operation === "insert") {
          Session.set("selectedSchoolId", result);
        };

        if (saveButtonClicked) {
          alert('Saved School');
          saveButtonClicked = false;
          Router.go('/');
        }   

      },
      onError: function() {
        if (saveButtonClicked) {
          alert('Error saving school');
          saveButtonClicked = false;
        } 
      }
    }
});







