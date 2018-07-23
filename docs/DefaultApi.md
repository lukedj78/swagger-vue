# CancellationPoliciesAcceptance.DefaultApi

All URIs are relative to *http://192.168.169.20:8085/policies*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acceptedAllCancellationPolicies**](DefaultApi.md#acceptedAllCancellationPolicies) | **PUT** /{quotationId}/accepted | Accept cancellation policy
[**createCancellationPolicyEntries**](DefaultApi.md#createCancellationPolicyEntries) | **POST** /{quotationId} | Save cancellation policies
[**deleteAllCancellationPolicyEntry**](DefaultApi.md#deleteAllCancellationPolicyEntry) | **DELETE** /{quotationId} | Delete all cancellation policies
[**deleteCancellationPolicyByQuotationIdAndItemId**](DefaultApi.md#deleteCancellationPolicyByQuotationIdAndItemId) | **DELETE** /{quotationId}/items/{basketItemId} | Delete cancellation policy for a single product
[**deleteCancellationPolicyByQuotationIdAndItemIdAndRph**](DefaultApi.md#deleteCancellationPolicyByQuotationIdAndItemIdAndRph) | **DELETE** /{quotationId}/items/{basketItemId}/rooms/{rph} | Delete single room
[**getAllCancellationPolicyEntryByQuotationId**](DefaultApi.md#getAllCancellationPolicyEntryByQuotationId) | **GET** /{quotationId} | Get all cancellation policies
[**getCancellationPolicyEntryByQuotationIdAndItemId**](DefaultApi.md#getCancellationPolicyEntryByQuotationIdAndItemId) | **GET** /{quotationId}/items/{basketItemId} | Get single cancellation policy


<a name="acceptedAllCancellationPolicies"></a>
# **acceptedAllCancellationPolicies**
> AcceptBodyResponse acceptedAllCancellationPolicies(quotationId, body)

Accept cancellation policy

Flag all cancellation policies (eventually only one) as accepted

### Example
```javascript
var CancellationPoliciesAcceptance = require('cancellation_policies_acceptance');

var apiInstance = new CancellationPoliciesAcceptance.DefaultApi();

var quotationId = "quotationId_example"; // String | quotation Id

var body = new CancellationPoliciesAcceptance.AcceptBodyRequest(); // AcceptBodyRequest | quotation Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.acceptedAllCancellationPolicies(quotationId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **String**| quotation Id | 
 **body** | [**AcceptBodyRequest**](AcceptBodyRequest.md)| quotation Id | 

### Return type

[**AcceptBodyResponse**](AcceptBodyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createCancellationPolicyEntries"></a>
# **createCancellationPolicyEntries**
> createCancellationPolicyEntries(quotationId, policyInfos)

Save cancellation policies

Save or update cancellation policies of all products (eventually only one) of specified quotation

### Example
```javascript
var CancellationPoliciesAcceptance = require('cancellation_policies_acceptance');

var apiInstance = new CancellationPoliciesAcceptance.DefaultApi();

var quotationId = "quotationId_example"; // String | quotation Id

var policyInfos = [new CancellationPoliciesAcceptance.PolicyInfo()]; // [PolicyInfo] | cancellation policy infos


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createCancellationPolicyEntries(quotationId, policyInfos, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **String**| quotation Id | 
 **policyInfos** | [**[PolicyInfo]**](PolicyInfo.md)| cancellation policy infos | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAllCancellationPolicyEntry"></a>
# **deleteAllCancellationPolicyEntry**
> deleteAllCancellationPolicyEntry(quotationId)

Delete all cancellation policies

Delete cancellation policy for all products of a quotation

### Example
```javascript
var CancellationPoliciesAcceptance = require('cancellation_policies_acceptance');

var apiInstance = new CancellationPoliciesAcceptance.DefaultApi();

var quotationId = "quotationId_example"; // String | quotation Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAllCancellationPolicyEntry(quotationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **String**| quotation Id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCancellationPolicyByQuotationIdAndItemId"></a>
# **deleteCancellationPolicyByQuotationIdAndItemId**
> deleteCancellationPolicyByQuotationIdAndItemId(quotationId, basketItemId)

Delete cancellation policy for a single product

Delete cancellation policy for a single product

### Example
```javascript
var CancellationPoliciesAcceptance = require('cancellation_policies_acceptance');

var apiInstance = new CancellationPoliciesAcceptance.DefaultApi();

var quotationId = "quotationId_example"; // String | quotation Id

var basketItemId = "basketItemId_example"; // String | basket product Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCancellationPolicyByQuotationIdAndItemId(quotationId, basketItemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **String**| quotation Id | 
 **basketItemId** | **String**| basket product Id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteCancellationPolicyByQuotationIdAndItemIdAndRph"></a>
# **deleteCancellationPolicyByQuotationIdAndItemIdAndRph**
> deleteCancellationPolicyByQuotationIdAndItemIdAndRph(quotationId, basketItemId, rph)

Delete single room

Delete cancellation policy for a single room

### Example
```javascript
var CancellationPoliciesAcceptance = require('cancellation_policies_acceptance');

var apiInstance = new CancellationPoliciesAcceptance.DefaultApi();

var quotationId = "quotationId_example"; // String | quotation Id

var basketItemId = "basketItemId_example"; // String | basket product Id

var rph = "rph_example"; // String | basket product Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCancellationPolicyByQuotationIdAndItemIdAndRph(quotationId, basketItemId, rph, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **String**| quotation Id | 
 **basketItemId** | **String**| basket product Id | 
 **rph** | **String**| basket product Id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getAllCancellationPolicyEntryByQuotationId"></a>
# **getAllCancellationPolicyEntryByQuotationId**
> getAllCancellationPolicyEntryByQuotationId(quotationId)

Get all cancellation policies

Get all cancellation policies of a specified quotation

### Example
```javascript
var CancellationPoliciesAcceptance = require('cancellation_policies_acceptance');

var apiInstance = new CancellationPoliciesAcceptance.DefaultApi();

var quotationId = "quotationId_example"; // String | quotation Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getAllCancellationPolicyEntryByQuotationId(quotationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **String**| quotation Id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCancellationPolicyEntryByQuotationIdAndItemId"></a>
# **getCancellationPolicyEntryByQuotationIdAndItemId**
> getCancellationPolicyEntryByQuotationIdAndItemId(quotationId, basketItemId)

Get single cancellation policy

Get cancellation policy of a single product

### Example
```javascript
var CancellationPoliciesAcceptance = require('cancellation_policies_acceptance');

var apiInstance = new CancellationPoliciesAcceptance.DefaultApi();

var quotationId = "quotationId_example"; // String | quotation Id

var basketItemId = "basketItemId_example"; // String | basket product Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCancellationPolicyEntryByQuotationIdAndItemId(quotationId, basketItemId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quotationId** | **String**| quotation Id | 
 **basketItemId** | **String**| basket product Id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

