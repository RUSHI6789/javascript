let x=32243;
console.log(revNum(x));

let revNum = num =>{
    let numStr = num.toString();


let revStr = numStr.split('').reverse().join('');
return parseInt(revStr ,10);
};