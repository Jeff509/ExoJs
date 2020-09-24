'use strict';
// Exo 1
var i, j;

for(i=1 ; i<=8 ; i++)
{
for(j=1 ; j<=8 ; j++)
{
document.write(i + '*' + j + ' = ' + (i*j) + '<br>');
}
document.write('<br>');
};

// Exo 2

var a;
 do{
    a=prompt("Saisissez un nomre entier");
 }while(isNaN(a) || a%1!==0);
 document.write("<table>");
 for(var i=1;i<=10;i++){
    document.write("<tr>");
    document.write("<td>"+a+" x "+i+" =</td>");
    document.write("<td>"+a*i+"</td>");
    document.write("</tr>");
 }
 document.write("</table>");