
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
  this.render('hometitle', {to: 'title'});

});

//MANAGE
Router.route('/manage', {
   action: function () {
    this.render('manage');
  },
});

Router.route('/manage/users', {
   action: function () {
    this.render('manage_users');
  },
});

// Router.route('/manage/download', {
//    action: function () {
//     // this.render('manage_users');
//     download();
// },

Router.route('/manage/download', {
  where: 'server',
  action: function () {
    var filename = 'updated_schools.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Schools.find({ 'hasVersions': { $exists: true } });
    console.log('Count: ' + records.count());
    // build a CSV string. Oversimplified. You'd have to escape quotes and commas.
    records.forEach(function(rec) {
      console.log(rec);
      fileData += rec.schoolDetails.INSTITUTION_NAME 
      + "," + rec.schoolDetails.DISTRICT_NAME 
      + "," + rec.schoolDetails.TELEPHONE_NO 
      + "," + rec.schoolDetails.STREET_NO 
      + "," + rec.schoolDetails.STREET_NAME 
      + "," + rec.schoolDetails.TOWNSHIP_OR_VILLAGE_NAME 
      + "," + rec.schoolDetails.SUBURB 
      + "," + rec.schoolDetails.TOWN_OR_CITY 
      + "," + rec.schoolDetails.POSTAL_CODE 
      + "," + rec.schoolDetails.PROVINCE_NAME 
      + "\r\n";
    });
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});
//SCHOOLS

Router.route('/schools/select', {
  waitOn: function () {
    return Meteor.subscribe('schools');
  },
  action: function () {
    this.render('search');
    this.render('surveyTitle', {to: 'title'});
  },
  fastRender: true
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
  },
  fastRender: true

});

Router.route('/schools/upload', {
  waitOn: function () {
    return Meteor.subscribe('schools');
  },
  action: function () {
    this.render('upload');
  }
});

//VERSIONS

Router.route('/school/:_id?/versions/select/', {
  name: 'versions',
  waitOn: function () {
    return [Meteor.subscribe('surveyVersions'), Meteor.subscribe('schools', this.params._id)];
  },
  action: function () {
    this.render('version_selection');
    this.render('versionsTitle', {to: 'title'});
  },
  data: function() {
    var data = {
      schoolId : this.params._id,
    };
    return data;
  },
  fastRender: true
});


//SURVEY

Router.route('/school/:_schoolId/version/:_id/survey/section/select', {
  name: 'survey',
  action: function () {
    this.render('section_selection');
    this.render('surveyTitle', {to: 'title'});

  },
  data: function () {
    var data = {
      schoolId : this.params._schoolId,
      surveyVersionId : this.params._id,
    };
    return data;
  },
  fastRender: true

});

Router.route('/school/:_schoolId/version/:_versionId/survey/:_surveySection', {
  layoutTemplate: 'basicLayout',
  name: 'surveySection',
  waitOn: function () {
    if (this.params._surveySection == 'survey1') {
      return Meteor.subscribe('contactpeople', this.params._versionId);

    } else if (this.params._surveySection == 'survey2') {
      return [Meteor.subscribe('grades', this.params._versionId), Meteor.subscribe('schools', this.params._schoolId)];

    }else if (this.params._surveySection == 'survey3') {
      return Meteor.subscribe('sports', this.params._versionId);

    }else if (this.params._surveySection == 'survey4') {
      return Meteor.subscribe('libraries', this.params._versionId);

    }else if (this.params._surveySection == 'survey5') {
      return [Meteor.subscribe('labs', this.params._versionId), Meteor.subscribe('individuallabs', this.params._versionId)];
      
    }else if (this.params._surveySection == 'survey6') {
      return Meteor.subscribe('security', this.params._versionId);

    }else if (this.params._surveySection == 'survey7') {
      return [Meteor.subscribe('sanitation', this.params._versionId), Meteor.subscribe('sanitationblocks', this.params._versionId)];

    }else if (this.params._surveySection == 'survey8') {
      return Meteor.subscribe('schools', this.params._schoolId);

    }else if (this.params._surveySection == 'survey9') {
      return Meteor.subscribe('specialneeds', this.params._versionId);

    }else if (this.params._surveySection == 'survey10') {
      return Meteor.subscribe('additional', this.params._versionId);

    }else if (this.params._surveySection == 'survey11') {
      return Meteor.subscribe('classrooms', this.params._versionId);
    }else if (this.params._surveySection == 'survey12') {
      return Meteor.subscribe('nutrition', this.params._versionId);

    }else if (this.params._surveySection == 'survey13') {
      return Meteor.subscribe('electricity', this.params._versionId);

    }else if (this.params._surveySection == 'survey14') {
      return Meteor.subscribe('electronicConnectivity', this.params._versionId);
    }
  },
  action: function () {
    this.render(this.params._surveySection);
    this.render('surveyTitle', {to: 'title'});
  },
  data: function() {
    var data = {
      surveySection : this.params._surveySection,
      surveyVersionId : this.params._versionId,
      schoolId: this.params._schoolId,
    };
    return data;
  },
  fastRender: true

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
  },
    fastRender: true

});

Router.route('/download/:_schoolId/version/:_versionId', {
  name: 'download',
  waitOn: function() {
      return Meteor.subscribe('school_profile', this.params._versionId, this.params._schoolId);
  },
  action: function () {
    this.render('download');
    this.render('surveyTitle', {to: 'title'});

  },
  data: function () {
    var data = {
      versionId : this.params._versionId,
    };
    return data;
  },
});

// Server routes
//API
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

Router.route('/api/school/:_schoolId/version/:_versionId', {
    name: 'versionApi',
    where: 'server',
    waitOn: function() {
      return Meteor.subscribe('school_profile', this.params._versionId, this.params._schoolId);
    },
    action: function () {
      var versionId = this.params._versionId;
      var schoolId = this.params._schoolId;


      var version = SurveyVersions.findOne({'_id' : versionId}, {limit: 1});
      var school = Schools.findOne({'_id': version.school_id});
      var security = Security.findOne({'version_id': versionId});
      var grades = Grades.findOne({'version_id': versionId});

      var additional = Additional.findOne({'version_id': versionId});
      var classrooms = Classrooms.findOne({'version_id': versionId});
      var contactpeople = ContactPeople.findOne({'version_id': versionId});
      var electricity = Electricity.findOne({'version_id': versionId});
      var labs = Labs.findOne({'version_id': versionId});
      var libraries = Libraries.findOne({'version_id': versionId});
      var nutrition = Nutrition.findOne({'version_id': versionId});
      var sanitation = Sanitation.findOne({'version_id': versionId});
      var specialneeds = SpecialNeeds.findOne({'version_id': versionId});
      var sports = Sports.findOne({'version_id': versionId});
      var telephone = ElectronicConnectivity.findOne({'version_id': versionId});

      school["security"] = security;
      school["grades"] = grades;
      school["sanitation"] = sanitation;

      var schoolToExport = {
        'Version' : version,
        'School': school,
      }

      var json = JSON.stringify(schoolToExport);

      // var json = Schools.find({'_id' : this.params._id }).fetch(); // what ever data you want to return
      this.response.setHeader('Content-Type', 'application/json');
      this.response.end(json);
    }
});

Router.route('/api', function () {
  this.render('api');

  // render the PostAside template into the yield region named "aside" 
  // {{> yield "title"}}

});





