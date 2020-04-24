/*
	
访问object中的属性

input       output

{a:1},'a'   1
{a:1},'b'   null    // not undefined

*/
'use strict';

module.exports = (obj, propName) => {
    if (obj && obj[propName]) {
        return obj[propName];
    }
    return null;
};