const arr = [9,5,2,8,43,0,2,6];
function findSecondLargestNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return console.log("Invalid");
    }
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length; j++){
            if (arr[i] > arr[j]) {
                let temp = arr[i] ;
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    if (arr[arr.length-2] === undefined) return null;
    return console.log(arr[arr.length-2]);
}
findSecondLargestNumber(arr);