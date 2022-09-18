function whatMissingLetter(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var start = alphabet.indexOf(str[0]);
    var end = alphabet.indexOf(str[str.length - 1]);
    var missing = [];
    for (var i = start; i < end; i++) {
        if (str.indexOf(alphabet[i]) === -1) {
            missing.push(alphabet[i]);
        }
       
    }
    return (missing.length > 0) ? missing.join(' ') : 'No Missing Letters';
}

console.log(whatMissingLetter("gijkmno"));