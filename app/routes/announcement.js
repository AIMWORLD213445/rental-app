import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var announcements = this.store.findAll('announcement');
    return  announcements;
  },

  actions: {
    saveAnnouncement(params) {
        var newAnnouncement = this.store.createRecord('announcement', params);
        newAnnouncement.save();
        this.transitionTo('announcement');
      },

    deleteAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('announcement');
    },
  }
});
