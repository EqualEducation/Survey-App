Sanitation = new Mongo.Collection("sanitation");

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
 // totalNumberOfToiletBlockTaps: {
 //    optional: true,
 //    type: Number,
 //    label: "Total number of taps outside toilet blocks",
 //    autoform: {
 //      type: "text"
 //    }
 //  },
 //  totalNumberOfWorkingTaps: {
 //    optional: true,
 //    type: Number,
 //    label: "Total number of working taps outside toilet blocks",
 //    autoform: {
 //      type: "text"
 //    }
 //  },
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
  // isWaterDrinkable: {
  //   label: "Is the water supply sufficient for drinking?",
  //  optional: true,
  //   type: Boolean,
  //     autoform: {
  //       type: "boolean-radios",
  //       trueLabel: "Yes",
  //       falseLabel: "No",
  //     }
  // },
  // isWaterEnoughForFoodPreparation: {
  //   label: "If there are people preparing food on school grounds, is there enough water for food preparation?",
  //  optional: true,
  //   type: Boolean,
  //     autoform: {
  //       type: "boolean-radios",
  //       trueLabel: "Yes",
  //       falseLabel: "No",
  //     }
  // },
  // isWaterEnoughForHygiene: {
  //   label: "Is there enough for water for personal hygiene?",
  //  optional: true,
  //   type: Boolean,
  //     autoform: {
  //       type: "boolean-radios",
  //       trueLabel: "Yes",
  //       falseLabel: "No",
  //     }
  // },
  comment: {
  type: String,
  optional: true,
  label: "Comment"
  },
  school_id: {
    type: String,
    defaultValue: function(){ 
      return Session.get('selectedSchoolId');
    },
    autoform: {
      omit: true,
    },
  },
});

Sanitation.attachSchema(SanitationSchema);