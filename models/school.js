Schools = new Mongo.Collection("schools");

// Extended configuration
Schools.initEasySearch(['schoolDetails.INSTITUTION_NAME'], {
    'limit' : 10,
    'use' : 'mongo-db'
});

SchoolDetailsSchema = new SimpleSchema({
  INSTITUTION_NAME: {
    type: String,
    label: "Name",
    optional: false,
    autoform: {
      rows: 1,
    },
  },
  DISTRICT_NAME: {
    type: String,
    label: "District",
    optional: true,
    autoform: {
      rows: 1,
    },
  },
  TELEPHONE_NO: {
    type: String,
    label: "Telephone number",
    optional: true,  
    regEx: /^[0-9]{10}$/,
    autoform: {
      rows: 1,
    },
  },
  STREET_NO: {
    type: String,
    label: "Street number",
    optional: true,
    regEx: /^[0-9]{0,5}$/,
    autoform: {
      rows: 1,
    },
  },
  STREET_NAME: {
    type: String,
    label: "Street name",
    optional: true,
    autoform: {
      rows: 1,
    },
  },
  TOWNSHIP_OR_VILLAGE_NAME: {
    type: String,
    label: "Township or Village Name",
    optional: true,
    autoform: {
      rows: 1,
    },
  },
  SUBURB: {
    type: String,
    label: "Suburb",
    optional: true,
    autoform: {
      rows: 1,
    },
  },
  TOWN_OR_CITY: {
    type: String,
    label: "Town or City",
    optional: true,
    autoform: {
      rows: 1,
    },
  },
  POSTAL_CODE: {
    type: String,
    label: "Postal Code",
    optional: true,
    regEx: /^[0-9]{4}$/,
    autoform: {
      rows: 1,
    },
  },
  PROVINCE_NAME: {
    type: String,
    label: "Province",
    optional: false,
    autoform: 
    {
      type: "select-radio",
      options: function () 
      {
        return [
        {label: "The Eastern Cape", value: 'EASTERN_CAPE'},
        {label: "The Free State", value: 'FREE_STATE'},
        {label: "Gauteng", value: 'GAUTENG'},
        {label: "KwaZulu-Natal", value: 'KZN'},
        {label: "Limpopo", value: 'LIMPOPO'},
        {label: "Mpumalanga", value: 'MPUMALANGA'},
        {label: "The Northern Cape", value: 'NORTHERN_CAPE'},
        {label: "North West", value: 'NORTH_WEST'},
        {label: "The Western Cape", value: 'WESTERN_CAPE'}
        ];
      }
    }
  },
  NEIMS_NUMBER: {
    type: String,
    label: "NEIMS number",
    optional: true,
    regEx: /^[0-9]{9}$/,
    autoform: {
      rows: 1,
    },
  },
  CLASSIFICATION: {
    type: String,
    optional: false,
    label: "Is this school a Primary or Secondary School?",
    autoform: 
    {
      type: "select-radio",
      options: function () 
      {
        return [
        {label: "Primary (Grades R to 7)", value: 'Primary'},
        {label: "Secondary (Grades 8 to 12)", value: 'Secondary'},
        ];
      }
    }
  },
  principalCooperative: {
    type: String,
    optional: true,
    label: "Is the principal eager to work with Equal Education?",
    autoform: 
    {
      type: "select-radio",
      options: function () 
      {
        return [
      {label: "Yes", value: 'yes'},
      {label: "No", value: 'no'},
      {label: "Unsure", value: 'Unsure'},
        ];
      }
    }
  },
});

SchoolSchema = new SimpleSchema({
  schoolDetails: {
    type: SchoolDetailsSchema,
    optional: true,
    custom: function () {
      if (Meteor.isClient) {

        var currentRoute = Router.current();
  
        var template_name = currentRoute.lookupTemplate();

        var isRequired = template_name === "Schools";
        if (!isRequired) {
          return;
        }
        if (isRequired && !this.isSet && (!this.operator || (this.value === null || this.value === ""))) {
          console.log("School Details are required");
          return "required";
        }
      }
    }
  },
  version: {
    type: String,
    optional: false,
    autoform: {
      type: "hidden",
      label: false
    },
  },
  // createdBy: {
  //   type: String,
  //   autoValue:function(){ return Meteor.user().emails[0].address },
    // autoValue:function(){ return this.userId }
// }
});

Schools.attachSchema(SchoolSchema);
