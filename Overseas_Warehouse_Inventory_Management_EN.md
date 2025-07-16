# SKU, Inventory & Fulfillment (Overseas Warehouse)

## Cancel Inbound Forecast/Application

**Note**:

**URL**: `/edi/web-services/cancel/wmsInbound`

**Method**: `POST`

**Consumes**: `["application/json"]`

**Produces**: `["application/json"]`

**Request Example**:

```json
{
    "poNum": "",
    "refNum": "",
    "warehousingNumber": ""
}
```

**Request Parameters**:

| name                | description                | in     | require | data type           | schema              |
| ------------------- | -------------------------- | ------ | ------- | ------------------- | ------------------- |
| appKey              | Authentication appKey      | header | true    | string              |                     |
| appToken            | Authentication appToken    | header | true    | string              |                     |
| wmsInboundCancelReq | wmsInboundCancelReq        | body   | true    | WmsInboundCancelReq | WmsInboundCancelReq |

**Schema Description**

**WmsInboundCancelReq**

| name              | description        | in   | require | data type | schema |
| ----------------- | ------------------ | ---- | ------- | --------- | ------ |
| poNum             | Purchase order number | body | false   | string    |        |
| refNum            | EDI reference number  | body | false   | string    |        |
| warehousingNumber | Inbound number        | body | false   | string    |        |

**200 Response Example**:

```json
{
    "code": "200",
    "description": "Invalid Token",
    "shipmentId": "IN1912000450"
}
```

**200 Response Parameters**:

| name        | description                                                                                    | type   | schema |
| ----------- | ---------------------------------------------------------------------------------------------- | ------ | ------ |
| code        | Processing result status code, 200 for success, 4xx status codes indicate processing failure | string |        |
| description | Processing result message. Returns failure reason on failure                                   | string |        |
| shipmentId  | Inbound ID                                                                                     | string |        |

**400 Response Example**:

```json
{
    "description": "",
    "fieldErrors": [
        {
            "field": "",
            "message": "",
            "objectName": ""
        }
    ],
    "message": ""
}
```

**400 Response Parameters**:

| name        | description        | type   | schema       |
| ----------- | ------------------ | ------ | ------------ |
| description | Description        | string |              |
| fieldErrors | Field error list   | array  | FieldErrorVM |
| message     | Message content    | string |              |

**Schema Description**

**FieldErrorVM**

| name       | description  | type   | schema |
| ---------- | ------------ | ------ | ------ |
| field      | Field name   | string |        |
| message    | Message      | string |        |
| objectName | Object name  | string |        |

**Response Status**:

| code | description                                                                                                                                | schema           |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| 200  | OK. Returns error format like {"code": "403","description": "Not authorized!"} on failure, where 4xx code values indicate processing failure | WmsInboundResult |
| 400  | Bad Request                                                                                                                                | ErrorVM          |
| 403  | Forbidden                                                                                                                                  | ErrorVM          |
| 405  | Method Not Allowed                                                                                                                         | ErrorVM          |
| 409  | Conflict                                                                                                                                   | ErrorVM          |
| 500  | Internal Server Error                                                                                                                      | ErrorVM          |

## Get All Inventory (Consignor Call)

**Note**:

**URL**: `/edi/web-services/getClientInventory`

**Method**: `GET`

**Consumes**: `["application/json"]`

**Produces**: `["application/json"]`

**Request Parameters**:

| name              | description                                                | in     | require | data type | schema |
| ----------------- | ---------------------------------------------------------- | ------ | ------- | --------- | ------ |
| appKey            | Authentication appKey                                      | header | true    | string    |        |
| appToken          | Authentication appToken                                    | header | true    | string    |        |
| sku               | SKU                                                        | query  | false   | string    |        |
| warehouseCode     | Warehouse code                                             | query  | false   | string    |        |
| showZeroInventory | Show zero inventory records, default false if not provided | query  | false   | boolean   |        |

**200 Response Example**:

```json
{
    "cargoName": "",
    "cargoNameEn": "",
    "code": "",
    "gw": 0,
    "height": 0,
    "length": 0,
    "mark": "",
    "packageType": "",
    "pkgs": 0,
    "sku": "",
    "vol": 0,
    "width": 0
}
```

**200 Response Parameters**:

