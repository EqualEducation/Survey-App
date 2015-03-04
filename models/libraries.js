Libraries = new Mongo.Collection("libraries");

LibrarySchema = new SimpleSchema({
  hasLibrary: {
    optional: true,
    type: String,
    label: "Does your school have a library?",
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "School's own", value: "School's own"},
          {label: "Shared with other school", value: 'Shared with other school'},
          {label: "None", value: 'None'}
        ];
      }
    }
  },
  hasMediaCentre: {
    optional: true,
    type: String,
    label: "Does your school have a media centre?",
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "School's own", value: "School's own"},
          {label: "Shared with other school", value: 'Shared with other school'},
          {label: "None", value: 'None'}
        ];
      }
    }
  },
  librarians: {
    optional: true,
    type: [String],
    label: "Does the school have (please tick all that apply)",
    autoform: {
      type: "select-checkbox",
      options: function() {
        return [
        {label: "Dedicated librarian", value: 'Dedicated librarian'},
        {label: "Teacher assigned as a librarian", value: 'Teacher assigned as a librarian'},
        {label: "No librarian", value: 'No librarian'},
        ];
      }
    }
  },
  hasComputerTracking: {
    label: "Does the library have a computer to track book lending?",
    type: Boolean,
    optional: true,
    autoform: {
         type: "boolean-radios",
         trueLabel: "Yes",
         falseLabel: "No",
      }
    },
    hasComputerForGeneralUse: {
    label: "Does the library have other computers for general use?",
    type: Boolean,
    optional: true,
    autoform: {
         type: "boolean-radios",
         trueLabel: "Yes",
         falseLabel: "No",
      }
    },
    totalNumberOfComputers: {
      label: "Total number of computers",
      type: Number,
      optional: true,
      autoform: {
        type: "text"
      }
    },
    totalNumberOfComputersThatConnectToTheInternet: {
      label: "Total number of computers that connect to the internet",
      type: Number,
      optional: true,
      autoform: {
        type: "text"
      }
    },
    hasBooks: {
    label: "Does the library have books?",
    type: Boolean,
    optional: true,
    autoform: {
         type: "boolean-radios",
         trueLabel: "Yes",
         falseLabel: "No",
      }
    },
    hasFictionSection: {
      label: "Does the library have fiction (stories, novels etc)?",
      type: Boolean,
      optional: true,
      autoform: {
        type: "boolean-radios",
        trueLabel: "Yes",
        falseLabel: "No",
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

Libraries.attachSchema(LibrarySchema);