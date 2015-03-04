SpecialNeeds = new Mongo.Collection("specialneeds");

SpecialNeedsSchema = new SimpleSchema({
  specialNeeds: {
    type: [String],
    optional: true,
    label: "When you were walking around the school, did you notice any of the following for special needs students? (tick all that apply)",
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

SpecialNeeds.attachSchema(SpecialNeedsSchema);