
//creamos función que permite remplazo de valores en la cadena de texto palabra secreta.
String.prototype.replaceAt=function(index,character){
    return  this.substring(0,index)+character + this.substring(index+character.length);
} //Uso:  palabraGuiones =palabraGuiones().reaplaceAt(i*2,letra);


//generamos el arreglo de palabras.
var palabras=["ALURA","ORACLE","ONE","CHALLENGE","JAVASCRIPT","PROGRAMACION","ALUMNO","RETO","CASA","GLOBO","HONOR"];
var palabraSecreta = "".toUpperCase();
//INGRESAMOS AQUI UNA VARIABLE CONTADOR DE FALLOS PARA PODER CONTABILIZAR INTENTOS FALLIDOS DE ADIVINAR LETRA
var contadorfallos =0;

//AGREGAMOS NUEVA PALABRA TOMADA DE INPUT DE USUARIO Y CON PUSH LA INTRODUCIMOS EN ARREGLO
function agregarpalabra(){
var nuevapalabra=document.getElementById("nuevapalabra").value;
palabras.push(nuevapalabra);
alert("palabra agregada"+""+nuevapalabra);
console.log(palabras);

}
//FUNCION LIMPIAR, LIMPIA LA CAJA DE INPUT PARA PODER ESCRIBIR NUEVAMENTE EN ELLA
function limpiar(){
    document.getElementById("nuevapalabra").value = "";
}
//FUNCION INICIAR  CON CLICK EN BTN JUGAR INICIA EL JUEGO
function iniciar(){
    
    document.getElementById("btn-jugar").addEventListener("click",function(){

    document.getElementById("ahorcado");
   //CREAMOS METODO ALEATORIO PARA OBTENER PALABRAS DE NUESTRO ARRECLO Y ESA PALABRA SELECCIONADA ES LA PALABRA SECRETA.

       var palabraaleatoria=Math.floor(Math.random()*palabras.length);
       palabraSecreta=palabras[palabraaleatoria];
       console.log(palabraSecreta);
    // USAMOS LA FUNCION REPLACE  PARA REEMPLAZAR LA PALABRA SECRETA POR GUIONES.
       let palabraGuiones = palabraSecreta.replace(/./g , "_ ");

      
    //MOSTRAMOS LOS GUIONES EN HTML
    document.querySelector("#Secreta").innerHTML = palabraGuiones;

//TOMAMOS LA LETRA INGRESADA POR USUARIO EN EL TEXTFIELD
document.querySelector("#btn-checar").addEventListener("click", function () {
        const letra=document.querySelector("#letra").value;
        //DECLARAMOS VARIABLE HAFALLADO COMO VERDADERA.
        let hafallado = true;
//RECORREMOS EL ARREGLO HACIENDO USO DE IN
        for(const i in palabraSecreta){
//COMPARAMOS SI LETRA ES IGUAL A LETRA EN PALABRA SECRETA SE REEMPLAZA Y HA FALLADO SE VUELVE FALSE.
            if(letra==palabraSecreta[i]){
               palabraGuiones =palabraGuiones.replaceAt(i*2,letra);
               hafallado = false; 
               
               
               
           
               }
              
     }
     
//si existe un fallo aumenta contador de fallos y llamamos a la imagen del ahorcado
               if(hafallado==true){
               contadorfallos++;
               document.querySelector("#hangman").style.
               backgroundPosition = -(334*contadorfallos)+"px 0"; 
                //si llega a 5 fallos muestra mensaje alerta perdiste y pantalla de fin de igual forma se maneja con ganador.
               if(contadorfallos==5){
               alert("perdiste intenta de nuevo");
               document.querySelector("#perdiste").style.display="flex";
              }else{
                  if(palabraGuiones.indexOf('_')<0){
                       alert("felicidades ganaste");
                  document.querySelector("#ganador").style.display="flex";
                
                  }
              }
 } 
    //se muestra palabra secreta en html
         
             document.querySelector("#Secreta").innerHTML = palabraGuiones; 
              document.querySelector("#letra").value='';
              document.querySelector("#letra").focus();
    });

 });   
   


   
    
      
       

}