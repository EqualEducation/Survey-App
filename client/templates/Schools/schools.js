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
              FlashMessages.sendError('Error saving school. Please see below for errors');
          saveButtonClicked = false;

          return false;
        }
        saveButtonClicked = true;
        $('#insertSchoolForm').submit();

        return false;
      },
  });

AutoForm.hooks({
  insertSchoolForm: {
      onSuccess: function(operation, result, template) {  
        if (operation === "insert") {
          Session.set("selectedSchoolId", result);
        };

        if (saveButtonClicked) {
              FlashMessages.sendSuccess('School saved!');
          saveButtonClicked = false;
          Router.go('/');
        }   

      },
      onError: function() {
        if (saveButtonClicked) {
              FlashMessages.sendError('Error saving school. Please see below for errors');
          saveButtonClicked = false;
        } 
      }
    }
});







