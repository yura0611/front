/* START TASK 1: Your code goes here */

let table = document.getElementById('tableId');
let two = 2;

if (table !== null) {
    for (let i = 1; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {

              table.rows[i].cells[j].onclick = function () {
                  if (this.textContent === 'Special Cell') {
                      for (let i = 0; i < table.rows.length; i++) {
                          for (let j = 0; j < table.rows[i].cells.length; j++) {
                              if(getComputedStyle(table.rows[i].cells[j])
                                  .getPropertyValue('background-color') === 'rgba(0, 0, 0, 0)'){
                                        table.rows[i].cells[j].style.backgroundColor = 'green';
                                    }
                          }
                      }
                  } else {
                      this.style.backgroundColor = 'yellow';
                  }
                  };

          }
        }
    }

if (table !== null) {
    for (let i = 0; i < table.rows.length-two; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {

            table.rows[i].cells[j].onclick = function () {
                for (let i = 0; i < table.rows.length-two; i++) {
                    for (let j = 0; j < table.rows[i].cells.length; j++) {
                        if( getComputedStyle(table.rows[i].cells[j],null)
                            .getPropertyValue('background-color') !== 'rgb(255, 255, 0)') {
                            table.rows[i].cells[j].style.backgroundColor = 'blue';
                        }
                }
            }
        };
    }
        }
}

/* END TASK 1 */

/* START TASK 2: Your code goes here */

let input = document.getElementById('text');
input.addEventListener('input',updateValue);
let btn = document.getElementById('btn');
let text;
let regxp = /^\+?3?8?(0\d{9})$/;
let values = document.getElementById('values');
function updateValue(e){
     text= e.target.value;
     if(regxp.test(text) === true){
         btn.disabled = false;
         input.style.borderColor = 'black';
         values.style.visibility = 'hidden';
     } else{
        values.textContent = 'Type number does not follow format +380*********';
        values.style.visibility = 'visible';
        values.style.backgroundColor = '#FFA0A0';
        btn.disabled = true;
        input.style.borderColor = 'red';
     }
}

function Submit(){
    values.style.visibility = 'visible';
    values.textContent = 'Data was successfully sent';
    values.style.backgroundColor = 'green';
}


/* END TASK 2 */

/* START TASK 3: Your code goes here */

let court = document.getElementById('court');
let ball = document.getElementById('ball');
const anEvent = new Event('notification');
const anEvent2 = new Event('notification2');
let notification = document.getElementById('notification');
document.addEventListener('notification', function () {
        notification.innerText = 'Team A score!';
        notification.style.color = 'blue';
});

document.addEventListener('notification2', function () {
    notification.innerText = 'Team B score!';
    notification.style.color = 'red';
});

let A = document.getElementById('team-A');
let B = document.getElementById('team-B');
let count_A = 0;
let count_B = 0;

court.onclick = function (event) {

    let courtCoords = this.getBoundingClientRect();

    let ballCoords = {
        top: event.clientY - courtCoords.top - court.clientTop - ball.clientHeight / two,
        left: event.clientX - courtCoords.left - court.clientLeft - ball.clientWidth / two
    };

    if (ballCoords.top < 0) {
        ballCoords.top = 0;
    }

    if (ballCoords.left < 0) {
        ballCoords.left = 0;
    }

    if (ballCoords.left + ball.clientWidth > court.clientWidth) {
        ballCoords.left = court.clientWidth - ball.clientWidth;
    }

    if (ballCoords.top + ball.clientHeight > court.clientHeight) {
        ballCoords.top = court.clientHeight - ball.clientHeight;
    }

    if( ballCoords.top <=155 && ballCoords.top >= 125 && ballCoords.left <= 35 && ballCoords.left >=5 ){
        document.dispatchEvent(anEvent);
        setTimeout(function(){
            notification.innerText = '';
        } ,3000);
        count_A++;
        A.innerText = `Team A:${count_A}`;
    }

    if( ballCoords.top <=155 && ballCoords.top >= 125 && ballCoords.left <= 565 && ballCoords.left >=535) {
        document.dispatchEvent(anEvent2);
        setTimeout(function(){
            notification.innerText = '';
        },3000);
        count_B++;
        B.innerText = `Team B:${count_B}`;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
}

/* END TASK 3 */
