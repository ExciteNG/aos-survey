"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import {loadStart} from './../actions/loading'
// import useAxios from './../../utility/axios-token-manager/init'
var initialState = {
  employees: [],
  leaves: [],
  tasks: [],
  employeeProfile: {}
};

var companyReducer = function companyReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "GET_CLIENT_PROFILE":
      return _objectSpread({}, state, {}, action.payload);

    case "GET_EMPLOYEE_PROFILE":
      return _objectSpread({}, state, {
        employeeProfile: _objectSpread({}, action.payload)
      });

    case "GET_TASKS":
      return _objectSpread({}, state, {
        tasks: action.payload
      });

    case "GET_LEAVES":
      return _objectSpread({}, state, {
        leaves: action.payload
      });

    default:
      return state;
  }
};

var _default = companyReducer;
exports["default"] = _default;