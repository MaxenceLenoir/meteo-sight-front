import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class FormComponent extends Component {
  @service store;
  @service router;

  @tracked city = '';

  get disableSubmit() {
    return !this.city.length;
  }

  @action async onSubmit(e) {
    e.preventDefault();
    const data = {
      city: this.city,
    };
    const search = this.store.createRecord('search', data);
    await search.save();

    this.router.transitionTo('searches.show', search);
  }
}
