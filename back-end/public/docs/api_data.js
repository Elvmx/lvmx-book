define({ "api": [
  {
    "type": "post",
    "url": "/books",
    "title": "新增图书",
    "group": "图书",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>书名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>简介</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Parameter",
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
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>书名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "info",
            "description": "<p>简介</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>价格</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isHot",
            "description": "<p>是否热门</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>图片地址（通过 文件上传接口获取）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
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
        "Parameter": [
          {
            "group": "Parameter",
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
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "originalname",
            "description": "<p>源文件名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mimetype",
            "description": "<p>文件类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>文件大小（字节单位）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>访问地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n   {\n     \"_id\": \"5e9c43b6f9412b0e7d5f196a\",\n     \"originalname\": \"5a6abb3eNfd2c6ab9.jpg\",\n     \"mimetype\": \"image/jpeg\",\n     \"filename\": \"9abe77e3b52e3d6b156c5a4bdefc6a7d\",\n     \"size\": 17428,\n     \"createdAt\": \"2020-04-19T12:27:34.009Z\",\n     \"updatedAt\": \"2020-04-19T12:27:34.009Z\",\n     \"url\": \"http://localhost:9090/files/serve/5e9c43b6f9412b0e7d5f196a\",\n     \"__v\": 0\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routers/fileRouter.js",
    "groupTitle": "文件",
    "name": "PostFiles"
  }
] });
