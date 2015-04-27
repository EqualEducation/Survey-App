IndividualLabs = new Mongo.Collection("individuallabs");


IndividualLabsSchema = new SimpleSchema({
  labName:{
   label: "Lab name",
    optional: true,
    type: String,
  },
  labCondition:{
    label: "Is the lab in good working order?",
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
  hasNecessaryEquipment: {
    label: "Does the lab have the equipment necessary?",
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