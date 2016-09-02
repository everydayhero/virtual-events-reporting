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

	var _store = __webpack_require__(25);

	var _store2 = _interopRequireDefault(_store);

	var _shared = __webpack_require__(30);

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

	var _Home = __webpack_require__(8);

	var _Home2 = _interopRequireDefault(_Home);

	var _campaigns = __webpack_require__(11);

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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'nav',
	      null,
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: '/' },
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

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Home = __webpack_require__(9);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return _react2.default.createElement(_Home2.default, null);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _GetCampaign = __webpack_require__(10);

	var _GetCampaign2 = _interopRequireDefault(_GetCampaign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  return _react2.default.createElement(_GetCampaign2.default, null);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var keys = Object.keys;


	var serializeForm = function serializeForm(inputs) {
	  return keys(inputs).reduce(function (acc, inputName) {
	    return _extends({}, acc, _defineProperty({}, inputName, inputs[inputName].value));
	  }, {});
	};

	var handleSubmit = function handleSubmit(router, inputs) {
	  var _serializeForm = serializeForm(inputs);

	  var campaignUid = _serializeForm.campaignUid;
	  var thresholdMetric = _serializeForm.thresholdMetric;
	  var thresholdValue = _serializeForm.thresholdValue;


	  router.push({
	    pathname: '/campaigns/' + campaignUid,
	    query: {
	      threshold_metric: thresholdMetric,
	      threshold_value: thresholdValue
	    }
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
	      null,
	      _react2.default.createElement(
	        'label',
	        { htmlFor: 'campaignUid' },
	        'Campaign UID'
	      ),
	      _react2.default.createElement('input', { id: 'campaignUid', type: 'text', ref: function ref(elem) {
	          inputs.campaignUid = elem;
	        } })
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'label',
	        { htmlFor: 'thresholdMetric' },
	        'Threshold metric'
	      ),
	      _react2.default.createElement(
	        'select',
	        { id: 'thresholdMetric', ref: function ref(elem) {
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
	      'div',
	      null,
	      _react2.default.createElement(
	        'label',
	        { htmlFor: 'thresholdValue' },
	        'Threshold value'
	      ),
	      _react2.default.createElement('input', {
	        id: 'thresholdValue',
	        type: 'number',
	        inputMode: 'numeric',
	        min: 0,
	        step: 1,
	        ref: function ref(elem) {
	          inputs.thresholdValue = elem;
	        }
	      })
	    ),
	    _react2.default.createElement(
	      'button',
	      { type: 'submit' },
	      'Go!'
	    )
	  );
	};

	exports.default = (0, _reactRouter.withRouter)(GetCampaign);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reducer = undefined;

	var _reducer = __webpack_require__(12);

	Object.defineProperty(exports, 'reducer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_reducer).default;
	  }
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _Campaign = __webpack_require__(14);

	var _Campaign2 = _interopRequireDefault(_Campaign);

	var _Show = __webpack_require__(20);

	var _Show2 = _interopRequireDefault(_Show);

	var _Teams = __webpack_require__(21);

	var _Teams2 = _interopRequireDefault(_Teams);

	var _Individuals = __webpack_require__(24);

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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _constants = __webpack_require__(13);

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
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var _ref3 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

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
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var FETCH_CAMPAIGN = exports.FETCH_CAMPAIGN = 'FETCH_CAMPAIGN';
	var FETCH_CAMPAIGN_SUCCESS = exports.FETCH_CAMPAIGN_SUCCESS = 'FETCH_CAMPAIGN_SUCCESS';
	var FETCH_CAMPAIGN_FAILURE = exports.FETCH_CAMPAIGN_FAILURE = 'FETCH_CAMPAIGN_FAILURE';

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(15);

	var _reactRedux = __webpack_require__(16);

	var _redial = __webpack_require__(17);

	var _reactRouter = __webpack_require__(4);

	var _actions = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hooks = {
	  fetch: function fetch(_ref) {
	    var dispatch = _ref.dispatch;
	    var state = _ref.state;
	    var params = _ref.params;
	    var campaignUid = params.campaignUid;
	    var threshold_metric = params.threshold_metric;
	    var threshold_value = params.threshold_value;


	    return dispatch((0, _actions.fetchCampaign)({
	      campaignUid: campaignUid,
	      threshold_metric: threshold_metric,
	      threshold_value: threshold_value
	    }));
	  }
	};

	var mapState = function mapState(_ref2, _ref3) {
	  var campaigns = _ref2.campaigns;
	  var params = _ref3.params;
	  return {
	    campaign: campaigns[params.campaignUid]
	  };
	};

	var Campaign = function Campaign(_ref4) {
	  var campaign = _ref4.campaign;
	  var params = _ref4.params;
	  var location = _ref4.location;
	  var children = _ref4.children;
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
	        'Teams'
	      ),
	      _react2.default.createElement(
	        _reactRouter.Link,
	        { to: {
	            pathname: '/campaigns/' + params.campaignUid + '/individuals',
	            query: location.query
	          } },
	        'Individuals'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      null,
	      children
	    )
	  );
	};

	exports.default = (0, _redux.compose)((0, _redial.provideHooks)(hooks), (0, _reactRedux.connect)(mapState))(Campaign);

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("redial");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setCampaignSortedBy = exports.fetchCampaign = undefined;

	var _axios = __webpack_require__(19);

	var _axios2 = _interopRequireDefault(_axios);

	var _constants = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var API_BASE = (process.env.SUPPORTER_URL || 'https://everydayhero-staging.com') + '/api/v3/prerelease/metrics';

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

	var fetchCampaign = exports.fetchCampaign = function fetchCampaign(_ref) {
	  var campaignUid = _ref.campaignUid;

	  var params = _objectWithoutProperties(_ref, ['campaignUid']);

	  return function (dispatch) {
	    dispatch({
	      type: _constants.FETCH_CAMPAIGN,
	      payload: {
	        campaignUid: campaignUid,
	        params: params
	      }
	    });

	    (0, _axios2.default)(API_BASE + '/campaigns/' + campaignUid, {
	      params: params
	    }).then(function (_ref2) {
	      var data = _ref2.data;

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
/* 19 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(15);

	var _reactRedux = __webpack_require__(16);

	var _reactRouter = __webpack_require__(4);

	var _Table = __webpack_require__(22);

	var _Table2 = _interopRequireDefault(_Table);

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
	      'h1',
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _papaparse = __webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var createHeader = function createHeader() {
	  var setSortedBy = arguments.length <= 0 || arguments[0] === undefined ? function () {} : arguments[0];
	  var sortedBy = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	  return function (header, index) {
	    var attribute = header.attribute;
	    var label = header.label;

	    var sortAttribute = sortedBy === attribute ? '-' + attribute : attribute;

	    return _react2.default.createElement(
	      'th',
	      { key: index },
	      _react2.default.createElement(
	        'button',
	        { onClick: function onClick(e) {
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
	    return a[attribute] - b[attribute];
	  });

	  return isReversed ? sorted.reverse() : sorted;
	};

	var createRow = function createRow(headers) {
	  return function (datum, index) {
	    return _react2.default.createElement(
	      'tr',
	      { key: index },
	      headers.map(function (_ref, index) {
	        var attribute = _ref.attribute;
	        return _react2.default.createElement(
	          'td',
	          { key: index },
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
	          'button',
	          { onClick: function onClick(e) {
	              return _this2.createCSVURL(sorted);
	            } },
	          'Create CSV'
	        ),
	        downloadURL && _react2.default.createElement(
	          'a',
	          { href: downloadURL, target: '_blank', download: 'virtual-event-info.csv' },
	          'Download CSV'
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
/* 23 */
/***/ function(module, exports) {

	module.exports = require("papaparse");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Table = __webpack_require__(22);

	var _Table2 = _interopRequireDefault(_Table);

	var _reactRouter = __webpack_require__(4);

	var _redux = __webpack_require__(15);

	var _reactRedux = __webpack_require__(16);

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
	      'h1',
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reduxLogger = __webpack_require__(26);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducer = __webpack_require__(27);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _reduxThunk = __webpack_require__(29);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _redux = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PROD = process.env.NODE_ENV === 'production';

	var loggerMiddleware = (0, _reduxLogger2.default)();

	var middleware = PROD ? [_reduxThunk2.default] : [_reduxThunk2.default, loggerMiddleware];

	var createStoreWithMiddleware = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware))(_redux.createStore);

	exports.default = function () {
	  var initialState = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  return createStoreWithMiddleware(_reducer2.default, initialState);
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("redux-logger");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(15);

	var _reactRouterRedux = __webpack_require__(28);

	var _campaigns = __webpack_require__(11);

	exports.default = (0, _redux.combineReducers)({
	  campaigns: _campaigns.reducer,
	  routing: _reactRouterRedux.routerReducer
	});

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("react-router-redux");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 30 */
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