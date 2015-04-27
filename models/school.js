Schools = new Mongo.Collection("schools");


EasySearch.createSearchIndex('schools', {
  'field' : ['schoolDetails.INSTITUTION_NAME', 'hasVersions'],
  'collection' : Schools,
  'use' : 'mongo-db',
  'limit' : 10,
  'props' : {
    'onlyShowSchoolsWithVersions' : false// demo purpose configuration, can be used in query  
  },
  'query' : function (searchString, opts) {
    // Default query that is used for searching
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

    // this contains all the configuration specified above
    if (this.props.onlyShowSchoolsWithVersions) {
      query.hasVersions = true;
    }
    return query;
  }
});

SchoolDetailsSchema = new SimpleSchema({
  INSTITUTION_NAME: {
    type: String,
    label: "Name",
    optional: false,
    autoform: {
      rows: 2,
    },
  },
  DISTRICT_NAME: {
    type: String,
    label: "District",
    optional: true,
    autoform: {
      rows: 2,
    },
  },
  TELEPHONE_NO: {
    type: String,
    label: "Telephone number",
    optional: true,  
    regEx: /^[0-9]{10}$/,
    autoform: {
      rows: 2,
    },
  },
  STREET_NO: {
    type: String,
    label: "Street number",
    optional: true,
    regEx: /^[0-9]{0,5}$/,
  },
  STREET_NAME: {
    type: String,
    label: "Street name",
    optional: true,
    autoform: {
      rows: 2,
    },
  },
  TOWNSHIP_OR_VILLAGE_NAME: {
    type: String,
    label: "Township or Village Name",
    optional: true,
    autoform: {
      rows: 2,
    },
  },
  SUBURB: {
    type: String,
    label: "Suburb",
    optional: true,
    autoform: {
      rows: 2,
    },
  },
  TOWN_OR_CITY: {
    type: String,
    label: "Town or City",
    optional: true,
    autoform: {
      rows: 2,
    },
  },
  POSTAL_CODE: {
    type: String,
    label: "Postal Code",
    optional: true,
    regEx: /^[0-9]{4}$/,
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
        {label: "Other", value: 'Other'},

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
  hasVersions: {
    type: Boolean,
    optional: true,
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
