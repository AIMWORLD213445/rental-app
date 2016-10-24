import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnnouncement() {
      var params = {
        message: this.get('message')
      };
      this.sendAction('saveAnnouncement', params);
      this.set('message', '');
    }
  }
});
