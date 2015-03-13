Template.survey7.events({
	"click .btn-back" : function() {
		var schoolId = Session.get("selectedSchoolId");
	    Router.go('/survey/'+ schoolId);
	    return false;
	}, 
	"click .open-modal" : function(e,t) {
    AutoForm.resetForm('blocks1');
		$("#modal_block").modal("show");

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

Template.modal_block.events({
  "click .btn-save" : function() {
      $('#blocks1').submit();
      return false;
    }, 
});

Template.modal_block_update.events({
  "click .btn-save" : function() {
      $('#blocks2').submit();
      return false;
    }, 
});

Template.block.events({
  "click .btn-edit" : function() {
        Session.set('selectedBlockId',this._id);
        $("#modal_block_update").modal("show");
    }, 
     "click .btn-delete" : function() {
        SanitationBlocks.remove({'_id' : this._id});
    }, 
});

Template.registerHelper('selectedBlock',function(){
    var blockId = Session.get("selectedBlockId");

    if (blockId) {
      var block = SanitationBlocks.findOne({'_id' : blockId});
      return block;
    }

    return null;
});

AutoForm.addHooks(['blocks1', 'blocks2'], {
onSuccess: function(operation, result, template) 
    {  
      console.log("Succes result: " + result);
      console.log("Success operation: " + operation);   
        $('#modal_block').modal('hide')
        $('#modal_block_update').modal('hide')
 
    },
    onError: function() 
    {
        alert('Error saving block');
      }
    });
