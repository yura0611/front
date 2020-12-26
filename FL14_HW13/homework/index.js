function getAge(birthday){
    let past_year = birthday.getFullYear();
    let day = new Date();
    let past_month = birthday.getMonth();
    let past_day = birthday.getDate();
    let now_year = day.getFullYear();
    let now_month = day.getMonth();
    let now_day = day.getDate();
    if (past_year === now_year){
        return 0;
    }
    if( past_year > now_year){
       return 'incorrect date';
    }
    if ( past_month < now_month){
        return now_year - past_year;
    } else if(past_month === now_month){
        if( past_day <= now_day){
            return now_year - past_year;
        } else{
            return now_year - past_year - 1;
        }
    } else {
        return now_year - past_year -1 ;
    }
}


function getWeekDay(date){
    let data = new Date(date);
    let day = data.getDay();
    switch(day){
        case 0:
            return 'Sunday';
        case 1: return 'Monday';

        case 2: return 'Tuesday';

        case 3: return 'Wednesday';

        case 4: return 'Thursday';

        case 5: return 'Friday';

        case 6: return 'Saturday';

        default:
            break;
    }
}


function getProgrammersDay(year){
    if ( year % 400 === 0 || year % 100 !==0 && year % 4 === 0){
        let day = getWeekDay(new Date( year,8,12));
        return ` 12 Sep, ${year} (${day}) `;
    } else{
        let day = getWeekDay(new Date( year,8,13));
        return ` 13 Sep, ${year} (${day}) `;
    }
}



function howFarIs(day){
    day = day.toLowerCase();
    let days = {
        1: 'monday',
        2: 'tuesday',
        3: 'wednesday',
        4: 'thursday',
        5: 'friday',
        6: 'saturday',
        7: 'sunday'
    };

    let amount = Number(Object.keys(days).find(key => days[key]===day));
    let now = new Date().getDay();
    let div = amount - now;
    if ( div < 0){
        div = amount + now+1;
    }

    if ( div === 0 ){
        return ` Hey, today is ${day.charAt(0).toUpperCase() + day.slice(1)} =) `;
    } else{
        return ` It's ${div} day(s) left till ${day.charAt(0).toUpperCase() + day.slice(1)}`;
    }

}



function isValidIdentifier(value){
    let reg = /^[^0-9\s][0-9a-zA-z_$]*$/g;
    return reg.test(value);
}


function capitalize(str){
    let reg = /^(.)|\s+(.)/g;
    return str.replace(reg,c => c.toUpperCase());
}


function isValidAudioFile(file){
    let reg = /^[A-Za-z]{1,}\.(flac|mp3|alac|aac)$/;
    return reg.test(file);
}



function getHexadecimalColors(str){
    let reg = /#[a-f0-9]{6}|#[a-f0-9]{3}/gi;
    return str.match(reg);
}




function isValidPassword(password){
    let reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/g;
    return reg.test(password);
}



function addThousandsSeparators(str){
    let reg = /\B(?=(\d{3})+(?!\d))/g;
    return str.toString().replace(reg,',');
}












