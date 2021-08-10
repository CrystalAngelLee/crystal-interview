①null是一个空的对象，而undefined是一个全局变量的特殊属性。同时，null是JavaScript的保留关键字，而undefined却不是。

②进行数值运算时，null返回值是0，而undefined是NaN。 

③null==undefined，但是null！===undefined。我是这样理解的:null和undefined都是没有实际的值的，所以null==undefined，而本质上，null是空的对象，undefined是未定义的一个全局属性，所以null！===undefined。

