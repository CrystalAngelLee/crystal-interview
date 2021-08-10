[最小的k个数](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/)

## 排序

对原数组进行排序后取出前k个数

> 面试不推荐

```js
var getLeastNumbers = function(arr, k) {
   	// 最小的使用 a - b
    return arr.sort((a, b) => b - a).slice(0, k)
};
```

## 快排

```js
var getNumbers = function(arr, k) {
  if (!k === 0 || !arr.length) return [];  
  return quickSort(arr, 0, arr.length - 1, k - 1)
}

function quickSort(arr, left, right, pivot) {
	let p = partition(arr, left, right);
  if (p === pivot) return arr.slice(0, p + 1)
  return p > pivot ? quickSort(arr, left, p - 1, pivot) : quickSort(arr, p + 1, right, pivot)
}

function partition(arr, left, right) {
  let v = arr[left];
  let i = left, j = right + 1;
  while (true) {
    while (++i <= hi && nums[i] < v);
            while (--j >= lo && nums[j] > v);
            if (i >= j) {
                break;
            }
            int t = nums[j];
            nums[j] = nums[i];
            nums[i] = t;
  }
  nums[lo] = nums[j];
        nums[j] = v;
  return j
}
```

