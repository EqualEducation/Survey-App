Libraries = new Mongo.Collection("libraries");

LibrarySchema = new SimpleSchema({
  hasLibrary: {
    optional: true,
    type: String,
    label: "Does your school have a library?",
    autoform: {
      type: "select-radio",
      options: function () {
        return [
          {label: "School's own", value: "School's own"},
          {label: "Shared with other school", value: 'Shared with other school'},
          {label: "None", value: 'None'},
          {label: "Unsure", value: 'Unsure'},

        ];
      }
    }
  },
  hasMediaCentre: {
    optional: true,
    type: String,
    label: "Does your school have a media centre?",
    autoform: {
      type: "select-radio",
      options: function () {
        return [
          {label: "School's own", value: "School's own"},
          {label: "Shared with other school", value: 'Shared with other school'},
          {label: "None", value: 'None'},
          {label: "Unsure", value: 'Unsure'},

        ];
      }
    }
  },
  librarians: {
    optional: true,
    type: [String],
    label: "Does the school have (please tick all that apply)",
    autoform: 
    {
      type: "select-checkbox",
      options: function () 
      {
        return [
        {label: 'Dedicated librarian', value: 'Dedicated librarian'},
        {label: 'Teacher assigned as a librarian', value: 'Teacher assigned as a librarian'},
        {label: 'No librarian', value: 'No librarian'},
        {label: "Unsure", value: 'Unsure'},
        ];
      }
    }
  },
  hasComputerTracking: {
    label: "Does the library have a computer to track book lending?",
    type: String,
      optional: true,
      autoform: {
           type: "select-radio",
           options: function () {
            return [
              {label: "Yes", value: 'Yes'},
              {label: "No", value: 'No'},
              {label: "Unsure", value: 'Unsure'}
        ];
      }

    }
    },
    hasComputerForGeneralUse: {
    label: "Does the library have other computers for general use?",
    type: String,
      optional: true,
      autoform: {
           type: "select-radio",
           options: function () {
            return [
              {label: "Yes", value: 'Yes'},
              {label: "No", value: 'No'},
              {label: "Unsure", value: 'Unsure'}
        ];
      }

    }
    },
    totalNumberOfComputers: {
      label: "Total number of computers",
      type: String,
      optional: true,
      regEx: /^[0-9]*$/,
    },
    totalNumberOfComputersThatConnectToTheInternet: {
      label: "Total number of computers that connect to the internet",
      type: String,
      optional: true,
      regEx: /^[0-9]*$/,
    },
    hasBooks: {
    label: "Does the library have books?",
    type: String,
      optional: true,
      autoform: {
           type: "select-radio",
           options: function () {
            return [
              {label: "Yes", value: 'Yes'},
              {label: "No", value: 'No'},
              {label: "Unsure", value: 'Unsure'}
        ];
      }

    }
    },
    hasFictionSection: {
      label: "Does the library have fiction (stories, novels etc)?",
      type: String,
      optional: true,
      autoform: {
           type: "select-radio",
           options: function () {
            return [
              {label: "Yes", value: 'Yes'},
              {label: "No", value: 'No'},
              {label: "Unsure", value: 'Unsure'}
        ];
      }

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
    version_id: {
    type: String,
    defaultValue: function(){ 
      return Session.get('selectedSurveyVersionId');
    },
    autoform: {
      type: "hidden",
      label: false
    },
  }
});

Libraries.attachSchema(LibrarySchema);