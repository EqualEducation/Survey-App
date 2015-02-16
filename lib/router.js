Router.configure({
  layoutTemplate: 'basicLayout',
  notFoundTemplate: 'notFound'
});

Router.map(function() {

  this.route('schools', {
    layoutTemplate: 'basicLayout',
    yieldTemplates: {'header': {to: 'header'}},
  });

  this.route('upload', {
    layoutTemplate: 'basicLayout',
    yieldTemplates: {'header': {to: 'header'}},
  });


  this.route('home', {
  path: '/',
  layoutTemplate: 'basicLayout',
  yieldTemplates: {
    'header': {to: 'header'}
      }
  });

  this.route('editschool', {
                path: '/editschool/:_id',
                layoutTemplate: 'basicLayout',
                yieldTemplates: {'header': {to: 'header'}},
                template: 'edit_school', // <-- to be explicit
                data: function() {
                    return Schools.findOne(this.params._id);
                }
            });

    this.route('survey', {
          path: '/survey/:surveySection/:_id?',
          layoutTemplate: 'basicLayout',
          yieldTemplates: {'header': {to: 'header'}},
           template: 'survey',
          data: function() {
                  var data = {
                    surveySection : this.params.surveySection,
                    schoolId : this.params._id,
                  };
                  return data;
                }
            });

        this.route('view', {
          path: '/view/:_id?',
          layoutTemplate: 'basicLayout',
          yieldTemplates: {'header': {to: 'header'}},
           template: 'review',
          data: function() {
                  var data = {
                    schoolId : this.params._id,
                  };
                  return data;
                }
            });

});