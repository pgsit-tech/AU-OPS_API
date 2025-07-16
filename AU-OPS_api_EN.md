**AU-OPS API**

**Description**: <p>AU-OPS API Documentation</p>

**HOST**: prod.au-ops.com

**Contact**:

**Version**: 1.2.1

**API URL**: /v2/api-docs

# Order Management (Express & Small Parcel)

## Get Single Order

**Note**:

**URL**: `/edi/web-services/getOneOrder`

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

**403 Response Example**:

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

**403 Response Parameters**:

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

**405 Response Example**:

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

**405 Response Parameters**:

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

**409 Response Example**:

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

**409 Response Parameters**:

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

**500 Response Example**:

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

**500 Response Parameters**:

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

| code | description                                                                                                                                | schema            |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| 200  | OK. Returns error format like {"code": "403","description": "Not authorized!"} on failure, where 4xx code values indicate processing failure | GetOneOrderResult |
| 400  | Bad Request                                                                                                                                | ErrorVM           |
| 403  | Forbidden                                                                                                                                  | ErrorVM           |
| 405  | Method Not Allowed                                                                                                                         | ErrorVM           |
| 409  | Conflict                                                                                                                                   | ErrorVM           |
| 500  | Internal Server Error                                                                                                                      | ErrorVM           |

## Get Order Charges

**Note**:

**URL**: `/edi/web-services/getOrderCharges`

**Method**: `GET`

**Consumes**: `["application/json"]`

**Produces**: `["application/json"]`

**Request Parameters**:

| name     | description                                      | in     | require | data type | schema |
| -------- | ------------------------------------------------ | ------ | ------- | --------- | ------ |
| appKey   | Authentication appKey                            | header | true    | string    |        |
| appToken | Authentication appToken                          | header | true    | string    |        |
| jobNum   | Job Number (choose one of two)                   | query  | false   | string    |        |
| poNum    | PO#/Purchase Order Number (choose one of two)    | query  | false   | string    |        |

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

| name     | description                                                                                      | type           | schema |
| -------- | ------------------------------------------------------------------------------------------------ | -------------- | ------ |
| amount   | Charge amount                                                                                    | number(double) |        |
| billNum  | Bill number                                                                                      | string         |        |
| currency | Charge currency                                                                                  | string         |        |
| dnCn     | Payment direction: dn represents receivable, cn represents payable (logistics company pays customer, usually refund) | string         |        |
| item     | Charge name                                                                                      | string         |        |
| mcNum    | Monthly settlement account number                                                                | string         |        |
| paidAmt  | Paid and settled amount                                                                          | number(double) |        |
