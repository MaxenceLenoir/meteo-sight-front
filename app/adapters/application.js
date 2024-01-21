import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'http://localhost:3000';

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
