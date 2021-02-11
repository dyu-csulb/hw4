function myFunction() {
    let hours = '';
    let minutes = '';
    let seconds = ''; 
    let message = "";
    let total = '';

    hours = document.getElementById("hours").value;
    minutes = document.getElementById("minutes").value;
    seconds = document.getElementById("seconds").value;


    if (seconds==59 && minutes < 59 && hours < 59) {
        document.getElementById("minutes").value  = Number(minutes) + 1;
        document.getElementById("seconds").value  = 0;
    }
    else if (seconds<59 && minutes < 59 && hours < 59) {
        document.getElementById("seconds").value  = Number(seconds) + 1;
    }
    else if (seconds<59 && minutes == 59 && hours < 12) {
        document.getElementById("seconds").value  = Number(seconds) + 1;
    }
    else if (seconds==59 && minutes == 59 && hours < 12) {
        document.getElementById("seconds").value  = 0;
        document.getElementById("minutes").value  = 0;
        document.getElementById("hours").value  =Number(hours) + 1;
    }
    else if (seconds==59 && minutes == 59 && hours == 12) {
        document.getElementById("seconds").value  = 0;
        document.getElementById("minutes").value  = 0;
        document.getElementById("hours").value  = 0;
    }
    else if (seconds<59 && minutes == 59 && hours == 12) {
        document.getElementById("seconds").value  = Number(seconds) + 1;
    }

}


function clearValues() {
    document.getElementById("hours").value  = '0';
    document.getElementById("minutes").value  = '0';
    document.getElementById("seconds").value  = '0';
    document.getElementById("lblMessage").innerHTML  = '';
}