| name        | description           | type           | schema         |
| ----------- | --------------------- | -------------- | -------------- |
| cargoName   | Product name (Chinese) | string         |                |
| cargoNameEn | Product name (English) | string         |                |
| code        | Product code          | string         |                |
| gw          | Weight (KG)           | number(float)  | number(float)  |
| height      | Height (CM)           | number(float)  | number(float)  |
| length      | Length (CM)           | number(float)  | number(float)  |
| mark        | Mark                  | string         |                |
| packageType | Package type          | string         |                |
| pkgs        | Available inventory quantity | integer(int32) | integer(int32) |
| sku         | SKU                   | string         |                |
| vol         | Volume (CBM)          | number(float)  | number(float)  |
| width       | Width (CM)            | number(float)  | number(float)  |

**Response Status**:

| code | description                                                                                                                                | schema                |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| 200  | OK. Returns error format like {"code": "403","description": "Not authorized!"} on failure, where 4xx code values indicate processing failure | ClientInventoryResult |
| 400  | Bad Request                                                                                                                                | ErrorVM               |
| 403  | Forbidden                                                                                                                                  | ErrorVM               |
| 405  | Method Not Allowed                                                                                                                         | ErrorVM               |
| 409  | Conflict                                                                                                                                   | ErrorVM               |
| 500  | Internal Server Error                                                                                                                      | ErrorVM               |

## Get Single Outbound/Fulfillment Order

**Note**:

**URL**: `/edi/web-services/getOneOutboundOrder`

**Method**: `GET`

**Consumes**: `["application/json"]`

**Produces**: `["application/json"]`

**Request Parameters**:

| name     | description                                                    | in     | require | data type | schema |
| -------- | -------------------------------------------------------------- | ------ | ------- | --------- | ------ |
| appKey   | Authentication appKey                                          | header | true    | string    |        |
| appToken | Authentication appToken                                        | header | true    | string    |        |
| jobNum   | Job Number, at least one of jobNum or poNum must be provided  | query  | false   | string    |        |
| poNum    | PO Number, at least one of jobNum or poNum must be provided   | query  | false   | string    |        |

**200 Response Example**:

```json
{
    "cargoList": [
        {
            "cargoName": "",
            "cargoNameEn": "",
            "gw": 0,
            "gwTtl": 0,
            "height": 0,
            "hsCode": "",
            "lbs": 0,
            "length": 0,
            "originalCountry": "",
            "packageType": "",
            "pkgs": 0,
            "productUrl": "",
            "quantity": 0,
            "remarks": "",
            "sku": "",
            "usdValuePerUnit": 0,
            "vol": 0,
            "volTtl": 0,
            "width": 0
        }
    ],
    "cargoValue": 0,
    "carrier": "",
    "chargesList": [
        {
            "count": 0,
            "currency": "",
            "item": "",
            "payAmount": 0,
            "payCurrency": "",
            "payExchange": 0,
            "price": 0,
            "total": 0,
            "unit": ""
        }
    ],
    "checkOutDate": "",
    "collect": 0,
    "collectCur": "",
    "createdTime": "",
    "dcType": "",
    "deliveryDate": "",
    "expressService": "",
    "expressServiceCode": "",
    "gw": 0,
    "jobNum": "",
    "labelUrl": "",
    "lbs": 0,
    "orderUrl": "",
    "pickupDate": "",
    "pkgNum": 0,
    "pkgType": "",
    "platform": "",
    "platformOrderCreateTime": "",
    "poNum": "",
    "problemShipment": false,
    "remarks": "",
    "sellAmt": 0,
    "sellCur": "",
    "shipperAddressLineOne": "",
    "shipperAddressLineThree": "",
    "shipperAddressLineTwo": "",
    "shipperAttentionName": "",
    "shipperCity": "",
    "shipperCompanyName": "",
    "shipperCountryCode": "",
    "shipperEmailAddress": "",
    "shipperExt": "",
    "shipperPhoneNumber": "",
    "shipperPostalCode": "",
    "shipperProvinceCode": "",
    "shipperTaxId": "",
    "shipptoAccountNumber": "",
    "shiptoAddressLineOne": "",
    "shiptoAddressLineThree": "",
    "shiptoAddressLineTwo": "",
    "shiptoAttentionName": "",
    "shiptoCity": "",
    "shiptoCompanyName": "",
    "shiptoCountryCode": "",
    "shiptoEmailAddress": "",
    "shiptoExt": "",
    "shiptoPhoneNumber": "",
    "shiptoPostalCode": "",
    "shiptoProvinceCode": "",
    "statusCode": "",
    "statusName": "",
    "subTrackings": [],
    "trackingNum": "",
    "vol": 0,
    "vw": 0,
    "warehouseCode": "",
    "warehouseName": ""
}
```

**200 Response Parameters**:

