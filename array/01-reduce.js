/**
 * callback 回调函数
 * initValue 初始值
 */

//数组的reduce方法：
// arr.reduce(callback,initValue)

// ==========================================================================

/**
 * prev 上一次掉用的返回值或者initValue值，例如下例子的参数0
 * cur 数组中当前被处理的值
 * index 索引下标
 * arr 调用reduce方法的数组
 * 0 initVule初始值
 */
//数组的reduce基本用法：

// var arr = [11,22,33,44,55]
// arr.reduce(function(prev,cur,index,arr){
//     console.log(prev)
//     console.log(cur)
    // return 99
    // 注意点一:当有初始值时，第一个打印的返回值是prev是0，cur是数组下标为0的数值11,没有初始值时第一次打印prev是数组下标第一个11，cur是数组下标为0的数值22
    // 注意点二:当有return返回值时,第二次打印prev为返回值，cur为一次数组处理的下标，没有返回值时，第第二次打印prev为undefined，cur为一次数组处理的下标
// },0)

// ==========================================================================

//利用数组的reduce方法求各项的和：

var arr = [11,22,33,44,55]
var sum = arr.reduce(function(total,cur){
    return total + cur
},0)

console.log(sum)