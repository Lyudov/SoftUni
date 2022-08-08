function arrayRotation(arr, rotation) {
  
    while (rotation > 0) {
        let elementToMove = arr.shift();
        arr.push(elementToMove);

        rotation--;
    }
    console.log(arr.join(' '));

}
arrayRotation([51, 47, 32, 61, 21], 2);
