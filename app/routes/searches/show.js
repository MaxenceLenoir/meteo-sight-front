import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class SearchesShowRoute extends Route {
  @service store;
  @service router;

  model(params) {
    return this.store.findRecord('searches', params.id);
  }

  afterModel(model) {
    if (model.data.cod !== '200') {
      this.router.transitionTo('error');
    }
  }
}
