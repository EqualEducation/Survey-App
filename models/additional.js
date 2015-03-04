Additional = new Mongo.Collection("additional");

AdditionalInfoSchema = new SimpleSchema({
  // yearBuilt: {
  //   label: "Was this school built after 29 November 2013?",
  //   type: Boolean,
  //   optional: true,
  //   autoform: {
  //        type: "boolean-radios",
  //        trueLabel: "Yes",
  //        falseLabel: "No",
  //     }
  //   },
  // location: {
  //   label: "Is the school located near any of the following? (click all that apply)",
  //   type: [String],
  //   optional: true,
  //   autoform: 
  //   {
  //     type: "select-checkbox",
  //     options: function () 
  //     {
  //       return [
  //     {label: "Cemetery", value: "Cemetery"},
  //     {label: "Business centre", value: "Business centre"},
  //     {label: "Railway station", value: "Railway station"},
  //     {label: "Taxi rank", value: "Taxi rank"},
  //     {label: "Sewage treatment plant", value: "Sewage treatment plant"},
  //     {label: "Public hostel", value: "Public hostel"},
  //     {label: "Busy road", value: "Busy road"},
  //     {label: "Bottle store and/or shebeen", value: "Bottle store and/or shebeen"},
  //     ];
  //     }
  //   }
  // },
  // couldBeMoved: {
  // label: "Do you feel that there is other land where the school could be moved?",
  // type: Boolean,
  // optional: true,
  // autoform: {
  //      type: "boolean-radios",
  //      trueLabel: "Yes",
  //      falseLabel: "No",
  //   }
  // },
  // schoolSignboard: {
  //   label: "Does the school have a signboard which is visible to the public and which indicates the name and contact details of the school?",
  //   type: Boolean,
  //     optional: true,
  //     autoform: {
  //          type: "boolean-radios",
  //          trueLabel: "Yes",
  //          falseLabel: "No",
  //       }
  // },
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