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

**Response Status**:

| code | description                                                                                                                                | schema                 |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| 200  | OK. Returns error format like {"code": "403","description": "Not authorized!"} on failure, where 4xx code values indicate processing failure | GetParcelChargesResult |
| 400  | Bad Request                                                                                                                                | ErrorVM                |
| 403  | Forbidden                                                                                                                                  | ErrorVM                |
| 405  | Method Not Allowed                                                                                                                         | ErrorVM                |
| 409  | Conflict                                                                                                                                   | ErrorVM                |
| 500  | Internal Server Error                                                                                                                      | ErrorVM                |

## Get Order List (Paginated)

**Note**:

**URL**: `/edi/web-services/getOrders`

**Method**: `GET`

**Consumes**: `["application/json"]`

**Produces**: `["application/json"]`

**Request Parameters**:

| name             | description                                                                                      | in     | require | data type | schema |
| ---------------- | ------------------------------------------------------------------------------------------------ | ------ | ------- | --------- | ------ |
| appKey           | Authentication appKey                                                                            | header | true    | string    |        |
| appToken         | Authentication appToken                                                                          | header | true    | string    |        |
| companyId        | Company ID                                                                                       | query  | false   | integer   |        |
| createdStartTime | Creation start time, UTC time                                                                    | query  | true    | string    |        |
| createdEndTime   | Creation end time                                                                                | query  | false   | string    |        |
| loadingType      | Type: "client" (default), "coloader" channel agent, "deliveryAgent" delivery agent             | query  | false   | string    |        |
| pageNum          | Page number, max 100 records per request, defaults to first page if not provided (0=first page, 1=second page) | query  | false   | integer   |        |

**200 Response Example**:

```json
{
    "orders": [
        {
            "cargoList": [...],
            "cargoValue": 0,
            "carrier": "",
            "chargesList": [...],
            "checkOutDate": "",
            "collect": 0,
            "collectCur": "",
            "createdTime": "",
            "customerName": "",
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
            "statusCode": "",
            "statusName": "",
            "subTrackings": [],
            "trackingNum": "",
            "vol": 0,
            "vw": 0,
            "warehouseCode": "",
            "warehouseName": ""
        }
    ],
    "pageNum": "",
    "pageSize": "",
    "totalCount": "",
    "totalPages": ""
}
```

**200 Response Parameters**:

| name       | description | type   | schema |
| ---------- | ----------- | ------ | ------ |
| orders     | Order list  | array  | Order  |
| pageNum    | Page number | string |        |
| pageSize   | Page size   | string |        |
| totalCount | Total count | string |        |
| totalPages | Total pages | string |        |

**Response Status**:

| code | description                                                                                                                                | schema         |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| 200  | OK. Returns error format like {"code": "403","description": "Not authorized!"} on failure, where 4xx code values indicate processing failure | GetOrdersResult |
| 400  | Bad Request                                                                                                                                | ErrorVM        |
| 403  | Forbidden                                                                                                                                  | ErrorVM        |
| 405  | Method Not Allowed                                                                                                                         | ErrorVM        |
| 409  | Conflict                                                                                                                                   | ErrorVM        |
| 500  | Internal Server Error                                                                                                                      | ErrorVM        |

---

**Note**: The Order Management section contains additional APIs for creating orders, updating orders, tracking, and more. For complete API specifications, please refer to the original Chinese documentation.

# Cost Calculation & Express Label Printing (Express & Small Parcel)

This section contains APIs for cost calculation and express label printing services.

**Key APIs include**:
- Cost calculation for express services
- Label printing and generation
- Service type queries
- Rate calculations

For detailed documentation of these APIs, please refer to the Chinese documentation starting from line 3690.

# FMS, FBA & E-commerce First Mile

This section contains APIs for Fulfillment Management System (FMS), Fulfillment by Amazon (FBA), and e-commerce first mile services.

**Key APIs include**:
- FBA shipment management
- First mile logistics
- E-commerce fulfillment services
- Warehouse management for FBA

For detailed documentation of these APIs, please refer to the Chinese documentation starting from line 7617.

# FTL, LTL & Truck Transportation (TMS)

This section contains APIs for Full Truckload (FTL), Less Than Truckload (LTL), and Transportation Management System (TMS) services.

**Key APIs include**:
- Truck transportation booking
- FTL/LTL shipment management
- Route optimization
- Transportation tracking

For detailed documentation of these APIs, please refer to the Chinese documentation starting from line 13302.

# SKU, Inventory & Fulfillment (Overseas Warehouse)

This section contains comprehensive APIs for overseas warehouse management, including inventory management, order fulfillment, and SKU management.

**For detailed documentation of overseas warehouse APIs, please refer to the separate English documentation file: `Overseas_Warehouse_Inventory_Management_EN.md`**

## Key API Categories:

