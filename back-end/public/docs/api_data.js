define({ "api": [
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
          "content": "HTTP/1.1 201 Created\n{\n  \"_id\": \"5e9c2652066bbb2e697761d2\",\n  \"originalname\": \"592bf164N7a4187c3.jpg\",\n  \"mimetype\": \"image/jpeg\",\n  \"filename\": \"a0808bc7b17b51fc01da707ae5060b90\",\n  \"size\": 21356,\n  \"url\": \"/files/serve/5e9c2652066bbb2e697761d2\",\n  \"__v\": 0\n}",
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
