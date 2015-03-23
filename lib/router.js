
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
  // waitOn: function () {
  //   return Meteor.subscribe('schools');
  // },
  onBeforeAction: function () {
    this.render('school_selection');
    this.render('surveyTitle', {to: 'title'});
  },
});

Router.route('/schools/add', {
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


Router.route('/schools/upload', {
  waitOn: function () {
    return Meteor.subscribe('schools');
  },
  action: function () {
    this.render('upload');
  }
});

Router.route('/versions/:_id?', {
  name: 'versions',
  waitOn: function () {
    return [Meteor.subscribe('surveyVersions'), Meteor.subscribe('schools', this.params._id)];
  },
  action: function () {
      console.log('school id: ' + this.params._id);

    this.render('version_selection');
    this.render('surveyTitle', {to: 'title'});

  },
  data: function() {
    var data = {

      schoolId : this.params._id,
    };
    return data;
  }
});

Router.route('/survey/:_id', {
  name: 'survey',
  waitOn: function () {
    return Meteor.subscribe('schoolnames', this.params._id);
  },
  action: function () {
    console.log('version id: ' + this.params._id);
    this.render('section_selection');
    this.render('surveyTitle', {to: 'title'});

  },
  data: function () {
    var data = {
      schoolId : Session.get('selectedSchoolId'),
      surveyVersionId : this.params._id,
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

    }else if (this.params.surveySection == 'survey14') {
      return Meteor.subscribe('electronicConnectivity', this.params._id);
    }
  },
  action: function () {
    this.render('survey');
    this.render('surveyTitle', {to: 'title'});
  },
  data: function() {
    var data = {
      surveySection : this.params.surveySection,
      surveyVersionId : this.params._id,
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
      surveyVersionId : Session.get('selectedSurveyVersionId'),
    };
    return data;
  }
});

// Server routes
Router.route('/api/schools', {
    name: 'schoolsApi',
    where: 'server',
    action: function () {
      var json = Schools.find().fetch(); // what ever data you want to return
      this.response.setHeader('Content-Type', 'application/json');
      this.response.end(JSON.stringify(json));
    }
});

Router.route('/api/schools/:_id', {
    name: 'schoolApi',
    where: 'server',
    action: function () {
      var json = Schools.find({'_id' : this.params._id }).fetch(); // what ever data you want to return
      this.response.setHeader('Content-Type', 'application/json');
      this.response.end(JSON.stringify(json));
    }
});

Router.route('/api', function () {

  this.render('api');

  // render the PostAside template into the yield region named "aside" 
  // {{> yield "title"}}

});



