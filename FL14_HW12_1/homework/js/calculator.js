function calc(exp){
    let res = exp.split(' ').join('');
    return eval(res);
}

while (true) {
    try {
        let exp = prompt("Enter mathematical expression");
        const result = calc(exp);
        if (isNaN(result) || result === undefined || result == Infinity) {
            throw "invalid input";
        } else {
            alert(`${exp} = ${result}`);
            break;
        }

    } catch (error) {
        alert('Invalid input');
    }
}
