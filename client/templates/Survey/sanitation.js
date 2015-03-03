Meteor.subscribe('sanitationblocks');

if (Meteor.isClient) {
	Template.survey7.events({
		  "click .open-modal" : function(e,t) {
	        // e.preventDefault();
	        $("#modal_block").modal("show");
	    },
	    "click .btn-back" : function() {
	      var schoolId = Session.get("selectedSchoolId");
	      Router.go('/survey/survey_sections/'+ schoolId);
	      return false;
	    }, 
	    "click .btn-modal" : function() {
			Meteor.render(Template.modal_block);	      
	    }, 
	    "input [name='totalNumberOfToiletBlocks']" : function(event, template) {
	    	var numberOfToiletBlocks = event.target.value;
	    	console.log(numberOfToiletBlocks);
	    	Session.set("numberOfToiletBlocks", numberOfToiletBlocks);
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

	Template.survey7.rendered = function() {
		$.material.init();
	};

	Template.list_blocks.helpers({
    blocks: function () {
    	console.log("Searching for blocks");
    	var blocks = SanitationBlocks.find({});
    	console.log(blocks.count());
    	return blocks;
    }
  });

	AutoForm.setDefaultTemplate('bootstrap3-horizontal');

	AutoForm.hooks({
	  blocks: {
	      onSuccess: function(operation, result, template) {  
	        alert('School has been updated');
	      },
	      onError: function(operation, error, template) {
	        alert('Could not save the form. Please check all fields are filled in correctly' + error);

	      }
	    }
	  });
}