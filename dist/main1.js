//1.Pregunto si quiere el huevo frito.
//Si me dice que si, lo frio, si me dice que no, lo hago hervido.
//Una vez cocinado le pregunto si quiere sal en el huevo.
//Si me dice que no lo sirvo en el Plato. Si me dice que si 
//le hecho sal y después lo sirvo en el plato.

let escojer = parseInt(prompt("Quiere huevo frito? \n 1.Si \n 2.No"));


if (escojer== 1) {
    console.log("huevo frito");    
}
else{
    console.log("huevo hervido");
    }

let sal = parseInt(prompt("Quiere sal en el huevo? \n 1.Si \n 2.No"));
if (sal==1) {
    console.log("con sal"); 
    console.log("servido en el plato");   
}
else{
    console.log("sin sal servido en el plato");  
    }