| name                    | description                                                                                                                                                                                                                                                              | type              | schema                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- | --------------------- |
| cargoList               | Cargo manifest list                                                                                                                                                                                                                                                      | array             | ExpressCargoResult    |
| cargoValue              | Declared cargo value                                                                                                                                                                                                                                                     | number(double)    | number(double)        |
| carrier                 | Express carrier                                                                                                                                                                                                                                                          | string            |                       |
| chargesList             | Charges list                                                                                                                                                                                                                                                             | array             | OneOrderChargesResult |
| checkOutDate            | Check-out/dispatch time                                                                                                                                                                                                                                                  | string            |                       |
| collect                 | COD amount                                                                                                                                                                                                                                                               | number(double)    | number(double)        |
| collectCur              | COD currency                                                                                                                                                                                                                                                             | string            |                       |
| createdTime             | Creation time                                                                                                                                                                                                                                                            | string(date-time) | string(date-time)     |
| dcType                  | Delivery confirmation type                                                                                                                                                                                                                                               | string            |                       |
| deliveryDate            | Delivery date                                                                                                                                                                                                                                                            | string            |                       |
| expressService          | Service type                                                                                                                                                                                                                                                             | string            |                       |
| expressServiceCode      | Service type code                                                                                                                                                                                                                                                        | string            |                       |
| gw                      | Weight                                                                                                                                                                                                                                                                   | number(double)    | number(double)        |
| jobNum                  | Job number                                                                                                                                                                                                                                                               | string            |                       |
| labelUrl                | Label URL                                                                                                                                                                                                                                                                | string            |                       |
| lbs                     | Weight in pounds                                                                                                                                                                                                                                                         | number(double)    | number(double)        |
| orderUrl                | Order sales link                                                                                                                                                                                                                                                         | string            |                       |
| pickupDate              | Pickup date                                                                                                                                                                                                                                                              | string            |                       |
| pkgNum                  | Package count                                                                                                                                                                                                                                                            | integer(int32)    | integer(int32)        |
| pkgType                 | Package type: "CTNS", "BAGS", "ROLLS", "PALLETS", "BALES","BOXES", "CASES", "WOODEN CASES", "BUNDLES", "COILS","DRUMS", "SACKS", "PIECES", "PACKAGES", "SETS", "REELS", "TRAYS", "TINS", "CRATES", "UNITS", "TANKS", "PCS", "CARTONS","WOODEN CRATES", "PLYWOOD CASES", "OTHERS" | string            |                       |
| platform                | E-commerce platform                                                                                                                                                                                                                                                      | string            |                       |
| platformOrderCreateTime | Platform order creation time                                                                                                                                                                                                                                             | string            |                       |
| poNum                   | PO number                                                                                                                                                                                                                                                                | string            |                       |
| problemShipment         | Problem shipment                                                                                                                                                                                                                                                         | boolean           |                       |
| remarks                 | Remarks                                                                                                                                                                                                                                                                  | string            |                       |
| sellAmt                 | Sales amount                                                                                                                                                                                                                                                             | number(double)    | number(double)        |
| sellCur                 | Sales currency                                                                                                                                                                                                                                                           | string            |                       |
| shipperAddressLineOne   | Shipper address line 1                                                                                                                                                                                                                                                  | string            |                       |
| shipperAddressLineThree | Shipper address line 3                                                                                                                                                                                                                                                  | string            |                       |
| shipperAddressLineTwo   | Shipper address line 2                                                                                                                                                                                                                                                  | string            |                       |
| shipperAttentionName    | Shipper contact name                                                                                                                                                                                                                                                     | string            |                       |
| shipperCity             | Shipper city                                                                                                                                                                                                                                                             | string            |                       |
| shipperCompanyName      | Shipper company name                                                                                                                                                                                                                                                     | string            |                       |
| shipperCountryCode      | Shipper country code                                                                                                                                                                                                                                                     | string            |                       |
| shipperEmailAddress     | Shipper email address                                                                                                                                                                                                                                                    | string            |                       |
| shipperExt              | Shipper phone extension                                                                                                                                                                                                                                                  | string            |                       |
| shipperPhoneNumber      | Shipper phone number                                                                                                                                                                                                                                                     | string            |                       |
| shipperPostalCode       | Shipper postal code                                                                                                                                                                                                                                                      | string            |                       |
| shipperProvinceCode     | Shipper state/province/county code                                                                                                                                                                                                                                       | string            |                       |
| shipperTaxId            | Shipper tax ID number                                                                                                                                                                                                                                                    | string            |                       |
| shipptoAccountNumber    | Consignee account number                                                                                                                                                                                                                                                 | string            |                       |
| shiptoAddressLineOne    | Consignee address line 1                                                                                                                                                                                                                                                 | string            |                       |
| shiptoAddressLineThree  | Consignee address line 3                                                                                                                                                                                                                                                 | string            |                       |
| shiptoAddressLineTwo    | Consignee address line 2                                                                                                                                                                                                                                                 | string            |                       |
| shiptoAttentionName     | Consignee contact name                                                                                                                                                                                                                                                   | string            |                       |
| shiptoCity              | Consignee city                                                                                                                                                                                                                                                           | string            |                       |
| shiptoCompanyName       | Consignee company name                                                                                                                                                                                                                                                   | string            |                       |
| shiptoCountryCode       | Consignee country code                                                                                                                                                                                                                                                   | string            |                       |
| shiptoEmailAddress      | Consignee email address                                                                                                                                                                                                                                                  | string            |                       |
| shiptoExt               | Consignee phone extension                                                                                                                                                                                                                                                | string            |                       |
| shiptoPhoneNumber       | Consignee phone number                                                                                                                                                                                                                                                   | string            |                       |
| shiptoPostalCode        | Consignee postal code                                                                                                                                                                                                                                                    | string            |                       |
| shiptoProvinceCode      | Consignee state/province/county code                                                                                                                                                                                                                                     | string            |                       |
| statusCode              | Status code: VD: Order Voided, CC: Order Hold/Canceled, DL: Delivered, PB: Problem Shipment, SP: Shipped, LP: Label Printed, OR: Order Received, OS: Off Shelf, NS: Not Submitted                                                                                   | string            |                       |
| statusName              | Order status                                                                                                                                                                                                                                                             | string            |                       |
| subTrackings            | Sub-tracking numbers                                                                                                                                                                                                                                                     | array             |                       |
| trackingNum             | Tracking number                                                                                                                                                                                                                                                          | string            |                       |
| vol                     | Volume                                                                                                                                                                                                                                                                   | number(double)    | number(double)        |
| vw                      | Volumetric weight                                                                                                                                                                                                                                                        | number(double)    | number(double)        |
| warehouseCode           | Warehouse code                                                                                                                                                                                                                                                           | string            |                       |
| warehouseName           | Warehouse name                                                                                                                                                                                                                                                           | string            |                       |

