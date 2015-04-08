IndividualLabs = new Mongo.Collection("individuallabs");


IndividualLabsSchema = new SimpleSchema({
  labName:{
   label: "Lab name",
    optional: true,
    type: String,
    autoform: {
      rows: 1,
    },
  },
  labCondition:{
    label: "Is the lab in good working order?",
    optional: true,
    type: Boolean,
    autoform: {
        type: "boolean-checkbox",
        // trueLabel: "Yes",
        // falseLabel: "No",
      }
  },
  hasNecessaryEquipment: {
    label: "Does the lab have the equipment necessary?",
    type: Boolean,
      optional: true,
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
      rows: 3,
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

IndividualLabs.attachSchema(IndividualLabsSchema);