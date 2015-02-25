Meteor.subscribe('schools');
SimpleSchema.debug = true;

if (Meteor.isClient) {
Template.survey1.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/survey_sections/'+ schoolId);
      return false;
    }, 
  
  });

Template.survey3.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/survey_sections/'+ schoolId);
      return false;
    }, 
    
  });

Template.survey4.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/survey_sections/'+ schoolId);
      return false;
    }, 
    
  });

Template.survey5.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/survey_sections/'+ schoolId);
      return false;
    }, 
   
  });

Template.survey6.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/survey_sections/'+ schoolId);
      return false;
    }, 
  
  });



Template.survey8.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/survey_sections/'+ schoolId);
      return false;
    }, 
   
  });

Template.survey9.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/survey_sections/'+ schoolId);
      return false;
    }, 
  });

Template.survey10.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/survey_sections/'+ schoolId);
      return false;
    }, 
  });



Template.survey12.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/survey_sections/'+ schoolId);
      return false;
    }, 
  });

Template.survey13.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/survey_sections/'+ schoolId);
      return false;
    }, 
  });

// Template.registerHelper("locations", function () {
//   return ["Cemetery", "Business centre", "Railway Station"];
// });

// Template.registerHelper("setShowCouldBeMoved", function (location, isChecked) {
//   var selections = ["firstIteam"];

//   var previouslySelected = Session.get("showCouldBeMoved");
//   console.log('previously selected: ' + previouslySelected);
//   selections.concat(previouslySelected);

//   console.log("selected: " + selections);
//   if (selections.indexOf(location)){
//       console.log("has location: " + location);
//     if (isChecked) {
//       console.log("location is already checked");
//     } else {
//       console.log("remove location: " + location);
//       selections.remove(location);
//     }
//   } else {
//     console.log("add location: " + location);
//     selections.push(location);
//   }
//   console.log("selections array: " + selections);

//   Session.set("showCouldBeMoved", selections);
// });

// Template.registerHelper("getShowCouldBeMoved", function() {
//   //Session.get("showCouldBeMoved").length > 0;
// });


//NOTE: We need to re initialize the material css for some reason every time a template is rendered. 
//TODO: Use one method for all rendered templates instead of having to define each on ehere
// Template.survey1.rendered = function(){
//   $.material.init();
// };

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
Template.water.rendered = function(){
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
Template.classroom_table.rendered = function(){
   $.material.init(); 
}
Template.lab_table.rendered = function(){
  $.material.init(); 
}
Template.block_table.rendered  = function() {
  $.material.init(); 
}

AutoForm.hooks({
  survey: {
      onSuccess: function(operation, result, template) {  
        alert('School has been updated');
      },
      onError: function(operation, error, template) {
        alert('Could not save the form. Please check all fields are filled in correctly.');

      }
    }
  });



}


