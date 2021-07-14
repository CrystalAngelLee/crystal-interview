# label 的作用是什么？是怎么用的？

**作用**

label 标签来定义表单控制间的关系,**当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上**

**用法**

1. ID绑定

   ```html
   <label for="name">label:</label>
   <input type='text' id='name'/>
   ```

   

2. 嵌套

   ```html
   <label>label:<input type='text'/></label>
   ```

   

