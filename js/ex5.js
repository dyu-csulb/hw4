function myFunction() {
    let myArray = [];
    let values = '';
    let lowerCaseVal = '';
    let counter = 0
    let message = ''
    values = document.getElementById("txtValues").value;

    if (values=='') {
        alert('Please enter some text, a 5 digit value.')
        document.getElementById("txtValues").value  = '';
        document.getElementById("txtValues").focus();
    }
    else if (values.length < 5) {
        alert('Please enter a 5 digit value.')
        document.getElementById("txtValues").focus();
    } 
    else 
    {
        for (let i = 0; i < values.length; i++) {
            lowerCaseVal = values.toLowerCase().trim();
            myArray.push(lowerCaseVal[i].trim());
            switch(true) {
                case lowerCaseVal[i] == 'a':    
                    counter +=1;
                    break;
                case lowerCaseVal[i] == 'e': 
                    counter +=1;
                    break;
                case lowerCaseVal[i] == 'i': 
                    counter +=1;
                    break; 
                case lowerCaseVal[i] == 'o': 
                    counter +=1;
                    break;                        
                case lowerCaseVal[i] == 'u': 
                    counter +=1;
                    break;                   
              } 
          }

          if (myArray[0]==myArray[4] && myArray[1]==myArray[3] ) {
            message += "'" +  values + "' contains (" + counter + ") vowels and is a palindrome."
          }
          else {
            message += "'" +  values + "' contains (" + counter + ") vowels and is not a palindrome."
          }
         
        document.getElementById("lblMessage").innerHTML  = message
    }
}

function clearValues() {
    document.getElementById("txtValues").value  = '';
    document.getElementById("lblMessage").innerHTML  = '';
    document.getElementById("txtValues").focus();
}