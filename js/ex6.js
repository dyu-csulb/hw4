
let counter = 0;

//document.ready    
document.addEventListener("DOMContentLoaded", function(){
    getNewNumber();
    document.getElementById('txtMyRandomNum').style.display = 'none'
});
  

function getNewNumber() {
    document.getElementById("txtMyRandomNum").value = randomNumber();
 }

function checkBoxClick() {
    var checkBox = document.getElementById('chkViewNumber');
    if (checkBox.checked == true)
    {
        document.getElementById('txtMyRandomNum').style.display = ''
    } 
    else {
        document.getElementById('txtMyRandomNum').style.display = 'none'
    }
}

function randomNumber() {
   let randNum = 0;
   randNum = Math.floor((Math.random() * 100) + 1);
   return randNum;
}

function myFunction() {
    let values = '';
    values = document.getElementById("txtValues").value;

    if (values=='' || values < 1 || values > 100) {
        alert("Please enter a number between 1 and 100!");
        clearValues();
    }
    else 
    {    
        checkValue(values);
    }
}

function checkValue(val) {
    let randNum = document.getElementById("txtMyRandomNum").value;
    if (val == randNum) {
        counter += 1
        document.getElementById("lblMessage").innerHTML  = 'Correct! It took you ' + counter + ' attempt(s) to get the number correct.';
    }
    else if (val > randNum) {
        counter += 1
        document.getElementById("lblMessage").innerHTML  = 'Too high. Guess again. So far you have made ' + counter + ' attempt(s) to get the number correct.';
    }
    else if (val < randNum) {
        counter += 1
        document.getElementById("lblMessage").innerHTML  = 'Too low. Guess again. So far you have made ' + counter + ' attempt(s) to get the number correct.';
    }
}

function clearValues() {
    document.getElementById("txtValues").value  = '';
    document.getElementById("lblMessage").innerHTML  = '';
    document.getElementById("txtValues").focus();
}