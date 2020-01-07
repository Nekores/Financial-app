/**
 *
 * Widget
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Widget(props) {
  return <div className={props.className}>{props.children}</div>;
}

Widget.propTypes = {};

export default Widget;
