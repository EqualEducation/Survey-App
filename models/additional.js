Additional = new Mongo.Collection("additional");

AdditionalInfoSchema = new SimpleSchema({
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
  buildingMaterials_anyPart: {
    label: "Is ANY PART OF the school built out of any of the following materials? (tick all that apply)",
     optional: true,
    type: [String],
    autoform: 
    {
      type: "select-checkbox",
      options: function () 
      {
        return [
      {label: "Mud", value: "Mud"},
      {label: "Wood", value: "Wood"},
      {label: "Asbestos", value: "Asbestos"},
      ];
      }
    }
  },
  buildingMaterials_entireSchool: {
    label: "Is THE ENTIRE school built out of any of the following materials? (tick all that apply)",
    optional: true,
    type: [String],
    autoform: 
    {
      type: "select-checkbox",
      options: function () 
      {
        return [
      {label: "Mud", value: "Mud"},
      {label: "Wood", value: "Wood"},
      {label: "Asbestos", value: "Asbestos"},
      ];
      }
    }
  },
  // facilities: {
  //   label: "Which of the following does the school have? (tick all that apply)",
  //   optional: true,
  //   type: [String],
  //   autoform: 
  //   {
  //     type: "select-checkbox",
  //     options: function () 
  //     {
  //       return [
  //     {label: "Principal’s office", value: "Principal’s office"},
  //     {label: "Deputy principal’s office", value: "Deputy principal’s office"},
  //     {label: "Reception area", value: "Reception area"},
  //     {label: "Storage room", value: "Storage room"},
  //     {label: "Strong room", value: "Strong room"},      
  //     {label: "Counselling room", value: "Counselling room"},
  //     {label: "Sick room", value: "Sick room"},
  //     {label: "Staff kitchenette", value: "Staff kitchenette"},
  //     {label: "HOD’s office", value: "HOD’s office"},
  //     {label: "Printing room", value: "Printing room"},
  //     ];
  //     }
  //   }
  // },
  // numberOfDeputyPrincipalOffices: {
  //   label: "Number of deputy principal offices",
  //   type: Number,
  //   autoform: {
  //     type: "text"
  //   }
  // },
  // numberOfSickRooms: {
  //   label: "Number of sick rooms",
  //   type: Number,
  //   autoform: {
  //     type: "text"
  //   }
  // },
  // numberOfStaffKitchenetters: {
  //   label: "Number of staff kitchenettes",
  //   type: Number,
  //   autoform: {
  //     type: "text"
  //   }
  // },
  // numberOfHODoffices: {
  //   label: "Number of HOD offices",
  //   type: Number,
  //   autoform: {
  //     type: "text"
  //   }
  // },
  // numberOfPrintingRooms: {
  //   label: "Number of printing rooms",
  //   type: Number,
  //   autoform: {
  //     type: "text"
  //   }
  // },
  comment: {
    type: String,
    optional: true,
    label: "Comment",
    autoform: {
      rows: 4,
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

Additional.attachSchema(AdditionalInfoSchema);