import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ text }) => (
  <>
    <p>{text}</p>
  </>
);

TextBox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextBox;
