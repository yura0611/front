let qsts = window.questions;
let issue = [];
let option1 = [];
let option2 = [];
let option3 = [];
let option4 = [];
let answr= [];
let prbl;
let frst;
let scnd;
let thrd;
let frth;
let answer;
let curr_prize = 100;
let totat_prize = 0;
let end = 1000000;
let zero = 0;
const one = 1;
const two = 2;
const three = 3;
const hundr = 100;

for(let i = 0; i < qsts.length; i++){
    issue.push(qsts[i].question); //get questions
    answr.push(qsts[i].correct); // get answers
    option1.push(qsts[i].content[zero])// get first variant
    option2.push(qsts[i].content[one])// get second variant
    option3.push(qsts[i].content[two])// get third variant
    option4.push(qsts[i].content[three])// get fourth variant
}

function start(){ // function for starting new game
    let btn = document.getElementById('new_game');
    let skip = document.getElementById('skip');
    let qstn = document.getElementById('question');
    let btn_1 = document.getElementById('opt1');
    let btn_2 = document.getElementById('opt2');
    let btn_3 = document.getElementById('opt3');
    let btn_4 = document.getElementById('opt4');
    let curr_round = document.getElementById('Current_round');
    let total_prize = document.getElementById('Total_prize');
    let tot = document.getElementById('Total');
    let curr = document.getElementById('Current');
    arrayRandElement(issue,option1,option2,option3,option4,answr);// function for getting random questions
    skip.hidden = false;
    skip.disabled = false;
    btn_1.hidden =false;
    btn_2.hidden =false;
    btn_3.hidden =false;
    btn_4.hidden =false;
    tot.hidden = false;
    curr.hidden = false;
    qstn.innerHTML = prbl;
    btn_1.innerHTML = frst;
    btn_2.innerHTML = scnd;
    btn_3.innerHTML = thrd;
    btn_4.innerHTML = frth;
    btn.disabled = true;
    totat_prize = 0;
    curr_prize = hundr;
    curr_round.innerHTML = curr_prize;
    total_prize.innerHTML = totat_prize;
}

function skip(){ // function for skipping question
    let skip = document.getElementById('skip');
    let qstn = document.getElementById('question');
    let btn_1 = document.getElementById('opt1');
    let btn_2 = document.getElementById('opt2');
    let btn_3 = document.getElementById('opt3');
    let btn_4 = document.getElementById('opt4');
    arrayRandElement(issue,option1,option2,option3,option4,answr);
    qstn.innerHTML = prbl;
    btn_1.innerHTML = frst;
    btn_2.innerHTML = scnd;
    btn_3.innerHTML = thrd;
    btn_4.innerHTML = frth;
    skip.disabled = true;
}


function arrayRandElement(arr,option1,option2,option3,option4,answr){
    let rand = Math.floor(Math.random()*arr.length);
     prbl = arr[rand];
    frst = option1[rand];
    scnd = option2[rand];
    thrd = option3[rand];
    frth = option4[rand];
    answer = answr[rand];
    arr.splice(rand,1);// delete elements from array that the same questions didn't repeat
    answr.splice(rand,1);
    option1.splice(rand,1);
    option2.splice(rand,1);
    option3.splice(rand,1);
    option4.splice(rand,1);
}

