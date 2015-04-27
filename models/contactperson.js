ContactPeople = new Mongo.Collection("contactpeople");

ContactDetailsSchema = new SimpleSchema({
  date: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "date"
      }
    }
  },
  auditorName: {
    type: String,
    label: "Name of Auditor",
    optional: true,
  },
  auditorPhoneNumber: {
    type: String,
    optional: true,
    label: "Contact Number of Auditor",
    regEx: /^[0-9]{10}$/,
    autoform: {
      rows: 1,
    },
  },
  auditorEmail: {
    type: String,
    label: "Contact Email of Auditor",
    optional: true,

  },
  name: {
    type: String,
    label: "Follow up Contact Name",
    optional: true,
  },
  phoneNumber: {
    type: String,
    optional: true,
    label: "Follow up Contact Number",
    regEx: /^[0-9]{10}$/,
  },
  email: {
    type: String,
    label: "Follow up Contact Email",
    optional: true,
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
  },
});

ContactPeople.attachSchema(ContactDetailsSchema);