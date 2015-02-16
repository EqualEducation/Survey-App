if (Meteor.isServer) {
  Meteor.publish("schools", function () {
    return Schools.find();
  });
}