/* ============================
8.	What is the output of the following?
==============================*/
// console.log(4 + 5);
// console.log("4 + 5");
// console.log("4" + "5");
// console.log(2 + 3 * 5);
// console.log((2 + 3) * 5);
// console.log(10 % 3);


/* ============================
9.	Variable Scope: What is the output of the following?
==============================*/
// let num1 = 0;
// {
//   num1 = 1; 
//   const num2 = 0;
// }
// console.log(num1); 
// console.log(num2); 

/* ============================
10.	Constants: What is the output of the following?
==============================*/
// const pi = 3.14;
// pi = 3.14159;
// console.log(pi);


/* ============================
11.	What is the output of the following?
==============================*/
// let a = 2;
// a -= 1;
// a++;
// let b = 8;
// b += 2;
// const c = a + b * b;
// const d = a * b + b;
// const e = a * (b + b);
// const f = a * b / a;
// const g = b / a * a;
// console.log(a, b, c, d, e, f, g);

/* ============================
12.	What is the output of the following?
==============================*/
// console.log(true && "Hello");      
// console.log(false && "Hello");     
// console.log(undefined && "Hello"); 
// console.log("" && "Hello");        
// console.log("Hello" && "Goodbye")  

// console.log(true || "Hello");      
// console.log(false || "Hello");     
// console.log(undefined || "Hello"); 
// console.log("" || "Hello");        
// console.log("Hello" || "Goodbye")


/* ============================
13.	What is the output of the following?
==============================*/
// console.log("0" == 0); 
// console.log("" == 0);
// console.log("" == 1);
// console.log(true == 0);
// console.log(true == 1);

// console.log("0" === 0);
// console.log("" === 0);
// console.log("" === 1);
// console.log(true === 0);
// console.log(true === 1);

/* ============================
14.a	What is the output of the following?
==============================*/
// let i = 1;

// if ((1 > 2) && i++) {
//    //Nothing.  Want to test condition
// }

// console.log(`The value of i is: ${i}`);


/* ============================
14.b	What is the output of the following?
==============================*/
// let i = 1;

// if ((1 < 2) && i++) {
//    //Nothing.  Want to test condition
// }

// console.log(`The value of i is: ${i}`);



/* ============================
15.a	Break Test
==============================*/
// const x = "abc";
// switch (x) {
//   case "abc":
//     console.log("x = abc");
//     break;
//   case "def":
//     console.log("x = def");
//     break;
// }

/* ============================
15.b	Break Test
==============================*/
// const x = "abc";
// switch (x) {
//   case "abc":
//     console.log("x = abc");
//     //no break
//   case "def":
//     console.log("x = def");
//     break;
// }

/* ============================
16.	What is the output of the following?
==============================*/
// let x = 3;
// let y = 3;
// if (x > 2) {
//   if  (y > 2) {
//      z = x + y;
//      console.log("z is: ", z);
//   }
// } 
// else {
//   console.log("x is: ", x);
// }


/* ============================
17.	What is the output of the following, if any (indent this properly)?
==============================*/
// let x = 3;
// let y = 3;
// if (x > 2) {
//   if  (y > 2) {
//     z = x + y;
//     console.log("z is: ", z);
//   }
//   else {
//     console.log("x is: ", x);
//   }
// }
  
/* ============================
18.	How many times does this loop run and what is the output?
==============================*/
// let number = 1;
// while (number <= 5) {
//   console.log(number);
//   number++;
// }

// let number = 1;
// while (number <= 5) {
//   console.log(number);
// }


/* ============================
19.	How many times does this loop run and what is the output?
==============================*/
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
 

  for (let i = 1; i <= 5; i++) {
    console.log(i);
    i++;
  }
 

