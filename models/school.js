SchoolDetailsSchema = new SimpleSchema({
  INSTITUTION_NAME: {
    type: String,
    label: "Name",
    optional: false
  },
  DISTRICT_NAME: {
    type: String,
    label: "District",
    optional: true
  },
  TELEPHONE_NO: {
    type: String,
    label: "Telephone number",
    optional: true,  
    regEx: /^[0-9]{10}$/
  },
  STREET_NO: {
    type: String,
    label: "Street number",
    optional: true,
    regEx: /^[0-9]{0,5}$/
  },
  STREET_NAME: {
    type: String,
    label: "Street name",
    optional: true
  },
  TOWNSHIP_OR_VILLAGE_NAME: {
    type: String,
    label: "Township or Village Name",
    optional: true
  },
  SUBURB: {
    type: String,
    label: "Suburb",
    optional: true
  },
  TOWN_OR_CITY: {
    type: String,
    label: "Town or City",
    optional: true
  },
  POSTAL_CODE: {
    type: String,
    label: "Postal Code",
    optional: true,
    regEx: /^[0-9]{4}$/
  },
  PROVINCE_NAME: {
    type: String,
    label: "Province",
    optional: false,
    autoform: 
    {
      type: "select",
      options: function () 
      {
        return [
        {label: "The Eastern Cape", value: 'EASTERN_CAPE'},
        {label: "The Free State", value: 'FREE_STATE'},
        {label: "Gauteng", value: 'GAUTENG'},
        {label: "KwaZulu-Natal", value: 'KZN'},
        {label: "Limpopo", value: 'LIMPOPO'},
        {label: "Mpumalanga", value: 'MPUMALANGA'},
        {label: "The Northern Cape", value: 'NORTHERN_CAPE'},
        {label: "North West", value: 'NORTH_WEST'},
        {label: "The Western Cape", value: 'WESTERN_CAPE'}
        ];
      }
    }
  },
  NEIMS_NUMBER: {
    type: String,
    label: "NEIMS number",
    optional: false,
    regEx: /^[0-9]{9}$/
  },
  CLASSIFICATION: {
    type: String,
    optional: false,
    label: "Is this school a Primary or Secondary School?",
    autoform: 
    {
      type: "select",
      options: function () 
      {
        return [
        {label: "Primary (Grades R to 7)", value: 'Primary'},
        {label: "Secondary (Grades 8 to 12)", value: 'Secondary'},
        ];
      }
    }
  },
  principalCooperative: {
    type: String,
    optional: true,
    label: "Is the principal eager to work with Equal Education?",
    autoform: 
    {
      type: "select",
      options: function () 
      {
        return [
      {label: "Yes", value: 'yes'},
      {label: "No", value: 'no'},
      {label: "Unsure", value: 'Unsure'},
        ];
      }
    }
  },
});



ContactDetailsSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Contact Name",
    optional: true,
  },
  phoneNumber: {
    type: String,
    optional: true,
    label: "Contact Number",
    regEx: /^((?:\+27|27)|0)(=|72|82|73|83|74|84|21)(\d{7})$/

  },
  email: {
    type: String,
    label: "Contact Email",
    optional: true,

  },
  comment: {
    type: String,
    optional: true,
    label: "Comment",
    autoform: {
      rows: 4,
    },
  }
});

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
});

SportsFieldDrillDownSchema = new SimpleSchema ({
  condition: {
   label: "What is the condition of this place used for this sport?",
    optional: true,
    type: String,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Good Condition", value: 'Good Condition'},
          {label: "Average Condition", value: 'Average Condition'},
          {label: "Poor Condition", value: 'Poor Condition'}
        ];
      }
    }
  },
  location: {
    optional: true,
    type: String,
    label: "Which of the following describes the location of the place used for this sport?",
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "School’s Own", value: 'School’s Own'},
          {label: "Community Owned", value: 'Community Owned'},
          {label: "Other School’s", value: 'Other School’s'}
        ];
      }
    }
  }
});

