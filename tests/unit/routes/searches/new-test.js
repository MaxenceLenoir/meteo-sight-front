import { module, test } from 'qunit';
import { setupTest } from 'meteo-sight-front/tests/helpers';

module('Unit | Route | searches/new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:searches/new');
    assert.ok(route);
  });
});
