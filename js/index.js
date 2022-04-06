// Task1
let op1 = Boolean(Number('10')) + 1; /*2*/
let op2 = 'sub'  + Number(false);   /*sub0*/
let op3 = 16  *  '      91    ' ;/*1456*/
let op4 = true-70 ;/*-69*/
let op5 = Number(1 + String(1)) + 1; /*12*/

/*task2*/
let calc =  1 * 60 * 60  ;
let secondPerHours = +prompt("Enter the number of hours to calculate") * calc;
alert(secondPerHours);

/*task3*/
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;
alert(num);