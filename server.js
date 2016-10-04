(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/virtual-events-reporting/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _boilerRoomRunner = __webpack_require__(1);

	var _routes = __webpack_require__(2);

	var _routes2 = _interopRequireDefault(_routes);

	var _store = __webpack_require__(46);

	var _store2 = _interopRequireDefault(_store);

	var _shared = __webpack_require__(50);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)();

	exports.default = function (_ref) {
	  var assets = _ref.assets;

	  var app = (0, _boilerRoomRunner.createServer)({
	    assets: assets,
	    basepath: _shared.basepath,
	    createLocals: _shared.createLocals,
	    routes: _routes2.default,
	    store: store
	  });

	  app.staticRoutes = ['/'];

	  return app;
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("boiler-room-runner");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _App = __webpack_require__(5);

	var _App2 = _interopRequireDefault(_App);

	var _Home = __webpack_require__(13);

	var _Home2 = _interopRequireDefault(_Home);

	var _campaigns = __webpack_require__(22);

	var _campaigns2 = _interopRequireDefault(_campaigns);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  _campaigns2.default
	);

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(6);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    _App2.default,
	    null,
	    children
	  );
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	__webpack_require__(7);

	var _styles = __webpack_require__(8);

	var _styles2 = _interopRequireDefault(_styles);

	var _css = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    { className: (0, _css.classes)(_styles2.default.base) },
	    _react2.default.createElement(
	      'nav',
	      { className: (0, _css.classes)(_styles2.default.nav) },
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/', className: (0, _css.classes)(_styles2.default.navLink) },
	        'Home'
	      )
	    ),
	    children
	  );
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	// empty (null-loader)

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _css = __webpack_require__(9);

	exports.default = {
	  base: {},
	  nav: {
	    backgroundColor: _css.colors.grey.dark,
	    display: 'flex'
	  },
	  navLink: {
	    flex: '0 0 auto',
	    color: _css.colors.white,
	    padding: (0, _css.rhythm)(0.5),
	    ':hover': {
	      color: _css.colors.green.primary
	    }
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.classes = undefined;

	var _traits = __webpack_require__(10);

	Object.keys(_traits).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _traits[key];
	    }
	  });
	});

	var _cxs = __webpack_require__(11);

	var _cxs2 = _interopRequireDefault(_cxs);

	var _static = __webpack_require__(12);

	var _static2 = _interopRequireDefault(_static);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var classes = exports.classes = function classes(styles) {
	  return (0, _cxs2.default)((0, _static2.default)(styles));
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var rhythm = exports.rhythm = function rhythm() {
	  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rem';
	  var basis = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.5;
	  return '' + basis * value + unit;
	};

	var scale = exports.scale = function scale() {
	  var exponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.2;
	  return Math.pow(scale, exponent) + 'rem';
	};

	var radiuses = exports.radiuses = {
	  round: rhythm(100),
	  rounded: rhythm(0.125)
	};

	var transitions = exports.transitions = {
	  easeOut: 'ease-out .25s'
	};

	var fonts = exports.fonts = {
	  interface: 'Lato, Helvetica Neue, Helvetica, sans-serif',
	  display: 'Lato, Helvetica Neue, Helvetica, sans-serif'
	};

	var colors = exports.colors = {
	  white: 'white',

	  grey: {
	    dark: '#585858',
	    light: '#b3b3b3'
	  },

	  green: {
	    primary: '#00a044',
	    secondary: '#7ec774'
	  },

	  orange: '#cf4c22'
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("cxs");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("inline-style-prefixer/static");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Home = __webpack_require__(14);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return _react2.default.createElement(_Home2.default, null);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _GetCampaign = __webpack_require__(15);

	var _GetCampaign2 = _interopRequireDefault(_GetCampaign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return _react2.default.createElement(
	    'div',
	    { style: {
	        margin: '4rem auto',
	        padding: '2rem',
	        maxWidth: '28rem',
	        border: 'thin solid lightgrey'
	      } },
	    _react2.default.createElement(_GetCampaign2.default, null)
	  );
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Button = __webpack_require__(16);

	var _Button2 = _interopRequireDefault(_Button);

	var _Input = __webpack_require__(20);

	var _Input2 = _interopRequireDefault(_Input);

	var _reactRouter = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var keys = Object.keys;


	var serializeForm = function serializeForm(inputs) {
	  return keys(inputs).reduce(function (acc, inputName) {
	    return _extends({}, acc, _defineProperty({}, inputName, inputs[inputName]));
	  }, {});
	};

	var handleSubmit = function handleSubmit(router, inputs) {
	  var _serializeForm = serializeForm(inputs);

	  var campaignUid = _serializeForm.campaignUid;


	  router.push({
	    pathname: '/campaigns/' + campaignUid + '/teams'
	  });
	};

	var GetCampaign = function GetCampaign(_ref) {
	  var router = _ref.router;

	  var inputs = {};

	  return _react2.default.createElement(
	    'form',
	    { onSubmit: function onSubmit(e) {
	        e.preventDefault();
	        handleSubmit(router, inputs);
	      } },
	    _react2.default.createElement(
	      'div',
	      { style: { marginBottom: '1rem' } },
	      _react2.default.createElement(
	        _Input.Label,
	        { htmlFor: 'campaignUid' },
	        'Campaign UID'
	      ),
	      _react2.default.createElement(_Input2.default, { id: 'campaignUid', type: 'text', onChange: function onChange(event) {
	          inputs.campaignUid = event.target.value;
	        } })
	    ),
	    _react2.default.createElement(
	      _Button2.default,
	      { type: 'submit' },
	      'Go!'
	    )
	  );
	};

	exports.default = (0, _reactRouter.withRouter)(GetCampaign);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Link = exports.Anchor = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _Base = __webpack_require__(17);

	var _Base2 = _interopRequireDefault(_Base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (props) {
	  return _react2.default.createElement(_Base2.default, _extends({ component: 'button' }, props));
	};

	var Anchor = exports.Anchor = function Anchor(props) {
	  return _react2.default.createElement(_Base2.default, _extends({ component: 'a' }, props));
	};

	var Link = exports.Link = function Link(props) {
	  return _react2.default.createElement(_Base2.default, _extends({ component: _reactRouter.Link }, props));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _css = __webpack_require__(9);

	var _merge = __webpack_require__(18);

	var _merge2 = _interopRequireDefault(_merge);

	var _styles = __webpack_require__(19);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	exports.default = function (_ref) {
	  var Component = _ref.component;

	  var props = _objectWithoutProperties(_ref, ['component']);

	  var theme = _ref.theme;
	  return _react2.default.createElement(Component, _extends({}, props, {
	    className: (0, _css.classes)((0, _merge2.default)(_styles2.default.base, _styles2.default[theme || 'basic']))
	  }));
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("lodash/merge");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _css = __webpack_require__(9);

	var createTheme = function createTheme(_ref) {
	  var backgroundColor = _ref.backgroundColor;
	  var color = _ref.color;
	  return {
	    backgroundColor: backgroundColor,
	    color: color,
	    ':hover': {
	      backgroundColor: color,
	      color: backgroundColor
	    }
	  };
	};

	exports.default = {
	  base: {
	    textAlign: 'left',
	    borderRadius: _css.radiuses.rounded,
	    display: 'inline-block',
	    marginRight: (0, _css.rhythm)(0.125, 'em'),
	    lineHeight: 1,
	    padding: (0, _css.rhythm)(0.5, 'em') + ' ' + (0, _css.rhythm)(0.75, 'em'),
	    transition: 'background-color ' + _css.transitions.easeOut,
	    borderColor: 'currentColor',
	    borderWidth: 'thin',
	    borderStyle: 'solid'
	  },
	  basic: createTheme({
	    color: _css.colors.grey.dark,
	    backgroundColor: _css.colors.white
	  }),
	  primary: createTheme({
	    color: _css.colors.green.primary,
	    backgroundColor: _css.colors.white
	  })
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Select = exports.Label = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _styles = __webpack_require__(21);

	var _styles2 = _interopRequireDefault(_styles);

	var _css = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (props) {
	  return _react2.default.createElement('input', _extends({}, props, { className: (0, _css.classes)(_styles2.default.input) }));
	};

	var Label = exports.Label = function Label(props) {
	  return _react2.default.createElement('label', _extends({}, props, { className: (0, _css.classes)(_styles2.default.label) }));
	};

	var Select = exports.Select = function Select(props) {
	  return _react2.default.createElement('select', _extends({}, props, { className: (0, _css.classes)(_styles2.default.label) }));
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _css = __webpack_require__(9);

	var input = {
	  appearance: 'none',
	  cursor: 'text',

	  fontSize: 'inherit',
	  lineHeight: (0, _css.rhythm)(1),

	  display: 'block',
	  boxSizing: 'border-box',
	  width: '100%',

	  padding: (0, _css.rhythm)(0.25) + ' ' + (0, _css.rhythm)(0.5),
	  margin: 0,

	  border: 'thin solid ' + _css.colors.grey.dark,
	  borderRadius: _css.radiuses.rounded,

	  marginRight: (0, _css.rhythm)(0.25),
	  ':last-child': { marginRight: 0 }
	};

	var label = {
	  fontSize: '0.8em',
	  textTransform: 'uppercase',
	  marginBottom: (0, _css.rhythm)(0.25)
	};

	var select = _extends({}, input, {
	  cursor: 'pointer'
	});

	exports.default = {
	  input: input,
	  select: select,
	  label: label
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reducer = undefined;

	var _reducer = __webpack_require__(23);

	Object.defineProperty(exports, 'reducer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_reducer).default;
	  }
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _Campaign = __webpack_require__(25);

	var _Campaign2 = _interopRequireDefault(_Campaign);

	var _Show = __webpack_require__(38);

	var _Show2 = _interopRequireDefault(_Show);

	var _Teams = __webpack_require__(39);

	var _Teams2 = _interopRequireDefault(_Teams);

	var _Individuals = __webpack_require__(45);

	var _Individuals2 = _interopRequireDefault(_Individuals);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
	  _reactRouter.Route,
	  {
	    path: '/campaigns/:campaignUid',
	    component: _Campaign2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, {
	    component: _Show2.default
	  }),
	  _react2.default.createElement(_reactRouter.Route, {
	    path: '/campaigns/:campaignUid/teams',
	    component: _Teams2.default
	  }),
	  _react2.default.createElement(_reactRouter.Route, {
	    path: '/campaigns/:campaignUid/individuals',
	    component: _Individuals2.default
	  })
	);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _constants = __webpack_require__(24);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var fetchCampaign = function fetchCampaign(campaigns, params) {
	  var campaignUid = params.campaignUid;


	  return _extends({}, campaigns, _defineProperty({}, campaignUid, _extends({}, campaigns[campaignUid] || {}, {
	    status: 'fetching'
	  })));
	};

	var fetchCampaignSuccess = function fetchCampaignSuccess(campaigns, _ref) {
	  var campaignUid = _ref.campaignUid;
	  var data = _ref.data;
	  return _extends({}, campaigns, _defineProperty({}, campaignUid, {
	    status: 'fetched',
	    error: null,
	    attributes: data.campaign
	  }));
	};

	var fetchCampaignFailure = function fetchCampaignFailure(campaigns, _ref2) {
	  var campaignUid = _ref2.campaignUid;
	  var error = _ref2.error;
	  return _extends({}, campaigns, _defineProperty({}, campaignUid, {
	    status: 'failed',
	    error: error
	  }));
	};

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var type = _ref3.type;
	  var payload = _ref3.payload;

	  switch (type) {
	    case _constants.FETCH_CAMPAIGN:
	      return fetchCampaign(state, payload);
	    case _constants.FETCH_CAMPAIGN_SUCCESS:
	      return fetchCampaignSuccess(state, payload);
	    case _constants.FETCH_CAMPAIGN_FAILURE:
	      return fetchCampaignFailure(state, payload);
	    default:
	      return state;
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FETCH_CAMPAIGN = exports.FETCH_CAMPAIGN = 'FETCH_CAMPAIGN';
	var FETCH_CAMPAIGN_SUCCESS = exports.FETCH_CAMPAIGN_SUCCESS = 'FETCH_CAMPAIGN_SUCCESS';
	var FETCH_CAMPAIGN_FAILURE = exports.FETCH_CAMPAIGN_FAILURE = 'FETCH_CAMPAIGN_FAILURE';

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _redux = __webpack_require__(26);

	var _reactRedux = __webpack_require__(27);

	var _redial = __webpack_require__(28);

	var _actions = __webpack_require__(29);

	var _Nav = __webpack_require__(32);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Filters = __webpack_require__(34);

	var _Filters2 = _interopRequireDefault(_Filters);

	var _Content = __webpack_require__(36);

	var _Content2 = _interopRequireDefault(_Content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var handleFilter = function handleFilter(pathname, query, router) {
	  return function (_ref) {
	    var thresholdMetric = _ref.thresholdMetric;
	    var thresholdValue = _ref.thresholdValue;
	    var fitnessActivitiesType = _ref.fitnessActivitiesType;
	    var fitnessActivitiesStartAt = _ref.fitnessActivitiesStartAt;
	    var fitnessActivitiesEndAt = _ref.fitnessActivitiesEndAt;

	    router.push({
	      pathname: pathname,
	      query: _extends({}, query, {
	        threshold_metric: thresholdMetric,
	        threshold_value: thresholdValue,
	        fitness_activities_type: fitnessActivitiesType,
	        fitness_activities_start_at: fitnessActivitiesStartAt,
	        fitness_activities_end_at: fitnessActivitiesEndAt
	      })
	    });
	  };
	};

	var hooks = {
	  fetch: function fetch(_ref2) {
	    var dispatch = _ref2.dispatch;
	    var state = _ref2.state;
	    var params = _ref2.params;
	    var campaignUid = params.campaignUid;
	    var threshold_metric = params.threshold_metric;
	    var threshold_value = params.threshold_value;
	    var fitness_activities_start_at = params.fitness_activities_start_at;
	    var fitness_activities_end_at = params.fitness_activities_end_at;
	    var fitness_activities_type = params.fitness_activities_type;


	    return dispatch((0, _actions.fetchCampaign)({
	      campaignUid: campaignUid,
	      threshold_metric: threshold_metric,
	      threshold_value: threshold_value,
	      fitness_activities_start_at: fitness_activities_start_at,
	      fitness_activities_end_at: fitness_activities_end_at,
	      fitness_activities_type: fitness_activities_type
	    }));
	  }
	};

	var mapState = function mapState(_ref3, _ref4) {
	  var campaigns = _ref3.campaigns;
	  var params = _ref4.params;
	  return {
	    campaign: campaigns[params.campaignUid]
	  };
	};

	var Campaign = function Campaign(_ref5) {
	  var _ref5$campaign = _ref5.campaign;
	  var campaign = _ref5$campaign === undefined ? {} : _ref5$campaign;
	  var _ref5$params = _ref5.params;
	  var params = _ref5$params === undefined ? {} : _ref5$params;
	  var _ref5$location = _ref5.location;
	  var location = _ref5$location === undefined ? {} : _ref5$location;
	  var router = _ref5.router;
	  var children = _ref5.children;
	  var query = location.query;


	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_Nav2.default, {
	      campaignUid: params.campaignUid,
	      query: location.query,
	      status: campaign.status,
	      campaign: campaign.attributes
	    }),
	    _react2.default.createElement(_Filters2.default, {
	      onSubmit: handleFilter(location.pathname, query, router),
	      filters: query
	    }),
	    _react2.default.createElement(
	      _Content2.default,
	      null,
	      children
	    )
	  );
	};

	exports.default = (0, _redux.compose)((0, _redial.provideHooks)(hooks), (0, _reactRedux.connect)(mapState), _reactRouter.withRouter)(Campaign);

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("redial");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setCampaignSortedBy = exports.fetchCampaign = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _qs = __webpack_require__(30);

	var _axios = __webpack_require__(31);

	var _axios2 = _interopRequireDefault(_axios);

	var _constants = __webpack_require__(24);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var API_BASE = (process.env.SUPPORTER_URL || 'https://everydayhero.com') + '/api/v3/prerelease/metrics';

	var nest = function nest(_ref) {
	  var fitnessActivitiesType = _ref.fitness_activities_type;
	  var fitnessActivitiesStartAt = _ref.fitness_activities_start_at;
	  var fitnessActivitiesEndAt = _ref.fitness_activities_end_at;
	  var _ref$fitness_activiti = _ref.fitness_activities_include_manual;
	  var fitnessActivitiesIncludeManual = _ref$fitness_activiti === undefined ? false : _ref$fitness_activiti;

	  var rest = _objectWithoutProperties(_ref, ['fitness_activities_type', 'fitness_activities_start_at', 'fitness_activities_end_at', 'fitness_activities_include_manual']);

	  return _extends({}, rest, {
	    filter: {
	      fitness_activities: {
	        type: fitnessActivitiesType,
	        start_at: fitnessActivitiesStartAt,
	        end_at: fitnessActivitiesEndAt,
	        manual: fitnessActivitiesIncludeManual ? [true, false] : false
	      }
	    }
	  });
	};

	var fetchCampaignFailure = function fetchCampaignFailure(payload) {
	  return {
	    type: _constants.FETCH_CAMPAIGN_FAILURE,
	    payload: payload
	  };
	};

	var fetchCampaignSuccess = function fetchCampaignSuccess(payload) {
	  return {
	    type: _constants.FETCH_CAMPAIGN_SUCCESS,
	    payload: payload
	  };
	};

	var fetchCampaign = exports.fetchCampaign = function fetchCampaign(_ref2) {
	  var campaignUid = _ref2.campaignUid;

	  var params = _objectWithoutProperties(_ref2, ['campaignUid']);

	  return function (dispatch) {
	    dispatch({
	      type: _constants.FETCH_CAMPAIGN,
	      payload: {
	        campaignUid: campaignUid,
	        params: params
	      }
	    });

	    (0, _axios2.default)(API_BASE + '/campaigns/' + campaignUid + '?' + (0, _qs.stringify)(nest(params))).then(function (_ref3) {
	      var data = _ref3.data;

	      dispatch(fetchCampaignSuccess({
	        campaignUid: campaignUid,
	        data: data,
	        params: params
	      }));
	    }).catch(function (error) {
	      dispatch(fetchCampaignFailure({
	        campaignUid: campaignUid,
	        error: error,
	        params: params
	      }));
	      return Promise.reject(error);
	    });
	  };
	};

	var setCampaignSortedBy = exports.setCampaignSortedBy = function setCampaignSortedBy(payload) {
	  return {
	    type: _constants.SET_CAMPAIGN_SORTED_BY,
	    payload: payload
	  };
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("qs");

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _css = __webpack_require__(9);

	var _merge = __webpack_require__(18);

	var _merge2 = _interopRequireDefault(_merge);

	var _styles = __webpack_require__(33);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	  var campaignUid = _ref.campaignUid;
	  var _ref$status = _ref.status;
	  var status = _ref$status === undefined ? 'fetching' : _ref$status;
	  var _ref$campaign = _ref.campaign;
	  var campaign = _ref$campaign === undefined ? {} : _ref$campaign;
	  var _ref$query = _ref.query;
	  var query = _ref$query === undefined ? {} : _ref$query;
	  return _react2.default.createElement(
	    'nav',
	    { className: (0, _css.classes)(_styles2.default.nav) },
	    _react2.default.createElement(
	      _reactRouter.Link,
	      {
	        className: (0, _css.classes)((0, _merge2.default)(_styles2.default.linkLarge, _styles2.default[status] || {})),
	        to: {
	          pathname: '/campaigns/' + campaignUid,
	          query: query
	        } },
	      status === 'fetching' ? 'Fetching' : status === 'failed' ? 'Failed to fetch campaign info' : campaign.name
	    ),
	    _react2.default.createElement(
	      _reactRouter.Link,
	      {
	        className: (0, _css.classes)(_styles2.default.linkBasic),
	        activeStyle: {
	          color: _css.colors.green.primary,
	          borderBottomColor: 'currentColor'
	        },
	        to: {
	          pathname: '/campaigns/' + campaignUid + '/teams',
	          query: query
	        } },
	      'Teams'
	    ),
	    _react2.default.createElement(
	      _reactRouter.Link,
	      {
	        className: (0, _css.classes)(_styles2.default.linkBasic),
	        activeStyle: {
	          color: _css.colors.green.primary,
	          borderBottomColor: 'currentColor'
	        },
	        to: {
	          pathname: '/campaigns/' + campaignUid + '/individuals',
	          query: query
	        } },
	      'Individuals'
	    )
	  );
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _css = __webpack_require__(9);

	var linkBase = {
	  padding: (0, _css.rhythm)(0.5),
	  lineHeight: (0, _css.rhythm)(1),
	  borderRight: 'thin solid ' + _css.colors.grey.light,
	  borderBottomWidth: (0, _css.rhythm)(0.25),
	  borderBottomStyle: 'solid',
	  borderBottomColor: _css.colors.grey.light,
	  ':hover': {
	    borderBottomColor: _css.colors.grey.dark
	  }
	};

	exports.default = {
	  nav: {
	    display: 'flex',
	    flexFlow: 'row'
	  },
	  linkBasic: _extends({}, linkBase, {
	    flex: '1 1 50%'
	  }),
	  linkLarge: _extends({}, linkBase, {
	    fontWeight: 'bold',
	    flex: '1 1 100%'
	  }),
	  fetching: {
	    color: _css.colors.green.primary,
	    backgroundColor: _css.colors.green.secondary,
	    backgroundImage: ['repeating-linear-gradient(\n        -45deg,\n        rgba(255, 255, 255, 0.75) 0,\n        rgba(255, 255, 255, 0.75) 25%,\n        ' + _css.colors.green.secondary + ' 25%,\n        ' + _css.colors.green.secondary + ' 50%\n      )'],
	    animation: 'progress 2s linear infinite',
	    backgroundSize: '50px 50px',

	    '@keyframes progress': {
	      '0%': {
	        backgroundPosition: '0 0'
	      },
	      '100%': {
	        backgroundPosition: '-100px 0px'
	      }
	    }
	  },

	  fetched: {
	    color: _css.colors.grey.dark,
	    backgroundColor: _css.colors.white,
	    backgroundImage: 'none',
	    animation: 'none'
	  },

	  failed: {
	    color: _css.colors.orange,
	    backgroundColor: _css.colors.white,
	    backgroundImage: 'none',
	    animation: 'none'
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Button = __webpack_require__(16);

	var _Button2 = _interopRequireDefault(_Button);

	var _styles = __webpack_require__(35);

	var _styles2 = _interopRequireDefault(_styles);

	var _css = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var keys = Object.keys;


	var serializeForm = function serializeForm(inputs) {
	  return keys(inputs).reduce(function (acc, inputName) {
	    return _extends({}, acc, _defineProperty({}, inputName, inputs[inputName].value));
	  }, {});
	};

	var handleSubmit = function handleSubmit(event) {
	  var inputs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var onSubmit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

	  event.preventDefault();
	  onSubmit(serializeForm(inputs));
	};

	var FITNESS_TYPES = ['bike', 'sport', 'walk', 'run', 'hike', 'swim', 'gym'];

	exports.default = function (_ref) {
	  var propsOnSubmit = _ref.onSubmit;
	  var _ref$filters = _ref.filters;
	  var filters = _ref$filters === undefined ? {} : _ref$filters;

	  var inputs = {};

	  return _react2.default.createElement(
	    'form',
	    { className: (0, _css.classes)(_styles2.default.base), onSubmit: function onSubmit(e) {
	        handleSubmit(e, inputs, propsOnSubmit);
	      } },
	    _react2.default.createElement(
	      'fieldset',
	      { className: (0, _css.classes)(_styles2.default.filter) },
	      _react2.default.createElement(
	        'label',
	        { className: (0, _css.classes)(_styles2.default.label), htmlFor: 'thresholdMetric' },
	        'Threshold metric'
	      ),
	      _react2.default.createElement(
	        'select',
	        {
	          id: 'thresholdMetric',
	          defaultValue: filters.threshold_metric,
	          className: (0, _css.classes)(_styles2.default.select),
	          ref: function ref(elem) {
	            inputs.thresholdMetric = elem;
	          } },
	        _react2.default.createElement(
	          'option',
	          { value: 'distance_in_meters_plus_multiplied_amount_cents' },
	          'Dollars for Ks'
	        ),
	        _react2.default.createElement(
	          'option',
	          { value: 'amount_cents' },
	          'Donations'
	        ),
	        _react2.default.createElement(
	          'option',
	          { value: 'distance_in_meters' },
	          'Distance in meters'
	        ),
	        _react2.default.createElement(
	          'option',
	          { value: 'elevation_in_meters' },
	          'Elevation in meters'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'fieldset',
	      { className: (0, _css.classes)(_styles2.default.filter) },
	      _react2.default.createElement(
	        'label',
	        { className: (0, _css.classes)(_styles2.default.label), htmlFor: 'thresholdValue' },
	        'Threshold value'
	      ),
	      _react2.default.createElement('input', {
	        id: 'thresholdValue',
	        defaultValue: filters.threshold_value,
	        className: (0, _css.classes)(_styles2.default.input),
	        type: 'number',
	        placeholder: 'The virtual "finish line"',
	        inputMode: 'numeric',
	        min: 0,
	        step: 1,
	        ref: function ref(elem) {
	          inputs.thresholdValue = elem;
	        }
	      })
	    ),
	    _react2.default.createElement(
	      'fieldset',
	      { className: (0, _css.classes)(_styles2.default.filter) },
	      _react2.default.createElement(
	        'label',
	        { className: (0, _css.classes)(_styles2.default.label), htmlFor: 'fitnessActivitiesType' },
	        'Fitness activities type'
	      ),
	      _react2.default.createElement(
	        'select',
	        {
	          id: 'fitnessActivitiesType',
	          defaultValue: filters.fitness_activities_type,
	          className: (0, _css.classes)(_styles2.default.select),
	          ref: function ref(elem) {
	            inputs.fitnessActivitiesType = elem;
	          }
	        },
	        FITNESS_TYPES.map(function (type) {
	          return _react2.default.createElement(
	            'option',
	            { value: type },
	            type
	          );
	        })
	      )
	    ),
	    _react2.default.createElement(
	      'fieldset',
	      { className: (0, _css.classes)(_styles2.default.filter) },
	      _react2.default.createElement(
	        'label',
	        { className: (0, _css.classes)(_styles2.default.label) },
	        'Fitness activities date range'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: (0, _css.classes)(_styles2.default.compoundInput) },
	        _react2.default.createElement('input', {
	          id: 'fitnessActivitiesStartAt',
	          defaultValue: filters.fitness_activities_start_at,
	          placeholder: 'YYYY-MM-DD',
	          className: (0, _css.classes)(_styles2.default.input),
	          type: 'date',
	          ref: function ref(elem) {
	            inputs.fitnessActivitiesStartAt = elem;
	          }
	        }),
	        _react2.default.createElement('input', {
	          id: 'fitnessActivitiesEndAt',
	          defaultValue: filters.fitness_activities_end_at,
	          placeholder: 'YYYY-MM-DD',
	          className: (0, _css.classes)(_styles2.default.input),
	          type: 'date',
	          ref: function ref(elem) {
	            inputs.fitnessActivitiesEndAt = elem;
	          }
	        })
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: (0, _css.classes)(_styles2.default.actions) },
	      _react2.default.createElement(
	        _Button2.default,
	        { type: 'submit' },
	        'Filter'
	      )
	    )
	  );
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _css = __webpack_require__(9);

	var input = {
	  appearance: 'none',
	  lineHeight: (0, _css.rhythm)(1),
	  padding: (0, _css.rhythm)(0.25) + ' ' + (0, _css.rhythm)(0.5),
	  border: 'thin solid ' + _css.colors.grey.dark,
	  borderRadius: _css.radiuses.rounded,
	  fontSize: 'inherit',
	  margin: 0,
	  boxSizing: 'border-box',
	  display: 'block',
	  width: '100%',
	  marginRight: (0, _css.rhythm)(0.25),
	  cursor: 'text',
	  ':last-child': {
	    marginRight: 0
	  }
	};

	var container = {
	  display: 'flex',
	  flexFlow: 'row',
	  flexWrap: 'wrap'
	};

	var label = {
	  fontSize: '0.8em',
	  textTransform: 'uppercase',
	  marginBottom: (0, _css.rhythm)(0.25)
	};

	exports.default = {
	  base: _extends({}, container, {
	    padding: (0, _css.rhythm)(0.75) + ' ' + (0, _css.rhythm)(0.25),
	    borderBottom: 'thin solid ' + _css.colors.grey.light
	  }),
	  filter: {
	    flex: '1 1 25%',
	    boxSizing: 'border-box',
	    marginBottom: (0, _css.rhythm)(0.5),
	    padding: (0, _css.rhythm)(0.25)
	  },
	  label: _extends({}, label, {
	    lineHeight: (0, _css.rhythm)(0.75),
	    display: 'block'
	  }),
	  input: _extends({}, input),
	  select: _extends({}, input, {
	    cursor: 'pointer'
	  }),
	  compoundInput: _extends({}, container, {
	    flexWrap: 'nowrap'
	  }),
	  actions: {
	    padding: (0, _css.rhythm)(0.25),
	    justifyContent: 'flex-end'
	  }
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _styles = __webpack_require__(37);

	var _styles2 = _interopRequireDefault(_styles);

	var _css = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    { className: (0, _css.classes)(_styles2.default.base) },
	    children
	  );
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _css = __webpack_require__(9);

	exports.default = {
	  base: {
	    padding: (0, _css.rhythm)(0.5)
	  }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Show = function Show(_ref) {
	  var campaign = _ref.campaign;
	  var params = _ref.params;
	  var location = _ref.location;
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'nav',
	      null,
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: {
	            pathname: '/campaigns/' + params.campaignUid + '/teams',
	            query: location.query
	          } },
	        'View Teams'
	      ),
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: {
	            pathname: '/campaigns/' + params.campaignUid + '/individuals',
	            query: location.query
	          } },
	        'View Individuals'
	      )
	    )
	  );
	};

	exports.default = (0, _reactRouter.withRouter)(Show);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(26);

	var _reactRedux = __webpack_require__(27);

	var _reactRouter = __webpack_require__(4);

	var _Table = __webpack_require__(40);

	var _Table2 = _interopRequireDefault(_Table);

	var _Typography = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapState = function mapState(_ref, _ref2) {
	  var campaigns = _ref.campaigns;
	  var params = _ref2.params;
	  return {
	    campaign: campaigns[params.campaignUid]
	  };
	};

	var setSortedBy = function setSortedBy(_ref3) {
	  var uid = _ref3.uid;
	  var router = _ref3.router;
	  var query = _ref3.query;
	  return function (attribute) {
	    return router.push({
	      pathname: '/campaigns/' + uid + '/teams',
	      query: _extends({}, query, {
	        sorted_by: attribute
	      })
	    });
	  };
	};

	var Teams = function Teams(_ref4) {
	  var _ref4$campaign = _ref4.campaign;
	  var campaign = _ref4$campaign === undefined ? {} : _ref4$campaign;
	  var params = _ref4.params;
	  var location = _ref4.location;
	  var router = _ref4.router;

	  var _ref5 = campaign.attributes || {};

	  var _ref5$teams = _ref5.teams;
	  var teams = _ref5$teams === undefined ? [] : _ref5$teams;
	  var uid = params.campaignUid;
	  var query = location.query;
	  var sortedBy = query.sorted_by;


	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _Typography.H1,
	      null,
	      'Teams'
	    ),
	    _react2.default.createElement(_Table2.default, {
	      campaignUid: params.campaignUid,
	      sortedBy: sortedBy,
	      setSortedBy: setSortedBy({
	        uid: uid,
	        router: router,
	        query: query
	      }),
	      headers: [{ attribute: 'id', label: 'ID' }, { attribute: 'name', label: 'Name' }, { attribute: 'url', label: 'URL' }, { attribute: 'total_amount_cents', label: 'Donations in cents' }, { attribute: 'total_distance_in_meters', label: 'Distance in meters' }, { attribute: 'total_elevation_in_meters', label: 'Elevation in meters' }, { attribute: 'total_threshold_value', label: 'Threshold value' }, { attribute: 'passed_threshold_at', label: 'Passed threshold at' }],
	      data: teams
	    })
	  );
	};

	exports.default = (0, _redux.compose)(_reactRouter.withRouter, (0, _reactRedux.connect)(mapState))(Teams);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Button = __webpack_require__(16);

	var _Button2 = _interopRequireDefault(_Button);

	var _papaparse = __webpack_require__(41);

	var _css = __webpack_require__(9);

	var _styles = __webpack_require__(42);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var sortedState = function sortedState(attribute, sortedBy) {
	  if (attribute === sortedBy) {
	    return 'sortedAscending';
	  } else if (sortedBy[0] === '-' && sortedBy.slice(1) === attribute) {
	    return 'sortedDescending';
	  } else {
	    return 'unsorted';
	  }
	};

	var createHeader = function createHeader() {
	  var setSortedBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
	  var sortedBy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  return function (header, index) {
	    var attribute = header.attribute;
	    var label = header.label;

	    var sortAttribute = sortedBy === attribute ? '-' + attribute : attribute;

	    return _react2.default.createElement(
	      'th',
	      { key: index, className: (0, _css.classes)(_styles2.default.cell) },
	      _react2.default.createElement(
	        'button',
	        {
	          className: (0, _css.classes)(_styles2.default[sortedState(attribute, sortedBy)]),
	          onClick: function onClick(e) {
	            return setSortedBy(sortAttribute);
	          } },
	        label
	      )
	    );
	  };
	};

	var sort = function sort(sortedBy, collection) {
	  var isReversed = sortedBy[0] === '-';
	  var attribute = isReversed ? sortedBy.slice(1) : sortedBy;

	  var sorted = collection.sort(function (a, b) {
	    if (a[attribute] === null && b[attribute] === null) {
	      return 0;
	    } else if (a[attribute] === null) {
	      return 1;
	    } else if (b[attribute] === null) {
	      return -1;
	    } else {
	      return a[attribute] - b[attribute];
	    }
	  });

	  return isReversed ? sorted.reverse() : sorted;
	};

	var createRow = function createRow(headers) {
	  return function (datum, index) {
	    return _react2.default.createElement(
	      'tr',
	      { key: index, className: (0, _css.classes)(_styles2.default.row) },
	      headers.map(function (_ref, index) {
	        var attribute = _ref.attribute;
	        return _react2.default.createElement(
	          'td',
	          { key: index, className: (0, _css.classes)(_styles2.default.cell) },
	          datum[attribute]
	        );
	      })
	    );
	  };
	};

	var Table = function (_Component) {
	  _inherits(Table, _Component);

	  function Table(props) {
	    _classCallCheck(this, Table);

	    var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

	    _this.state = {
	      downloadURL: ''
	    };
	    return _this;
	  }

	  _createClass(Table, [{
	    key: 'createCSVURL',
	    value: function createCSVURL(data) {
	      var _global = global;
	      var URL = _global.URL;
	      var Blob = _global.Blob;

	      var csv = (0, _papaparse.unparse)(data);
	      var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
	      var url = URL.createObjectURL(blob);

	      this.setState({
	        downloadURL: url
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var _props$data = _props.data;
	      var data = _props$data === undefined ? [] : _props$data;
	      var _props$headers = _props.headers;
	      var headers = _props$headers === undefined ? [] : _props$headers;
	      var _props$setSortedBy = _props.setSortedBy;
	      var setSortedBy = _props$setSortedBy === undefined ? function () {} : _props$setSortedBy;
	      var _props$sortedBy = _props.sortedBy;
	      var sortedBy = _props$sortedBy === undefined ? '' : _props$sortedBy;
	      var downloadURL = this.state.downloadURL;


	      var sorted = sort(sortedBy, data);

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: (0, _css.classes)(_styles2.default.actions) },
	          _react2.default.createElement(
	            _Button2.default,
	            { onClick: function onClick(e) {
	                return _this2.createCSVURL(sorted);
	              } },
	            'Create CSV'
	          ),
	          downloadURL && _react2.default.createElement(
	            _Button.Anchor,
	            { theme: 'primary', href: downloadURL, target: '_blank', download: 'virtual-event-info.csv' },
	            'Download CSV'
	          )
	        ),
	        _react2.default.createElement(
	          'table',
	          null,
	          _react2.default.createElement(
	            'thead',
	            null,
	            _react2.default.createElement(
	              'tr',
	              null,
	              headers.map(createHeader(setSortedBy, sortedBy))
	            )
	          ),
	          _react2.default.createElement(
	            'tbody',
	            null,
	            sorted.map(createRow(headers))
	          )
	        )
	      );
	    }
	  }]);

	  return Table;
	}(_react.Component);

	exports.default = Table;

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("papaparse");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _css = __webpack_require__(9);

	exports.default = {
	  actions: {
	    marginBottom: (0, _css.rhythm)(1)
	  },
	  cell: {
	    padding: (0, _css.rhythm)(0.5),
	    textAlign: 'left',
	    borderLeft: 'thin solid whitesmoke',
	    ':first-child': {
	      borderLeft: 'none'
	    }
	  },
	  row: {
	    borderTopColor: _css.colors.grey.light,
	    borderTopStyle: 'solid',
	    borderTopWidth: 'thin'
	  },
	  unsorted: {
	    ':before': {
	      content: '""'
	    }
	  },
	  sortedAscending: {
	    ':before': {
	      content: '"\\25B2"'
	    }
	  },
	  sortedDescending: {
	    ':before': {
	      content: '"\\25BC"'
	    }
	  }
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.H1 = undefined;

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _styles = __webpack_require__(44);

	var _styles2 = _interopRequireDefault(_styles);

	var _css = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var H1 = exports.H1 = function H1(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'h1',
	    { className: (0, _css.classes)(_styles2.default.heading1) },
	    children
	  );
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _css = __webpack_require__(9);

	var heading = {};

	exports.default = {
	  heading1: _extends({}, heading, {
	    marginTop: (0, _css.rhythm)(1.5),
	    marginBottom: (0, _css.rhythm)(1),
	    fontSize: (0, _css.scale)(2)
	  })
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Table = __webpack_require__(40);

	var _Table2 = _interopRequireDefault(_Table);

	var _reactRouter = __webpack_require__(4);

	var _redux = __webpack_require__(26);

	var _reactRedux = __webpack_require__(27);

	var _Typography = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapState = function mapState(_ref, _ref2) {
	  var campaigns = _ref.campaigns;
	  var params = _ref2.params;
	  return {
	    campaign: campaigns[params.campaignUid]
	  };
	};

	var setSortedBy = function setSortedBy(_ref3) {
	  var uid = _ref3.uid;
	  var router = _ref3.router;
	  var query = _ref3.query;
	  return function (attribute) {
	    return router.push({
	      pathname: '/campaigns/' + uid + '/individuals',
	      query: _extends({}, query, {
	        sorted_by: attribute
	      })
	    });
	  };
	};

	var Individuals = function Individuals(_ref4) {
	  var _ref4$campaign = _ref4.campaign;
	  var campaign = _ref4$campaign === undefined ? {} : _ref4$campaign;
	  var params = _ref4.params;
	  var location = _ref4.location;
	  var router = _ref4.router;

	  var _ref5 = campaign.attributes || {};

	  var _ref5$individuals = _ref5.individuals;
	  var individuals = _ref5$individuals === undefined ? [] : _ref5$individuals;
	  var uid = params.campaignUid;
	  var query = location.query;
	  var sortedBy = query.sorted_by;


	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _Typography.H1,
	      null,
	      'Individuals'
	    ),
	    _react2.default.createElement(_Table2.default, {
	      campaignUid: params.campaignUid,
	      sortedBy: sortedBy,
	      setSortedBy: setSortedBy({
	        uid: uid,
	        router: router,
	        query: query
	      }),
	      headers: [{ attribute: 'id', label: 'ID' }, { attribute: 'name', label: 'Name' }, { attribute: 'url', label: 'URL' }, { attribute: 'total_amount_cents', label: 'Donations in cents' }, { attribute: 'total_distance_in_meters', label: 'Distance in meters' }, { attribute: 'total_elevation_in_meters', label: 'Elevation in meters' }, { attribute: 'total_threshold_value', label: 'Threshold value' }, { attribute: 'passed_threshold_at', label: 'Passed threshold at' }],
	      data: individuals
	    })
	  );
	};

	exports.default = (0, _redux.compose)(_reactRouter.withRouter, (0, _reactRedux.connect)(mapState))(Individuals);

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reduxLogger = __webpack_require__(47);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducer = __webpack_require__(48);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _reduxThunk = __webpack_require__(49);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _redux = __webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PROD = process.env.NODE_ENV === 'production';

	var loggerMiddleware = (0, _reduxLogger2.default)();

	var middleware = PROD ? [_reduxThunk2.default] : [_reduxThunk2.default, loggerMiddleware];

	var createStoreWithMiddleware = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware))(_redux.createStore);

	exports.default = function () {
	  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  return createStoreWithMiddleware(_reducer2.default, initialState);
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("redux-logger");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(26);

	var _campaigns = __webpack_require__(22);

	exports.default = (0, _redux.combineReducers)({
	  campaigns: _campaigns.reducer
	});

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var createLocals = exports.createLocals = function createLocals(_ref) {
	  var store = _ref.store;
	  var _ref$params = _ref.params;
	  var params = _ref$params === undefined ? {} : _ref$params;
	  var _ref$query = _ref.query;
	  var query = _ref$query === undefined ? {} : _ref$query;
	  return {
	    state: store.getState(),
	    dispatch: store.dispatch,
	    params: _extends({}, params, query)
	  };
	};

	var basepath = exports.basepath = process.env.BASE_PATH || '';

/***/ }
/******/ ])));