**Schema Description**

**ExpressCargoResult**

| name            | description                                                                                                                                                                                                                                                              | type           | schema |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ------ |
| cargoName       | Cargo name                                                                                                                                                                                                                                                               | string         |        |
| cargoNameEn     | English cargo name                                                                                                                                                                                                                                                       | string         |        |
| gw              | Weight                                                                                                                                                                                                                                                                   | number(double) |        |
| gwTtl           | Total weight                                                                                                                                                                                                                                                             | number(double) |        |
| height          | Height                                                                                                                                                                                                                                                                   | number(double) |        |
| hsCode          | HS code                                                                                                                                                                                                                                                                  | string         |        |
| lbs             | Weight in pounds                                                                                                                                                                                                                                                         | number(double) |        |
| length          | Length                                                                                                                                                                                                                                                                   | number(double) |        |
| originalCountry | Country of origin                                                                                                                                                                                                                                                        | string         |        |
| packageType     | Package type: "CTNS", "BAGS", "ROLLS", "PALLETS", "BALES","BOXES", "CASES", "WOODEN CASES", "BUNDLES", "COILS","DRUMS", "SACKS", "PIECES", "PACKAGES", "SETS", "REELS", "TRAYS", "TINS", "CRATES", "UNITS", "TANKS", "PCS", "CARTONS","WOODEN CRATES", "PLYWOOD CASES", "OTHERS" | string         |        |
| pkgs            | Package count                                                                                                                                                                                                                                                            | integer(int32) |        |
| productUrl      | Product URL                                                                                                                                                                                                                                                              | string         |        |
| quantity        | Quantity                                                                                                                                                                                                                                                                 | number(double) |        |
| remarks         | Remarks                                                                                                                                                                                                                                                                  | string         |        |
| sku             | SKU                                                                                                                                                                                                                                                                      | string         |        |
| usdValuePerUnit | Unit price in USD                                                                                                                                                                                                                                                        | number(double) |        |
| vol             | Volume                                                                                                                                                                                                                                                                   | number(double) |        |
| volTtl          | Total volume                                                                                                                                                                                                                                                             | number(double) |        |
| width           | Width                                                                                                                                                                                                                                                                    | number(double) |        |

