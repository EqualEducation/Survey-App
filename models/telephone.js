ElectronicConnectivity = new Mongo.Collection("electronicConnectivity");

ElectronicConnectivitySchema = new SimpleSchema({
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
  comment: {
    type: String,
    optional: true,
    label: "Comment",
    autoform: {
      rows: 4,
    }
  },
  version_id: {
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

ElectronicConnectivity.attachSchema(ElectronicConnectivitySchema);