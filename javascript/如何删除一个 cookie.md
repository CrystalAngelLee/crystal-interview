1）将时间设为当前时间往前一点。

var date = newDate();

date.setDate(date.getDate() - 1);//真正的删除

setDate()方法用于设置一个月的某一天。

2）expires的设置

 document.cookie= 'user='+ encodeURIComponent('name') + ';expires = ' + newDate(0)

<strong> ， <em> 和 <b> ， <i> 标签

<strong> 标签和 <em> 标签一样，用于强调文本，但它强调的程度更强一些。

em 是 斜体强调标签，更强烈强调，表示内容的强调点。相当于html元素中的 <i>...</i> ; 

< b > < i > 是视觉要素，分别表示无意义的加粗，无意义的斜体。

em 和 strong 是表达要素(phraseelements)。

