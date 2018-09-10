import React, { Component } from 'react';
import { render } from 'react-dom';

import Lever, { LeverProvider } from '../../src';

class LeverDemo extends Component {
  render() {
    return (
      <div>
        <Lever feature="feature1">
          <div>Feature 1</div>
        </Lever>
        <Lever feature="feature2">
          <div>Feature 2</div>
        </Lever>
        <Lever feature="feature3">
          <div>Feature 3</div>
        </Lever>
        <Lever enabled feature="feature4">
          <div>Feature 4</div>
        </Lever>
        <Lever enabled devOnly feature="feature4">
          <div>Feature 5</div>
        </Lever>
      </div>
    );
  }
}

const features = {
  feature1: { enabled: true },
  feature2: { enabled: false },
  feature3: { enabled: true, devOnly: true },
  feature4: { enabled: false },
  feature5: { enabled: false }
};

render(
  <LeverProvider isDev={process.env.APP_ENV === 'development'} features={features}>
    <LeverDemo />
  </LeverProvider>,
  document.querySelector('#demo')
);
