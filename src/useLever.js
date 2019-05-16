import React from 'react';
import _get from 'lodash/get';

import Context from './context';

export default function useLever(feature, options = {}) {
  const { features: allFeatures, isDev } = React.useContext(Context);
  const { devOnly, disabled, forceEnabled } = options;

  let features = [feature];
  if (Array.isArray(feature)) {
    features = feature;
  }

  const isEnabledSet = features.map(feature => {
    // If the feature is enabled, then we should render it.
    let isEnabled = forceEnabled || _get(allFeatures, `[${feature}].enabled`);
    if (disabled) {
      isEnabled = !isEnabled;
    }

    // If feature is a 'dev only' feature, and the environment is not a development environment, don't render the button.
    if ((devOnly || _get(allFeatures, `[${feature}].devOnly`)) && !isDev) {
      isEnabled = false;
    }

    return isEnabled;
  });
  const isAllEnabled = !isEnabledSet.some(isEnabled => !isEnabled);
  const isAtLeastOneEnabled = isEnabledSet.some(isEnabled => isEnabled);

  if (options.either) {
    return isAtLeastOneEnabled;
  }
  return isAllEnabled;
}
