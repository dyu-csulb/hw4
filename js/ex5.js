function myFunction() {
    let num1 = '';
    let message = "";
    let total = '';
    num1 = document.getElementById("txtNum1").value;

    let i;
    for (i = 0; i < 11; i++) {
       total= Number(num1) * i 
       message += num1 + ' x '  + i + ' = ' + total + '<br />' 
    }

    document.getElementById("lblMessage").innerHTML  =  message;

}


function clearValues() {
    document.getElementById("txtNum1").value  = '';
    document.getElementById("lblMessage").innerHTML  = '';
}
