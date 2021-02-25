import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notification extends Component {
  render() {
    return (
      <>
        <h3>{this.props.msg}</h3>
      </>
    );
  }
}

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};
