let isEquals = (a,b) => a === b; // First function



let numberToString = a => a.toString(); // Second function


function storeNames(){ // Third function
    let arr = [];
    for(let i = 0; i< arguments.length;i++){
        arr.push(arguments[i]);
    }
    return arr;
}


let isBigger = (a,b) => a > b;


function getDivision(a,b){ // Fourth function
    if (isBigger(a,b)){
        return a/b;
    } else{
        return b/a;
    }
}


function negativeCount(arr){ // Fifth function
    let count = 0;
    for ( let el of arr){
        if (el < 0 ){
            count++;
        }
    }
    return count;
}


function letterCount(str,k){ // Sixth function
    let count = 0;
    for (let i = 0; i< str.length;i++){
        if( k === str.charAt(i)){
            count++;
        }
    }
    return count;
}



function countPoints(arr){ // Seventh function
    let nw_arr,x,y,count = 0;
    for (let i = 0;i< arr.length;i++){
        nw_arr = arr[i].split(':');
        x = Number(nw_arr[0]);
        y = Number(nw_arr[1]);
        if(isBigger(x,y)){
            count += 3;
        } else if(x === y){
            count += 1;
        }
    }
    return count;
}






