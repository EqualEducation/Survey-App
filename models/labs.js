Labs = new Mongo.Collection("labs");



ScienceLabSchema = new SimpleSchema({
  hasLab: {
    label: "Does your school have a science laboratory?",
    type: String,
      optional: true,
      autoform: {
           type: "select-radio",
           options: function () {
            return [
              {label: "Yes", value: 'Yes'},
              {label: "No", value: 'No'},
              {label: "Unsure", value: 'Unsure'}
        ];
      }

    }
  },
  numberOfLabs: {
    label: "How many labs does the school have?",
    type: String,
    optional: true,
    regEx: /^[0-9]/,
    autoform: {
      rows: 1,
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

Labs.attachSchema(ScienceLabSchema);