
function JAZZ(s){
  const num = 7; 
  let new_S = [];
  for(let i = 0; i<s.length; i++){
  
    new_S.push(s[i]+"7");
    const last = new_S[i].slice(-1);
    if(last == "7"){
      new_S[i] = new_S[i].slice(0,-1);
    }
  }
  return new_S;
}
console.log(JAZZ(["A7","B","7"]));