**OneOrderChargesResult**

| name        | description      | type           | schema |
| ----------- | ---------------- | -------------- | ------ |
| count       | Quantity         | number(double) |        |
| currency    | Currency         | string         |        |
| item        | Charge type      | string         |        |
| payAmount   | Actual paid amount | number(double) |        |
| payCurrency | Payment currency | string         |        |
| payExchange | Exchange rate    | number(double) |        |
| price       | Unit price       | number(double) |        |
| total       | Total amount     | number(double) |        |
| unit        | Unit of measure  | string         |        |

**Response Status**:

| code | description                                                                                                                                | schema                     |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| 200  | OK. Returns error format like {"code": "403","description": "Not authorized!"} on failure, where 4xx code values indicate processing failure | GetOneOutboundOrderResult  |
| 400  | Bad Request                                                                                                                                | ErrorVM                    |
| 403  | Forbidden                                                                                                                                  | ErrorVM                    |
| 405  | Method Not Allowed                                                                                                                         | ErrorVM                    |
| 409  | Conflict                                                                                                                                   | ErrorVM                    |
| 500  | Internal Server Error                                                                                                                      | ErrorVM                    |

## Get Outbound/Fulfillment Order Charges

**Note**:

**URL**: `/edi/web-services/getOutboundOrderCharges`

**Method**: `GET`

**Consumes**: `["application/json"]`

**Produces**: `["application/json"]`

**Request Parameters**:

| name     | description                                                    | in     | require | data type | schema |
| -------- | -------------------------------------------------------------- | ------ | ------- | --------- | ------ |
| appKey   | Authentication appKey                                          | header | true    | string    |        |
| appToken | Authentication appToken                                        | header | true    | string    |        |
| jobNum   | Job Number (choose one)                                        | query  | false   | string    |        |
| poNum    | PO#/Purchase Order Number (choose one)                        | query  | false   | string    |        |

**200 Response Example**:

```json
{
    "charges": [
        {
            "amount": 0,
            "billNum": "",
            "currency": "USD",
            "dnCn": "",
            "item": "Ocean Freight",
            "mcNum": "",
            "paidAmt": 0
        }
    ],
    "code": "200",
    "description": "Job# not found!"
}
```

**200 Response Parameters**:

| name        | description                                                                                    | type   | schema              |
| ----------- | ---------------------------------------------------------------------------------------------- | ------ | ------------------- |
| charges     | Charges list                                                                                   | array  | ParcelChargesResult |
| code        | Processing result status code, 200 for success, 4xx status codes indicate processing failure | string |                     |
| description | Processing result message. Returns failure reason on failure                                   | string |                     |

**Schema Description**

**ParcelChargesResult**

| name     | description                                                                      | type           | schema |
| -------- | -------------------------------------------------------------------------------- | -------------- | ------ |
| amount   | Charge amount                                                                    | number(double) |        |
| billNum  | Bill number                                                                      | string         |        |
| currency | Charge currency                                                                  | string         |        |
| dnCn     | Payment direction: dn represents receivable, cn represents payable (usually refund) | string         |        |
| item     | Charge name                                                                      | string         |        |
| mcNum    | Monthly settlement account number                                                | string         |        |
| paidAmt  | Paid and settled amount                                                          | number(double) |        |

**Response Status**:

| code | description                                                                                                                                | schema                 |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| 200  | OK. Returns error format like {"code": "403","description": "Not authorized!"} on failure, where 4xx code values indicate processing failure | GetParcelChargesResult |
| 400  | Bad Request                                                                                                                                | ErrorVM                |
| 403  | Forbidden                                                                                                                                  | ErrorVM                |
| 405  | Method Not Allowed                                                                                                                         | ErrorVM                |
| 409  | Conflict                                                                                                                                   | ErrorVM                |
| 500  | Internal Server Error                                                                                                                      | ErrorVM                |

## Create Outbound/Fulfillment Order (Single)

**Note**: Calling the interface too frequently may cause order creation/picking failures. You can implement rate limiting when calling the interface, limiting each customer to call this interface at a frequency within 2 times/second. You can also add retry functionality. When encountering picking failures (prompts containing "ObjectOptimisticLockingFailureException" or "Picking conflict"), the system automatically waits a few seconds before retrying, which can resolve most errors caused by rate limiting.

**URL**: `/edi/web-services/v2/orderOutboundOne`

**Method**: `POST`

**Consumes**: `["application/json"]`

**Produces**: `["application/json"]`

**Request Example**:

