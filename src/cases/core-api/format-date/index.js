/*
	
使用给定格式对日期进行格式化

d是一个Date对象, f是一个字符串
f中可能包含的占位符:

yyyy, year
MM, month, 1,2,3,4, .... 12
dd, day of month, 1 .... 30 (31)

例如:
const d = new Date("2020-01-01")
const f = 'dd-dd-dd-yyyy'

formatDate(d, f) // 01-01-01-2020

please ref: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date


*/

'use strict';
const moment = require('moment');


/**
 * @param d {Date}
 * @param f {string}
 * @returns {string}
 */
module.exports = function formatDate(d, f) {
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    // f.split('-').forEach(item => {
    //     if (item == 'dd') {
    //         date += day;
    //     }
    //     if (item == 'MM') {
    //         date += '-' + month;
    //     }
    //     if (item == 'yyyy') {
    //         date += '-' + year;
    //     }
    // });

    return f.replace(/yyyy/g, year, ).replace('MM', month).replace('dd', day);
};