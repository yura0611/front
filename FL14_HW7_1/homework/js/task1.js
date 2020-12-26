let amount = prompt('Please, enter amount of battery');
let percentage = prompt('Please, enter percentage of defective battery');
const hundr = 100;

if (isNaN(amount) || isNaN(percentage) || amount<0 || percentage<0 || percentage>hundr){
    alert('Invalid input data');
}

let defect = percentage*amount/hundr;
let def_round = Math.round(defect*hundr)/hundr;
let working = amount-defect;
let work_round = Math.round(working*hundr)/hundr;

alert(`Amount of defective batteries: ${def_round}`);
alert(`Amount of working batteries: ${work_round}`);