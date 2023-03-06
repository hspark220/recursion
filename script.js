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

const mergeSort = array => {
    const middle = (array.length/2)%2 == 0 ? array.length/2 : array.length/2+1
    if (array.length <= 2) {
        let copy = [];
        if (array.length == 1) {
            copy.push(array[0]);
            return copy;
        } else {
            if (array[0] > array[1]) {
                copy.push(array[1]);
                copy.push(array[0]);
                return copy;
            } else {
                copy.push(array[0])
                copy.push(array[1]);
                return copy;
            }
        }
    } else {
        let array1 = mergeSort(array.splice(0,middle));
        let array2 = mergeSort(array.splice(-middle));
        const result = [];

        while (array1.length > 0 && array2.length > 0) {
            if (array1[0] > array2[0]) {
                result.push(array2.shift());
            } else {
                result.push(array1.shift());
            }
        }
        if (array1.length == 0) {
            result.concat(array2);
        } else {
            result.concat(array1);
        }
        return result;
    }
}

// console.log(fibs(10));
// console.log(fibsRec(10));
console.log(mergeSort([3,2,1,3,5,7,8]));