SportsFieldSchema = new SimpleSchema({
  numberOfSportsFields: {
    optional: true,
    type: Number,
    label: "Total Number of Sports Fields/Areas",
    autoform: {
      type: "text"
    }
  },
  availableSports: {
    optional: true,
    type: [String],
    label: "Which of the following sports are available at your school? (Tick all that apply)",
    autoform: 
    {
      type: "select-checkbox",
      options: function () 
      {
        return [
      {label: "Netball Court", value: "Netball Court"},
      {label: "Basketball Court", value: "Basketball Court"},
      {label: "Tennis Court", value: "Tennis Court"},
      {label: "Cricket Pitch", value: 'Cricket Pitch'},
      {label: "Soccer Field", value: 'Soccer Field'},
      {label: "Rugby Field", value: 'Rugby Field'},
      {label: "Swimming Pool", value: 'Swimming Pool'},
      {label: "Other", value: 'Other'},
        ];
      }
    }
  },
  availableSportsOtherDescription: {
    optional: true,
    type: String,
    label: "Please describe other available sports at your school",
  },
  otherDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "All other fields/courts"
  },
  netballDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Netball Court Details"
  },
  basketballDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Basketball Court Details"
  },
  tennisDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Tennis Court Details"
  },
  cricketDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Cricket Pitch Details"
  },
  soccerDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Soccer Field Details"
  },
  rugbyDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Rugby Field Details"
  },
  swimmingDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Swimming Pool Details"
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



LibrarySchema = new SimpleSchema({
  hasLibrary: {
    optional: true,
    type: String,
    label: "Does your school have a library or media center?",
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "No library", value: 'No library'},
          {label: "Yes, library only serves school", value: 'Yes, Library only serves school'},
          {label: "Yes, library is shared with other schools", value: 'Yes, Library is shared with other schools'}
        ];
      }
    }
  },
  librarians: {
    optional: true,
    type: [String],
    label: "Does the school have (please tick all that apply)",
    autoform: {
      type: "select-checkbox",
      options: function() {
        return [
        {label: "Dedicated librarian", value: 'Dedicated librarian'},
        {label: "Teacher assigned as a librarian", value: 'Teacher assigned as a librarian'},
        {label: "No librarian", value: 'No librarian'},
        ];
      }
    }
  },
  hasComputerTracking: {
    label: "Does the library have a computer to track book lending?",
    type: Boolean,
    optional: true,
    autoform: {
         type: "boolean-radios",
         trueLabel: "Yes",
         falseLabel: "No",
      }
    },
    hasComputerForGeneralUse: {
    label: "Does the library have other computers for general use?",
    type: Boolean,
    optional: true,
    autoform: {
         type: "boolean-radios",
         trueLabel: "Yes",
         falseLabel: "No",
      }
    },
    totalNumberOfComputers: {
      label: "Total number of computers",
      type: Number,
      optional: true,
      autoform: {
        type: "text"
      }
    },
    totalNumberOfComputersThatConnectToTheInternet: {
      label: "Total number of computers that connect to the internet",
      type: Number,
      optional: true,
      autoform: {
        type: "text"
      }
    },
    hasBooks: {
    label: "Does the library have books?",
    type: Boolean,
    optional: true,
    autoform: {
         type: "boolean-radios",
         trueLabel: "Yes",
         falseLabel: "No",
      }
    },
    hasFictionSection: {
      label: "Does the library have fiction (stories, novels etc)?",
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

ScienceLabDrillDownSchema = new SimpleSchema({
  labCondition:{
    label: "What is the condition of the lab?",
    optional: true,
    type: String,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Good Condition", value: 'Good Condition'},
          {label: "Average Condition", value: 'Average Condition'},
          {label: "Poor Condition", value: 'Poor Condition'}
        ];
      }
    }
  },
  hasNecessaryEquipment: {
    label: "Does the lab have the equipment necessary?",
    type: Boolean,
      optional: true,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
      }
  },
  hasSafeStorage: {
    label: "Is there a safe and lockable storage space for lab equipment?",
    type: Boolean,
      optional: true,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
      }
  }

});

ScienceLabSchema = new SimpleSchema({
  hasLab: {
    label: "Does your school have a science laboratory?",
    type: Boolean,
      optional: true,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
      }
  },
  numberOfLabs: {
    label: "How many labs does the school have?",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  drillDown: {
    type: ScienceLabDrillDownSchema,
    optional: true,
    label: "More information",
  },
  comment: {
    type: String,
    optional: true,
    label: "Comment"
  }
});

