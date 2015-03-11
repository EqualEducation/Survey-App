
Router.configure({
  layoutTemplate: 'basicLayout',
});

Router.route('/', function () {
  this.layout('basicLayout');
  this.render('home');

  // render the PostAside template into the yield region named "aside" 
  // {{> yield "title"}}
  this.render('hometitle', {to: 'title'});

});

// Router.route('/home', function () {
//  this.render('home');

// });


Router.route('/schools/select', {
  waitOn: function () {
    return Meteor.subscribe('schools');
  },

  action: function () {
    this.render('school_selection');
  },
  data: function () {
    return Schools.find({}, {'schoolDetails.INSTITUTION_NAME' : 1});
  },
});

Router.route('/schools/add', {
  action: function () {
    this.render('schools');
  }
});


Router.route('/survey/:_id?', {
  name: 'survey',
  waitOn: function () {
    return Meteor.subscribe('schools', this.params._id);
  },
  action: function () {
    this.render('section_selection');
  },
  data: function () {
    var data = {
      schoolId : this.params._id,
    };
    return data;
  },
});

Router.route('/surveySection/:surveySection?/:_id?', {
  name: 'surveySection',
  action: function () {
    this.render('survey');
  },
  data: function() {
    var data = {
      surveySection : this.params.surveySection,
      schoolId : this.params._id,
    };
    return data;
  }
  });