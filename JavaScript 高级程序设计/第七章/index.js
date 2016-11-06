/**
 * 定义函数的两种方式
 * 1.函数声明的语法
 * 2.函数表达式
 */

//1.函数声明的方法
function functionName(arg0,arg1,arg2){
    //函数体
}
//  1.1函数声明提升
sayHi();
function sayHi(){
    console.log('Hi!');
}
//2.函数表达式
var functionNameExpress = function(arg0,arg1,arg2){
    //函数体
}


