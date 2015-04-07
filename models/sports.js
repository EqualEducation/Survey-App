// Sports = new Mongo.Collection("sports");

// SportsFieldDrillDownSchema = new SimpleSchema ({
  
//   condition: {
//    label: "What is the condition of this place used for this sport?",
//     optional: true,
//     type: String,
//     autoform: {
//       type: "select-radio",
//       options: function () {
//         return [
//           {label: "Good Condition", value: 'Good Condition'},
//           {label: "Average Condition", value: 'Average Condition'},
//           {label: "Poor Condition", value: 'Poor Condition'}
//         ];
//       }
//     }
//   },
//   location: {
//     optional: true,
//     type: String,
//     label: "Which of the following describes the location of the place used for this sport?",
//     autoform: {
//       type: "select-radio",
//       options: function () {
//         return [
//           {label: "School’s Own", value: 'School’s Own'},
//           {label: "Community Owned", value: 'Community Owned'},
//           {label: "Other School’s", value: 'Other School’s'}
//         ];
//       }
//     }
//   }
// });

// SportsFieldSchema = new SimpleSchema({
//   numberOfSportsFields: {
//     optional: true,
//     type: String,
//     label: "Total Number of Sports Fields/Areas",
//     regEx: /^[0-9]/,
//     autoform: {
//       rows: 1,
//     },
//   },
//   availableSports: {
//     optional: true,
//     type: [String],
//     label: "Which of the following sports are available at your school? (Tick all that apply)",
//     autoform: 
//     {
//       type: "select-checkbox",
//       options: function () 
//       {
//         return [
//       {label: "Athletics Field", value: "Athletics Field"},
//       {label: "Netball Court", value: "Netball Court"},
//       {label: "Basketball Court", value: "Basketball Court"},
//       {label: "Hockey Field", value: "Hockey Field"},
//       {label: "Tennis Court", value: "Tennis Court"},
//       {label: "Cricket Pitch", value: 'Cricket Pitch'},
//       {label: "Soccer Field", value: 'Soccer Field'},
//       {label: "Rugby Field", value: 'Rugby Field'},
//       {label: "Swimming Pool", value: 'Swimming Pool'},
//       {label: "Other", value: 'Other'},
//         ];
//       }
//     }
//   },
//   availableSportsOtherDescription: {
//     optional: true,
//     type: String,
//     label: "Please describe other available sports at your school",
//     autoform: {
//       rows: 1,
//     },
//   },
//   otherDrillDown: {
//     type: SportsFieldDrillDownSchema,
//     optional: true,
//     label: "All other fields/courts",
//     autoform: {
//       rows: 1,
//     },
//   },
//   athleticsDrillDown: {
//     type: SportsFieldDrillDownSchema,
//     optional: true,
//     label: "Athletics Field Details",
//     autoform: {
//       rows: 1,
//     },
//   },
//   hockeyDrillDown: {
//     type: SportsFieldDrillDownSchema,
//     optional: true,
//     label: "Hockey Field Details",
//     autoform: {
//       rows: 1,
//     },
//   },
//   netballDrillDown: {
//     type: SportsFieldDrillDownSchema,
//     optional: true,
//     label: "Netball Court Details",
//     autoform: {
//       rows: 1,
//     },
//   },
//   basketballDrillDown: {
//     type: SportsFieldDrillDownSchema,
//     optional: true,
//     label: "Basketball Court Details",
//     autoform: {
//       rows: 1,
//     },
//   },
//   tennisDrillDown: {
//     type: SportsFieldDrillDownSchema,
//     optional: true,
//     label: "Tennis Court Details",
//     autoform: {
//       rows: 1,
//     },
//   },
//   cricketDrillDown: {
//     type: SportsFieldDrillDownSchema,
//     optional: true,
//     label: "Cricket Pitch Details",
//     autoform: {
//       rows: 1,
//     },
//   },
//   soccerDrillDown: {
//     type: SportsFieldDrillDownSchema,
//     optional: true,
//     label: "Soccer Field Details",
//     autoform: {
//       rows: 1,
//     },
//   },
//   rugbyDrillDown: {
//     type: SportsFieldDrillDownSchema,
//     optional: true,
//     label: "Rugby Field Details",
//     autoform: {
//       rows: 1,
//     },
//   },
//   swimmingDrillDown: {
//     type: SportsFieldDrillDownSchema,
//     optional: true,
//     label: "Swimming Pool Details",
//     autoform: {
//       rows: 1,
//     },
//   },
//   comment: {
//     type: String,
//     optional: true,
//     label: "Comment",
//     autoform: {
//       rows: 4,
//     }
//   },
//   version_id: {
//     type: String,
//     defaultValue: function(){ 
//       return Session.get('selectedSurveyVersionId');
//     },
//     autoform: {
//       type: "hidden",
//       label: false
//     },  
//   }
  
// });

// Sports.attachSchema(SportsFieldSchema);
