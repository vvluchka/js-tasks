function isMathExp(str) {
    let regExp = /^[\d+\-*/.]+$/;
    return regExp.test(str);
}

console.log(isMathExp("1+1"));