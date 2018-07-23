/**
 * Cancellation policies acceptance
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CancellationPoliciesAcceptance) {
      root.CancellationPoliciesAcceptance = {};
    }
    root.CancellationPoliciesAcceptance.AcceptBodyRequest = factory(root.CancellationPoliciesAcceptance.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AcceptBodyRequest model module.
   * @module model/AcceptBodyRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AcceptBodyRequest</code>.
   * valid key values accept/decline
   * @alias module:model/AcceptBodyRequest
   * @class
   * @extends Object
   */
  var exports = function() {
    var _this = this;

    return _this;
  };

  /**
   * Constructs a <code>AcceptBodyRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AcceptBodyRequest} obj Optional instance to populate.
   * @return {module:model/AcceptBodyRequest} The populated <code>AcceptBodyRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Array');

    }
    return obj;
  }




  return exports;
}));


