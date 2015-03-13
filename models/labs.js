Labs = new Mongo.Collection("labs");



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