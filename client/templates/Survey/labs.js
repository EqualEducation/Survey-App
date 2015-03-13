Template.survey5.events({
   
    "click .open-modal" : function(e,t) {
	        // e.preventDefault();
	        $("#modal_lab").modal("show");
	    },
      "click .btn-modal" : function() {
      Meteor.render(Template.modal_lab);        
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

Template.list_labs.helpers({
      labs: function () {
        var schoolId = Session.get("selectedSchoolId");
        var labs = IndividualLabs.find({'school_id' : schoolId});
        return labs;
      }
    });


AutoForm.hooks({
    labs: {
        onSuccess: function(operation, result, template) {  
          console.log("Success result: " + result);
          console.log("Success operation: " + operation);
        },
        onError: function(operation, error, template) {
          // alert('Could not save the classroom. Please check all fields are filled in correctly. ' + error);

        },
        onSubmit : function(doc) {
          // console.log("Submit: " + doc);
          // doc.groupId = /*Get the group id*/;
          // this.done(); //We've finished
          return true; //Let autoForm do his default job now
        }
      }
  });