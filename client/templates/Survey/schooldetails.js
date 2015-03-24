var saveButtonClicked = false;


Template.survey8.events({
      "click .btn-save" : function() {

        var name = AutoForm.getFieldValue("schoolDetails.INSTITUTION_NAME", "survey8");
        var classification = AutoForm.getFieldValue("schoolDetails.CLASSIFICATION", "survey8");
        var province = AutoForm.getFieldValue("schoolDetails.PROVINCE_NAME", "survey8");

        if (!name || !classification || !province) {
          alert('Error saving school');
          console.log(name);
          console.log(classification);
          console.log(province);
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
        console.log("Succes result: " + result);
        console.log("Success operation: " + operation);   
        if (operation === "insert") {
          Session.set("selectedSchoolId", result);
        };

        if (saveButtonClicked) {
          alert('Saved School');
          saveButtonClicked = false;
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