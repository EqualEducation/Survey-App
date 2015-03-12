Template.survey7.events({
		  "click .open-modal" : function(e,t) {
	        // e.preventDefault();
	        $("#modal_block").modal("show");
	    },
	    "click .btn-back" : function() {
	      var schoolId = Session.get("selectedSchoolId");
	      Router.go('/survey/'+ schoolId);
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


	AutoForm.hooks({
	  blocks: {
	      onSuccess: function(operation, result, template) {  
	        console.log("Success result: " + result);
	        console.log("Success operation: " + operation);
	        alert('Block has been added');
	      },
	      onError: function(operation, error, template) {
	        // alert('Could not save the block. Please check all fields are filled in correctly. ' + error);

	      },
	      onSubmit : function(doc) {
	        console.log("Submit: " + doc);
	        // doc.groupId = /*Get the group id*/;
	        // this.done(); //We've finished
	        return true; //Let autoForm do his default job now
	      }
	    }
	});
