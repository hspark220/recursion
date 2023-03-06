const fibs = num => {
    let array = [];

    for (i = 0; i < num; i++) {
        if (i < 2) {
            array.push(i)
        } else {
            array.push(array[i-1] + array[i-2]);
        }
    }
    return array;
}

const fibsRec = num => {
    if (num == 1) {
        return [0];
    } else  if (num  == 2 ){
        return fibsRec(num-1).concat(num-1);
    } else {
        return fibsRec(num-1).concat(fibsRec(num-1)[num-2] + fibsRec(num-2)[num-3]);
    }
}

const mergeSort = (array1, array2) => {
    if (array2) {
        if (array1.length < 2 && array2.length < 2) {

        }
        return array2;
    } else {
        const length = array1.length;
        if (length%2 == 0) {
            return mergeSort(array1.splice(0, length/2), array1.splice(-length/2));
        } else {
            return mergeSort(array1.splice(0, length/2+1), array1.splice(-length/2));
        }
        
    }
}

// console.log(fibs(10));
// console.log(fibsRec(10));
console.log(mergeSort([1,2,4]));