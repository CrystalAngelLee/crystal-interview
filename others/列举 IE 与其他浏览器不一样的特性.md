# 列举 IE 与其他浏览器不一样的特性

- IE支持currentStyle，FIrefox使用getComputStyle
- IE 使用innerText，Firefox使用textContent
- 滤镜方面：IE:filter:alpha(opacity= num)；Firefox：-moz-opacity:num
- 事件方面：IE：attachEvent：火狐是addEventListener
- 鼠标位置：IE是event.clientX；火狐是event.pageX
- IE使用event.srcElement；Firefox使用event.target
- IE中消除list的原点仅需margin:0即可达到最终效果；FIrefox需要设置margin:0;padding:0以及list-style:none
- CSS圆角：ie7以下不支持圆角

