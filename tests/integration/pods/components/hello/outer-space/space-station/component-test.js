import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hello/outer-space/space-station', 'Integration | Component | hello/outer space/space station', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hello/outer-space/space-station}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hello/outer-space/space-station}}
      template block text
    {{/hello/outer-space/space-station}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