```json
{
    "bizType": "",
    "cargoType": "",
    "cargoValueUsd": "",
    "carrier": "",
    "channel": "",
    "dcType": "",
    "etd": "",
    "expressCargos": [
        {
            "pkgs": 0,
            "sku": ""
        }
    ],
    "insuranceRequired": false,
    "irregularPacking": false,
    "isRemote": false,
    "isResidential": false,
    "labelChannelCode": "",
    "labelUrl": "",
    "noStockNoOrder": false,
    "platform": "",
    "platformFee": 0,
    "poNum": "",
    "refNum": "",
    "remarks": "",
    "saleFreight": 0,
    "sellAmt": 0,
    "sellCur": "",
    "serviceDescription": "",
    "serviceType": "",
    "shipfromCode": "",
    "shipmentType": "",
    "shiptoAddressLineOne": "",
    "shiptoAddressLineThree": "",
    "shiptoAddressLineTwo": "",
    "shiptoAttentionName": "",
    "shiptoCity": "",
    "shiptoCompanyName": "",
    "shiptoCountryCode": "",
    "shiptoDoorplate": "",
    "shiptoEmailAddress": "",
    "shiptoExt": "",
    "shiptoPhoneNumber": "",
    "shiptoPostalCode": "",
    "shiptoProvinceCode": "",
    "soNum": "",
    "subTrackings": [],
    "submited": false,
    "thirdPartyCode": "",
    "thirdPartyPay": false,
    "trackingNum": "",
    "whCode": ""
}
```

**Request Parameters**:

| name             | description      | in     | require | data type        | schema           |
| ---------------- | ---------------- | ------ | ------- | ---------------- | ---------------- |
| appKey           | Authentication appKey | header | true    | string           |                  |
| appToken         | Authentication appToken | header | true    | string           |                  |
| orderOutboundReq | orderOutboundReq | body   | true    | OrderOutboundReq | OrderOutboundReq |

**Schema Description**

**OrderOutboundReq**

