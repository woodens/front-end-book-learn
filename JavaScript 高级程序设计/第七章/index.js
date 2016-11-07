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
/***************************/
/***
 * 此处方法anotherFactorial方法体与原factorial方法体内容相同,但是方法体中引用了factorial,此时为null故会报错
 * @param num
 * @returns {number}
 */
function factorial(num){
    if(num<=1){
        return 1;
    }else{
        return num*fatorial(num-1);
    }
}


var anotherFactorial = factorial;
factorial=null;
// console.log(anotherFactorial(4));
/***************************/

function factorial2(num){
    if(num<=1){
        return 1;
    }else{
        //arguments.callee()指向正在执行的函数指针
        return num*arguments.callee(num-1);
    }
}
