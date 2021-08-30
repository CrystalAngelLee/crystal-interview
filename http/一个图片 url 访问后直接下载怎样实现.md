# 一个图片 url 访问后直接下载怎样实现

请求的返回头里面，用于浏览器解析的重要参数就是 OSS 的 API 文档里面的返回 http 头，决定用户下载行为的参数。 

下载的情况下： 

1. x-oss-object-type: Normal 

2. x-oss-request-id: 598D5ED34F29D01FE2925F41 

3. x-oss-storage-class: Standard

