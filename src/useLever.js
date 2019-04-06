import React from 'react';
import _get from 'lodash/get';

import Context from './context';

export default function useLever(feature, options = {}) {
  const { features, isDev } = React.useContext(Context);
  const { devOnly, enabled } = options;

  // If the feature is enabled, then we should render it.
  let isEnabled = enabled || _get(features, `[${feature}].enabled`);

  // If feature is a 'dev only' feature, and the environment is not a development environment, don't render the button.
  if ((devOnly || _get(features, `[${feature}].devOnly`)) && !isDev) {
    isEnabled = false;
  }

  return isEnabled;
}