SecuritySchema = new SimpleSchema({
  safetyLevel: {
    optional: true,
    type: String,
    label: "How safe do you consider your school?",
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Usually safe", value: 'Usually safe'},
          {label: "Sometimes safe", value: 'Sometimes safe'},
          {label: "Usually unsafe", value: 'Usually unsafe'}
        ];
      }
    }
  },
  hasFence: {
   label: "Is there an appropriate fence around the school, including around all sports fields and facilitities?",
    optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
      }
  },
  fenceHasHoles: {
   label: "Are there any holes or gaps in the fence?",
    optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
      }
  },
  fenceIsCorrectHeight: {
   label: "Is the fence, in all places, at least 1.8 metres high?",
    optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
      }
  },
  conditionOfFence: {
   label: "What is the condition of the fence or wall around your school?",
    optional: true,
    type: String,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Excellent (no repairs needed)", value: 'Excellent (no repairs needed)'},
          {label: "Average (no major issues at present)", value: 'Average (no major issues at present)'},
          {label: "Needs urgent repair (e.g. holes, breaks)", value: 'Needs urgent repair (e.g. holes, breaks)'}
        ];
      }
    }
  },
  hasBurglarBars: {
    label: "Are there burglar bars on the windows on the ground floors?",
   optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
      }
  },
  hasSecurityGaurd: {
    label: "Is there a security gaurd controlling access at the gate?",
    optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
      }
  },
  comment: {
    type: String,
    optional: true,
    label: "Comment"

  }
});

SanitationDrillDownSchema = new SimpleSchema({
  blockName: {
    label: "Block Name",
    type: String,
    optional: true,
  },
  gender: {
    label: "Please select",
    optional: true,
    type: String,
    autoform: {
      type: "select-radio",
      options: function () {
        return [
          {label: "Male", value: 'Male'},
          {label: "Female", value: 'Female'},
          {label: "Combined", value: 'Combined'}
        ];
      }
    }
  },
  teacherOrStudent: {
    label: "Please select",
    optional: true,
    type: String,
    autoform: {
      type: "select-radio",
      options: function () {
        return [
          {label: "Teacher", value: 'Teacher'},
          {label: "Student", value: 'Student'},
        ];
      }
    }
  },
  numberOfWorkingToilets: {
    label: "Number of working toilets",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  numberOfBrokenToilets: {
    label: "Number of non-working toilets",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  numberOfWorkingTaps: {
    label: "Number of working taps",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  numberOfBrokenTaps: {
    label: "Number of non-working taps",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  hasSoap: {
    label: "Is there soap?",
   optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
      }
  },
  hasSanitaryBin: {

    label: "Are there sanitary bins?",
   optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
      }
  },
  hasToiletPaper: {
    label: "Is there toilet paper?",
   optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
      }
  },
  condition: {
    label: "Please describe the condition of the block",
    optional: true,
    type: String,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Good", value: 'Good'},
          {label: "Average", value: 'Average'},
          {label: "Poor", value: 'Poor'}
        ];
      }
    }
  },
  typeOfToilet: {
    label: "Please describe the type of toilet",
    optional: true,
    type: String,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Flush", value: 'Flush'},
          {label: "Pit", value: 'Pit'},
          {label: "VIP", value: 'VIP'},
          {label: "Composting", value: 'Composting'},
          {label: "Bucket", value: 'Bucket'},
        ];
      }
    }
  },
});


