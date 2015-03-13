Template.survey11.events({
  "click .btn-back" : function() {
    var schoolId = Session.get("selectedSchoolId");
    Router.go('/survey/'+ schoolId);
    return false;
  }, 
  "click .open-modal" : function(e,t) {
    $("#modal_classroom").modal("show");
  },
});

Template.modal_classroom.events({
  "click .btn-save" : function() {
      console.log('button clicked');
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

Template.classroom.events({
  "click .btn-edit" : function() {
        Session.set('selectedClassroomId',this._id);
        $("#modal_classroom_update").modal("show");
    }, 
     "click .btn-delete" : function() {
        Classrooms.remove({'_id' : this._id});
    }, 
});

Template.list_classrooms.helpers({
      classrooms: function () {
        var schoolId = Session.get("selectedSchoolId");
        var blocks = Classrooms.find({'school_id' : schoolId});
        return blocks;
      }
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
      console.log("Succes result: " + result);
      console.log("Success operation: " + operation);   
        $('#modal_classroom').modal('hide')
        $('#modal_classroom_update').modal('hide')
 
    },
    onError: function() 
    {
        alert('Error saving classroom');
      }
    });