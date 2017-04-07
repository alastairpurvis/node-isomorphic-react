require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _express = __webpack_require__(23);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _cookieParser = __webpack_require__(22);
  
  var _cookieParser2 = _interopRequireDefault(_cookieParser);
  
  var _bodyParser = __webpack_require__(21);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _allowCrossDomain = __webpack_require__(10);
  
  var _allowCrossDomain2 = _interopRequireDefault(_allowCrossDomain);
  
  var _allowMethods = __webpack_require__(11);
  
  var _allowMethods2 = _interopRequireDefault(_allowMethods);
  
  var _email = __webpack_require__(7);
  
  var _email2 = _interopRequireDefault(_email);
  
  var _store = __webpack_require__(13);
  
  var _store2 = _interopRequireDefault(_store);
  
  var _config = __webpack_require__(14);
  
  var _config2 = _interopRequireDefault(_config);
  
  var _invoice = __webpack_require__(12);
  
  var _invoice2 = _interopRequireDefault(_invoice);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var server = global.server = (0, _express2.default)();
  
  // Register Node.js middleware
  /**
   * MIT License
   *
   * Copyright (c) 2017 Skin Moderne Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  
  server.use(_allowCrossDomain2.default);
  server.use(_allowMethods2.default);
  
  server.use((0, _cookieParser2.default)());
  server.use(_bodyParser2.default.urlencoded({ extended: true }));
  server.use(_bodyParser2.default.json());
  
  server.use('/api/email', _email2.default);
  server.use('/api/invoice', _invoice2.default);
  
  (0, _store2.default)(server);
  
  // Launch the server
  server.listen(_config2.default.api.PORT, function () {
    console.log('The API server is running at port ' + _config2.default.api.PORT);
  });

/***/ },
/* 1 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  /**
   * MIT License
   *
   * Copyright (c) 2017 Skin Moderne Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  
  var headers = exports.headers = {
      accessControl: {
          ALLOW_ORIGIN: '*',
          ALLOW_HEADERS: 'Content-Type, Authorization, Content-Length, X-Requested-With',
          ALLOW_METHODS: 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }
  },
      aws = exports.aws = {
      FROM: '<your_aws.from>',
      REGION: '<your_aws.region>',
      SELLERS: '<your_aws.sellers>' // string or array of emails
  },
      auth = exports.auth = {
      // https://developers.facebook.com/
      facebook: {
          id: '<your_facebook_app_id>',
          secret: '<your_facebook_app_secret>'
      },
  
      // https://schema.io
      schemaIO: {
          clientId: 'angularcommerce',
          clientSecret: 'qww4HTd6rDDEZcDLMZBahLce2wehQCEk',
          protocol: 'https://',
          host: 'api.schema.io'
      },
  
      aws: {
          accessKeyId: '<your_aws_access_key_id>',
          secretAccessKey: '<your_aws_secre_access_key>'
      }
  };

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("lodash");

/***/ },
/* 3 */
/***/ function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * MIT License
   *
   * Copyright (c) 2017 Skin Moderne Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  
  var statusCodes = exports.statusCodes = {
    OK: 200,
    BAD_REQUEST: 400,
    PAGE_NOT_FOUND: 404,
    INTERNAL_ERROR: 500
  };

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _stringify = __webpack_require__(8);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _statusCodes = __webpack_require__(15);
  
  var _statusCodes2 = _interopRequireDefault(_statusCodes);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var SEC_DELIMITER = 1000; /**
                             * MIT License
                             *
                             * Copyright (c) 2017 Skin Moderne Inc.
                             *
                             * Permission is hereby granted, free of charge, to any person obtaining a copy
                             * of this software and associated documentation files (the "Software"), to deal
                             * in the Software without restriction, including without limitation the rights
                             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                             * copies of the Software, and to permit persons to whom the Software is
                             * furnished to do so, subject to the following conditions:
                             *
                             * The above copyright notice and this permission notice shall be included in all
                             * copies or substantial portions of the Software.
                             *
                             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                             * SOFTWARE.
                             */
  
  var Logger = function () {
      function Logger() {
          (0, _classCallCheck3.default)(this, Logger);
      }
  
      (0, _createClass3.default)(Logger, [{
          key: 'add',
          value: function add(_ref) {
              var req = _ref.req,
                  params = _ref.params,
                  time = _ref.time,
                  statusCode = _ref.statusCode;
  
              var statusText = statusCode === _statusCodes2.default.OK ? 'SUCCESS' : 'FAIL';
  
              console.log('[' + statusText + '] [' + new Date() + ']\n            method: ' + req.method.toUpperCase() + ',\n            path: ' + (req.baseUrl + req.path) + ',\n            params: ' + (0, _stringify2.default)(params) + ',\n            time: ' + time / SEC_DELIMITER + ' ms');
          }
      }]);
      return Logger;
  }();
  
  exports.default = Logger;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _fs = __webpack_require__(24);
  
  var _handlebars = __webpack_require__(25);
  
  var _handlebars2 = _interopRequireDefault(_handlebars);
  
  var _path = __webpack_require__(28);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _lodash = __webpack_require__(2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * MIT License
   *
   * Copyright (c) 2017 Skin Moderne Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  
  var data = {
      resetPassword: {
          path: './email/templates/resetPassword.html',
          subject: 'Reset Password'
      },
      registration: {
          path: './email/templates/registration.html',
          subject: 'Thanks for the registration!'
      },
      order: {
          path: './email/templates/order.html',
          subject: 'Order'
      },
      invoice: {
          path: './email/templates/invoice.html',
          subject: 'Order Invoice'
      },
      receipt: {
          path: './email/templates/receipt.html',
          subject: 'Receipt'
      }
  },
      templates = (0, _lodash.reduce)(data, function (result, item, key) {
      var dirname = __dirname.split('email'),
          fileData = (0, _fs.readFileSync)(_path2.default.join(dirname[0], item.path), 'utf-8');
  
      result[key] = {
          subject: item.subject,
          template: _handlebars2.default.compile(fileData)
      };
  
      return result;
  }, {});
  
  exports.default = templates;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _email = __webpack_require__(6);
  
  var _email2 = _interopRequireDefault(_email);
  
  var _sendEmail = __webpack_require__(9);
  
  var _email3 = __webpack_require__(16);
  
  var _lodash = __webpack_require__(2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * MIT License
   *
   * Copyright (c) 2017 Skin Moderne Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  
  function email(req, res) {
      var _req$body = req.body,
          type = _req$body.type,
          email = _req$body.email,
          data = _req$body.data,
          _req$body$attachments = _req$body.attachments,
          attachments = _req$body$attachments === undefined ? [] : _req$body$attachments,
          _templates$type = _email2.default[type],
          template = _templates$type.template,
          subject = _templates$type.subject;
  
  
      (0, _sendEmail.sendEmail)({
          destinations: email,
          content: getRawEmailContent(subject, template(data), attachments)
      }, function (err, data) {
          return err ? res.send(err) : res.send(data);
      });
  }
  
  function getRawEmailContent(subject, html, attachments) {
      var body = (0, _email3.buildEmailBodyMarkup)({ subject: subject, html: html });
  
      if ((0, _lodash.isEmpty)(attachments)) {
          return body;
      } else {
          return (0, _lodash.reduce)(attachments, function (memo, _ref) {
              var name = _ref.name,
                  content = _ref.content;
  
              memo += (0, _email3.buildEmailAttachmentMarkup)({
                  attachmentName: name,
                  content: content
              });
  
              return memo;
          }, body) + '\n\n--boundary--';
      }
  }
  
  exports.default = email;

/***/ },
/* 8 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _extends2 = __webpack_require__(4);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  exports.sendEmail = sendEmail;
  
  var _awsSdk = __webpack_require__(17);
  
  var _awsSdk2 = _interopRequireDefault(_awsSdk);
  
  var _config = __webpack_require__(1);
  
  var _lodash = __webpack_require__(2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var ses = new _awsSdk2.default.SES((0, _extends3.default)({}, _config.auth.aws, {
      region: _config.aws.REGION
  })); /**
        * MIT License
        *
        * Copyright (c) 2017 Skin Moderne Inc.
        *
        * Permission is hereby granted, free of charge, to any person obtaining a copy
        * of this software and associated documentation files (the "Software"), to deal
        * in the Software without restriction, including without limitation the rights
        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the Software is
        * furnished to do so, subject to the following conditions:
        *
        * The above copyright notice and this permission notice shall be included in all
        * copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        * SOFTWARE.
        */
  
  function sendEmail(_ref) {
      var _ref$destinations = _ref.destinations,
          destinations = _ref$destinations === undefined ? [] : _ref$destinations,
          _ref$content = _ref.content,
          content = _ref$content === undefined ? '' : _ref$content;
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
          return null;
      };
  
      var params = {
          Source: _config.aws.FROM,
          Destinations: parseEmailAddresses(destinations),
          RawMessage: {
              Data: content
          }
      };
  
      ses.sendRawEmail(params, cb);
  }
  
  function parseEmailAddresses(destinations) {
      if ((0, _lodash.isArray)(destinations)) {
          return destinations;
      } else {
          return (0, _lodash.split)(destinations, ',');
      }
  }

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _config = __webpack_require__(1);
  
  function allowCrossDomain(req, res, next) {
    res.set('Access-Control-Allow-Origin', _config.headers.accessControl.ALLOW_ORIGIN);
    res.set('Access-Control-Allow-Headers', _config.headers.accessControl.ALLOW_HEADERS);
    next();
  } /**
     * MIT License
     *
     * Copyright (c) 2017 Skin Moderne Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     */
  
  exports.default = allowCrossDomain;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _constants = __webpack_require__(3);
  
  var _config = __webpack_require__(1);
  
  /**
   * MIT License
   *
   * Copyright (c) 2017 Skin Moderne Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  
  function allowMethods(req, res, next) {
      if (req.method === 'OPTIONS') {
          res.set('Access-Control-Allow-Methods', _config.headers.accessControl.ALLOW_METHODS);
  
          res.sendStatus(_constants.statusCodes.OK);
      } else {
          next();
      }
  };
  
  exports.default = allowMethods;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _extends2 = __webpack_require__(4);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _email = __webpack_require__(6);
  
  var _email2 = _interopRequireDefault(_email);
  
  var _constants = __webpack_require__(3);
  
  var _htmlPdf = __webpack_require__(26);
  
  var _htmlPdf2 = _interopRequireDefault(_htmlPdf);
  
  var _email3 = __webpack_require__(7);
  
  var _email4 = _interopRequireDefault(_email3);
  
  var _moment = __webpack_require__(27);
  
  var _moment2 = _interopRequireDefault(_moment);
  
  var _Logger = __webpack_require__(5);
  
  var _Logger2 = _interopRequireDefault(_Logger);
  
  var _config = __webpack_require__(1);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var options = {
      format: 'Letter'
  },
      logger = new _Logger2.default(); /**
                                        * MIT License
                                        *
                                        * Copyright (c) 2017 Skin Moderne Inc.
                                        *
                                        * Permission is hereby granted, free of charge, to any person obtaining a copy
                                        * of this software and associated documentation files (the "Software"), to deal
                                        * in the Software without restriction, including without limitation the rights
                                        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                        * copies of the Software, and to permit persons to whom the Software is
                                        * furnished to do so, subject to the following conditions:
                                        *
                                        * The above copyright notice and this permission notice shall be included in all
                                        * copies or substantial portions of the Software.
                                        *
                                        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                        * SOFTWARE.
                                        */
  
  function invoice(req, res) {
      var data = req.body.data,
          receiptTemplate = _email2.default['receipt'].template,
          invoiceTemplate = _email2.default['invoice'].template,
          modifiedData = (0, _extends3.default)({}, data, {
          date_created: (0, _moment2.default)(data.date_created).format('YYYY-MM-DD')
      }),
          invoiceHtml = invoiceTemplate(modifiedData),
          receiptHtml = receiptTemplate(modifiedData);
  
  
      logger.add({
          req: req,
          params: req.body,
          statusCode: _constants.statusCodes.OK,
          time: 0
      });
  
      _htmlPdf2.default.create(invoiceHtml, options).toBuffer(function (errInvoice, datInvoice) {
          if (!errInvoice) {
              _htmlPdf2.default.create(receiptHtml, options).toBuffer(function (errReceipt, datReceipt) {
                  if (!errReceipt) {
                      req.body.attachments = [{ content: datInvoice.toString('base64'), name: 'invoice.pdf' }, { content: datReceipt.toString('base64'), name: 'receipt.pdf' }];
                      req.body.data = modifiedData;
                      req.body.email = _config.aws.SELLERS;
  
                      (0, _email4.default)(req, res);
                  } else {
                      console.log('Cannot create receipt pdf');
                      console.log(errReceipt);
                  }
              });
          } else {
              console.log('Cannot create invoice pdf');
              console.log(errInvoice);
          }
      });
  }
  
  exports.default = invoice;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _stringify = __webpack_require__(8);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _typeof2 = __webpack_require__(20);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  var _extends2 = __webpack_require__(4);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _constants = __webpack_require__(3);
  
  var _config = __webpack_require__(1);
  
  var _Logger = __webpack_require__(5);
  
  var _Logger2 = _interopRequireDefault(_Logger);
  
  var _schemaClient = __webpack_require__(29);
  
  var _schemaClient2 = _interopRequireDefault(_schemaClient);
  
  var _lodash = __webpack_require__(2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var schemaClient = new _schemaClient2.default.Client(_config.auth.schemaIO.clientId, _config.auth.schemaIO.clientSecret),
      logger = new _Logger2.default(),
      API_PATH = '/api'; /**
                          * MIT License
                          *
                          * Copyright (c) 2017 Skin Moderne Inc.
                          *
                          * Permission is hereby granted, free of charge, to any person obtaining a copy
                          * of this software and associated documentation files (the "Software"), to deal
                          * in the Software without restriction, including without limitation the rights
                          * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                          * copies of the Software, and to permit persons to whom the Software is
                          * furnished to do so, subject to the following conditions:
                          *
                          * The above copyright notice and this permission notice shall be included in all
                          * copies or substantial portions of the Software.
                          *
                          * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                          * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                          * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                          * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                          * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                          * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                          * SOFTWARE.
                          */
  
  function isGetMethod(_ref) {
      var method = _ref.method;
  
      return method === 'GET';
  }
  
  function getParams(req) {
      var params = isGetMethod(req) ? req.query : req.body,
          constParams = req.constParams || {};
  
      if ((0, _lodash.isUndefined)(req.interface)) {
          return (0, _extends3.default)({}, params, constParams);
      }
  
      return (0, _lodash.reduce)(params, function (memo, param, key) {
          if ((0, _lodash.includes)(req.interface, key)) {
              memo[key] = param;
          }
  
          return memo;
      }, constParams);
  }
  
  function createFilterParams(_ref2) {
      var query = _ref2.query;
  
      var result = [];
  
      if (query.category_id) {
          result.push({ 'category_index.id': query.category_id });
  
          if (!(0, _lodash.isEmpty)(query.filter)) {
              query.filter.manufacturers_ids && result.push({
                  $or: (0, _lodash.map)(query.filter.manufacturers_ids, function (id) {
                      return { 'category_index.id': id };
                  })
              });
              query.filter.categories_ids && result.push({
                  $or: (0, _lodash.map)(query.filter.categories_ids, function (id) {
                      return { 'category_index.id': id };
                  })
              });
          }
      }
  
      return (0, _lodash.isEmpty)(result) ? {} : { $and: result };
  }
  
  function callback(req, res) {
      var startTime = new Date().getTime(),
          params = getParams(req);
  
      schemaClient[req.method.toLowerCase()](req.modelPath, params).then(function (data) {
          var endTime = new Date().getTime();
  
          res.set('Content-Type', 'application/json').status(_constants.statusCodes.OK).send(data.toJSON());
  
          logger.add({
              req: req,
              params: params,
              statusCode: _constants.statusCodes.OK,
              time: endTime - startTime
          });
      }).catch(function (error) {
          var endTime = new Date().getTime();
  
          if ((typeof error === 'undefined' ? 'undefined' : (0, _typeof3.default)(error)) === 'object') {
              res.status(_constants.statusCodes.BAD_REQUEST).send((0, _stringify2.default)(error));
          } else {
              res.status(_constants.statusCodes.BAD_REQUEST).send({
                  errors: {
                      url: error
                  }
              });
          }
  
          logger.add({
              req: req,
              params: params,
              statusCode: _constants.statusCodes.BAD_REQUEST,
              time: endTime - startTime
          });
      });
  }
  
  function store(server) {
      // Categories
      server.route(API_PATH + '/categories').all(function (req, res, next) {
          req.modelPath = '/categories';
          req.interface = ['active', 'navigation', 'type', 'slug'];
          req.constParams = {
              fields: ['active', 'id', 'slug', 'parent_id', 'name', 'type', 'navigation', 'sizes'],
              limit: -1,
              active: true
          };
  
          next();
      }).get(callback);
  
      // Products
      server.route(API_PATH + '/products').all(function (req, res, next) {
          req.modelPath = '/products';
          req.interface = ['limit', 'page', 'active'];
          req.constParams = (0, _extends3.default)({
              fields: ['categories', 'manufacturer_name', 'currency', 'description', 'id', 'images', 'name', 'options', 'price', 'runway', 'season', 'slug', 'sku', 'sizes'],
              active: true
          }, createFilterParams(req));
  
          next();
      }).get(callback);
  
      // Filter
      server.route(API_PATH + '/filter').all(function (req, res, next) {
          req.modelPath = '/products';
          req.interface = [];
          req.constParams = (0, _extends3.default)({
              fields: ['category_index'],
              active: true,
              limit: -1
          }, createFilterParams(req));
  
          next();
      }).get(callback);
  
      // Product
      server.route(API_PATH + '/product').all(function (req, res, next) {
          req.modelPath = '/products';
          req.interface = ['slug'];
          req.constParams = {
              fields: ['variants', 'categories', 'manufacturer_name', 'currency', 'description', 'id', 'images', 'name', 'options', 'price', 'runway', 'season', 'slug', 'sku', 'sizes', 'recommended_products'],
              active: true,
              expand: ['variants', 'categories.parent', 'recommended_products.product.categories.parent']
          };
  
          next();
      }).get(callback);
  
      // User
      server.route(API_PATH + '/accounts*').all(function (req, res, next) {
          req.modelPath = req.path.replace('/api', '');
          req.interface = ['email', 'facebook_id', 'first_name', 'phone', 'shipping'];
  
          next();
      }).get(function (req, res, next) {
          var pathParams = (0, _lodash.trim)(req.modelPath, '/').split('/');
  
          if (pathParams[1] || req.query && req.query.password_reset_code) {
              callback(req, res, next);
          } else {
              res.send('Cannot GET ' + req.path);
          }
      }).post(callback).put(callback);
  
      // Cart
      server.route(API_PATH + '/carts*').all(function (req, res, next) {
          req.modelPath = req.path.replace('/api', '');
  
          next();
      }).get(function (req, res, next) {
          var pathParams = (0, _lodash.trim)(req.modelPath, '/').split('/');
  
          req.constParams = {
              expand: ['items.product', 'items.variant']
          };
  
          if (pathParams[1]) {
              callback(req, res, next);
          } else {
              res.send('Cannot GET ' + req.path);
          }
      }).post(callback).delete(callback);
  
      // Order
      server.route(API_PATH + '/orders*').all(function (req, res, next) {
          req.interface = ['account_id', 'cart_id', 'order_number', 'shipping', 'items', 'first_name', 'phone', 'email', 'comments'];
          req.constParams = {
              closed: 'false'
          };
          req.modelPath = req.path.replace('/api', '');
  
          next();
      }).get(function (req, res, next) {
          if (req.query && req.query.account_id) {
              callback(req, res, next);
          } else {
              res.send('Missing required parameter "account_id".');
          }
      }).post(callback);
  }
  
  exports.default = store;

/***/ },
/* 14 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  /**
   * MIT License
   *
   * Copyright (c) 2017 Skin Moderne Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  
  var servers = {
      api: {
          PORT: process.env.PORT || 4001
      },
      static: {
          HOST: process.env.HOST || 'http://localhost',
          PORT: process.env.PORT || 8080
      }
  };
  
  exports.default = servers;

/***/ },
/* 15 */
/***/ function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * MIT License
   *
   * Copyright (c) 2017 Skin Moderne Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  
  var statusCodes = {
    OK: 200,
    BAD_REQUEST: 400,
    PAGE_NOT_FOUND: 404,
    INTERNAL_ERROR: 500
  };
  
  exports.default = statusCodes;

