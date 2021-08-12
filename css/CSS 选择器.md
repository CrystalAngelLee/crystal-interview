# [CSS 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)

## [基本选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors#基本选择器)

### [通用选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors)**（**[Universal selector](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors)**）**

选择所有元素。`*`

### [元素选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Type_selectors)**（**[Type selector](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Type_selectors)**）**

`input {}`

### [类选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Class_selectors)**（**[Class selector](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Class_selectors)**）**

`.classname {}`

### [ID 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/ID_selectors)**（**[ID selector](https://developer.mozilla.org/zh-CN/docs/Web/CSS/ID_selectors)**）**

`#idname {}`

### [属性选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)**（**[Attribute selector](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors)**）**

**语法：**`[attr]` `[attr=value]` `[attr~=value]` `[attr|=value]` `[attr^=value]` `[attr$=value]` `[attr*=value]`
**例子：**`[autoplay]` 选择所有具有 `autoplay` 属性的元素（不论这个属性的值是什么）



## [分组选择器（Grouping selectors）](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors#分组选择器（grouping_selectors）)

### [选择器列表](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Selector_list)**（**[Selector list](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Selector_list)**）**

`,` 是将不同的选择器组合在一起的方法，它选择所有能被列表中的任意一个选择器选中的节点。
**语法**：`A, B`
**示例**：`div, span` 会同时匹配 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span) 元素和 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div) 元素。



## [组合器（Combinators）](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors#组合器（combinators）)

### [后代组合器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Descendant_combinator)**（**[Descendant combinator](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Descendant_combinator)**）**

` `（空格）组合器选择前一个元素的后代节点。
**语法：**`A B`
**例子：**`div span` 匹配所有位于任意 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/div) 元素之内的 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span) 元素。

### [直接子代组合器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator)（[Child combinator](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator)）

`>` 组合器选择前一个元素的直接子代的节点。
**语法**：`A > B`
**例子**：`ul > li` 匹配直接嵌套在 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ul) 元素内的所有 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/li) 元素。

### [一般兄弟组合器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/General_sibling_combinator)（[General sibling combinator](https://developer.mozilla.org/zh-CN/docs/Web/CSS/General_sibling_combinator)）

`~` 组合器选择兄弟元素，也就是说，后一个节点在前一个节点后面的任意位置，并且共享同一个父节点。
**语法**：`A ~ B`
**例子**：`p ~ span` 匹配同一父元素下，[`p`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p) 元素后的所有 [`span`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span) 元素。

### [紧邻兄弟组合器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator)（[Adjacent sibling combinator](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator)）

`+` 组合器选择相邻元素，即后一个元素紧跟在前一个之后，并且共享同一个父节点。
**语法：**`A + B`
**例子：**`h2 + p` 会匹配所有紧邻在 `h2`[ (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) 元素后的 [`p`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p) 元素。

### [列组合器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Column_combinator)（[Column combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Column_combinator)）

`||` 组合器选择属于某个表格行的节点。
**语法：** `A || B`
**例子：** `col || td` 会匹配所有`col  `作用域内的[`td`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/td) 元素。



## [伪选择器（Pseudo）](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors#伪选择器（pseudo）)

### [伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)

`:` 伪选择器支持按照未被包含在文档树中的状态信息来选择元素。
**例子：**`a:visited` 匹配所有曾被访问过的 [`a`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a) 元素。

### [伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements)

`::` 伪选择器用于表示无法用 HTML 语义表达的实体。
**例子：**`p::first-line` 匹配所有 [`p`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p) 元素的第一行。

