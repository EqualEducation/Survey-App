Template.survey11.events({
  "click .open-modal" : function(e,t) {
    $("#modal_classroom").modal("show");
  },
});

Template.registerHelper('classrooms', function () {
        var versionId = Session.get("selectedSurveyVersionId");
        var classes = Classrooms.find({'version_id' : versionId});
        return classes;
      });

Template.modal_classroom.events({
  "click .btn-save" : function() {
      $('#classrooms1').submit();
      return false;
    }, 
});

Template.modal_classroom_update.events({
  "click .btn-save" : function() {
      $('#classrooms2').submit();
      return false;
    }, 
});

Template.list_classrooms_small.events({
  "click .btn-edit" : function() {
        Session.set('selectedClassroomId',this._id);
        $("#modal_classroom_update").modal("show");
    }, 
     "click .btn-delete" : function() {
        Classrooms.remove({'_id' : this._id});
    }, 
});

Template.list_classrooms_large.events({
  "click .btn-edit" : function() {
        Session.set('selectedClassroomId',this._id);
        $("#modal_classroom_update").modal("show");
    }, 
     "click .btn-delete" : function() {
        Classrooms.remove({'_id' : this._id});
    }, 
});


Template.registerHelper('selectedClassroom',function(){
    var classRoomId = Session.get("selectedClassroomId");

    if (classRoomId) {
      var classroom = Classrooms.findOne({'_id' : classRoomId});
      return classroom;
    }

    return null;
});

AutoForm.addHooks(['classrooms1', 'classrooms2'], {
onSuccess: function(operation, result, template) 
    {   
        $('#modal_classroom').modal('hide')
        $('#modal_classroom_update').modal('hide')
        FlashMessages.sendMessage('Added classroom');
 
    },
    onError: function() 
    {
              FlashMessages.sendError('Error saving school. Please see below for errors');
      }
    });