/***/ },
/* 16 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.buildEmailBodyMarkup = buildEmailBodyMarkup;
  exports.buildEmailAttachmentMarkup = buildEmailAttachmentMarkup;
  /**
   * MIT License
   *
   * Copyright (c) 2017 Skin Moderne Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  
  function buildEmailBodyMarkup(_ref) {
      var subject = _ref.subject,
          html = _ref.html;
  
      return 'Subject: ' + subject + '\nAccept-Language: en-US\nContent-Language: en-US\nContent-Type: multipart/mixed; boundary="boundary"\nMIME-Version: 1.0\n\n--boundary\nContent-Type: text/html; charset="utf-8"\nContent-Transfer-Encoding: base64\n' + new Buffer(html).toString('base64');
  }
  
  function buildEmailAttachmentMarkup(_ref2) {
      var attachmentName = _ref2.attachmentName,
          content = _ref2.content;
  
      return '\n\n--boundary\nContent-Type: application/pdf; name="' + attachmentName + '"\nContent-Description: ' + attachmentName + '\nContent-Disposition: attachment; filename="' + attachmentName + '";\nContent-Transfer-Encoding: base64\n' + content + '\n';
  }

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("aws-sdk");

/***/ },
/* 18 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 19 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 21 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = require("cookie-parser");

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("handlebars");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("html-pdf");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("moment");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("schema-client");

/***/ }
/******/ ]);
//# sourceMappingURL=api-server.js.map