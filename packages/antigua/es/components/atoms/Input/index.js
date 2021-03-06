var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { Input as SUInput } from 'semantic-ui-react';

var Input = function Input(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return React.createElement(SUInput, _extends({ className: className }, props));
};

Input.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Input;