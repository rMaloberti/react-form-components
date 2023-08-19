"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = require("react");
var _arrowUp = _interopRequireDefault(require("../assets/arrow-up.svg"));
var _arrowDown = _interopRequireDefault(require("../assets/arrow-down.svg"));
require("./index.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Select = function Select(props) {
  var placeholder = props.placeholder,
    options = props.options,
    valueSetter = props.valueSetter,
    selected = props.selected;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  var _useState3 = (0, _react.useState)(selected),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var toggleSelectState = function toggleSelectState() {
    setIsExpanded(!isExpanded);
  };
  var pickOption = function pickOption(option) {
    setValue(option);
    valueSetter(option);
    setIsExpanded(false);
  };
  (0, _react.useEffect)(function () {
    setValue(selected);
  }, [selected]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "select",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "select__header".concat(isExpanded ? ' select__header--expanded' : ''),
      onClick: toggleSelectState,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "select__header__selected".concat(value !== '' ? '' : ' select__header__selected--placeholder'),
        children: value !== '' ? value : placeholder
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "select__header__btn",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          className: "select__header__btn__icn",
          alt: "arrow button",
          src: isExpanded ? _arrowUp["default"] : _arrowDown["default"]
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "select__body".concat(!isExpanded ? '' : ' select__body--expanded'),
      children: options.map(function (option, index) {
        return option !== value ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "select__body__option",
          onClick: function onClick() {
            return pickOption(option);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "select__body__option__text",
            children: option
          })
        }, index) : null;
      })
    })]
  });
};
exports.Select = Select;