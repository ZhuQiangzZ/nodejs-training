/*
	
s是一个字符串

正常情况下 s的格式为 ID-NAME[USERNAME]:{DATE} (字符串不会含有空格换行符等)
例如 1-Alice,[ALICE1]:{20202020}

异常情况下 s的格式任意

请将字符串结构化并返回一个object
其中包含属性
id: number 无需前缀0
name: string
username: string 
date: string

例如
return {
    id: 1,
    name: "Alice",
    username: "ALICE1",
    date: "20202020"
}

异常情况下，各字段请设置为null，并依然返回object

*/


/**
 * @param s {string}
 * @returns {{id:number,name:string,username:string,date:string}}
 */
module.exports = function parse(s = '') {
    //const arr = /(\d+)-([^-,]+),\[(.+?)\]:\{(.+?)\}/.exec(s);
    const arr = s.match(/(\d+)-([^-,]+),\[(.+?)\]:(\d+)/);
    const id = arr ? parseInt(arr[1], 10) : null;
    const name = arr ? arr[2] : null;
    const username = arr ? arr[3] : null;
    const date = arr ? arr[4] : null;
    return {
        id: id,
        name: name,
        username: username,
        date: date
    };
};