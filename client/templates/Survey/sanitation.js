Template.survey7.events({
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

Template.registerHelper('blocks', function () {
	    	var versionId = Session.get("selectedSurveyVersionId");
	    	var blocks = SanitationBlocks.find({'version_id' : versionId});
	    	return blocks;
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

Template.list_blocks_small.events({
  "click .btn-edit" : function() {
        Session.set('selectedBlockId',this._id);
        $("#modal_block_update").modal("show");
    }, 
     "click .btn-delete" : function() {
        SanitationBlocks.remove({'_id' : this._id});
    }, 
});

Template.list_blocks_large.events({
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
        $('#modal_block').modal('hide')
        $('#modal_block_update').modal('hide')
 
    },
    onError: function() 
    {
              FlashMessages.sendError('Error saving school. Please see below for errors');
      }
    });
