
Router.configure({
  layoutTemplate: 'basicLayout',
  loadingTemplate: 'loadingpage',
   yieldRegions: {
    'surveyTitle': {to: 'title'},
  },
});

Router.route('/', function () {
  Session.set("selectedSchoolId", null);
  this.layout('basicLayout');
  this.render('home');

  // render the PostAside template into the yield region named "aside" 
  // {{> yield "title"}}
  this.render('hometitle', {to: 'title'});

});

Router.route('/schools/select', {
  waitOn: function () {
    return Meteor.subscribe('schools');
  },

  action: function () {
    this.render('school_selection');
    this.render('surveyTitle', {to: 'title'});
  },
  data: function () {
    return Schools.find({}, {'schoolDetails.INSTITUTION_NAME' : 1});
  },
});

Router.route('/schools/add', {
   waitOn: function () {
    return Meteor.subscribe('schools');
  },
  action: function () {
    this.render('schools');
  },
  data: function() {
    var data = {
      schoolId : Session.get('selectedSchoolId'),
    };
    return data;
  }
});


Router.route('/survey/:_id?', {
  name: 'survey',
  waitOn: function () {
    return Meteor.subscribe('schools', this.params._id);
  },
  action: function () {
    this.render('section_selection');
    this.render('surveyTitle', {to: 'title'});

  },
  data: function () {
    var data = {
      schoolId : this.params._id,
    };
    return data;
  },
});

Router.route('/surveySection/:surveySection?/:_id?', {
  layoutTemplate: 'basicLayout',
  name: 'surveySection',
  waitOn: function () {
    if (this.params.surveySection == 'survey1') {
      return Meteor.subscribe('contactpeople', this.params._id);

    } else if (this.params.surveySection == 'survey2') {
       Meteor.subscribe('schools', this.params._id);

      return Meteor.subscribe('grades', this.params._id);

    }else if (this.params.surveySection == 'survey3') {
      return Meteor.subscribe('sports', this.params._id);

    }else if (this.params.surveySection == 'survey4') {
      return Meteor.subscribe('libraries', this.params._id);

    }else if (this.params.surveySection == 'survey5') {
      return [Meteor.subscribe('labs', this.params._id), Meteor.subscribe('individuallabs', this.params._id)];
      
    }else if (this.params.surveySection == 'survey6') {
      return Meteor.subscribe('security', this.params._id);

    }else if (this.params.surveySection == 'survey7') {
      return [Meteor.subscribe('sanitation', this.params._id), Meteor.subscribe('sanitationblocks', this.params._id)];

    }else if (this.params.surveySection == 'survey8') {
      return Meteor.subscribe('schools', this.params._id);

    }else if (this.params.surveySection == 'survey9') {
      return Meteor.subscribe('specialneeds', this.params._id);

    }else if (this.params.surveySection == 'survey10') {
      return Meteor.subscribe('additional', this.params._id);

    }else if (this.params.surveySection == 'survey11') {
      return Meteor.subscribe('classrooms', this.params._id);
    }else if (this.params.surveySection == 'survey12') {
      return Meteor.subscribe('nutrition', this.params._id);

    }else if (this.params.surveySection == 'survey13') {
      return Meteor.subscribe('electricity', this.params._id);

    }
  },
  action: function () {
    this.render('survey');
    this.render('surveyTitle', {to: 'title'});
  },
  data: function() {
    var data = {
      surveySection : this.params.surveySection,
      schoolId : this.params._id,
    };
    return data;
  },
});

Router.route('/labs/edit/:id', {
   waitOn: function () {
    return Meteor.subscribe('individuallabs');
  },
  action: function () {
    this.render('modal_lab');
  },
  data: function() {
    var data = {
      schoolId : Session.get('selectedSchoolId'),
    };
    return data;
  }
});
