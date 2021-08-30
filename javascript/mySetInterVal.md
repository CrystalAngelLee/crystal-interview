# 写一个 mySetInterVal(fn, a, b),每间隔 a,a+b,a+2b 的时间，然后写一个myClear，停止上面的mySetInterVal

```js
function mySetInterVal(fn, a, b) {
  this.a = a;
  this.b = b;
  this.time = 0;
  this.handle = -1;
  this.start = () => {
    this.handle = setTimeout(() => {
      fn();
      this.time++;
      this.start();
      // console.log(this.a + this.time * this.b);
    }, this.a + this.time * this.b)
  }
  this.stop = () => {
    clearTimeout(this.handle)
    this.time = 0;
  }
}

var a = new mySetInterVal(() => {console.log('123')}, 100, 200)
a.start();
setTimeout(a.stop,5000)
```

