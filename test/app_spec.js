import React from 'react';
import tape from 'tape';
import ReactTestUtils from 'react-dom/test-utils';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';

const test = addAssertions(tape, {jsxEquals});

import App from '../app/app_component';
import Tab from '../app/tabs/tab_component'
import Generator from '../app/generator/generator_component'

test('App Component renders', (t) => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  t.jsxEquals(result,
    <div>
      <h1>Iris Name Generator</h1>
      <article name='main'>
        <section id='tabs'>
          <Tab
            type="human"
            onTypeSelect={function noRefCheck() {}}
          />
          <Tab
            type="elf"
            onTypeSelect={function noRefCheck() {}}
          />
        </section>
        <section id='generator'>
          <Generator type='human'/>
        </section>
      </article>
    </div>
  );

  t.end();
});