SanitationSchema = new SimpleSchema({
  accessToSoap: {
    optional: true,
    type: String,
    label: "How do students access soap?",
    autoform: {
      optional: true,
      type: "select",
      options: function () {
        return [
          {label: "No access", value: 'No access'},
          {label: "Ask a teacher or administrator", value: 'Ask a teacher or administrator'},
          {label: "Soap is at the sink", value: 'Soap is at the sink'}
        ];
      }
    }
  },
   accessToToiletPaper: {
    optional: true,
    type: String,
    label: "How do students access toilet paper?",
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "No access", value: 'No access'},
          {label: "Ask a teacher or administrator", value: 'Ask a teacher or administrator'},
          {label: "Toilet paper is in the stall", value: 'Toilet paper is in the stall'}
        ];
      }
    }
  },
  accessToSanitaryPads: {
      optional: true,
    type: String,
    label: "How do students access sanitary pads?",
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "No access", value: 'No access'},
          {label: "Ask a teacher or administrator", value: 'Ask a teacher or administrator'},
          {label: "Sanitary pads are in the stall", value: 'Sanitary pads are in the stall'}
        ];
      }
    }
  },
  totalNumberOfToiletBlocks: {
    optional: true,
    type: Number,
    label: "Total number of toilet blocks",
    autoform: {
      type: "text"
    }
  },
 totalNumberOfToiletBlockTaps: {
    optional: true,
    type: Number,
    label: "Total number of taps outside toilet blocks",
    autoform: {
      type: "text"
    }
  },
  totalNumberOfWorkingTaps: {
    optional: true,
    type: Number,
    label: "Total number of working taps",
    autoform: {
      type: "text"
    }
  },
  disabledToilets: {
  label: "How many toilets were there that were big enough for a wheelchair?",
   optional: true,
    type: String,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "0", value: 'zero'},
          {label: "1", value: 'one'},
          {label: "2", value: 'two'},
          {label: "3 or more", value: '3 or more'}
        ];
      }
    }
},
waterSupply: {
    optional: true,
    type: [String],
    label: "How is water supplied at the school (tick all that apply)?",
    autoform: 
    {
      type: "select-checkbox",
      options: function () 
      {
        return [
      {label: "Municipal water supply", value: "Municipal water supply"},
      {label: "Rain water", value: "Rain water"},
      {label: "Mobile tankers (jojo tank)", value: "Mobile tankers (jojo tank)"},
      {label: "Borehole", value: "Borehole"},
      {label: "Local dam or reservoir", value: "Local dam or reservoir"},
      {label: "Unsure", value: "Unsure"},
      {label: "Other", value: "Other"},

        ];
      }
    }
  },
  waterSupplyCondition: {
    optional: true,
    type: String,
    label: "How would you describe the water supply at the school?",
    autoform: 
    {
      type: "select",
      options: function () 
      {
        return [
      {label: "There is no water supply", value: "There is no water supply"},
      {label: "Sometimes there is water", value: "Sometimes there is water"},
      {label: "There is a regular water supply", value: "There is a regular water supply"},
      {label: "Unsure", value: "Unsure"},
        ];
      }
    }
  },
  isWaterDrinkable: {
    label: "Is the water supply sufficient for drinking?",
   optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
      }
  },
  isWaterEnoughForFoodPreparation: {
    label: "If there are people preparing food on school grounds, is there enough water for food preparation?",
   optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
      }
  },
  isWaterEnoughForHygiene: {
    label: "Is there enough for water for personal hygiene?",
   optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
      }
  },
  // blockDrillDown: {
  //   label: "Block",
  //   type: SanitationDrillDownSchema,
  //   optional: true,
  // },
  blocks: {
      type: Array,
      optional: true,
      minCount: 0,
      maxCount: 100
   },
   "blocks.$": {
      type: SanitationDrillDownSchema
   },
 //  upgradesPerformed: {
 //    optional: true,
 //    type: [String],
 //    label: "What upgrades were performed at the school?",
 //    autoform: 
 //    {
 //      type: "select-checkbox",
 //      options: function () 
 //      {
 //        return [
 //      {label: "Renovation of all toilet blocks", value: "Renovation of all toilet blocks"},
 //      {label: "Cisterns", value: "Cisterns"},
 //      {label: "Toilet Seats", value: "Toilet Seats"},
 //      {label: "Urinals", value: 'Urinals'},
 //      {label: "Windows", value: 'Windows'},
 //      {label: "Tiling", value: 'Tiling'},
 //      {label: "Painting", value: 'Painting'},
 //      {label: "Taps", value: 'Taps'},
 //      {label: "Water Pressure", value: 'Water Pressure'},
 //      {label: "Gutters", value: 'Gutters'},
 //      {label: "Unblocking of Toilets", value: 'Unblocking of Toilets'},
 //      {label: "Basins", value: 'Basins'},
 //      {label: "Doors", value: 'Doors'},
 //        ];
 //      }
 //    }
 //  },
 // upgradePerformedQuality: {
 //    optional: true,
 //    type: String,
 //    label: "Is there a fence or wall around your school?",
 //  autoform: {
 //      type: "select",
 //      options: function () {
 //        return [
 //          {label: "Good", value: 'Good'},
 //          {label: "Average", value: 'Average'},
 //          {label: "Poor", value: 'Poor'}
 //        ];
 //      }
 //    }
 //  },
 //  upgradesNeeded: {
 //    optional: true,
 //    type: [String],
 //    label: "What additional improvements to sanitation do you still need?",
 //    autoform: 
 //    {
 //      type: "select-checkbox",
 //      options: function () 
 //      {
 //        return [
 //      {label: "Renovation of all toilet blocks", value: 'Renovation of all toilet blocks'},
 //      {label: "Cisterns", value: 'Cisterns'},
 //      {label: "Toilet Seats", value: 'Toilet Seats'},
 //      {label: "Urinals", value: 'Urinals'},
 //      {label: "Windows", value: 'Windows'},
 //      {label: "Tiling", value: 'Tiling'},
 //      {label: "Painting", value: 'Painting'},
 //      {label: "Taps", value: 'Taps'},
 //      {label: "Water Pressure", value: 'Water Pressure'},
 //      {label: "Gutters", value: 'Gutters'},
 //      {label: "Unblocking of Toilets", value: 'Unblocking of Toilets'},
 //      {label: "Basins", value: 'Basins'},
 //      {label: "Doors", value: 'Doors'},
 //        ];
 //      }
 //    }
 //  },
 //  upgradeCompany: {
 //    optional: true,
 //    type: String,
 //    label: "If known, please provide the name of the company who performed the repairs",
 //  },

  comment: {
    type: String,
    optional: true,
    label: "Comment"

  }
});

