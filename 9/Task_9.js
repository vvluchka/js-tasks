function ascDesNone(arr, str) {
    if(str === "Asc"){
        return arr.sort((a,b)=>a-b);
    }else if(str === "Desc"){
        return arr.sort((a,b)=>b-a);
    }else if(str === "None"){
        return arr;
    }
}

console.log(ascDesNone([2, 3, 4, 1], "Desc"));