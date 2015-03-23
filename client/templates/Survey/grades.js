var buttonSaveClicked = false;

	Template.survey2.rendered = function() {
		$.material.init();

 		$('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	};


	Template.survey2.events({
    "click .btn-back" : function() {
      var versionId = Session.get("selectedSurveyVersionId");
      Router.go('/survey/'+ versionId);
      return false;
    },
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey2').submit();
      return false;
    }, 
    "click .accordion-section-title" : function(e, template) {
    	var currentAttrValue = $(e.target).attr('href');
 
        if($(e.target).is('.active')) {
	 		$('.accordion .accordion-section-title').removeClass('active');
	        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	    }else {
	 		$('.accordion .accordion-section-title').removeClass('active');
	        $('.accordion .accordion-section-content').slideUp(300).removeClass('open'); 
            // Add active class to section title
            $(e.target).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
 
        e.preventDefault();
    },
    
 
  });


// Template.registerHelper("currentFieldValue", function (fieldName) {
//   var value= AutoForm.getFieldValue("survey", fieldName) || "";
//   return value;
// });

Handlebars.registerHelper("isPrimarySchool", function () {
        var schoolId = Session.get("selectedSchoolId");
        console.log("is primary school selected school: " + schoolId);
        var school = Schools.findOne({'_id' : schoolId}, {"schoolDetails.CLASSIFICATION" : 1});
        var ret = false;
        if (school.schoolDetails.CLASSIFICATION === 'Primary') {
          ret = true;
        }
        return ret;
    });

Handlebars.registerHelper("isSecondarySchool", function () {
        var schoolId = Session.get("selectedSchoolId");
        console.log("is primary school selected school: " + schoolId);
        var school = Schools.findOne({'_id' : schoolId}, {"schoolDetails.CLASSIFICATION" : 1});
        var ret = false;
        if (school.schoolDetails.CLASSIFICATION === 'Secondary') {
          ret = true;
        }
        return ret;
    });

AutoForm.addHooks(['survey2'], {
       onSuccess: function(operation, result, template) {  
        console.log("Succes result: " + result);
        console.log("Success operation: " + operation);   

        if (buttonSaveClicked) {
          alert('Saved School');
          buttonSaveClicked = false;
        }   

      },
      onError: function() {
        if (buttonSaveClicked) {
          alert('Error saving school');
          buttonSaveClicked = false;
        } 
      }
    });