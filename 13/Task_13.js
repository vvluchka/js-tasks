const str = '_-H!e@l#l$o W%o^&l*d-_';

const noSpecialCharacters = str.replace(/[^\w -]/g, '');
console.log(noSpecialCharacters); 
