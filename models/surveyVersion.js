SurveyVersions = new Mongo.Collection("surveyVersions");
  
SurveyVersionSchema = new SimpleSchema({
  name: {
    type: String,
    label: "What would you like to call this version?",
    optional: true,
    autoform: {
      rows: 1,

    },
  },
  startDate: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "date"
      }
    }
  },
  endDate: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "date"
      }
    }
  },
  school_id: {
    type: String,
    defaultValue: function(){ 
      var schoolid = Session.get('selectedSchoolId');
      return schoolid;
    },
    autoform: {
      type: "hidden",
      label: false
    },
  },
});


SurveyVersions.attachSchema(SurveyVersionSchema);
