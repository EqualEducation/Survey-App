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
    autoform: {
      rows: 1,

    },
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
    autoform: {
      rows: 1,

    },

  },
  name: {
    type: String,
    label: "Follow up Contact Name",
    optional: true,
    autoform: {
      rows: 1,

    },
  },
  phoneNumber: {
    type: String,
    optional: true,
    label: "Follow up Contact Number",
    regEx: /^[0-9]{10}$/,
    autoform: {
      rows: 1,
    },
  },
  email: {
    type: String,
    label: "Follow up Contact Email",
    optional: true,
    autoform: {
      rows: 1,

    },

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
      console.log("school id: ", Session.get('selectedSchoolId'));
      return Session.get('selectedSchoolId');
    },
    autoform: {
      type: "hidden",
      label: false
    },  
  },
});

ContactPeople.attachSchema(ContactDetailsSchema);