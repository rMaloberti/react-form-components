"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeedbackModal = void 0;
var _closeCircleOutline = _interopRequireDefault(require("../assets/close-circle-outline.svg"));
var _checkmarkCircleOutline = _interopRequireDefault(require("../assets/checkmark-circle-outline.svg"));
require("./index.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FeedbackModal = function FeedbackModal(props) {
  var success = props.success,
    message = props.message,
    modalController = props.modalController,
    resetForm = props.resetForm;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "modal-overlay modal-overlay--".concat(modalController.getter ? 'shown' : 'hidden'),
    onClick: function onClick() {
      modalController.setter(false);
      resetForm();
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "feedback-modal",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
        className: "feedback-modal__title",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: "feedback-modal__title__icon",
          alt: success ? 'success' : 'error',
          src: success ? _checkmarkCircleOutline["default"] : _closeCircleOutline["default"]
        }), success ? 'Employee created' : 'Something went wrong']
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "feedback-modal__text",
        children: message
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        className: "feedback-modal__validate",
        type: "button",
        children: "OK"
      })]
    })
  });
};
exports.FeedbackModal = FeedbackModal;