function First_Opt(){ // function for first option
    if (answer === 0){
        let total = document.getElementById('Total_prize');
        totat_prize += curr_prize;
        curr_prize = curr_prize*two;
        let qstn = document.getElementById('question');
        let btn_1 = document.getElementById('opt1');
        let btn_2 = document.getElementById('opt2');
        let btn_3 = document.getElementById('opt3');
        let btn_4 = document.getElementById('opt4');
        let curr_round = document.getElementById('Current_round');
        arrayRandElement(issue,option1,option2,option3,option4,answr);
        qstn.innerHTML = prbl;
        btn_1.innerHTML = frst;
        btn_2.innerHTML = scnd;
        btn_3.innerHTML = thrd;
        btn_4.innerHTML = frth;
        curr_round.innerHTML = curr_prize;
        total.innerHTML = totat_prize;
        if (totat_prize >= end){
            let btn = document.getElementById('new_game');
            let skip = document.getElementById('skip');
            let qstn = document.getElementById('question');
            let btn_1 = document.getElementById('opt1');
            let btn_2 = document.getElementById('opt2');
            let btn_3 = document.getElementById('opt3');
            let btn_4 = document.getElementById('opt4');
            let tot = document.getElementById('Total');
            let curr = document.getElementById('Current');
            qstn.innerHTML = `Congratulations!You won 1000000.`;
            btn.disabled = false;
            skip.hidden = true;
            btn_1.hidden =true;
            btn_2.hidden =true;
            btn_3.hidden =true;
            btn_4.hidden =true;
            tot.hidden = true;
            curr.hidden = true;
            totat_prize = 0;
            curr_prize = hundr;
        }
    } else{
        let btn = document.getElementById('new_game');
        let skip = document.getElementById('skip');
        let qstn = document.getElementById('question');
        let btn_1 = document.getElementById('opt1');
        let btn_2 = document.getElementById('opt2');
        let btn_3 = document.getElementById('opt3');
        let btn_4 = document.getElementById('opt4');
        let tot = document.getElementById('Total');
        let curr = document.getElementById('Current');
        qstn.innerHTML = `Game over.Your prize is: ${totat_prize}`;
        btn.disabled = false;
        skip.hidden = true;
        btn_1.hidden =true;
        btn_2.hidden =true;
        btn_3.hidden =true;
        btn_4.hidden =true;
        tot.hidden = true;
        curr.hidden = true;
        totat_prize = 0;
        curr_prize = hundr;
    }
}

function Second_Opt(){ // function for second option
    if (answer === one){
        let total = document.getElementById('Total_prize');
        totat_prize += curr_prize;
        curr_prize = curr_prize*two;
        let qstn = document.getElementById('question');
        let btn_1 = document.getElementById('opt1');
        let btn_2 = document.getElementById('opt2');
        let btn_3 = document.getElementById('opt3');
        let btn_4 = document.getElementById('opt4');
        let curr_round = document.getElementById('Current_round');
        arrayRandElement(issue,option1,option2,option3,option4,answr);
        qstn.innerHTML = prbl;
        btn_1.innerHTML = frst;
        btn_2.innerHTML = scnd;
        btn_3.innerHTML = thrd;
        btn_4.innerHTML = frth;
        curr_round.innerHTML = curr_prize;
        total.innerHTML = totat_prize;
        if (totat_prize >= end){
            let btn = document.getElementById('new_game');
            let skip = document.getElementById('skip');
            let qstn = document.getElementById('question');
            let btn_1 = document.getElementById('opt1');
            let btn_2 = document.getElementById('opt2');
            let btn_3 = document.getElementById('opt3');
            let btn_4 = document.getElementById('opt4');
            let tot = document.getElementById('Total');
            let curr = document.getElementById('Current');
            qstn.innerHTML = `Congratulations!You won 1000000.`;
            btn.disabled = false;
            skip.hidden = true;
            btn_1.hidden =true;
            btn_2.hidden =true;
            btn_3.hidden =true;
            btn_4.hidden =true;
            tot.hidden = true;
            curr.hidden = true;
            totat_prize = 0;
            curr_prize = hundr;
        }

    } else{
        let btn = document.getElementById('new_game');
        let skip = document.getElementById('skip');
        let qstn = document.getElementById('question');
        let btn_1 = document.getElementById('opt1');
        let btn_2 = document.getElementById('opt2');
        let btn_3 = document.getElementById('opt3');
        let btn_4 = document.getElementById('opt4');
        let tot = document.getElementById('Total');
        let curr = document.getElementById('Current');
        qstn.innerHTML = `Game over.Your prize is: ${totat_prize}`;
        btn.disabled = false;
        skip.hidden = true;
        btn_1.hidden =true;
        btn_2.hidden =true;
        btn_3.hidden =true;
        btn_4.hidden =true;
        tot.hidden = true;
        curr.hidden = true;
        totat_prize = 0;
        curr_prize = hundr;
    }
}

