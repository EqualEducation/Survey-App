var buttonSaveClicked = false;

SimpleSchema.debug = true;
AutoForm.debug();

Template.survey1.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/'+ schoolId);
      return false;
    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey1').submit();
      return false;
    }, 
  
  });

Template.survey3.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/'+ schoolId);
      return false;
    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey3').submit();
      return false;
    }, 
    
  });

Template.survey4.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/'+ schoolId);
      return false;
    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey4').submit();
      return false;
    }, 
    
  });

Template.survey5.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/'+ schoolId);
      return false;
    },
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey5').submit();
      return false;
    },  
   
  });

Template.survey6.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/'+ schoolId);
      return false;
    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey6').submit();
      return false;
    }, 
  });





Template.survey9.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/'+ schoolId);
      return false;
    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey9').submit();
      return false;
    }, 
  });

Template.survey10.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/'+ schoolId);
      return false;
    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey10').submit();
      return false;
    }, 
  });



Template.survey12.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/'+ schoolId);
      return false;
    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey12').submit();
      return false;
    }, 
  });

Template.survey13.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/'+ schoolId);
      return false;
    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey13').submit();
      return false;
    }, 
  });

//NOTE: We need to re initialize the material css for some reason every time a template is rendered. 
//TODO: Use one method for all rendered templates instead of having to define each on ehere
Template.survey1.rendered = function(){
  $.material.init();
};

Template.survey3.rendered = function(){
  $.material.init();
};
Template.survey4.rendered = function(){
  $.material.init();
};
Template.survey5.rendered = function(){
  $.material.init();
};
Template.survey6.rendered = function(){
  $.material.init();
};
// Template.survey7.rendered = function(){
//   $.material.init();
// };
Template.survey8.rendered = function(){
  $.material.init();
};
Template.survey9.rendered = function(){
  $.material.init();
};
Template.survey10.rendered = function(){
  $.material.init();
};
Template.survey11.rendered = function(){
  $.material.init();
};
Template.survey12.rendered = function(){
  $.material.init();
};
Template.survey13.rendered = function(){
  $.material.init();
};
Template.libraries.rendered = function(){
    $.material.init();
}
Template.security.rendered = function(){
      $.material.init();
}
Template.electricity.rendered = function(){
      $.material.init();
}
Template.sciencelabs.rendered = function(){
      $.material.init();
}
Template.afArrayField.rendered = function(){
   $.material.init(); 
}
// Template.classroom_table.rendered = function(){
//    $.material.init(); 
// }
// Template.lab_table.rendered = function(){
//   $.material.init(); 
// }
// Template.block_details.rendered  = function() {
//   $.material.init(); 
// }



AutoForm.addHooks(['survey1', 'survey3', 'survey4', 'survey5', 'survey6', 'survey7', 'survey9', 'survey10', 'survey11', 'survey12', 'survey13'], {
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





