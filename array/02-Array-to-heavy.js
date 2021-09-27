var arr = [1,2,3,4,3,4];

// 数组去重1：indexOf方法
var uniqueArr1 = [];
for (let i = 0; i < arr.length; i++) {
    if(uniqueArr1.indexOf(arr[i]) === -1){
        uniqueArr1.push(arr[i])
    }
}
// uniqueArr1:[ 1, 2, 3, 4 ]

// ------------------------------------------------------------------

// 数组去重2：indexOf方法
var uniqueArr2 = [];
for(var i = 0;i<arr.length;i++){
    if(arr.indexOf(arr[i]) === i){
        uniqueArr2.push(arr[i])
    }
}
// console.log(uniqueArr2) [ 1, 2, 3, 4 ]
// ------------------------------------------------------------------

// 数组去重3：es6方法
// Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。
var uniqueArr3 = Array.from(new Set(arr))
// console.log(uniqueArr3):[ 1, 2, 3, 4 ]

// ------------------------------------------------------------------

// 数组去重4：排序后相邻比较去除法
arr.sort();
var uniqueArr4 = [];
uniqueArr4[0] = arr[0];

for(var i = 1;i<arr.length;i++){
    if(arr[i] !== arr[i-1]){
        uniqueArr4.push(arr[i])
    }
}

// console.log(uniqueArr4) [ 1, 2, 3, 4 ]
// -----------------------------------------------------------------

// 数组去重5：优化的遍历数组法
// 思路：两层for循环，外面一层是控制遍历到的前一个arr中的元素，里面一层控制的是第一层访问到的元素后面的元素，不断的从第0个开始，让第0个和他后面的元素比较，如果没有和这个元素相等的，则证明没有重复，推入到新数组中存储起来，如果有和这个元素相等的，则pass掉它，直接进入下一次循环。从第1个开始，继续和它后面的元素进行比较，同上进行，一直循环到最后就是：不重复的都被推入新数组里面了，而重复的前面的元素被pass掉了，只留下了最后面的一个元素，这个时候也就不重复了，则推入新数组，过滤掉了所有重复的元素，达到了去重的目的。
    var uniqueArr5 = []
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          i++
          j = i
        }
      }
      uniqueArr5.push(arr[i])
   }
   console.log(uniqueArr5) // 结果：[0, 5, 6, 7, 2, 8]