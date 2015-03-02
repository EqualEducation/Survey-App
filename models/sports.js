Sports = new Mongo.Collection("sports");

SportsFieldDrillDownSchema = new SimpleSchema ({
  condition: {
   label: "What is the condition of this place used for this sport?",
    optional: true,
    type: String,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "Good Condition", value: 'Good Condition'},
          {label: "Average Condition", value: 'Average Condition'},
          {label: "Poor Condition", value: 'Poor Condition'}
        ];
      }
    }
  },
  location: {
    optional: true,
    type: String,
    label: "Which of the following describes the location of the place used for this sport?",
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "School’s Own", value: 'School’s Own'},
          {label: "Community Owned", value: 'Community Owned'},
          {label: "Other School’s", value: 'Other School’s'}
        ];
      }
    }
  }
});

SportsFieldSchema = new SimpleSchema({
  numberOfSportsFields: {
    optional: true,
    type: Number,
    label: "Total Number of Sports Fields/Areas",
    autoform: {
      type: "text"
    }
  },
  availableSports: {
    optional: true,
    type: [String],
    label: "Which of the following sports are available at your school? (Tick all that apply)",
    autoform: 
    {
      type: "select-checkbox",
      options: function () 
      {
        return [
      {label: "Athletics Field", value: "Athletics Field"},
      {label: "Netball Court", value: "Netball Court"},
      {label: "Basketball Court", value: "Basketball Court"},
      {label: "Hockey Field", value: "Hockey Field"},
      {label: "Tennis Court", value: "Tennis Court"},
      {label: "Cricket Pitch", value: 'Cricket Pitch'},
      {label: "Soccer Field", value: 'Soccer Field'},
      {label: "Rugby Field", value: 'Rugby Field'},
      {label: "Swimming Pool", value: 'Swimming Pool'},
      {label: "Other", value: 'Other'},
        ];
      }
    }
  },
  availableSportsOtherDescription: {
    optional: true,
    type: String,
    label: "Please describe other available sports at your school",
  },
  otherDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "All other fields/courts"
  },
  athleticsDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Athletics Field Details"
  },
  hockeyDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Hockey Field Details"
  },
  netballDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Netball Court Details"
  },
  basketballDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Basketball Court Details"
  },
  tennisDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Tennis Court Details"
  },
  cricketDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Cricket Pitch Details"
  },
  soccerDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Soccer Field Details"
  },
  rugbyDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Rugby Field Details"
  },
  swimmingDrillDown: {
    type: SportsFieldDrillDownSchema,
    optional: true,
    label: "Swimming Pool Details"
  },
  comment: {
    type: String,
    optional: true,
    label: "Comment",
    autoform: {
      rows: 4,
    }
  }
});

Sports.attachSchema(SportsFieldSchema);
