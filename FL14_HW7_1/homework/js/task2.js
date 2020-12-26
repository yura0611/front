let word = prompt('Please, input a word');
const two = 2;
function isEven(value){
    if (value%two ===0){
        return true;
    } else{
        return false;
    }
}

function getAplha(str){
    let lng = str.length;
    let middle = Math.floor(lng/two);
    if (lng === 0 || str.trim().length === 0){
        return 'Invalid value';
    } else if (lng > 0){
        if (str.length % two === 0) {
            if ( str[middle-1] === str[middle]){
                return 'Middle characters are the same';
            }

            return str[middle - 1] + str[middle];
        } else {
            return str[middle];
        }
    }
}

alert(getAplha(word));





