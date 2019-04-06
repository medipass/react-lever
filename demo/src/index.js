import React from 'react';
import { render } from 'react-dom';

import Lever, { useLever, LeverProvider } from '../../src';

function LeverDemoComponents() {
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

function LeverDemoHooks() {
  const isFeature1Enabled = useLever('feature1');
  const isFeature2Enabled = useLever('feature2');
  const isFeature3Enabled = useLever('feature3');
  const isFeature4Enabled = useLever('feature4', { enabled: true });
  const isFeature5Enabled = useLever('feature5', { enabled: true, devOnly: true });
  return (
    <div>
      {isFeature1Enabled && <div>Feature 1</div>}
      {isFeature2Enabled && <div>Feature 2</div>}
      {isFeature3Enabled && <div>Feature 3</div>}
      {isFeature4Enabled && <div>Feature 4</div>}
      {isFeature5Enabled && <div>Feature 5</div>}
    </div>
  );
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
    <h1>Components</h1>
    <LeverDemoComponents />
    <h1>Hooks</h1>
    <LeverDemoHooks />
  </LeverProvider>,
  document.querySelector('#demo')
);