function Third_Opt(){ // function for third option
    if (answer === two){
        let total = document.getElementById('Total_prize');
        totat_prize += curr_prize;
        curr_prize = curr_prize*two;
        let qstn = document.getElementById('question');
        let btn_1 = document.getElementById('opt1');
        let btn_2 = document.getElementById('opt2');
        let btn_3 = document.getElementById('opt3');
        let btn_4 = document.getElementById('opt4');
        let curr_round = document.getElementById('Current_round');
        arrayRandElement(issue,option1,option2,option3,option4,answr);
        qstn.innerHTML = prbl;
        btn_1.innerHTML = frst;
        btn_2.innerHTML = scnd;
        btn_3.innerHTML = thrd;
        btn_4.innerHTML = frth;
        curr_round.innerHTML = curr_prize;
        total.innerHTML = totat_prize;
        if (totat_prize >= end){
            let btn = document.getElementById('new_game');
            let skip = document.getElementById('skip');
            let qstn = document.getElementById('question');
            let btn_1 = document.getElementById('opt1');
            let btn_2 = document.getElementById('opt2');
            let btn_3 = document.getElementById('opt3');
            let btn_4 = document.getElementById('opt4');
            let tot = document.getElementById('Total');
            let curr = document.getElementById('Current');
            qstn.innerHTML = `Congratulations!You won 1000000.`;
            btn.disabled = false;
            skip.hidden = true;
            btn_1.hidden =true;
            btn_2.hidden =true;
            btn_3.hidden =true;
            btn_4.hidden =true;
            tot.hidden = true;
            curr.hidden = true;
            totat_prize = 0;
            curr_prize = hundr;
        }

    } else{
        let btn = document.getElementById('new_game');
        let skip = document.getElementById('skip');
        let qstn = document.getElementById('question');
        let btn_1 = document.getElementById('opt1');
        let btn_2 = document.getElementById('opt2');
        let btn_3 = document.getElementById('opt3');
        let btn_4 = document.getElementById('opt4');
        let tot = document.getElementById('Total');
        let curr = document.getElementById('Current');
        qstn.innerHTML = `Game over.Your prize is: ${totat_prize}`;
        btn.disabled = false;
        skip.hidden = true;
        btn_1.hidden =true;
        btn_2.hidden =true;
        btn_3.hidden =true;
        btn_4.hidden =true;
        tot.hidden = true;
        curr.hidden = true;
        totat_prize = 0;
        curr_prize = hundr;
    }
}

function Fourth_Opt(){ //function for fourth option
    if (answer === three){
        let total = document.getElementById('Total_prize');
        totat_prize += curr_prize;
        curr_prize = curr_prize*two;
        let qstn = document.getElementById('question');
        let btn_1 = document.getElementById('opt1');
        let btn_2 = document.getElementById('opt2');
        let btn_3 = document.getElementById('opt3');
        let btn_4 = document.getElementById('opt4');
        let curr_round = document.getElementById('Current_round');
        arrayRandElement(issue,option1,option2,option3,option4,answr);
        qstn.innerHTML = prbl;
        btn_1.innerHTML = frst;
        btn_2.innerHTML = scnd;
        btn_3.innerHTML = thrd;
        btn_4.innerHTML = frth;
        curr_round.innerHTML = curr_prize;
        total.innerHTML = totat_prize;
        if (totat_prize >= end){
            let btn = document.getElementById('new_game');
            let skip = document.getElementById('skip');
            let qstn = document.getElementById('question');
            let btn_1 = document.getElementById('opt1');
            let btn_2 = document.getElementById('opt2');
            let btn_3 = document.getElementById('opt3');
            let btn_4 = document.getElementById('opt4');
            let tot = document.getElementById('Total');
            let curr = document.getElementById('Current');
            qstn.innerHTML = `Congratulations!You won 1000000.`;
            btn.disabled = false;
            skip.hidden = true;
            btn_1.hidden =true;
            btn_2.hidden =true;
            btn_3.hidden =true;
            btn_4.hidden =true;
            tot.hidden = true;
            curr.hidden = true;
            totat_prize = 0;
            curr_prize = hundr;
        }

    } else{
        let btn = document.getElementById('new_game');
        let skip = document.getElementById('skip');
        let qstn = document.getElementById('question');
        let btn_1 = document.getElementById('opt1');
        let btn_2 = document.getElementById('opt2');
        let btn_3 = document.getElementById('opt3');
        let btn_4 = document.getElementById('opt4');
        let tot = document.getElementById('Total');
        let curr = document.getElementById('Current');
        qstn.innerHTML = `Game over.Your prize is: ${totat_prize}`;
        btn.disabled = false;
        skip.hidden = true;
        btn_1.hidden =true;
        btn_2.hidden =true;
        btn_3.hidden =true;
        btn_4.hidden =true;
        tot.hidden = true;
        curr.hidden = true;
        totat_prize = 0;
        curr_prize = hundr;
    }
}




