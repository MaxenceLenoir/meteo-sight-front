import RESTAdapter from '@ember-data/adapter/rest';
import ENV from 'meteo-sight-front/config/environment';

export default class ApplicationAdapter extends RESTAdapter {
  host = ENV.APP.HOST;

  ajax(url, type, options) {
    options = options || {};
    options.crossDomain = true;
    options.xhrFields = { withCredentials: true }; // If you need to send credentials (cookies, etc.)
    return super.ajax(url, type, options);
  }

  buildURL(...args) {
    return `${super.buildURL(...args)}`;
  }
}
