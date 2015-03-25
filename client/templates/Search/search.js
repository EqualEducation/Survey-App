Template.search.rendered = function(){
  console.log($('.toggle-checked').value);
  $('.toggle-checked').checked = false;
}


Template.search.events({
     "click .btn-delete" : function() {
        Schools.remove({'_id' : this._id});
    }, 
    "click .toggle-checked": function (e) {
      var isChecked = e.currentTarget.checked;
       var instance = EasySearch.getComponentInstance({
        index: 'schools'});

      EasySearch.changeProperty('schools', 'onlyShowSchoolsWithVersions', isChecked);

      instance.triggerSearch();


  },
});





