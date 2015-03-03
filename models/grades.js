Grades = new Mongo.Collection("grades");

GradeDetailsSchema = new SimpleSchema({
  numberOfMaleStudents: {
    optional: true,
    type: Number,
    label: "Number of male students",
    autoform: {
      type: "text"
    }
  },
  numberOfFemaleStudents: {
    optional: true,
    type: Number,
    label: "Number of female students",
    autoform: {
      type: "text"
    }
  },
  totalNumberOfStudents: {
    optional: true,
    type: Number,
    label: "Total number of students",
    autoform: {
      type: "text"
    }
  },
  totalNumberOfTeachers: {
    optional: true,
    type: Number,
    label: "Total number of teachers",
    autoform: {
      type: "text"
    }
  },
  totalNumberOfClassRooms: {
    optional: true,
    type: Number,
    label: "Total number of classrooms",
    autoform: {
      type: "text"
    }
  },
  comment: {
    type: String,
    optional: true,
    label: "Comment"

  }
});

GradesSchema = new SimpleSchema({
  totalTeachersInSchool: {
    type: Number,
    label: "Total number of teachers in the school",
    optional: true,
    autoform: {
      type: "text"
    }
  },
  gradeR: {
    type: GradeDetailsSchema,
    label: "Grade R",
    optional: true
  },
  grade1: {
    type: GradeDetailsSchema,
    label: "Grade 1",
    optional: true
  },
  grade2: {
    type: GradeDetailsSchema,
    label: "Grade 2",
    optional: true
  },
  grade3: {
    type: GradeDetailsSchema,
    label: "Grade 3",
    optional: true
  },
  grade4: {
    type: GradeDetailsSchema,
    label: "Grade 4",
    optional: true
  },
  grade5: {
    type: GradeDetailsSchema,
    label: "Grade 5",
    optional: true
  },
  grade6: {
    type: GradeDetailsSchema,
    label: "Grade 6" ,
    optional: true
  },
  grade7: {
    type: GradeDetailsSchema,
    label: "Grade 7" ,
    optional: true
     },
  grade8: {
    type: GradeDetailsSchema,
    label: "Grade 8" ,
    optional: true
     },
  grade9: {
    type: GradeDetailsSchema,
    label: "Grade 9",
    optional: true 
     },
  grade10: {
    type: GradeDetailsSchema,
    label: "Grade 10",
    optional: true
     },
  grade11: {
    type: GradeDetailsSchema,
    label: "Grade 11",
    optional: true
     },
  grade12: {
    type: GradeDetailsSchema,
    label: "Grade 12",
    optional: true
     },
     school_id: {
    type: String,
    defaultValue: function(){ 
      return Session.get('selectedSchoolId');
    },
    autoform: {
      type: "hidden",
      label: false
    },
  }
});

Grades.attachSchema(GradesSchema);