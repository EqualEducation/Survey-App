Meteor.subscribe('sanitationblocks');
Meteor.subscribe('sanitation');

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
	    	var schoolId = Session.get("selectedSchoolId");
	    	var blocks = SanitationBlocks.find({'school_id' : schoolId});
	    	return blocks;
	    }
  	});

  	Template.more_info.helpers({
  		selectedSanitationDoc: function () {
  			var schoolId = Session.get("selectedSchoolId");
 	    	var sanitation = Sanitation.find({'school_id' : schoolId});
 	    	return sanitation;
  		}

  	});


	AutoForm.setDefaultTemplate('bootstrap3-horizontal');

	AutoForm.hooks({
	  blocks: {
	      onSuccess: function(operation, result, template) {  
	        alert('Block has been added');
	      },
	      onError: function(operation, error, template) {
	        alert('Could not save the block. Please check all fields are filled in correctly. ' + error);

	      }
	    }
	  });
}