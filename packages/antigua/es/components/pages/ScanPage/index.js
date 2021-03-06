var _templateObject = _taggedTemplateLiteralLoose(['\n&& {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n'], ['\n&& {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';

var QrReaderWrapper = styled.div(_templateObject);

var ScanPage = function ScanPage(_ref) {
  var QrReader = _ref.QrReader,
      ScanModal = _ref.ScanModal;
  return React.createElement(
    'div',
    null,
    React.createElement(
      Helmet,
      null,
      React.createElement(
        'title',
        null,
        'QR Code Page'
      ),
      React.createElement('meta', {
        name: 'description',
        content: 'QR Code page of React.js Boilerplate application'
      })
    ),
    React.createElement(
      QrReaderWrapper,
      null,
      React.createElement(QrReader, null)
    ),
    React.createElement(ScanModal, null)
  );
};

ScanPage.propTypes = {
  QrReader: PropTypes.func.isRequired,
  ScanModal: PropTypes.func.isRequired
};

export default ScanPage;