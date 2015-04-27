Classrooms = new Mongo.Collection("classrooms");

ClassroomsSchema = new SimpleSchema ({
   name: {
    label: "Class name",
    type: String,
    optional: true,
  },
  numberOfStudents: {
    label: "Number of students in classroom",
    type: String,
    optional: true,
    regEx: /^[0-9]*$/,

  },
  totalNumberOfWindows: {
    label: "Total number of windows in classroom",
    type: String,
    optional: true,
    regEx: /^[0-9]*$/,

  },
  totalNumberOfBrokenWindows: {
    label: "Total number of broken windows in classroom",
    type: String,
    optional: true,
    regEx: /^[0-9]*$/,

  },
  teachHasDesk: {
    label: "Does the teacher have their own desk?",
    type: String,
      optional: true,
      autoform: {
           type: "select-radio",
           options: function () {
            return [
              {label: "Yes", value: 'Yes'},
              {label: "No", value: 'No'},
              {label: "Unsure", value: 'Unsure'}
        ];
      }

    }
  },
  teacherHasChair: {
    label: "Does the teacher have their own chair?",
    type: String,
      optional: true,
      autoform: {
           type: "select-radio",
           options: function () {
            return [
              {label: "Yes", value: 'Yes'},
              {label: "No", value: 'No'},
              {label: "Unsure", value: 'Unsure'}
        ];
      }

    }
  },
  totalNumberOfDesks: {
    label: "Total number of desks in classroom (including teacher's)",
    type: String,
    optional: true,
    regEx: /^[0-9]*$/,

  },
  totalNumberOfBrokenDesks: {
    label: "Total number of broken desks in classroom (including teacher's)",
    type: String,
    optional: true,
    regEx: /^[0-9]*$/,

  },
  totalNumberOfChairs: {
    label: "Total number of chairs in classroom (including teacher's)",
    type: String,
    optional: true,
    regEx: /^[0-9]*$/,

  },
  totalNumberOfBrokenChairs: {
    label: "Total number of broken chairs in classroom (including teacher's)",
    type: String,
    optional: true,
    regEx: /^[0-9]*$/,
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
    label: "Is there a hole in the ceiling or floor?",
    type: String,
      optional: true,
      autoform: {
           type: "select-radio",
           options: function () {
            return [
              {label: "Yes", value: 'Yes'},
              {label: "No", value: 'No'},
              {label: "Unsure", value: 'Unsure'}
        ];
      }

    }
  },
  comment: {
    type: String,
    optional: true,
    label: "Comment",
    autoform: {
      rows: 4,
    },
  },
    version_id: {
      type: String,
      defaultValue: function(){ 
        return Session.get('selectedSurveyVersionId');
      },
      autoform: {
        type: "hidden",
        label: false
      },
    },
 });



Classrooms.attachSchema(ClassroomsSchema);