import React from 'react';
import tape from 'tape';
import ReactTestUtils from 'react-dom/test-utils';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';

const test = addAssertions(tape, {jsxEquals});

import Generator from '../../app/generator/generator_component'

test('Generator Component renders', (t) => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Generator type="human"/>);
  const result = renderer.getRenderOutput();
  t.jsxEquals(result,
    <div className="generator-wrapper" id="human-gen">
      <p>human</p>
      <button>Generate</button>
      <div id="name-list">
      </div>
    </div>
  );

  t.end();
});
