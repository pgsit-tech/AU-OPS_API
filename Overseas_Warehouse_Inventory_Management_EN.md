# SKU, Inventory & Fulfillment (Overseas Warehouse)

## Cancel Inbound Forecast/Application

**Note**:

**URL**: `/edi/web-services/cancel/wmsInbound`

**Method**: `POST`

**Consumes**: `["application/json"]`

**Produces**: `["application/json"]`

**Request Parameters**:

| name     | description                | in     | require | data type | schema |
| -------- | -------------------------- | ------ | ------- | --------- | ------ |
| appKey   | Authentication appKey      | header | true    | string    |        |
| appToken | Authentication appToken    | header | true    | string    |        |
| inboundId| Inbound ID                 | query  | true    | string    |        |

**200 Response Example**:

```json
{
    "code": "200",
    "description": "Success"
}
```

**200 Response Parameters**:

| name        | description                                                                                    | type   | schema |
| ----------- | ---------------------------------------------------------------------------------------------- | ------ | ------ |
| code        | Processing result status code, 200 for success, 4xx status codes indicate processing failure | string |        |
| description | Processing result message. Returns failure reason on failure                                   | string |        |

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

| code | description                                                                                                                                | schema  |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| 200  | OK. Returns error format like {"code": "403","description": "Not authorized!"} on failure, where 4xx code values indicate processing failure | Result  |
| 400  | Bad Request                                                                                                                                | ErrorVM |
| 403  | Forbidden                                                                                                                                  | ErrorVM |
| 405  | Method Not Allowed                                                                                                                         | ErrorVM |
| 409  | Conflict                                                                                                                                   | ErrorVM |
| 500  | Internal Server Error                                                                                                                      | ErrorVM |

## Get All Inventory (Consignor Call)

**Note**:

**URL**: `/edi/web-services/getAllInventory`

**Method**: `GET`

**Consumes**: `["application/json"]`

**Produces**: `["application/json"]`

**Request Parameters**:

| name         | description                | in     | require | data type | schema |
| ------------ | -------------------------- | ------ | ------- | --------- | ------ |
| appKey       | Authentication appKey      | header | true    | string    |        |
| appToken     | Authentication appToken    | header | true    | string    |        |
| warehouseCode| Warehouse code             | query  | false   | string    |        |

**200 Response Example**:

```json
{
    "inventories": [
        {
            "availableQty": 0,
            "batchCode": "",
            "expiryDate": "",
            "inboundQty": 0,
            "onHoldQty": 0,
            "outboundQty": 0,
            "productionDate": "",
            "sku": "",
            "totalQty": 0,
            "warehouseCode": "",
            "warehouseName": ""
        }
    ]
}
```

**200 Response Parameters**:

| name        | description      | type   | schema           |
| ----------- | ---------------- | ------ | ---------------- |
| inventories | Inventory list   | array  | InventoryResult  |

**Schema Description**

**InventoryResult**

| name           | description        | type           | schema |
| -------------- | ------------------ | -------------- | ------ |
| availableQty   | Available quantity | number(double) |        |
| batchCode      | Batch code         | string         |        |
| expiryDate     | Expiry date        | string         |        |
| inboundQty     | Inbound quantity   | number(double) |        |
| onHoldQty      | On hold quantity   | number(double) |        |
| outboundQty    | Outbound quantity  | number(double) |        |
| productionDate | Production date    | string         |        |
| sku            | SKU                | string         |        |
| totalQty       | Total quantity     | number(double) |        |
| warehouseCode  | Warehouse code     | string         |        |
| warehouseName  | Warehouse name     | string         |        |

**Response Status**:

| code | description                                                                                                                                | schema                |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| 200  | OK. Returns error format like {"code": "403","description": "Not authorized!"} on failure, where 4xx code values indicate processing failure | GetAllInventoryResult |
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
