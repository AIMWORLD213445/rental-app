import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var rentals = this.store.findAll('rental');
    return rentals;
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
