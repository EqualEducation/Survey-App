Meteor.subscribe('classrooms');

Template.survey11.events({
    "click .btn-back" : function() {
      var schoolId = Session.get("selectedSchoolId");
      Router.go('/survey/survey_sections/'+ schoolId);
      return false;
    }, 
    "click .open-modal" : function(e,t) {
	        // e.preventDefault();
	        $("#modal_classroom").modal("show");
	    },
  });

Template.list_classrooms.helpers({
      classrooms: function () {
        var schoolId = Session.get("selectedSchoolId");
        var blocks = Classrooms.find({'school_id' : schoolId});
        return blocks;
      }
    });

AutoForm.hooks({
    classrooms: {
        onSuccess: function(operation, result, template) {  
          console.log("Success result: " + result);
          console.log("Success operation: " + operation);
          alert('Classroom has been added. You can now add another classroom or click close.');
        },
        onError: function(operation, error, template) {
          alert('Could not save the classroom. Please check all fields are filled in correctly. ' + error);

        },
        onSubmit : function(doc) {
          console.log("Submit: " + doc);
          // doc.groupId = /*Get the group id*/;
          // this.done(); //We've finished
          return true; //Let autoForm do his default job now
        }
      }
  });