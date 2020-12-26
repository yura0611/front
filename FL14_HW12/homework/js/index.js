function visitLink(path) {
    switch(path) {
        case 'Page1': let currentValue1 = localStorage.getItem('myClicks1') ? parseInt(localStorage.getItem('myClicks1')) : 0;
            let newValue1 = currentValue1 + 1;
            localStorage.setItem('myClicks1', newValue1);
            break;
        case 'Page2':
            let currentValue2 = localStorage.getItem('myClicks2') ? parseInt(localStorage.getItem('myClicks2')) : 0;
            let newValue2 = currentValue2 + 1;
            localStorage.setItem('myClicks2', newValue2);
            break;
        case 'Page3':
            let currentValue3 = localStorage.getItem('myClicks3') ? parseInt(localStorage.getItem('myClicks3')) : 0;
            let newValue3 = currentValue3 + 1;
            localStorage.setItem('myClicks3', newValue3);
            break;
    }
}

function viewResults() {

    let cont = document.getElementById('content');
    let ul = document.createElement('ul');
    cont.appendChild(ul);
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    if(localStorage.length == 0){
        li1.innerHTML = 'No pages were visited';
        ul.appendChild(li1);
        return;
    }
    li1.innerHTML = `You visited Page1 ${localStorage.getItem('myClicks1')} time(s)`;
    ul.appendChild(li1);
    li2.innerHTML = `You visited Page2 ${localStorage.getItem('myClicks2')} time(s)`;
    ul.appendChild(li2);
    li3.innerHTML = `You visited Page3 ${localStorage.getItem('myClicks3')} time(s)`;
    ul.appendChild(li3);
    localStorage.clear();
}
