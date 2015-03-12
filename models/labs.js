Labs = new Mongo.Collection("labs");

ScienceLabDrillDownSchema = new SimpleSchema({
  labCondition:{
    label: "Is the lab in good working order?",
    optional: true,
    type: String,
    autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
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
  comment: {
    type: String,
    optional: true,
    label: "Comment",
    autoform: {
      rows: 1,
    },
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
  labs: {
      type: Array,
      optional: true,
      minCount: 0,
      maxCount: 100
   },
   "labs.$": {
      optional: true,
      type: ScienceLabDrillDownSchema
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

Labs.attachSchema(ScienceLabSchema);