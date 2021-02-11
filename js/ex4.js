function myFunction() {

    let password = '';
    let correctPassword = '';

    password = prompt('Please enter your password', password)
    correctPassword = 'secret';

    let i;
    for (i = 1; i < 4; i++) {
        if (password !=correctPassword)  {
            prompt('Invalid password. Please enter correct password!', password)

        }
        else if (i==3) {
            alert('Your account is locked!  You failed to enter the correct password after ' + i + ' times(s).');
        }
        else if (password ==correctPassword) {
      
            alert('You entered the correct password after ' + i + ' attempt(s).');
            i = 3;
        } 
      }

    


}


