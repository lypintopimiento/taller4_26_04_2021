//2.	3 usuarios entran a una heladería a comprar un helado, 
//      pero hay un problema: los precios no están al lado de 
//      cada estante con su respectivo helado. 
//      “Ellos quieren comprar el helado más caro que puedan con la plata que tienen.

//      Miguel tiene $1.000 
//      Carlos tiene $2.000 
//      Manuel tiene $500 

//      Los precios de helados son los siguientes:

//      Bonais: $400
//      Palito de helado de agua: $1.000 
//      Palito de helado de crema: $2.200
//      Bombón helado con arequipe: $1.500
//      Bombón helado con chispas de chocolate: $2.500
//      Bombón helado con fresas: $2.800
//      Medio litro de helado: $ 2.000

//  El programa tiene que pedir el ingreso de su dinero y el nombre de cliente
//  Si hay más de un helado con el mismo precio o por de bajo de precio del usuario mostrar las opciones disponibles
//  El programa también tiene que poder dar los vueltos de su compra con su factura
//--------------------------------**-----------------------------------------

let cliente1
let dinero1
let cliente2
let dinero2
let cliente3
let dinero3
let cambio1


// detener:

//listado de productos
let nomproduc=[" 1.Bonais"," 2.Palito de helado de agua"," 3.Palito de helado de crema"," 4.Bombón helado con arequipe"," 5.Bombón helado con chispas de chocolate"," 6.Bombón helado con fresas"," 7.Medio litro de helado"]
//precios de los productos
let preciosproduc=[400,1000,2200,1500,2500,2800,2000]
//item del producto
let numproduc=[1,2,3,4,5,6,7]

//iniciamos mensaje de bienvenida
    alert("                                   Bienvenido a la Heladeria \n-------------- Menu ---------------------          --- Precios ---\n 1.Bonais                                                                 $400\n 2.Palito de helado de agua                                   $1.000\n 3.Palito de helado de crema                                 $2.000\n 4.Bombón helado con arequipe                           $1.500\n 5.Bombón helado con chispas de chocolate        $2.500\n 6.Bombón helado con fresas                                $2.800\n 7.Medio litro de helado                                        $2.000");


    //----------------------------cliente 1-----------------------------------------

   cliente1=prompt("nombre de cliente1")
   dinero1=parseInt(prompt("Ingrese la cantidad de dinero"))
   console.warn(`cliente 1: ${cliente1} cuenta con el siguiente dinero $${dinero1}`);
    //opciones de menu segun el dinero disponible
    
    

    //respuesta de la compra realizada con valores y dinero sobrante
    console.log(`Factura1:\n Nombre del cliente: ${cliente1} \n Producto comprado: ${cliente1} \n Valor del Producto: ${cliente1} \n Cambio: ${cambio1} `);


    //----------------------------cliente 2-----------------------------------------

        
//*
 //*   cliente2=prompt("nombre de cliente2")
  //*  dinero2=parseInt(prompt("Ingrese la cantidad de dinero"))
 //*   console.warn(`cliente 2: ${cliente2} cuenta con el siguiente dinero $${dinero2}`);


  //----------------------------cliente 3-----------------------------------------

 //*   cliente3=prompt("nombre de cliente3")
  //*  dinero3=parseInt(prompt("Ingrese la cantidad de dinero"))
 //*   console.warn(`cliente 3: ${cliente3} cuenta con el siguiente dinero $${dinero3}`);