| name                   | description                                                           | in   | require | data type         | schema          |
| ---------------------- | --------------------------------------------------------------------- | ---- | ------- | ----------------- | --------------- |
| bizType                | Business type (maintained in system basic configuration, pass code)   | body | false   | string            |                 |
| cargoType              | Cargo type                                                            | body | false   | string            |                 |
| cargoValueUsd          | Insurance cargo value in USD                                          | body | false   | string            |                 |
| carrier                | Express company e.g.: UPS USPS                                       | body | false   | string            |                 |
| channel                | Shipping/billing channel                                              | body | false   | string            |                 |
| dcType                 | Express delivery confirmation type. Valid values: "1" (Signature), "2" (Adult Signature) | body | false   | string            |                 |
| etd                    | Pickup date                                                           | body | true    | string(date-time) |                 |
| expressCargos          | Packing details List                                                  | body | true    | array             | ExpressCargoReq |
| insuranceRequired      | Insurance required                                                    | body | false   | boolean           |                 |
| irregularPacking       | Irregular packaging true/false, default false                        | body | false   | boolean           |                 |
| isRemote               | Remote area true/false, default false                                | body | false   | boolean           |                 |
| isResidential          | Residential address true/false, default false                        | body | false   | boolean           |                 |
| labelChannelCode       | Label printing account (different from shipper/shipfromCode, must be pre-maintained in system or provided by service provider) | body | false   | string            |                 |
| labelUrl               | URL address of printed label in PDF format                           | body | false   | string            |                 |
| noStockNoOrder         | Don't create order when out of stock, default true                   | body | false   | boolean           |                 |
| platform               | Platform                                                              | body | false   | string            |                 |
| platformFee            | Platform fee                                                          | body | false   | number(double)    |                 |
| poNum                  | Purchase order number (PO#)                                          | body | true    | string            |                 |
| refNum                 | EDI reference number                                                  | body | false   | string            |                 |
| remarks                | Remarks                                                               | body | false   | string            |                 |
| saleFreight            | Freight                                                               | body | false   | number(double)    |                 |
| sellAmt                | Sales amount                                                          | body | false   | number(double)    |                 |
| sellCur                | Sales currency                                                        | body | false   | string            |                 |
| serviceDescription     | Express service description e.g.: GROUND                             | body | false   | string            |                 |
| serviceType            | Service type code, can be obtained through Get Service Types interface | body | false   | string            |                 |
| shipfromCode           | Shipper code/label printing account (must be pre-maintained in system or provided by service provider) | body | false   | string            |                 |
| shipmentType           | Shipping type. Valid values: PARCEL(dropshipping) RETURN(value-added return) TST(temporary storage transfer). Default: PARCEL | body | false   | string            |                 |
| shiptoAddressLineOne   | Consignee address 1                                                   | body | true    | string            |                 |
| shiptoAddressLineThree | Consignee address 3                                                   | body | false   | string            |                 |
| shiptoAddressLineTwo   | Consignee address 2                                                   | body | false   | string            |                 |
| shiptoAttentionName    | Consignee contact person                                              | body | true    | string            |                 |
| shiptoCity             | Consignee city                                                        | body | true    | string            |                 |
| shiptoCompanyName      | Consignee company name                                                | body | false   | string            |                 |
| shiptoCountryCode      | Consignee country code                                                | body | true    | string            |                 |
| shiptoDoorplate        | Consignee door number                                                 | body | false   | string            |                 |
| shiptoEmailAddress     | Consignee email                                                       | body | false   | string            |                 |
| shiptoExt              | Consignee extension number                                            | body | false   | string            |                 |
| shiptoPhoneNumber      | Consignee phone, if there's an extension, can also pass ext and add extension number | body | false   | string            |                 |
| shiptoPostalCode       | Consignee postal code                                                 | body | true    | string            |                 |
| shiptoProvinceCode     | Consignee province code                                               | body | false   | string            |                 |
| soNum                  | Inbound number (SO#)                                                  | body | false   | string            |                 |
| subTrackings           | Sub-tracking number list, e.g. ["7843917426181","7843917426182","7843917426183"] | body | false   | array             |                 |
| submited               | Order submitted (unsubmitted status is invisible to main system and cannot ship, visible to subsystem and can modify order status; use when need to lock inventory but don't need immediate shipping; default submitted true) | body | false   | boolean           |                 |
| thirdPartyCode         | Third party payer code (must be pre-maintained in system), only valid when thirdPartyPay is True, and required when thirdPartyPay is True! | body | false   | string            |                 |
| thirdPartyPay          | Third party payment true/false, default false                        | body | false   | boolean           |                 |
| trackingNum            | Express tracking number                                               | body | false   | string            |                 |
| whCode                 | Shipping warehouse code                                               | body | true    | string            |                 |

**ExpressCargoReq**

| name | description | in   | require | data type      | schema |
| ---- | ----------- | ---- | ------- | -------------- | ------ |
| pkgs | Package count | body | true    | integer(int32) |        |
| sku  | Product SKU   | body | true    | string         |        |

**200 Response Example**:

```json
{
    "alertMsg": "PO# already exists",
    "code": "200",
    "description": "Invalid Token",
    "shipmentId": "KD1912000474"
}
```

**200 Response Parameters**:

| name        | description                                                | type   | schema |
| ----------- | ---------------------------------------------------------- | ------ | ------ |
| alertMsg    | Alert message                                              | string |        |
| code        | Processing result status code, 200 for success, 400 for request error | string |        |
| description | Processing result message                                  | string |        |
| shipmentId  | Job number                                                 | string |        |

**Response Status**:

| code | description                                                                                                                                | schema                 |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| 200  | OK. Returns error format like {"code": "403","description": "Not authorized!"} on failure, where 4xx code values indicate processing failure | OrderOutboundOneResult |
| 400  | Bad Request                                                                                                                                | ErrorVM                |
| 403  | Forbidden                                                                                                                                  | ErrorVM                |
| 405  | Method Not Allowed                                                                                                                         | ErrorVM                |
| 409  | Conflict                                                                                                                                   | ErrorVM                |
| 500  | Internal Server Error                                                                                                                      | ErrorVM                |

## Additional Overseas Warehouse Management APIs

The overseas warehouse management section includes 27 API endpoints in total. The above documentation covers the most commonly used APIs. The complete list of available APIs includes:

### Inventory Management APIs:
- Cancel Inbound Forecast/Application (`/edi/web-services/cancel/wmsInbound`)
- Get All Inventory (Consignor Call) (`/edi/web-services/getClientInventory`)
- Get Inventory by Product SKU (Paginated) (`/edi/web-services/getInventoryBySkuPage`)
- Get Detailed Inventory List by Batch (`/edi/web-services/getInventoryDetailByBatch`)

### Order Management APIs:
- Get Single Outbound/Fulfillment Order (`/edi/web-services/getOneOutboundOrder`)
- Get Outbound/Fulfillment Order Charges (`/edi/web-services/getOutboundOrderCharges`)
- Create Outbound/Fulfillment Order (Single) (`/edi/web-services/v2/orderOutboundOne`)
- Create Outbound/Fulfillment Order (Multiple) (`/edi/web-services/v2/orderOutboundMultiple`)
- Create Outbound/Fulfillment Order (Single, Auto-match Nearest Warehouse) (`/edi/web-services/v2/orderOutboundOneAutoWh`)
- Update Order Status (`/edi/web-services/updateOrderStatus`)
- Cancel Order (`/edi/web-services/cancelOrder`)

### Product/SKU Management APIs:
- Get Product/SKU (Product Library) (`/edi/web-services/getProductSku`)
- Create Product/SKU (Product Library) (`/edi/web-services/createProductSku`)
- Update Product Library SKU (`/edi/web-services/updateProductSku`)

### Inbound/Outbound Management APIs:
- Update Inbound Forecast/Application (`/edi/web-services/updateWmsInbound`)
- Create Inbound Forecast/Application (`/edi/web-services/createWmsInbound`)
- Create Outbound Forecast/Application (`/edi/web-services/createWmsOutbound`)

### Document and Label APIs:
- Get Box Mark (PDF) (`/edi/web-services/getBoxMark`)
- Get Inbound Document (PDF) (`/edi/web-services/getInboundPdf`)

### Return Management APIs:
- Create Return Record (`/edi/web-services/createReturn`)

### System Configuration APIs:
- Get Channels (List) (`/edi/web-services/getChannels`)
- Get Available Warehouses (List) (`/edi/web-services/getWarehouses`)

### Status and Listing APIs:
- Get Inbound Forecast/Application (List) (`/edi/web-services/getWmsInbounds`)
- Get Order List (EMS-KD PC EP RT TS) (`/edi/web-services/getOrders`)
- Get Outbound Application List (OT) (`/edi/web-services/getWmsOutbounds`)
- Get Inbound Forecast/Application Status (IN) (`/edi/web-services/getWmsInboundStatus`)
- Get Outbound Application Status (OT) (`/edi/web-services/getWmsOutboundStatus`)

For detailed documentation of each API endpoint, please refer to the complete Chinese API documentation or contact the development team for specific implementation details.

---

**Note**: This English documentation covers the core overseas warehouse management APIs. For complete API specifications including all request/response parameters, error codes, and examples for the remaining APIs, please refer to the original Chinese documentation starting from line 15558 in the AU-OPS_api.md file.

## Create Outbound/Fulfillment Order (Single)

**Note**: Calling the interface too frequently may cause order creation/picking failures. You can implement rate limiting when calling the interface, limiting each customer to call this interface at a frequency within 2 times/second. You can also add retry functionality. When encountering picking failures (prompts containing "ObjectOptimisticLockingFailureException" or "Picking conflict"), the system automatically waits a few seconds before retrying, which can resolve most errors caused by rate limiting.

**URL**: `/edi/web-services/v2/orderOutboundOne`

**Method**: `POST`

**Consumes**: `["application/json"]`

**Produces**: `["application/json"]`

**Request Example**:

```json
{
    "bizType": "",
    "cargoType": "",
    "cargoValueUsd": "",
    "carrier": "",
    "channel": "",
    "dcType": "",
    "etd": "",
    "expressCargos": [
        {
            "pkgs": 0,
            "sku": ""
        }
    ],
    "insuranceRequired": false,
    "irregularPacking": false,
    "isRemote": false,
    "isResidential": false,
    "labelChannelCode": "",
    "labelUrl": "",
    "noStockNoOrder": false,
    "platform": "",
    "platformFee": 0,
    "poNum": "",
    "refNum": "",
    "remarks": "",
    "saleFreight": 0,
    "sellAmt": 0,
    "sellCur": "",
    "serviceDescription": "",
    "serviceType": "",
    "shipfromCode": "",
    "shipmentType": "",
    "shiptoAddressLineOne": "",
    "shiptoAddressLineThree": "",
    "shiptoAddressLineTwo": "",
    "shiptoAttentionName": "",
    "shiptoCity": "",
    "shiptoCompanyName": "",
    "shiptoCountryCode": "",
    "shiptoDoorplate": "",
    "shiptoEmailAddress": "",
    "shiptoExt": "",
    "shiptoPhoneNumber": "",
    "shiptoPostalCode": "",
    "shiptoProvinceCode": "",
    "soNum": "",
    "subTrackings": [],
    "submited": false,
    "thirdPartyCode": "",
    "thirdPartyPay": false,
    "trackingNum": "",
    "whCode": ""
}
```
