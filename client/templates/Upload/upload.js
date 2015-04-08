if (Meteor.isClient) {

Template.upload.events({
  "change #files": function (e) {
    var files = e.target.files || e.dataTransfer.files;
    for (var i = 0, file; file = files[i]; i++) {
      if (file.type.indexOf("text") == 0) {
        var reader = new FileReader();
        reader.onloadend = function (e) {
          var text = e.target.result;
          var all = $.csv.toObjects(text);
          
          var count = all.length;
          var i = 0;
          var uploaded = 0;
          
          _.each(all, function (entry) {
            i++;

            // var existingSchool = Schools.find({'schoolDetails.NEIMS_NUMBER' : entry.NEIMS_NUMBER});
            // if (typeof existingSchool === 'undefined') {

              Schools.insert({schoolDetails: entry});
              uploaded++;
            // } else {
            //   alert('School already exists! NEIMS: ' + entry.NEIMS_NUMBER);
            // }

            if (i == count) {
              var message = ' schools were added to the database';
              if (uploaded == 1){
                  message = ' school was added to the database';
              }
              FlashMessages.sendInfo('Upload complete! ' + uploaded + message);
            }
          });
        }
        reader.readAsText(file);
      }
    }
  }
});

}