Classrooms = new Mongo.Collection("classrooms");

ClassroomsSchema = new SimpleSchema ({
   name: {
    label: "Class name",
    type: String,
    optional: true,
    autoform: {
      rows: 1,
    },
  },
  numberOfStudents: {
    label: "Number of students in classroom",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  totalNumberOfWindows: {
    label: "Total number of windows in classroom",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  totalNumberOfBrokenWindows: {
    label: "Total number of broken windows in classroom",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  teachHasDesk: {
    label: "Does the teacher have their own desk?",
    type: Boolean,
      optional: true,
      autoform: {
           type: "boolean-radios",
           trueLabel: "Yes",
           falseLabel: "No",
    }
  },
  teacherHasChair: {
    label: "Does the teacher have their own chair?",
    type: Boolean,
      optional: true,
      autoform: {
           type: "boolean-radios",
           trueLabel: "Yes",
           falseLabel: "No",
    }
  },
  totalNumberOfDesks: {
    label: "Total number of desks in classroom (including teacher's)",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  totalNumberOfBrokenDesks: {
    label: "Total number of broken desks in classroom (including teacher's)",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  totalNumberOfChairs: {
    label: "Total number of chairs in classroom (including teacher's)",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  totalNumberOfBrokenChairs: {
    label: "Total number of broken chairs in classroom (including teacher's)",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  howIsClassroomUsed : {
    optional: true,
    label: "Is the classroom also used in the following ways",
    type: [String],
    autoform: {
      type: "select-checkbox",
      options: function () {
        return [
          {label: "More than one grade uses it at a time", value: 'More than one grade uses it at a time'},
          {label: "More than one teacher uses it at a time", value: 'More than one teacher uses it at a time'},
          {label: "Teachers use the class as office space", value: 'Teachers use the class as office space'},
          {label: "Cooking takes place in the class", value: 'Cooking takes place in the class'},
        ];
      }
    }
  },
  ceilingOrFloorHasHole: {
    optional: true,
    label: "Is there a hole in the celing or floor",
    type: Boolean,
      optional: true,
      autoform: {
           type: "boolean-radios",
           trueLabel: "Yes",
           falseLabel: "No",
    },
  },
  comment: {
    type: String,
    optional: true,
    label: "Comment",
    autoform: {
      rows: 4,
    },
  },
    school_id: {
      type: String,
      defaultValue: function(){ 
        console.log("School id: " + Session.get('selectedSchoolId'));
        return Session.get('selectedSchoolId');
      },
      autoform: {
        type: "hidden",
        label: false
      },
    }
 });



Classrooms.attachSchema(ClassroomsSchema);