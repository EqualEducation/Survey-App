Security = new Mongo.Collection("security");

SecuritySchema = new SimpleSchema({
  safetyLevel: {
    optional: true,
    type: String,
    label: "How safe do you consider your school?",
    autoform: {
      type: "select-radio",
      options: function () {
        return [
          {label: "Safe", value: 'Safe'},
          {label: "Sometimes safe", value: 'Sometimes safe'},
          {label: "Usually unsafe", value: 'Usually unsafe'}
        ];
      }
    }
  },
  hasFence: {
   label: "School has appropriate fence, including around all sports fields and facilitities",
    optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-checkbox",
        // trueLabel: "Yes",
        // falseLabel: "No",
      }
  },
  fenceHasHoles: {
   label: "Fence has holes or gaps",
    optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-checkbox",
        // trueLabel: "Yes",
        // falseLabel: "No",
      }
  },
  // fenceIsCorrectHeight: {
  //  label: "Is the fence, in all places, at least 1.8 metres high?",
  //   optional: true,
  //   type: Boolean,
  //     autoform: {
  //       type: "boolean-radios",
  //       trueLabel: "Yes",
  //       falseLabel: "No",
  //     }
  // },
  conditionOfFence: {
   label: "What is the condition of the fence or wall around your school?",
    optional: true,
    type: String,
    autoform: {
      type: "select-radio",
      options: function () {
        return [
          {label: "Excellent (no repairs needed)", value: 'Excellent (no repairs needed)'},
          {label: "Average (no major issues at present)", value: 'Average (no major issues at present)'},
          {label: "Needs urgent repair (e.g. holes, breaks)", value: 'Needs urgent repair (e.g. holes, breaks)'},
          {label: "Unsure", value: 'Unsure'},
        ];
      }
    }
  },
  // hasBurglarBars: {
  //   label: "Are there burglar bars on the windows on the ground floors?",
  //  optional: true,
  //   type: Boolean,
  //     autoform: {
  //       type: "boolean-radios",
  //       trueLabel: "Yes",
  //       falseLabel: "No",
  //     }
  // },
  hasSecurityGaurd: {
    label: "Security guard controls access at the gate",
    optional: true,
    type: Boolean,
      autoform: {
        type: "boolean-checkbox",
        // trueLabel: "Yes",
        // falseLabel: "No",
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
  }
});

Security.attachSchema(SecuritySchema);