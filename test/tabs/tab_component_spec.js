import React from 'react';
import tape from 'tape';
import ReactTestUtils from 'react-dom/test-utils';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';

const test = addAssertions(tape, {jsxEquals});

import Tab from '../../app/tabs/tab_component'

test('Tab Component renders', (assert) => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Tab type="human"/>);
  const result = renderer.getRenderOutput();
  const expected = <div
                     className="tab"
                     id="human-tab"
                     onClick={function noRefCheck() {}}>
                     Human
                   </div>
  assert.jsxEquals(result, expected);
  assert.end();
});
