Template.search.rendered = function(){  
  Session.set('searchHasVersions', false);

  $('.toggle-checked').checked = Session.get('searchHasVersions'); 
}


Template.search.events({
     "click .btn-delete" : function() {
        Schools.remove({'_id' : this._id});
    }, 
    "click .toggle-checked": function (e) {
      var isChecked = e.currentTarget.checked;
      Session.set('searchHasVersions', isChecked);
      var instance = EasySearch.getComponentInstance({
        index: 'schools'});

      EasySearch.changeProperty('schools', 'onlyShowSchoolsWithVersions', Session.get('searchHasVersions'));

      instance.triggerSearch();


  },
});



Template.registerHelper("schools", function(){ 
  return Schools.find({ 'hasVersions': { $exists: Session.get('searchHasVersions') } } ,{limit: 10}, {sort: {'schoolDetails.INSTITUTION_NAME': 'asc'}});
});

