ContactPeople = new Mongo.Collection("contactpeople");

ContactDetailsSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Contact Name",
    optional: true,
  },
  phoneNumber: {
    type: String,
    optional: true,
    label: "Contact Number",
    regEx: /^[0-9]{10}$/
  },
  email: {
    type: String,
    label: "Contact Email",
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
  school_id: {
    type: String,
    defaultValue: function(){ 
      return Session.get('selectedSchoolId');
    },
    autoform: {
      omit: true,
    },
  },
  
});

ContactPeople.attachSchema(ContactDetailsSchema);