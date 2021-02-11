
function myFunction() {
    let dayOfWeek ='';
    let s = ''
    dayOfWeek = prompt("Please enter day of the week:", dayOfWeek);
    s= dayOfWeek.substring(0,3).toLowerCase();

    switch(true) {
        case s == 'sun': 
            document.getElementById("lblMessage").innerHTML  = "You entered: <i>" + s + '</i>. <br/> The following day is: ' + '<i>Monday.</i>';
            break;
        case s =='mon': 
            document.getElementById("lblMessage").innerHTML  = "You entered: <i>" + s + '</i>. <br/> The following day is: ' + '<i>Tuesday.</i>';
            break;
        case s == 'tue': 
            document.getElementById("lblMessage").innerHTML  = "You entered: <i>" + s + '</i>. <br/> The following day is: ' + '<i>Wednesday.</i>';
            break;
        case s =='wed': 
            document.getElementById("lblMessage").innerHTML  = "You entered: <i>" + s + '</i>. <br/> The following day is: ' + '<i>Thursday.</i>';
            break;
        case s == 'thu': 
            document.getElementById("lblMessage").innerHTML  = "You entered: <i>" + s + '</i>. <br/> The following day is: ' + '<i>Friday.</i>';
            break;
        case s =='fri': 
            document.getElementById("lblMessage").innerHTML  = "You entered: <i>" + s + '</i>. <br/> The following day is: ' + '<i>Saturday.</i>';
            break;
        case s == 'sat': 
            document.getElementById("lblMessage").innerHTML  = "You entered: <i>" + s + '</i>. <br/> The following day is: ' + '<i>Sunday.</i>';
            break;
      } 
}
