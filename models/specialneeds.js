SpecialNeeds = new Mongo.Collection("specialneeds");

SpecialNeedsSchema = new SimpleSchema({
  specialNeeds: {
    type: [String],
    optional: true,
    label: "If this is a school or learners with special education needs, does it have the following? (please check all that apply)",
    autoform: 
    {
      type: "select-checkbox",
      options: function () 
      {
        return [
      {label: "Ramps", value: "Ramps"},
      {label: "Handrails", value: "Handrails"},
      {label: "Parking for persons with disabilities", value: "Parking for persons with disabilities"},
      {label: "Toilets for the disabled", value: 'Toilets for the disabled'},
      {label: "Tactile/Braille signs for the blind", value: 'Tactile/Braille signs for the blind'},
      {label: "Visual aids for the deaf", value: 'Visual aids for the deaf'},
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
  }
});

SpecialNeeds.attachSchema(SpecialNeedsSchema);