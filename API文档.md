# API 文档

## 1. 留言存储接口

### 接口信息



*   **URL**: `/api/messages/`

*   **方法**: POST

*   **描述**: 用于保存用户留言信息

### 请求参数



| 参数名       | 类型     | 必填 | 描述   |
| --------- | ------ | -- | ---- |
| firstname | String | 是  | 用户名  |
| lastname  | String | 是  | 用户姓  |
| email     | String | 是  | 用户邮箱 |
| message   | String | 是  | 留言内容 |

### 请求示例



```
{

&#x20; "firstname": "张",

&#x20; "lastname": "三",

&#x20; "email": "zhangsan@example.com",

&#x20; "message": "这是一条测试留言"

}
```

### 响应参数



| 参数名     | 类型     | 描述                   |
| ------- | ------ | -------------------- |
| status  | String | 请求状态，success 或 error |
| message | String | 响应消息                 |
| data    | Object | 成功时返回的数据             |
| errors  | Object | 失败时返回的错误信息           |

### 成功响应示例



```
{

&#x20; "status": "success",

&#x20; "message": "留言保存成功",

&#x20; "data": {

&#x20;   "id": 1,

&#x20;   "firstname": "张",

&#x20;   "lastname": "三",

&#x20;   "email": "zhangsan@example.com",

&#x20;   "created\_at": "2023-07-01T12:00:00.000Z"

&#x20; }

}
```

### 失败响应示例



```
{

&#x20; "status": "error",

&#x20; "message": "请求参数不完整",

&#x20; "errors": {

&#x20;   "email": \["请提供有效的邮箱地址"]

&#x20; }

}
```

## 2. 商品列表接口

### 接口信息



*   **URL**: `/api/products/`

*   **方法**: GET

*   **描述**: 获取商品列表，支持分页和热门筛选

### 请求参数



| 参数名        | 类型      | 必填 | 描述                     |
| ---------- | ------- | -- | ---------------------- |
| page       | Integer | 否  | 页码，默认为 1               |
| page\_size | Integer | 否  | 每页数量，默认为 10            |
| featured   | Boolean | 否  | 是否只显示热门商品，true 或 false |

### 响应参数



| 参数名             | 类型     | 描述                   |
| --------------- | ------ | -------------------- |
| status          | String | 请求状态，success 或 error |
| data            | Object | 响应数据                 |
| data.products   | Array  | 商品列表                 |
| data.pagination | Object | 分页信息                 |

### 商品对象结构



| 参数名          | 类型      | 描述        |
| ------------ | ------- | --------- |
| id           | Integer | 商品 ID     |
| name         | String  | 商品名称      |
| subtitle     | String  | 商品副标题     |
| cover\_image | String  | 商品封面图 URL |
| weight       | String  | 商品重量      |
| price        | String  | 商品价格      |

### 分页对象结构



| 参数名           | 类型      | 描述     |
| ------------- | ------- | ------ |
| current\_page | Integer | 当前页码   |
| total\_pages  | Integer | 总页数    |
| total\_items  | Integer | 总商品数   |
| has\_next     | Boolean | 是否有下一页 |
| has\_previous | Boolean | 是否有上一页 |

### 成功响应示例



```
{

&#x20; "status": "success",

&#x20; "data": {

&#x20;   "products": \[

&#x20;     {

&#x20;       "id": 1,

&#x20;       "name": "高山绿茶",

&#x20;       "subtitle": "原生态有机茶叶",

&#x20;       "cover\_image": "http://example.com/media/products/covers/tea.jpg",

&#x20;       "weight": "100g",

&#x20;       "price": "88.00"

&#x20;     },

&#x20;     {

&#x20;       "id": 2,

&#x20;       "name": "特级红茶",

&#x20;       "subtitle": "传统工艺制作",

&#x20;       "cover\_image": "http://example.com/media/products/covers/red\_tea.jpg",

&#x20;       "weight": "150g",

&#x20;       "price": "108.00"

&#x20;     }

&#x20;   ],

&#x20;   "pagination": {

&#x20;     "current\_page": 1,

&#x20;     "total\_pages": 5,

&#x20;     "total\_items": 42,

&#x20;     "has\_next": true,

&#x20;     "has\_previous": false

&#x20;   }

&#x20; }

}
```

## 3. 商品详情接口

### 接口信息



*   **URL**: `/api/products/{product_id}/`

*   **方法**: GET

*   **描述**: 获取指定商品的详细信息

### 路径参数



| 参数名         | 类型      | 必填 | 描述    |
| ----------- | ------- | -- | ----- |
| product\_id | Integer | 是  | 商品 ID |

### 响应参数



| 参数名    | 类型     | 描述                   |
| ------ | ------ | -------------------- |
| status | String | 请求状态，success 或 error |
| data   | Object | 商品详情数据               |

### 商品详情对象结构



| 参数名                 | 类型      | 描述        |
| ------------------- | ------- | --------- |
| id                  | Integer | 商品 ID     |
| name                | String  | 商品名称      |
| subtitle            | String  | 商品副标题     |
| cover\_image        | String  | 商品封面图 URL |
| weight              | String  | 商品重量      |
| number\_of\_pouches | Integer | 包装数量      |
| description         | String  | 商品描述      |
| price               | String  | 商品价格      |
| is\_featured        | Boolean | 是否为热门商品   |
| created\_at         | String  | 创建时间      |
| updated\_at         | String  | 更新时间      |
| images              | Array   | 商品图片列表    |

### 图片对象结构



| 参数名   | 类型      | 描述     |
| ----- | ------- | ------ |
| id    | Integer | 图片 ID  |
| url   | String  | 图片 URL |
| order | Integer | 图片排序   |

### 成功响应示例



```
{

&#x20; "status": "success",

&#x20; "data": {

&#x20;   "id": 1,

&#x20;   "name": "高山绿茶",

&#x20;   "subtitle": "原生态有机茶叶",

&#x20;   "cover\_image": "http://example.com/media/products/covers/tea.jpg",

&#x20;   "weight": "100g",

&#x20;   "number\_of\_pouches": 2,

&#x20;   "description": "采自海拔1800米以上的高山茶园，保留了茶叶的原生态风味，富含多种有益成分...",

&#x20;   "price": "88.00",

&#x20;   "is\_featured": true,

&#x20;   "created\_at": "2023-06-01T10:00:00.000Z",

&#x20;   "updated\_at": "2023-06-15T14:30:00.000Z",

&#x20;   "images": \[

&#x20;     {

&#x20;       "id": 1,

&#x20;       "url": "http://example.com/media/products/images/tea\_1.jpg",

&#x20;       "order": 0

&#x20;     },

&#x20;     {

&#x20;       "id": 2,

&#x20;       "url": "http://example.com/media/products/images/tea\_2.jpg",

&#x20;       "order": 1

&#x20;     }

&#x20;   ]

&#x20; }

}
```

### 失败响应示例（商品不存在）



```
{

&#x20; "status": "error",

&#x20; "message": "商品不存在"

}
```

## 4. 防伪码验证接口

### 接口信息



*   **URL**: `/access-reward/{encrypted_code}/`

*   **方法**: GET

*   **描述**: 通过加密的奖励码访问奖励内容

### 路径参数



| 参数名             | 类型     | 必填 | 描述     |
| --------------- | ------ | -- | ------ |
| encrypted\_code | String | 是  | 加密的奖励码 |

### 响应

成功时返回奖励内容页面，失败时返回错误信息。

