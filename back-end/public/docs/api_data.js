define({ "api": [
  {
    "type": "get",
    "url": "/books",
    "title": "查询图书",
    "group": "图书",
    "parameter": {
      "fields": {
        "Query 参数": [
          {
            "group": "Query 参数",
            "type": "Boolean",
            "optional": true,
            "field": "hot",
            "description": "<p>查询热门图书</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.name",
            "description": "<p>书名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.info",
            "description": "<p>简介</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "books.price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "books.isHot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.imgUrl",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "(Success 200) Response:",
          "content": "HTTP/1.1 200 OK\n   [\n     {\n       \"isHot\": false,\n       \"_id\": \"5e9c470c083fd314e1437dfd\",\n       \"name\": \"零基础学Java\",\n       \"info\": \"学起来\",\n       \"price\": 80,\n       \"imgUrl\": \"http://localhost:9090/files/serve/5e9c46f9083fd314e1437dfc\",\n       \"createdAt\": \"2020-04-19T12:41:48.481Z\",\n       \"updatedAt\": \"2020-04-19T12:41:48.481Z\",\n       \"__v\": 0\n     },\n     ...\n   ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/bookRouter.js",
    "groupTitle": "图书",
    "name": "GetBooks"
  },
  {
    "type": "get",
    "url": "/books/:id",
    "title": "图书详情",
    "group": "图书",
    "parameter": {
      "fields": {
        "Param 参数": [
          {
            "group": "Param 参数",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>图书Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.name",
            "description": "<p>书名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.info",
            "description": "<p>简介</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "books.price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "books.isHot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "books.imgUrl",
            "description": "<p>图片地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "(Success 200) Response:",
          "content": "HTTP/1.1 200 OK\n   {\n     \"isHot\": false,\n     \"_id\": \"5e9c470c083fd314e1437dfd\",\n     \"name\": \"零基础学Java\",\n     \"info\": \"学起来\",\n     \"price\": 80,\n     \"imgUrl\": \"http://localhost:9090/files/serve/5e9c46f9083fd314e1437dfc\",\n     \"createdAt\": \"2020-04-19T12:41:48.481Z\",\n     \"updatedAt\": \"2020-04-19T12:41:48.481Z\",\n     \"__v\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/bookRouter.js",
    "groupTitle": "图书",
    "name": "GetBooksId"
  },
  {
    "type": "post",
    "url": "/books",
    "title": "新增图书",
    "group": "图书",
    "parameter": {
      "fields": {
        "Body 参数": [
          {
            "group": "Body 参数",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>书名</p>"
          },
          {
            "group": "Body 参数",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>简介</p>"
          },
          {
            "group": "Body 参数",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Body 参数",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片地址（通过 文件上传接口获取）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>书名</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>简介</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Success 201",
            "type": "Boolean",
            "optional": false,
            "field": "isHot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "(Success 201) Response:",
          "content": "HTTP/1.1 201 Created\n   {\n     \"isHot\": false,\n     \"_id\": \"5e9c43c9f9412b0e7d5f196b\",\n     \"name\": \"JavaScript 忍者秘籍\",\n     \"info\": \"JavaScript 忍者秘籍（第二版）\",\n     \"price\": 10,\n     \"imgUrl\": \"http://localhost:9090/files/serve/5e9c43b6f9412b0e7d5f196a\",\n     \"createdAt\": \"2020-04-19T12:27:53.175Z\",\n     \"updatedAt\": \"2020-04-19T12:27:53.175Z\",\n     \"__v\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/bookRouter.js",
    "groupTitle": "图书",
    "name": "PostBooks"
  },
  {
    "type": "post",
    "url": "/files",
    "title": "文件上传",
    "group": "文件",
    "parameter": {
      "fields": {
        "Body 参数": [
          {
            "group": "Body 参数",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>文件，目前只支持png与jpeg的图片。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "originalname",
            "description": "<p>源文件名</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "mimetype",
            "description": "<p>文件类型</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>文件大小（字节单位）</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>访问地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "(Success 201) Response:",
          "content": "HTTP/1.1 201 Created\n   {\n     \"_id\": \"5e9c43b6f9412b0e7d5f196a\",\n     \"originalname\": \"5a6abb3eNfd2c6ab9.jpg\",\n     \"mimetype\": \"image/jpeg\",\n     \"filename\": \"9abe77e3b52e3d6b156c5a4bdefc6a7d\",\n     \"size\": 17428,\n     \"createdAt\": \"2020-04-19T12:27:34.009Z\",\n     \"updatedAt\": \"2020-04-19T12:27:34.009Z\",\n     \"url\": \"http://localhost:9090/files/serve/5e9c43b6f9412b0e7d5f196a\",\n     \"__v\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/fileRouter.js",
    "groupTitle": "文件",
    "name": "PostFiles"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "登录",
    "group": "用户",
    "parameter": {
      "fields": {
        "Body 参数": [
          {
            "group": "Body 参数",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Body 参数",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "(Success 200) Response:",
          "content": "HTTP/1.1 200 OK\n   {\n     \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZTljNTYxNDE1NmZlYjM4ODZlODIwNjEiLCJ1c2VybmFtZSI6IuadjuWbmyIsImlhdCI6MTU4NzMwNDQ4MywiZXhwIjoxNTg3MzExNjgzfQ.ofhvmyoCT93_D3h2bxX4-9FxGFQ-dKU2pV_RgebANBU\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "用户",
    "name": "PostAuthLogin"
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "注册",
    "group": "用户",
    "parameter": {
      "fields": {
        "Body 参数": [
          {
            "group": "Body 参数",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Body 参数",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>用户图像</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "(Success 201) Response:",
          "content": "HTTP/1.1 201 Created\n   {\n     \"avatar\": \"http://localhost:9090/assets/img/avatar.png\",\n     \"_id\": \"5e9c5614156feb3886e82061\",\n     \"username\": \"李四\",\n     \"createdAt\": \"2020-04-19T13:45:56.468Z\",\n     \"updatedAt\": \"2020-04-19T13:45:56.468Z\",\n     \"__v\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/userRouter.js",
    "groupTitle": "用户",
    "name": "PostAuthRegister"
  }
] });
