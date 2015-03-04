Template.survey11.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/survey_sections/'+ schoolId);
      return false;
    }, 
  });

