let num1 = prompt("Digite un numero :");
let num2 = prompt("Digite un numero :");

num1 = parseInt(num1);
num2 = parseInt(num2);

if(num1 > num2){
    print('El mayor es: ', num1);   
} else if(num1 < num2){
    print('El mayor es: ', num2);
}else if(num1 == num2){
    print('Los numeros son iguales');
}else{
    print('error');
}

console.log(print);