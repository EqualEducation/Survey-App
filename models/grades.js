SimpleSchema.messages({
  required: "[label] is required",
  minString: "[label] must be at least [min] characters",
  maxString: "[label] cannot exceed [max] characters",
  minNumber: "[label] must be at least [min]",
  maxNumber: "[label] cannot exceed [max]",
  minDate: "[label] must be on or after [min]",
  maxDate: "[label] cannot be after [max]",
  minCount: "You must specify at least [minCount] values",
  maxCount: "You cannot specify more than [maxCount] values",
  noDecimal: "[label] must be an integer",
  notAllowed: "[value] is not an allowed value",
  expectedString: "[label] must be a string",
  expectedNumber: "[label] must be a number",
  expectedBoolean: "[label] must be a boolean",
  expectedArray: "[label] must be an array",
  expectedObject: "[label] must be an object",
  expectedConstructor: "[label] must be a [type]",
  regEx: [
    {msg: "[label] is incorrect"},
    {exp: SimpleSchema.RegEx.Email, msg: "[label] must be a valid e-mail address"},
    {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] must be a valid e-mail address"},
    {exp: SimpleSchema.RegEx.Domain, msg: "[label] must be a valid domain"},
    {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] must be a valid domain"},
    {exp: SimpleSchema.RegEx.IP, msg: "[label] must be a valid IPv4 or IPv6 address"},
    {exp: SimpleSchema.RegEx.IPv4, msg: "[label] must be a valid IPv4 address"},
    {exp: SimpleSchema.RegEx.IPv6, msg: "[label] must be a valid IPv6 address"},
    {exp: SimpleSchema.RegEx.Url, msg: "[label] must be a valid URL"},
    {exp: SimpleSchema.RegEx.Id, msg: "[label] must be a valid alphanumeric ID"}
  ],
  keyNotInSchema: "[key] is not allowed by the schema"
});

Grades = new Mongo.Collection("grades");

GradeDetailsSchema = new SimpleSchema({
  numberOfMaleStudents: {
    optional: true,
    type: String,
    label: "Number of male students",
    regEx: /^[0-9]/,
    autoform: {
      rows: 1,
    },
  },
  numberOfFemaleStudents: {
    optional: true,
    type: String,
    label: "Number of female students",
    regEx: /^[0-9]/,
    autoform: {
      rows: 1,
    },
  },
  totalNumberOfStudents: {
    optional: true,
    type: String,
    label: "Total number of students",
    regEx: /^[0-9]/,
    autoform: {
      rows: 1,
    },
  },
  totalNumberOfTeachers: {
    optional: true,
    type: String,
    label: "Total number of teachers",
    regEx: /^[0-9]/,
    autoform: {
      rows: 1,
    },
  },
  totalNumberOfClassRooms: {
    optional: true,
    type: String,
    label: "Total number of classrooms",
    regEx: /^[0-9]/,
    autoform: {
      rows: 1,
    },
  },
  comment: {
    type: String,
    optional: true,
    label: "Comment",
    autoform: {
      rows: 3,
    },

  }
});

GradesSchema = new SimpleSchema({
  totalTeachersInSchool: {
    type: String,
    label: "Total number of teachers in the school",
    optional: true,
    regEx: /^[0-9]/,
    autoform: {
      rows: 1,
    },
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
      return Session.get('selectedSurveyVersionId');
    },
    autoform: {
      type: "hidden",
      label: false
    },  
  },
});

Grades.attachSchema(GradesSchema);