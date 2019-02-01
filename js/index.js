const a= parseFloat(prompt('enter a'));
const b= parseFloat(prompt('enter b'));
const c= parseFloat(prompt('enter c'));

const result=solveQuadrEq(a, b, c);
alert(result);

 function calcDisk(a,b,c){
     return b*b-4*a*c;
}
function solveQuadrEq(a, b, c) {
    const diskr=calcDisk(a, b, c);
    let x1, x2
    if(diskr>0){
         x1 = (-b + Math.sqrt(diskr))/(2*a);
         x2 = (-b - Math.sqrt(diskr))/(2*a);
         return('x1= '+ x1 + ', x2= '+ x2);
     } else if(diskr===0){
         x1=(-b)/(2*a);
         return('x=' + x1);
     } 
    
}