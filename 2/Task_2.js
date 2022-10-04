function jazz(chords) {
  return chords.map( (chord) => {
    if (chord[chord.length - 1] !== '7') {
      return chord + '7';
    } else {
      return chord;
    }
  });
}
console.log(jazz(['C', 'B', 'G', 'C7']));