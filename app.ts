    (function() { 

        
        
    const luchador = {
        nombre: "Steve",
        clave: "maicra",
        poder: "construir"
    }


    
    function extraer ( {nombre,poder}: any) // se puede ralizar la extraccion dentro de () de la funcion
{


  //  const {nombre,poder} = luchador; // le estoy otorgando las propiedades de mi "luchador" a mis constantes
    console.log(nombre)
    console.log(poder)
}


//extraer (luchador);



const luchadores : string[] = ["Joker","Mario","Link","Ike"];
    
const [,,link,ike] = luchadores
    // llaves cuadradas para arreglo []
    // esto para objetos {}



    function extraerarreglo ( [t1,t2,t3,t4] : string [] )
    {
        console.log(t1);
        console.log(t2);
        console.log(t3);
        console.log(t4);        
    }



    
    extraerarreglo(luchadores);


        
        

})();
