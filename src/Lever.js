import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';

import Context from './context';

const Lever = ({ children, feature, devOnly, enabled }) => (
  <Context.Consumer>
    {({ features, isDev }) => {
      // If the feature is enabled, then we should render it.
      let shouldRender = enabled || _get(features, `[${feature}].enabled`);

      // If feature is a 'dev only' feature, and the environment is not a development environment, don't render the button.
      if ((devOnly || _get(features, `[${feature}].devOnly`)) && !isDev) {
        shouldRender = false;
      }

      if (shouldRender) {
        return children;
      }
      return null;
    }}
  </Context.Consumer>
);

Lever.propTypes = {
  children: PropTypes.node.isRequired,
  devOnly: PropTypes.bool,
  enabled: PropTypes.bool,
  feature: PropTypes.string.isRequired
};

Lever.defaultProps = {
  devOnly: false,
  enabled: false
};

export default Lever;
