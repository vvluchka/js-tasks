function removespecialcharacters(str){
    var regex = /[^a-zA-Z0-9]/g;
    return str.replace(regex, '');
}
console.log(removespecialcharacters("Hello World!.@#$%^&*()"));