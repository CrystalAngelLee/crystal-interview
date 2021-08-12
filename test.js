// const sortArray = (arr) => quickSort(arr, 0, arr.length - 1);

// function quickSort(arr, left, right) {
//   if (left >= right) return arr;
//   const pivot = partition(arr, left, right);
//   quickSort(arr, left, pivot - 1);
//   quickSort(arr, pivot + 1, right);
//   return arr;
// }

// function partition(arr, left, right) {
//   let pivot = arr[left],
//     i = left,
//     j = right;

//   while (left !== right) {
//     while (left < right && pivot < arr[j]) j--;
//     while (left < right && arr[i] <= pivot) i++;
//     if (left < right) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }

//   arr[left] = arr[i];
//   arr[i] = pivot;

//   return i;
// }

var sortArray = (nums) => quickSort(nums, 0, nums.length - 1);

function quickSort(arr, startIndex, endIndex) {
  if (startIndex >= endIndex) return arr;
  const pivot = partition(arr, startIndex, endIndex);
  quickSort(arr, 0, pivot - 1);
  quickSort(arr, pivot + 1, endIndex);
  return arr;
}

function partition(arr, startIndex, endIndex) {
  let pivot = arr[startIndex],
    left = startIndex,
    right = endIndex;
  while (left !== right) {
    while (left < right && arr[right] > pivot) right--;
    while (left < right && arr[left] <= pivot) left++;
    if (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  arr[startIndex] = arr[left];
  arr[left] = pivot;
  return left;
}

console.log(sortArray([(3, 1, 4, 2)]));