SpecialNeedsSchema = new SimpleSchema({
  specialNeeds: {
    type: [String],
    optional: true,
    label: "If this is a school or learners with special education needs, does it have the following? (please check all that apply)",
    autoform: 
    {
      type: "select-checkbox",
      options: function () 
      {
        return [
      {label: "Ramps", value: "Ramps"},
      {label: "Handrails", value: "Handrails"},
      {label: "Parking for persons with disabilities", value: "Parking for persons with disabilities"},
      {label: "Toilets for the disabled", value: 'Toilets for the disabled'},
      {label: "Tactile/Braille signs for the blind", value: 'Tactile/Braille signs for the blind'},
      {label: "Visual aids for the deaf", value: 'Visual aids for the deaf'},
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
    }
  }
});

AdditionalInfoSchema = new SimpleSchema({
  yearBuilt: {
    label: "Was this school built after 29 November 2013?",
    type: Boolean,
    optional: true,
    autoform: {
         type: "boolean-radios",
         trueLabel: "Yes",
         falseLabel: "No",
      }
    },
  location: {
    label: "Is the school located near any of the following? (click all that apply)",
    type: [String],
    optional: true,
    autoform: 
    {
      type: "select-checkbox",
      options: function () 
      {
        return [
      {label: "Cemetery", value: "Cemetery"},
      {label: "Business centre", value: "Business centre"},
      {label: "Railway station", value: "Railway station"},
      {label: "Taxi rank", value: "Taxi rank"},
      {label: "Sewage treatment plant", value: "Sewage treatment plant"},
      {label: "Public hostel", value: "Public hostel"},
      {label: "Busy road", value: "Busy road"},
      {label: "Bottle store and/or shebeen", value: "Bottle store and/or shebeen"},
      ];
      }
    }
  },
  couldBeMoved: {
  label: "Do you feel that there is other land where the school could be moved?",
  type: Boolean,
  optional: true,
  autoform: {
       type: "boolean-radios",
       trueLabel: "Yes",
       falseLabel: "No",
    }
  },
  schoolSignboard: {
    label: "Does the school have a signboard which is visible to the public and which indicates the name and contact details of the school?",
    type: Boolean,
      optional: true,
      autoform: {
           type: "boolean-radios",
           trueLabel: "Yes",
           falseLabel: "No",
        }
  },
  electronicConnectivity: {
    label: "Which of the following does the school have? (tick all that apply):",
    optional: true,
    type: [String],
    autoform: 
    {
      type: "select-checkbox",
      options: function () 
      {
        return [
      {label: "Telephone facilities", value: "Telephone facilities"},
      {label: "Fax facilities", value: "Fax facilities"},
      {label: "Internet facilities", value: "RInternet facilities"},
      {label: "An intercom or public address system", value: "An intercom or public address system"},
      ];
      }
    }
  },
  buildingMaterials: {
    label: "Is the school built out of any of the following materials? (tick all that apply)",
     optional: true,
    type: [String],
    autoform: 
    {
      type: "select-checkbox",
      options: function () 
      {
        return [
      {label: "Mud", value: "Mud"},
      {label: "Wood", value: "Wood"},
      {label: "Asbestos", value: "Asbestos"},
      ];
      }
    }
  },
  facilities: {
    label: "Which of the following does the school have? (tick all that apply)",
    optional: true,
    type: [String],
    autoform: 
    {
      type: "select-checkbox",
      options: function () 
      {
        return [
      {label: "Principal’s office", value: "Principal’s office"},
      {label: "Deputy principal’s office", value: "Deputy principal’s office"},
      {label: "Reception area", value: "Reception area"},
      {label: "Storage room", value: "Storage room"},
      {label: "Strong room", value: "Strong room"},      
      {label: "Counselling room", value: "Counselling room"},
      {label: "Sick room", value: "Sick room"},
      {label: "Staff kitchenette", value: "Staff kitchenette"},
      {label: "HOD’s office", value: "HOD’s office"},
      {label: "Printing room", value: "Printing room"},
      ];
      }
    }
  },
  numberOfDeputyPrincipalOffices: {
    label: "Number of deputy principal offices",
    type: Number,
    autoform: {
      type: "text"
    }
  },
  numberOfSickRooms: {
    label: "Number of sick rooms",
    type: Number,
    autoform: {
      type: "text"
    }
  },
  numberOfStaffKitchenetters: {
    label: "Number of staff kitchenettes",
    type: Number,
    autoform: {
      type: "text"
    }
  },
  numberOfHODoffices: {
    label: "Number of HOD offices",
    type: Number,
    autoform: {
      type: "text"
    }
  },
  numberOfPrintingRooms: {
    label: "Number of printing rooms",
    type: Number,
    autoform: {
      type: "text"
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

ElectricitySchema = new SimpleSchema({
  electricityCondition: {
    optional: true,
    label: "How would you describe the supply of power at the school?",
    type: String,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "There is no power supply", value: 'There is no power supply'},
          {label: "Sometimes there is power", value: 'Sometimes there is power'},
          {label: "There is a regular power supply", value: 'There is a regular power supply'},
          {label: "Unsure", value: 'Unsure'},
        ];
      }
    }
  },
  electricitySource: {
    optional: true,
    label: "The power supply at the school comes from: (tick all that apply)",
    type: [String],
    autoform: {
      type: "select-checkbox",
      options: function () {
        return [
          {label: "Grid", value: 'Grid'},
          {label: "Generators", value: 'Generators'},
          {label: "Solar Panel", value: 'Solar Panel'},
          {label: "Wind Power", value: 'Wind Power'},
          {label: "Unsure", value: 'Unsure'},
          {label: "Other", value: 'Other'},
        ];
      }
    }
  },
  electricitySourceOtherDescription: {
    optional: true,
    label: "Please describe",
    type: String
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
  totalNumberOfLightbulbs: {
    label: "Total number of lightbulbs in classroom",
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
  totalNumberOfDesks: {
    label: "Total number of desks in classroom",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  totalNumberOfBrokenDesks: {
    label: "Total number of broken desks in classroom",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  totalNumberOfChairs: {
    label: "Total number of chairs in classroom",
    type: Number,
    optional: true,
    autoform: {
      type: "text"
    }
  },
  totalNumberOfBrokenChairs: {
    label: "Total number of broken chairs in classroom",
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

SchoolSchema = new SimpleSchema({
  schoolDetails: {
    type: SchoolDetailsSchema,
    optional: true,
    custom: function () {
      if (Meteor.isClient) {

        var currentRoute = Router.current();
  
        var template_name = currentRoute.lookupTemplate();

        var isRequired = template_name === "Schools";
        if (!isRequired) {
          return;
        }
        if (isRequired && !this.isSet && (!this.operator || (this.value === null || this.value === ""))) {
          console.log("School Details are required");
          return "required";
        }
      }
    }
  },
  contact: {
    type: ContactDetailsSchema,
    optional: true
  },
  grades: {
    type: GradesSchema,
    optional: true
  },
  classrooms: {
    type: ClassroomsSchema,
    optional: true,
  },
  sports: {
    type: SportsFieldSchema,
    optional: true
  }, 
  library: {
    type: LibrarySchema,
    optional: true
  },
  science_lab: {
    type: ScienceLabSchema,
    optional: true
  },
  security: {
    type: SecuritySchema,
    optional: true
  },
  sanitation: {
    type: SanitationSchema,
    optional: true
  },
  specialNeeds: {
    type: SpecialNeedsSchema,
    optional: true
  },
  additionalInfo: {
    type: AdditionalInfoSchema,
    optional: true
  },
  electricity: {
    type: ElectricitySchema,
    optional: true
  },
  nutrition: {
    type: NutritionSchema,
    optional: true,
  },
  createdBy: {
    type: String,
    autoValue:function(){ return Meteor.user().emails[0].address },
    // autoValue:function(){ return this.userId }
}
});

Schools.attachSchema(SchoolSchema);