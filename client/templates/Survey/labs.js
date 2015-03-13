var didTapSubmit = false;

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

Template.modal_lab.events({
  "click .btn-save" : function() {
      didTapSubmit = true;
      $('#labs').submit();
      return false;
    }, 
});

Template.list_labs.helpers({
      labs: function () {
        var schoolId = Session.get("selectedSchoolId");
        var labs = IndividualLabs.find({'school_id' : schoolId});
        return labs;
      }
    });


AutoForm.hooks
({
  labs: 
  {
    onSuccess: function(operation, result, template) 
    {  
      console.log("Succes result: " + result);
      console.log("Success operation: " + operation);   

      if (didTapSubmit) 
      {
        alert('Added lab');
        didTapSubmit = false;

        $('#modal_lab').modal('hide')


      }   
    },
    onError: function() 
    {
      if (didTapSubmit) 
      {
        alert('Error saving lab');
        didTapSubmit = false;
      }
    } 
  }
});