import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';

import Context from './context';

export default class Lever extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    devOnly: PropTypes.bool,
    enabled: PropTypes.bool,
    feature: PropTypes.string.isRequired
  };

  static defaultProps = {
    devOnly: false,
    enabled: false
  };

  render = () => {
    return <Context.Consumer>{this.renderChildren}</Context.Consumer>;
  };

  renderChildren = ({ features, isDev }) => {
    const { children, feature, devOnly, enabled } = this.props;

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
  };
}
