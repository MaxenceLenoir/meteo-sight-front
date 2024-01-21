import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class FormComponent extends Component {
  @service store;
  @service router;

  @tracked lat;
  @tracked lon;

  @action async onClick(e) {
    e.preventDefault();

    const successCallback = async (position) => {
      const data = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      console.log(data);
      const search = this.store.createRecord('search', data);
      await search.save();

      this.router.transitionTo('searches.show', search);
    };

    const errorCallback = () => {
      alert(
        'You should give access to your current location to use this feature',
      );
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
}
