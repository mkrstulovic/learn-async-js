const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumArray(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += arr[i];
                }
                console.log('resolving ... ');
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    });
}

const sumPromise = Promise.all(array2D.map(row => sumArray(row)))
  .then((responses) => {
      let totalSum = 0;
      for (const response of responses) {
          totalSum += response;
      }
      console.log(totalSum);
    })
.catch((err) => console.log(err));