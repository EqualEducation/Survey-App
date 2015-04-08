SanitationBlocks = new Mongo.Collection("sanitationblocks");

SanitationBlocksSchema = new SimpleSchema({
  blockName: {
    label: "Block Name",
    type: String,
    optional: true,
    autoform: {
      rows: 1,
    },
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
          {label: "Combined", value: 'Combined'},
          {label: "Unknown", value: 'Unknown'},
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
          {label: "Unknown", value: 'Unknown'},

        ];
      }
    }
  },
  isLocked: {
    label: "Is the toilet block locked?",
   optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-checkbox",
        // trueLabel: "Yes",
        // falseLabel: "No",
      }
  },
  numberOfWorkingToilets: {
    label: "Number of working toilets",
    type: String,
    optional: true,
    regEx: /^[0-9]/,
    autoform: {
      rows: 1,
    },
  },
  numberOfBrokenToilets: {
    label: "Number of non-working toilets",
    type: String,
    optional: true,
    regEx: /^[0-9]/,
    autoform: {
      rows: 1,
    },
  },
  numberOfWorkingTaps: {
    label: "Number of working taps",
    type: String,
    optional: true,
    regEx: /^[0-9]/,
    autoform: {
      rows: 1,
    },
  },
  numberOfBrokenTaps: {
    label: "Number of non-working taps",
    type: String,
    optional: true,
    regEx: /^[0-9]/,
    autoform: {
      rows: 1,
    },
  },
  hasSoap: {
    label: "Is there soap?",
   optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-checkbox",
        // trueLabel: "Yes",
        // falseLabel: "No",
      }
  },
  hasSanitaryBin: {

    label: "Are there sanitary bins?",
   optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-checkbox",
        // trueLabel: "Yes",
        // falseLabel: "No",
      }
  },
  hasToiletPaper: {
    label: "Is there toilet paper?",
   optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-checkbox",
        // trueLabel: "Yes",
        // falseLabel: "No",
      }
  },
  condition: {
    label: "Please describe the condition of the block",
    optional: true,
    type: String,
    autoform: {
      type: "select-radio",
      options: function () {
        return [
          {label: "Good", value: 'Good'},
          {label: "Average", value: 'Average'},
          {label: "Poor", value: 'Poor'},
          {label: "Unsure", value: 'Unsure'},
        ];
      }
    }
  },
  typeOfToilet: {
    label: "Please describe the type of toilet",
    optional: true,
    type: String,
    autoform: {
      type: "select-radio",
      options: function () {
        return [
          {label: "Flush", value: 'Flush'},
          {label: "Pit", value: 'Pit'},
          {label: "Ventilated Improved Pit (VIP)", value: 'Ventilated Improved Pit (VIP)'},
          {label: "Composting", value: 'Composting'},
          {label: "Bucket", value: 'Bucket'},
          {label: "Unsure", value: 'Unsure'},
        ];
      }
    }
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
  }
});

SanitationBlocks.attachSchema(SanitationBlocksSchema);