const analyzeArray = (arr) => {
    let sum = 0;
    let min = arr[0];
    let max = arr[0];
    let length = arr.length;

    for (let i = 0; i<length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
        if(max < arr[i]){
            max = arr[i];
        }
        sum += arr[i];
    }
    let average = parseFloat(sum) / length;
    return {average, min, max, length};

};

module.exports =  analyzeArray;