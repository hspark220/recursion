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
        return array.length==2 ? sort([array[0]],[array[1]]) : array;
    } else  {
        return sort(mergeSort(array.splice(0,middle)), mergeSort(array.splice(-middle)));
    }
}

const sort = (array1, array2) => {
    let result = [];

    while (array1.length > 0 && array2.length > 0) {
        if (array1[0] > array2[0]) {
            result.push(array2.shift());
        } else {
            result.push(array1.shift());
        }   
    }

    result = array1.length==0 ? result.concat(array2) : result.concat(array1);
    return result;
}

// console.log(fibs(10));
// console.log(fibsRec(10));
 console.log(mergeSort([2,1,4,5,10,32,11,1,3,8,3,200,4,5,600]));