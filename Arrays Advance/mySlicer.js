let myArry = [10, 20, 30, 40, 50, 60, 70];



let res = mySlicer(myArry, 2, 4)

console.log(res)



function mySlicer(arr, startIndex, endIndex) {



    let result = [];



    if (startIndex && endIndex) {



        for (let i = startIndex; i < endIndex; i++) {

            result.push(arr[i]);

        }

    } else if (!startIndex && endIndex) {

        for (let el of arr) {

            result.push(el)

        }

    } else if (startIndex && !endIndex) {

        for (let i = startIndex; i < arr.length; i++) {

            result.push(arr[i])

        }

    }

    return result;

}
