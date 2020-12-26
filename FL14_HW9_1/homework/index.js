function convert(...args){ // first function
    let arr = [];
    for(let arg of args){
        if (typeof arg === 'string'){
            arg = Number(arg);
            arr.push(arg);
        } else if (typeof arg === 'number'){
            arg = arg.toString();
            arr.push(arg);
        }
    }
    return arr;
}



function executeforEach(arr,callback) { // second function
    for (let elem of arr){
        elem = callback(elem);
    }
}



function mapArray(arr,callback){ // third function
    let mass = [];
    executeforEach(arr,function (el){
        if (typeof el === 'string'){
            el = Number(el);
        }
        mass.push(callback(el));
    });
    return mass;
}



function filterArray(arr,callback){ // fourth function
    let mass = [];
    executeforEach(arr,function (el){
        if ( callback(el)){
            mass.push(el);
        }
    });
    return mass;
}



function getValuePosition(arr,value){ // fifth function
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i+1;
        }
    }
    return false;
}



function flipOver(text){ // sixth function
    let txt = ' ';
    for (let i = text.length;i >= 0;i--){
        txt += text.charAt(i);
    }
    return txt;
}




function makeListFromRange(arr){ // seventh function
    let mass = [];
    for(let i = arr[0]; i <= arr[1];i++ ){
        mass.push(i);
    }
    return mass;
}



const fruits = [
    { name: 'apple', weight: 0.5 },
    { name: 'pineapple', weight: 2 }
];




function getArrayOfKeys(obj,keys){ // eighth function
    let arr = [];
    executeforEach(obj,function (item){
        arr.push(item[keys]);
    });
    return arr;
}



const basket = [
    { name: 'Bread', weight: 0.3 },
    { name: 'Coca-Cola', weight: 0.5 },
    { name: 'Watermelon', weight: 8 }
];


function getTotalWeight(obj){ //ninth function
    let wght = 0;
    executeforEach(obj,function (item){
        wght += item.weight;
    });
    return wght;
}



function getPastDay(date,day){ // tenth function
    let nw_date = new Date();
    nw_date = date;
    nw_date.setDate(date.getDate()-day);
    return nw_date;
    }



function formatDate(data){ // eleventh function
    const nine = 9;
    function zero(n){
        if ( n <= nine){
            return '0' + n;
        }
        return n;
    }

    let form_date = data.getFullYear() + '/' + zero(data.getMonth()+1) + '/' + zero(data.getDate()) + ' ' +
        zero(data.getHours()) + ':' + zero(data.getMinutes());
    return form_date;
}
