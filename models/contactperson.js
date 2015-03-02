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
    optional: true,
    autoValue: function(){ 
      var ses = Session.get('selectedSchoolId'); 
      console.log(ses);
    },
      // Session.get("selectedSchoolId") },
    autoform: {
      type: "hidden",
      label: false
    },
  }
});

ContactPeople.attachSchema(ContactDetailsSchema);