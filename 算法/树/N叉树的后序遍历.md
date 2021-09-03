# [N 叉树的后序遍历](https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/)

## 递归算法

```js
/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = [];
    const order = (root) => {
        if (root === null) return;
        root.children.forEach(child => order(child));
        res.push(root.val)
    }
    order(root)
    return res
};
```



## 维护栈

```js
var postorder = function(root) {
    if (root === null) return []
    const res = [root.val], stack = root.children;
    while (stack.length) {
        const node = stack.pop();
        if (node) {
            res.unshift(node.val)
            stack.push(...node.children)
        }
    }
    return res
};
```

