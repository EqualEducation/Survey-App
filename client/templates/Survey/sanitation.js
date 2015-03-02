if (Meteor.isClient) {
	Template.survey7.events({
	    "click .btn-back" : function() {
	      var schoolId = Session.get("selectedSchoolId");
	      Router.go('/survey/survey_sections/'+ schoolId);
	      return false;
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

	Template.registerHelper('getNumberOfToiletBlocks',function(){
		 var count = Session.get("numberOfToiletBlocks");
		 var out = [];

		 for(var i=1, l=count; i<=l; i++) {
		    out.push(i);
		  }

		  console.log(out.length);
		  return out;
	});


	Template.survey7.rendered = function() {
		$.material.init();

 		$('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');


        var numberOfToiletBlocks = $([name='totalNumberOfToiletBlocks']);
	   	console.log(numberOfToiletBlocks);
	    Session.set("numberOfToiletBlocks", numberOfToiletBlocks);
	};

	AutoForm.setDefaultTemplate('bootstrap3-horizontal');


}