ContactPeople = new Mongo.Collection("contactpeople");

ContactDetailsSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Contact Name",
    optional: true,
    autoform: {
      rows: 1,

    },
  },
  phoneNumber: {
    type: String,
    optional: true,
    label: "Contact Number",
    regEx: /^[0-9]{10}$/,
    autoform: {
      rows: 1,
    },
  },
  email: {
    type: String,
    label: "Contact Email",
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
  school_id: {
    type: String,
    defaultValue: function(){ 
      console.log("school id: ", Session.get('selectedSchoolId'));
      return Session.get('selectedSchoolId');
    },
    autoform: {
      type: "hidden",
      label: false
    },  
  }
});

ContactPeople.attachSchema(ContactDetailsSchema);