Classrooms = new Mongo.Collection("classroosm");

ClassroomsDrillDownSchema = new SimpleSchema ({
  name: {
    label: "Class name",
    type: String,
    optional: true,
  },
  numberOfStudents: {
    label: "Number of students in classroom",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  totalNumberOfLightFittings: {
    label: "Total number of light fittings in classroom",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  totalNumberOfWorkingLightbulbs: {
    label: "Total number of working lightbulbs in classroom",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  totalNumberOfBrokenLightbulbs: {
    label: "Total number of broken lightbulbs in classroom",
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
  floorCondition: {
    optional: true,
    label: "Describe the condition of the floor",
    type: String,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Good", value: 'Good'},
          {label: "Average", value: 'Average'},
          {label: "Poor", value: 'Poor'},
        ];
      }
    }
  },
  ceilingCondition: {
    optional: true,
    label: "Describe the condition of the ceiling",
    type: String,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Good", value: 'Good'},
          {label: "Average", value: 'Average'},
          {label: "Poor", value: 'Poor'},
        ];
      }
    }
  }
});

ClassroomsSchema = new SimpleSchema ({
    classrooms: {
      type: Array,
      optional: true,
      minCount: 0,
      maxCount: 100
   },
   "classrooms.$": {
      optional: true,
      type: ClassroomsDrillDownSchema
   },
 });

NutritionSchema = new SimpleSchema({
  isInNutritionProgramme: {
    label: "Is the school in the National School Nutrition Programme?",
    type: Boolean,
      optional: true,
      autoform: {
           type: "boolean-radios",
           trueLabel: "Yes",
           falseLabel: "No",
    }
  },
  nutritionProgram: {
    optional: true,
    label: "Which of the following describes the school’s nutrition program?",
    type: String,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Works well", value: 'Works well'},
          {label: "Sometimes or rarely works well ", value: 'Sometimes or rarely works well '},
          {label: "No nutrition program but school needs one", value: 'No nutrition program but school needs one'},
          {label: "No nutrition program necessary", value: 'No nutrition program necessary'},
        ];
      }
    }
  },
  hasNutritionCentre: {
    label: "Does the school have a nutrition centre?",
    type: Boolean,
      optional: true,
      autoform: {
           type: "boolean-radios",
           trueLabel: "Yes",
           falseLabel: "No",
    }
  },
  comment: {
    type: String,
    optional: true,
    label: "Comment",
    autoform: {
      rows: 4,
    }
  }
});

Classrooms.attachSchema(ClassroomsSchema);