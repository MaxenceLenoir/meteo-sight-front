import EmberRouter from '@ember/routing/router';
import config from 'meteo-sight-front/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('searches', function () {
    this.route('new');
    this.route('show', { path: '/:id' });
  });
  this.route('error');
});
