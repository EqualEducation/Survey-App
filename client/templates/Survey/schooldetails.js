var saveButtonClicked = false;


Template.survey8.events({
      "click .btn-save" : function() {

        var name = AutoForm.getFieldValue("schoolDetails.INSTITUTION_NAME", "survey8");
        var classification = AutoForm.getFieldValue("schoolDetails.CLASSIFICATION", "survey8");
        var province = AutoForm.getFieldValue("schoolDetails.PROVINCE_NAME", "survey8");

        if (!name || !classification || !province) {
              FlashMessages.sendError('Error saving school. Please see below for errors');
          saveButtonClicked = false;

          return false;
        }
        saveButtonClicked = true;
        $('#survey8').submit();
        return false;
      },
  });

AutoForm.hooks({
  survey8: {
      onSuccess: function(operation, result, template) {   
        if (operation === "insert") {
          Session.set("selectedSchoolId", result);
        };

        if (saveButtonClicked) {
              FlashMessages.sendSuccess('School saved!');
          saveButtonClicked = false;
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