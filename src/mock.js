import Mock from 'mockjs';
Mock.setup({timeout:'1200-2600'});
 Mock.mock(
    '/data',{
     
         "data|1-20":[{
             "href": 'http://ant.design',
             "title|1-6": `antd`,
             "avatar":"https://zos.alipayobjects.com",
             "description": 'Ant Design, a design language for',
             "content": 'We supply a series of design '
         }]
    }
)
Mock.mock(
    '/data/list', {

        "data|1-20": [{
            "date|1-100": 3,
            "title|1-6": `antd`,
             
        }]
    }
)
Mock.mock(
    '/login', {
        "data|1-20": [{
            "date|1-100": 3,
            "title|1-6": `antd`,

        }]
    }
)
Mock.mock(
    '/detail', {
        "data": {
            "contents": { "code": 0, "msg": "success", "tags": ["随笔", "学习", "VPS", "科学上网", "React", "Node", "MySQL", "Egg", "面试", "JavaScript", "腾讯", "OOAD", "作业", "笔试", "数据库", "范式", "Algorithm", "underscore", "Vue", "Electron", "项目", "CSS", "H5", "转载", "汇编", "Hexo", "Blog", "react", "richtext"], "data": { "id": 41, "title": "react-quill初使用——上传图片", "summary": "这几天写一个东西需要用到富文本，项目基于react，于是在社区找到了一个轮子，[react-quill](https://github.com/zenoamaro/react-quill)，此轮子基于`quill`编写，逛了一下之后，感觉还挺靠谱，于是就用了起来。\n富文本插件用法没什么特别的，主要是看文档来进行配置，这里所要记录的是如何将富文本里面的图片上传到自己的服务器上，并对富文本内容中img的src替换成图片上传后服务器返回的链接。", "content": "### 前言\n这几天写一个东西需要用到富文本，项目基于react，于是在社区找到了一个轮子，[react-quill](https://github.com/zenoamaro/react-quill)，此轮子基于`quill`编写，逛了一下之后，感觉还挺靠谱，于是就用了起来。\n富文本插件用法没什么特别的，主要是看文档来进行配置，这里所要记录的是如何将富文本里面的图片上传到自己的服务器上，并对富文本内容中img的src替换成图片上传后服务器返回的链接。\n<br/>\n> \nquill官网：https://github.com/quilljs/quill\nreact-quill官网：https://github.com/zenoamaro/react-quill\n在线demo：https://zenoamaro.github.io/react-quill/\n\n### 基本配置\n``` javascript\n<ReactQuill\n    theme=\"snow\"\n    value={this.state.text}\n    modules={modules}\n    formats={formats}\n    onChange={this.handleChange}\n    onFocus={this.hideErrorRender}\n    ref={(el) => this.quillRef = el}\n/>\n```\n**modules配置**\n``` javascript\nconst modules = {\n    toolbar: {\n        container: [\n            [{ header: \"1\" }, { header: \"2\" }],\n            [\"bold\", \"italic\", \"underline\", \"strike\", \"blockquote\"],\n            [\n                { list: \"ordered\" },\n                { list: \"bullet\" },\n                { indent: \"-1\" },\n                { indent: \"+1\" }\n            ],\n            [\"link\", \"image\"],\n            [\"clean\"]\n        ],\n        handlers: {\n            \"image\": self.imageHandler\n        }\n    }\n};\n```\nmodule配置即为富文本框的功能属性\n### 图片上传\n在`react-quill`中，如果不做监听，点击图片上传，图片会被转换base64格式存储，这往往不是我们想要的结果。我们想要的结果是能把图片上传到服务器上。方法步骤如下，\n* 监听点击图片上传时的动作，例如上面的配置\n``` javascript\nhandlers: {\n    \"image\": self.imageHandler\n}\n```\n意思即为在点击图片上传的时候触发这个函数，那么这个函数就是我们需要操作的了。\n* `imageHandler`主要做了三件事\n\t* 模拟input框点击，获取file文件\n\t* 检查文件类型\n\t* 符合的文件发起上传请求\n\n``` javascript\nimageHandler(image) {\n   const self = this;\n   if (image) {\n       const input = document.createElement(\"input\");\n       input.setAttribute(\"type\", \"file\");\n       input.click();\n\n       // Listen upload local image and save to server\n       input.onchange = () => {\n           const file = input.files[0];\n           // file type is only image.\n           let bool = self.beforeUpload(file);\n           if (bool) {\n               self.saveToServer(file);\n           }\n       };\n   }\n}\n```\n* `beforeUpload`函数主要是检查文件类型，这里主要是判断文件后缀，直接看代码\n``` javascript\nbeforeUpload(file, allType = [\"jpg\", \"png\", \"jpeg\", \"gif\"], maxSize = 5) {\n    let fileType = file.type;\n    let { name } = file;\n    if (!fileType) {\n        fileType = name.split(\".\").pop();\n    } else {\n        fileType = fileType.split(\"/\")[1];\n    }\n    const isJPG = allType.indexOf(fileType) > -1;\n    if (!isJPG) {\n        alert(\"请上传正确的格式！\");\n        return false;\n    }\n    const isLt3M = file.size / 1024 / 1024 < maxSize;\n    if (!isLt3M && isJPG) {\n        alert(`上传图片必须小于${maxSize}M!`);\n        return false;\n    }\n    let isSuccess = isJPG && isLt3M;\n    return isSuccess;\n}\n```\n* `saveToServer`函数就是发起请求上传图片\n\t* 一般上传图片的做法是用iframe或者form表单去构造一个请求然后上传\n\t* 不过这种方法并不优雅，这里用`axios`模拟`form`表单去上传\n\t* 需要主要的点是，使用`new FormData`获取文件`file`内容\n\t* 设置`header`的值为`'Content-Type': 'multipart/form-data'`\n``` javascript\nsaveToServer(file) {\n    const self = this;\n    let param = new FormData();\n    param.append('Filedata', file, file.name);\n    let config = {\n        headers: {\n            'Content-Type': 'multipart/form-data'\n        }\n    };\n    axios.post(\"/upload-image\", param, config)\n    .then(res => {\n        if (res.data.code == 0) {\n            self.insertToEditor(res.data.img_url);\n        } else {\n            alert(\"上传失败，请重新上传\");\n        }\n    })\n    .catch(err => {\n        throw(err);\n    });\n}\n```\n* 最后一步，`insertToEditor`函数作用是将富文本里面的img标签的src替换成服务器返回的图片url链接，这里主要是`react-quill`API的使用\n``` javascript\n   insertToEditor(url){\n       const range = this.quillRef.getEditor().getSelection();\n       this.quillRef.getEditor().insertEmbed(range.index, 'image', url);\n   }\n```\n\n### 总结\n以上就是使用`react-quill`上传图片的基本流程，当然，上传其他媒体文件也是类似的流程，不再赘述。这里需要注意的是点：\n* 对相关配置项的函数监听\n* 模拟`input`框行为\n* 上传注意`header`以及如何获取文件内容", "readSize": 150, "commentSize": 2, "tags": "react,richtext", "created_at": "2018-08-22T08:07:24.000Z", "updated_at": "2018-11-06T08:14:35.000Z", "user_id": 1, "catalog_id": 7, "user": { "id": 1, "username": "admin", "authority": { "id": 1, "name": "ROLE_ADMIN" } }, "comment": [{ "id": 16, "content": "博主小哥哥你好，我也不知道我这条评论你能不能看到啊，想说个建议，我不知道你是用的什么打的包，webpack打包react的bundle会很大，加载起来很慢，我刚才试了试，清了历史记录，小哥哥的博客打开速度将近20s，体验不是很好，建议，如果后台使用的是node，可以选择使用一下Gzip，我记得我的是webpack各种拆分各种压缩后bundle还有2.1M左右，放到服务器上，也是将近20s，但用了Gizp压缩，初次也就个3.5s不到吧，所以建议小哥哥使用。（前提用node写的~）", "created_at": "2018-08-24T03:23:53.000Z", "updated_at": "2018-08-24T03:23:53.000Z", "user": { "username": "zhangxianbin" } }, { "id": 35, "content": "hallo", "created_at": "2018-11-06T03:38:28.000Z", "updated_at": "2018-11-06T03:38:28.000Z", "user": { "username": "admin" } }], "catalog": { "id": 7, "name": "学习", "created_at": "2018-04-22T05:25:14.000Z", "updated_at": "2018-04-22T05:25:14.000Z", "user": { "username": "admin" } } }, "year": "2018" }
        }
    }
)