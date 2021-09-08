# 循环方式

## **while** 

> while循环()中的表达式，运算结果可以是各种类型，但是最终都会转为真假，转换规则如下 　
>
> 1. Boolean：true为真，false为假； 　
> 2. String：空字符串为假，所有非空字符串为真； 
> 3. Number：0为假，一切非0数字为真； 
> 4. null/Undefined/NaN:全为假； 　
> 5. Object：全为真。 while循环特点：先判断后执行；                           
 ```js
 var num = 1;//1、声明循环变量
             
 while (num<=10){//2、判断循环条件;
     document.write(num+"<br />");//3、执行循环体操作；
     num++;//4、更新循环变量；
 }
 ```

## **do-while**

> do-while循环特点：先执行再判断，即使初始条件不成立，do-while循环至少执行一次；              

```js
var num = 10;      
do{
    document.write(num+"<br />");//10 9 8 7 6 5 4 3 2 1 0
    num--;
}while(num>=0);
            
document.write(num);//-1             
```

##  **for**

>  1、for有三个表达式：①声明循环变量；②判断循环条件；③更新循环变量； 三个表达式之间，用;分割，for循环三个表达式都可以省略，但是两个“;”缺一不可。 
>
> 2、for循环的执行特点：先判断再执行，与while相同
>
> 3、for循环三个表达式都可以有多部分组成，第二部分多个判断条件用&& ||连接， 第一三部分用逗号分割；                   

**forEach**

​                forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。 注意: forEach() 对于空数组是不会执行回调函数的。 forEach()返回值是undefined，不可以链式调用。              

**for-in**

​                for-in 循环主要用于遍历对象 for()中的格式：for(keys in zhangsan){} keys表示obj对象的每一个键值对的键！！所有循环中，需要使用obj[keys]来取到每一个值！！！ for-in 循环，遍历时不仅能读取对象自身上面的成员属性，也能延续原型链遍历出对象的原型属性 所以，可以使用hasOwnProperty判断一个属性是不是对象自身上的属性。 obj.hasOwnProperty(keys)==true 表示这个属性是对象的成员属性，而不是原先属性              

​                与其他遍历语法的比较 for...in循环有几个缺点 ①数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。 ②for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。 ③某些情况下，for...in循环会以任意顺序遍历键名。 for...in循环主要是为遍历对象而设计的，不适用于遍历数组。              

​                //声明一个Peson类 function Person(){    this.name = "张三";    this.age = 14;    this.func1 = function(){            } } //实例化这个类 var zhangsan = new Person(); //使用for-in遍历这个对象 for(keys in zhangsan){    console.log(zhangsan[keys]) }              

**for-of**

**ES6 引入了for...of循环，作为遍历所有数据结构的统一的方法。**

　　**一个数据结构只要部署了Symbol.iterator属性，就被视为具有iterator接口，就可以用for...of循环遍历它的成员。也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。**

　　**for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。**

​                for...of循环 　有着同for...in一样的简洁语法，但是没有for...in那些缺点。 　不同于forEach方法，它可以与break、continue和return配合使用。 　提供了遍历所有数据结构的统一操作接口。              

**数组遍历**

​                JavaScript 原有的for...in循环，只能获得对象的键名，不能直接获取键值。 ES6 提供for...of循环，允许遍历获得键值 for...in循环读取键名，for...of循环读取键值。 如果要通过for...of循环，获取数组的索引，可以借助数组实例的entries方法和keys方法              

​                var arr = ['a', 'b', 'c', 'd']; for (let a in arr) {  console.log(a); // 0 1 2 3 } for (let a of arr) {  console.log(a); // a b c d }              

**Set 和 Map**

​                值得注意的地方有两个， 首先，遍历的顺序是按照各个成员被添加进数据结构的顺序。 其次，Set 结构遍历时，返回的是一个值， 而 Map 结构遍历时，返回的是一个数组， 该数组的两个成员分别为当前 Map 成员的键名和键值。              

​                var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]); for (var e of engines) {  console.log(e); } // Gecko  Trident    Webkit var es6 = new Map(); es6.set("edition", 6); es6.set("committee", "TC39"); es6.set("standard", "ECMA-262"); for (var [name, value] of es6) {  console.log(name + ": " + value); } // edition: 6 // committee: TC39 // standard: ECMA-262              

**类数组的对象**

​                 类似数组的对象包括好几类。 下面是for...of循环用于字符串、DOM NodeList 对象、arguments对象的例子              

​                // 字符串 var str = "hello"; for (let s of str) {  console.log(s); // h e l l o } // DOM NodeList对象 let paras = document.querySelectorAll("p"); for (let p of paras) {  p.classList.add("test"); } // arguments对象 function printArgs() {  for (let x of arguments) {    console.log(x);  } } printArgs('a', 'b');// 'a' 'b'              

**map**

​                map()返回一个新数组，原数组不会改变。              

**循环控制语句**

​                1、break：跳出本层循环，继续执行循环后面的语句。 如果循环有多层，则break只能跳出一层。 2、continue：跳过本次循环剩余的代码，继续执行下一次循环。 ①对与for循环，continue之后执行的语句，是循环变量更新语句i++； ②对于while、do-while循环，continue之后执行的语句，是循环条件判断； 因此，使用这两个循环时，必须将continue放到i++之后使用，否则，continue将跳过i++进入死循环。              

​                for(var i = 1; i < 10; i++){    if(i == 4){        continue;    }    console.log(n);//1 2 3 5 6 7 8 9 }  for(var i = 1; i < 10; i++){    if(i == 4){        break;    }     console.log(i);//1 2 3 }              

# for in 和 for of 的区别

1. for...in 循环：只能获得对象的键名，不能获得键值; for...of 循环：允许遍历获得键值
2. 对于普通对象，没有部署原生的 iterator 接口，直接使用 for...of 会报错; 可以使用 for...in 循环遍历键名; 也可以使用 Object.keys(obj) 方法将对象的键名生成一个数组，然后遍历这个数组
3. for...in 循环不仅遍历数字键名，还会遍历手动添加的其它键，甚至包括原型链上的键。for...of 则不会这样
4. for...in 循环主要是为了遍历对象而生，不适用于遍历数组; for...of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象

