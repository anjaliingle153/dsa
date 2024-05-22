function reverseArray(array){
    const reverseArray = [];
    
    for (let i=array.length-1; i>=0; i--){
        reverseArray.push(array[i]);
    }
    
    return reverseArray;
    }
    
    const numbers = [22,815,892,555];
    const reversenumbers = reverseArray(numbers);
    console.log(reversenumbers);