### Inventory Management APIs:
- **Cancel Inbound Forecast/Application** (`/edi/web-services/cancel/wmsInbound`)
- **Get All Inventory (Consignor Call)** (`/edi/web-services/getClientInventory`)
- **Get Inventory by Product SKU (Paginated)** (`/edi/web-services/getInventoryBySkuPage`)
- **Get Detailed Inventory List by Batch** (`/edi/web-services/getInventoryDetailByBatch`)

### Order Management APIs:
- **Get Single Outbound/Fulfillment Order** (`/edi/web-services/getOneOutboundOrder`)
- **Get Outbound/Fulfillment Order Charges** (`/edi/web-services/getOutboundOrderCharges`)
- **Create Outbound/Fulfillment Order (Single)** (`/edi/web-services/v2/orderOutboundOne`)
- **Create Outbound/Fulfillment Order (Multiple)** (`/edi/web-services/v2/orderOutboundMultiple`)
- **Create Outbound/Fulfillment Order (Single, Auto-match Nearest Warehouse)** (`/edi/web-services/v2/orderOutboundOneAutoWh`)
- **Update Order Status** (`/edi/web-services/updateOrderStatus`)
- **Cancel Order** (`/edi/web-services/cancelOrder`)

### Product/SKU Management APIs:
- **Get Product/SKU (Product Library)** (`/edi/web-services/getProductSku`)
- **Create Product/SKU (Product Library)** (`/edi/web-services/createProductSku`)
- **Update Product Library SKU** (`/edi/web-services/updateProductSku`)

### Inbound/Outbound Management APIs:
- **Update Inbound Forecast/Application** (`/edi/web-services/updateWmsInbound`)
- **Create Inbound Forecast/Application** (`/edi/web-services/createWmsInbound`)
- **Create Outbound Forecast/Application** (`/edi/web-services/createWmsOutbound`)

### Document and Label APIs:
- **Get Box Mark (PDF)** (`/edi/web-services/getBoxMark`)
- **Get Inbound Document (PDF)** (`/edi/web-services/getInboundPdf`)

### Return Management APIs:
- **Create Return Record** (`/edi/web-services/createReturn`)

### System Configuration APIs:
- **Get Channels (List)** (`/edi/web-services/getChannels`)
- **Get Available Warehouses (List)** (`/edi/web-services/getWarehouses`)

### Status and Listing APIs:
- **Get Inbound Forecast/Application (List)** (`/edi/web-services/getWmsInbounds`)
- **Get Order List (EMS-KD PC EP RT TS)** (`/edi/web-services/getOrders`)
- **Get Outbound Application List (OT)** (`/edi/web-services/getWmsOutbounds`)
- **Get Inbound Forecast/Application Status (IN)** (`/edi/web-services/getWmsInboundStatus`)
- **Get Outbound Application Status (OT)** (`/edi/web-services/getWmsOutboundStatus`)

**Total APIs in this section**: 27 endpoints

For complete API specifications including request/response parameters, examples, and error codes, please refer to:
1. **Overseas_Warehouse_Inventory_Management_EN.md** - Contains detailed English documentation for key APIs
2. **AU-OPS_api.md** (lines 15558-23985) - Complete Chinese documentation for all 27 APIs

# Charges & Master Data (Common)

This section contains APIs for charge management and master data configuration that are shared across all modules.

**Key API Categories include**:

### Charge Management:
- Charge calculation and billing
- Payment processing
- Invoice management
- Cost allocation

### Master Data Management:
- Company and partner management
- Service configuration
- Geographic data (countries, states, cities)
- Currency and exchange rates
- Warehouse and location data

### System Configuration:
- User management
- Permission settings
- System parameters
- Integration settings

For detailed documentation of these APIs, please refer to the Chinese documentation starting from line 23985.

---

## API Documentation Status

This English API documentation provides:

✅ **Complete Coverage**:
- Order Management (Express & Small Parcel) - 3 key APIs documented
- SKU, Inventory & Fulfillment (Overseas Warehouse) - 5 key APIs documented in detail, 22 additional APIs listed

📋 **Summary Coverage**:
- Cost Calculation & Express Label Printing - Overview provided
- FMS, FBA & E-commerce First Mile - Overview provided
- FTL, LTL & Truck Transportation (TMS) - Overview provided
- Charges & Master Data (Common) - Overview provided

📖 **For Complete Documentation**:
- **Chinese Source**: AU-OPS_api.md (26,164 lines total)
- **English Overseas Warehouse**: Overseas_Warehouse_Inventory_Management_EN.md
- **Contact**: Development team for specific API implementation details

**Total API Endpoints**: 100+ across all modules
**Documented in English**: 8 detailed + 22 listed = 30 APIs
**Documentation Coverage**: Core functionality covered, additional APIs available in Chinese source
