# 请你谈谈Cookie的弊端

cookie虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的。

**第一：每个特定的域名下最多生成20个cookie**

1）IE6或更低版本最多20个cookie

2）IE7和之后的版本最后可以有50个cookie。 

3）Firefox最多50个cookie

4）chrome和Safari没有做硬性限制

IE和Opera 会清理近期最少使用的cookie，Firefox会随机清理cookie。

cookie的最大大约为4096字节，为了兼容性，一般不能超过4095字节。

IE 提供了一种存储可以持久化用户数据，叫做userdata，从IE5.0就开始支持。每个数据最多128K，每个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。

```js
function createObject(name,age,profession){//集中实例化的函数
  var obj = newObject(); 
	obj.name =name; 
	obj.age = age; 
	obj.profession= profession; 
	obj.move =function () { 
	return this.name + ' at ' + this.age + ' engaged in ' + this.profession; 
	};
	return obj; 
}
var test1 = createObject('trigkit4',22,'programmer');//第一个实例
var test2 = createObject('mike',25,'engineer');//第二个实例
```

**优点：**极高的扩展性和可用性

1）通过良好的编程，控制保存在cookie中的session对象的大小。

2）通过加密和安全传输技术（SSL），减少cookie被破解的可能性。

3）只在cookie中存放不敏感数据，即使被盗也不会有重大损失。

4）控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。

**缺点：**

1） Cookie 数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉. 

2）安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。

3）有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。