Electricity = new Mongo.Collection("electricity");

ElectricitySchema = new SimpleSchema({
  electricityCondition: {
    optional: true,
    label: "How would you describe the supply of power at the school?",
    type: String,
    autoform: {
      type: "select",
      options: function () {
        return [
          {label: "There is no power supply", value: 'There is no power supply'},
          {label: "Sometimes there is power", value: 'Sometimes there is power'},
          {label: "There is a regular power supply", value: 'There is a regular power supply'},
          {label: "Unsure", value: 'Unsure'},
        ];
      }
    }
  },
  electricitySource: {
    optional: true,
    label: "The power supply at the school comes from: (tick all that apply)",
    type: [String],
    autoform: {
      type: "select-checkbox",
      options: function () {
        return [
          {label: "Grid", value: 'Grid'},
          {label: "Generators", value: 'Generators'},
          {label: "Solar Panel", value: 'Solar Panel'},
          {label: "Wind Power", value: 'Wind Power'},
          {label: "Unsure", value: 'Unsure'},
          {label: "Other", value: 'Other'},
        ];
      }
    }
  },
  electricitySourceOtherDescription: {
    optional: true,
    label: "Please describe",
    type: String
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

Electricity.attachSchema(ElectricitySchema);