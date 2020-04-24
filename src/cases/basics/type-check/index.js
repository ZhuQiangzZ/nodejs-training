/*
	
check the input parameter type

input   output

1       'number'
'2'     'string'
null    'null'
NaN     'NaN'
[]      'array'
{}      'object'

*/
'use strict';

module.exports = (v1) => {
    const t = typeof v1;
    if (t == 'number') {
        if (isNaN(v1)) {
            return 'NaN';
        }
        return t;
    } else if (t == 'string') {
        return t;
    } else if (t == 'object') {
        if (v1 === null) {
            return String(null);
        }
        if (v1 instanceof Array) {
            return 'array';
        }
        if (v1 instanceof Function) {
            return 'function';
        }
        if (v1 instanceof Object) {
            return 'object';
        }
    }
};