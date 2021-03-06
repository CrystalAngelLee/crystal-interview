https://blog.csdn.net/romantic_love/article/details/80875462 

**一、rem 单位如何转换为像素值** 

1.当使用 rem 单位的时候，页面转换为像素大小取决于叶根元素的字体大小，即 HTML元素的字体大小。根元素字体大小乘 rem 的值。例如，根元素的字体大小为 16px，那么 10rem 就等同于 10*16=160px。 

**二、em 是如何转换成 px 的** 

当使用 em 单位的时候，像素值是将 em 值乘以使用 em 单位的元素的字体大小。例如一个 div 的字体为 18px，设置它的宽高为 10em，那么此时宽高就是 18px*10em=180px。 

```css
.test{

  width: 10em; 

  height: 10em; 

  background-color: #ff7d42; 

  font-size: 18px; 

}
```

一定要记住的是，em 是根据使用它的元素的 font-size 的大小来变化的，而不是根据父元素字体大小。有些元素大小是父元素的多少倍那是因为继承了父元素中 font-size 的设定，所以才起到的作用。

2. em 单位的继承效果。 

使用 em 单位存在继承的时候，每个元素将自动继承其父元素的字体大小，继承的效果只能被明确的字体单位覆盖，比如 px 和 vw。只要父级元素上面一直有 fontsize 为 em 单位，则会一直继承，但假如自己设置了 font-size 的单位为 px 的时候，则会直接使用自己的 px 单位的值。 

**三、根 html 的元素将会继承浏览器中设置的字体大小**

除非显式的设置固定值去覆盖。所以 html 元素的字体大小虽然是直接确定 rem 的值， 

但这个字体大小首先是来源于浏览器的设置。（所以一定要设置 html 的值的大小，因 

为有可能用户的浏览器字体大小是不一致的。） 

**四、当 em 单位设置在 html 元素上时** 

它将转换为 em 值乘以浏览器字体大小的设置。 

例如： 

html{

font-size: 1.5em; 

}

可以看到，因为浏览器默认字体大小为 16px，所以当设置 HTML 的 fontsize 的值为 1.5em 

的售后，其对应的 px 的值为 16*1.5=24px 

所以此时，再设置其他元素的 rem 的值的时候，其对应的像素值为 n*24px。 

例如，test 的 rem 的值为 10， 

.test{

width: 10rem; 

height: 10rem; 

background-color: #ff7d42; 

}

可以看到 test 的 font-size 继承了 html 的值 24px，而此时宽高为 24*10=240px 

**总结**

\1. rem 单位翻译为像素值的时候是由 html 元素的字体大小决定的。此字体大小会 

被浏览器中字体大小的设置影响，除非显式的在 html 为 font-size 重写一个单位。 

\2. em 单位转换为像素值的时候，取决于使用它们的元素的 font-size 的大小，但是有 

因为有继承关系，所以比较复杂。 

**优缺点** 

em 可以让我们的页面更灵活，更健壮，比起到处写死的 px 值，em 似乎更有张力，改 

动父元素的字体大小，子元素会等比例变化，这一变化似乎预示了无限可能, 

em 做弹性布局的缺点还在于牵一发而动全身，一旦某个节点的字体大小发生变化，那 

么其后代元素都得重新计算