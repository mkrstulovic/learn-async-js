const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function arrayHasNeg(arr) {
    return new Promise((resolve, reject) => {
        console.log('FindNeg called ... ');
        if(Array.isArray(arr)) {
            setTimeout(() => {
                let negativesInArray = arr.filter(num => num < 0);
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] < 0) {
                        console.log('resolving ... ');
                        found = true;
                        resolve(arr);
                    }
                }
                if (negativesInArray.length > 0) {
                    console.log('resolving ... ');
                    resolve(arr);
                } else {
                    console.log('rejecting ... ');
                    reject("No negative");
                }
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from findNeg');
    });
}

const findNegPromise = Promise.any(array2D.map(row => arrayHasNeg(row)))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));