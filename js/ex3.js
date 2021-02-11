function myFunction() {
    let num1 = 0;
    let num2 = 0;
    let addTotal = 0;
    let subTotal = 0;
    let multiplicationTotal = 0;
    let divisionTotal = 0;
    let moduloTotal = 0;
    let message = "";
    num1 = document.getElementById("txtNum1").value;
    num2 = document.getElementById("txtNum2").value;

    if (num1=='') {
        alert('Please enter first number!')
    }
    else if (num2=='') {
        alert('Please enter second number!')
    }
    else 
    {
        addTotal = Number(num1) + Number(num2)
        subTotal = Number(num1) - Number(num2)
        multiTotal = Number(num1) * Number(num2)
        div = Number(num1) / Number(num2)
        moduloTotal = Number(num1) % Number(num2)

        message = num1 + ' + '  + num2 + ' = ' + addTotal + '<br />' 
                + num1 + ' - '  + num2 + ' = ' + subTotal + '<br />'
                + num1 + ' * '  + num2 + ' = ' + multiTotal + '<br />'
                + num1 + ' / '  + num2 + ' = ' + div + '<br />' 
                + num1 + ' % '  + num2 + ' = ' + moduloTotal + '<br />'

        document.getElementById("lblMessage").innerHTML  =  message;
    }
}

function clearValues() {
    document.getElementById("txtNum1").value  = '';
    document.getElementById("txtNum2").value  = '';
    document.getElementById("lblMessage").innerHTML  = '';
}
