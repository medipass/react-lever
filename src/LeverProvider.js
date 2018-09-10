import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _isEqual from 'lodash/isEqual';

import Context from './context';

export default class LeverProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isDev: PropTypes.bool.isRequired,
    features: PropTypes.object.isRequired
  };

  state = {
    isDev: this.props.isDev,
    features: this.props.features
  };

  static getDerivedStateFromProps = (nextProps, prevState) => {
    if (!_isEqual(nextProps.features, prevState.features)) {
      return {
        features: nextProps.features
      };
    }
    return null;
  };

  render = () => {
    const { children } = this.props;
    return <Context.Provider value={this.state}>{children}</Context.Provider>;
  };
}
