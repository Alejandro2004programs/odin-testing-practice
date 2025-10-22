export default function analyzeArray(array) {
    let average;
    let min;
    let max;
    let length;
    min = array[0];
    max = array[0];
    let total = 0;
    for(let i = 0; i <= array.length - 1; i++) {
        if(array[i] < min) {
            min = array[i]
        }
        if(array[i] > max) {
            max = array[i]
        }
        total = total += array[i]
    }
    average = total / array.length;
    length = array.length
    return {"average": average, "min": min, "max": max, "length": length};
}

// Check either the object created or the matcher used. I used one for strings not objects