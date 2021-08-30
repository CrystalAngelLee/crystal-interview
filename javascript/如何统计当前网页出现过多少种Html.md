# 如何统计当前网页出现过多少种Html

`new Set([...document.getElementsByTagName('*')].map(v => v.tagName)).size`

