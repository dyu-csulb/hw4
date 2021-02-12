function myFunction() {
    let myArray = [];
    let values = '';
    let message = ''
    let lowerCaseVal = '';
    values = document.getElementById("txtValues").value;

    if (values=='') {
        alert('Please enter some values separated by comma!')
        document.getElementById("txtValues").value  = '';
        document.getElementById("txtValues").focus();
    }
    else 
    {
        values.split(",").forEach(function (item) {
            lowerCaseVal = item.toLowerCase().trim();
            if (lowerCaseVal.substring(0,4) != 'stop') {
                message  += lowerCaseVal + '<br/>' 
                console.log(lowerCaseVal.trim());
            }
        });
 
        document.getElementById("lblMessage").innerHTML  = message
    }
}

function clearValues() {
    document.getElementById("txtValues").value  = '';
    document.getElementById("lblMessage").innerHTML  = '';
    document.getElementById("txtValues").focus();
}