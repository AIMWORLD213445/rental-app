import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnnouncement(announcement) {
      this.sendAction('deleteAnnouncement', announcement);
    }
  }
});
