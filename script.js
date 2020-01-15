function Rebour() {

    moment().format();

    var event = moment('13/03/2020 19:30:00', 'DD/MM/YYYY HH:mm:ss')
    var date = moment()

    var diff = moment.duration(event.diff(date))

    setZero(diff.months(), "mois");
    setZero(diff.days(), "jour");
    setZero(diff.hours(), "heure");
    setZero(diff.minutes(), "minute");
    setZero(diff.seconds(), "seconde");
    

tRebour=setTimeout ("Rebour();", 1000);
}

Rebour();

function setZero(time, variable) {
    if(time < 10) {
        document.getElementById(variable).innerHTML = "0" + time;    
    }
    else {
        document.getElementById(variable).innerHTML = time;
    }

    if(variable != "mois"){

        if(time > 1) {
            document.querySelector("#"+ variable + "+ div").innerHTML = variable+"s";
        } else {
            document.querySelector("#"+ variable + "+ div").innerHTML = variable;
        }
    }
}

    


