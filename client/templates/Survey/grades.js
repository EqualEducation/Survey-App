Meteor.subscribe("schools");
Meteor.subscribe("grades");


	Template.survey2.rendered = function() {
		$.material.init();

 		$('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	};


	Template.survey2.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/survey_sections/'+ schoolId);
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


Template.registerHelper("currentFieldValue", function (fieldName) {
  var value= AutoForm.getFieldValue("survey", fieldName) || "";
  return value;
});

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

Template.registerHelper("totalNumberOfStudentsInGrade", function (gradeName) {
  //gradeR
  var numberOfMaleStudentsFieldName = gradeName.concat(".numberOfMaleStudents");
  var totalNumberOfMaleStudents = AutoForm.getFieldValue("survey", numberOfMaleStudentsFieldName) || "0";
  var numberOfFemaleStudentsFieldName = gradeName.concat(".numberOfFemaleStudents");
  var totalNumberOfFemaleStudents = AutoForm.getFieldValue("survey", numberOfFemaleStudentsFieldName) || "0";

  var value = (parseInt(totalNumberOfFemaleStudents) + parseInt(totalNumberOfMaleStudents));


  return value;
});