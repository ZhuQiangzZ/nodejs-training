/*
	
sum array items' value, array length <= 100, -10000 < item value < 10000

input       output

[]          0
[1,2,3]     6
[1,99]      100
[-23,23]    0

*/
'use strict';

module.exports = (arr = []) => {
    if (arr && arr.length == 0) {
        return 0;
    } else {
        let sum = 0;
        arr.forEach(item => {
            sum += item;
        });
        return sum;
    }

};