alert ('Que empiece el juego!')

let valorMaquina = 'piedra';

// generar variable resultado
let resultMaquina = 0;
let resultUsu = 0;

let arr = ['piedra', 'papel', 'tijera'];
for (let i = 1; i<=3; i++){
// pedir mediante prompt que el usuario ingrese piedra, papel o tijera y guardar en valorElegido
let valorElegido = prompt ('Ingrese piedra, papel o tijera');

if (arr.includes(valorElegido) ){
    //alert ('okis')
    // si la variable del usuario es piedra y la del programa es tijera, gana usuario
    if ((valorElegido == 'piedra') && (valorMaquina == 'tijera')){
        resultUsu ++;
    }
    // si la variable del usuario es papel y la del programa es piedra, gana usuario
    if ((valorElegido == 'papel') && (valorMaquina == 'piedra')){
        resultUsu ++;
    }
    // si la variable del usuario es tijera y la del programa es papel, gana usuario
    if ((valorElegido == 'tijera') && (valorMaquina == 'papel')){
        resultUsu ++;
    }
    // si la variable del usuario es tijera y la del programa es piedra, gana programa
    if ((valorElegido == 'tijera') && (valorMaquina == 'piedra')){
        resultMaquina ++;
    }
    // si la variable del usuario es piedra y la del programa es papel, gana programa
    if ((valorElegido == 'piedra') && (valorMaquina == 'papel')){
        resultMaquina ++;
    }
    // si la variable del usuario es papel y la del programa es tijera, gana programa
    if ((valorElegido == 'papel') && (valorMaquina == 'tijera')){
        resultMaquina ++;
    }
    // si la variable seleccionada es igual a la variable del usuario, entonces empate, 
    
} else {
    alert ('valor elegido no valido');
    i--;
}
}

if (resultMaquina > resultUsu){
    alert ('Gano Maquina')
}
if (resultMaquina < resultUsu){
    alert ('Gano usuario')
} 
if (resultMaquina == resultUsu) {
    alert ('Empate')
}


        
        
        
        
        
        
        

