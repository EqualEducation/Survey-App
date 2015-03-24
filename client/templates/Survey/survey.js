var buttonSaveClicked = false;

SimpleSchema.debug = true;
AutoForm.debug();

Template.survey1.events({
    "click .btn-back" : function() {
      back();
    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey1').submit();
      return false;
    }, 
  
  });

  Template.survey2.events({
    "click .btn-back" : function() {
            back();

    },
  });

Template.survey3.events({
    "click .btn-back" : function() {
            back();

    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey3').submit();
      return false;
    }, 
    
  });

Template.survey4.events({
    "click .btn-back" : function() {
           back();

    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey4').submit();
      return false;
    }, 
    
  });

Template.survey5.events({
    "click .btn-back" : function() {
           back();

    },
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey5').submit();
      return false;
    },  
   
  });

Template.survey7.events({
    "click .btn-back" : function() {
            back();

    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey7').submit();
      return false;
    }, 
  });

Template.survey6.events({
    "click .btn-back" : function() {
          back();

    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey6').submit();
      return false;
    }, 
  });


Template.survey8.events({
      "click .btn-back" : function() {
            back();

    }, 
  });


Template.survey9.events({
    "click .btn-back" : function() {
      back();

    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey9').submit();
      return false;
    }, 
  });

Template.survey10.events({
    "click .btn-back" : function() {
      back();

    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey10').submit();
      return false;
    }, 
  });



Template.survey12.events({
    "click .btn-back" : function() {
      back();

    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey12').submit();
      return false;
    }, 
  });

Template.survey13.events({
    "click .btn-back" : function() {
      back();

    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey13').submit();
      return false;
    }, 
  });

Template.survey14.events({
    "click .btn-back" : function() {
            back();

    }, 
    "click .btn-save" : function() {
      buttonSaveClicked = true;
      $('#survey14').submit();
      return false;
    }, 
  });
//NOTE: We need to re initialize the material css for some reason every time a template is rendered. 
//TODO: Use one method for all rendered templates instead of having to define each on ehere
Template.survey1.rendered = function(){
  renderHelper('survey1');
};

Template.survey3.rendered = function(){
  renderHelper('survey3');
};
Template.survey4.rendered = function(){
  renderHelper('survey4');
};
Template.survey5.rendered = function(){
  renderHelper('survey5');
};
Template.survey6.rendered = function(){
  renderHelper('survey6');
};
Template.survey7.rendered = function(){
  renderHelper('survey7');
};
Template.survey8.rendered = function(){
  renderHelper('survey8');
};
Template.survey9.rendered = function(){
  renderHelper('survey9');
};
Template.survey10.rendered = function(){
  renderHelper('survey10');
};
Template.survey11.rendered = function(){
  renderHelper('survey11');
};
Template.survey12.rendered = function(){
  renderHelper('survey12');
};
Template.survey13.rendered = function(){
  renderHelper('survey13');
};
Template.survey14.rendered = function(){
  renderHelper('survey14');
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
Template.modal_lab_update.rendered = function(){
   $.material.init(); 
}
Template.modal_lab.rendered = function(){
  $.material.init(); 
}
Template.sports_drilldown.rendered = function(){
  $.material.init(); 
}
// Template.block_details.rendered  = function() {
//   $.material.init(); 
// }

function back(){
  var versionId = Session.get("selectedSurveyVersionId");
  var schoolId = Session.get("selectedSchoolId");
  Router.go('/school/' +schoolId +'/version/' + versionId + '/survey/section/select');
}

function renderHelper(survey){
  $.material.init();

  if (Session.get("selected_doc") == null) {
    AutoForm.resetForm(survey);
  } 

    if (survey!='survey8') {
        $('[name = "version_id"]')[0].value = Session.get("selectedSurveyVersionId");
    }
}


AutoForm.addHooks(['survey1', 'survey3', 'survey4', 'survey5', 'survey6', 'survey7', 'survey9', 'survey10', 'survey11', 'survey12', 'survey13', 'survey14'], {
       onSuccess: function(operation, result, template) {  
        console.log("Succes result: " + result);
        console.log("Success operation: " + operation);   
        console.log('Survey');
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





