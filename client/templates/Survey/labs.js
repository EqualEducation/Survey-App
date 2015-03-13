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
      $('#labs1').submit();
      return false;
    }, 
});

Template.modal_lab_update.events({
  "click .btn-save" : function() {
      didTapSubmit = true;
      $('#labs2').submit();
      return false;
    }, 
});

Template.lab.events({
  "click .btn-edit" : function() {
        Session.set('selectedLabId',this._id);
        $("#modal_lab_update").modal("show");
    }, 
     "click .btn-delete" : function() {
        IndividualLabs.remove({'_id' : this._id});
    }, 
});

Template.list_labs.helpers({
      labs: function () {
        var schoolId = Session.get("selectedSchoolId");
        var labs = IndividualLabs.find({'school_id' : schoolId});
        return labs;
      }
    });


Template.registerHelper('selectedLab',function(){
    var labId = Session.get("selectedLabId");
    console.log('labid');
    console.log(labId);
    if (labId) {
      var lab = IndividualLabs.findOne({'_id' : labId});
      return lab;
    }

    return null;
});



AutoForm.addHooks(['labs1', 'labs2'], {
onSuccess: function(operation, result, template) 
    {  
      console.log("Succes result: " + result);
      console.log("Success operation: " + operation);   

      // if (didTapSubmit) 
      // {
      //   alert('Added lab');
      //   didTapSubmit = false;



      // }  
        $('#modal_lab').modal('hide')
        $('#modal_lab_update').modal('hide')
 
    },
    onError: function() 
    {
      // if (didTapSubmit) 
      // {
        alert('Error saving lab');
        // didTapSubmit = false;
      // 
      }
    });