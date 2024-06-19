import './css/style.css';

// 1. Intercambio de Valores: Declara dos variables (a, b) y utiliza una variable auxiliar (temp) para intercambiar sus valores.

let num1 = prompt('*Intercambio de valores*\ndeclara variable 1: ');
let num2 = prompt('declara variable 2: ');
alert(`*Valores originales*\nvariable 1= ${num1}\nvariable 2= ${num2}`);
let temp;
while (temp === undefined) {
  temp = num1;
  num1 = num2;
  num2 = temp;
}
alert(`*Valores cambiados\nvariable 1= ${num1}\nvariable 2= ${num2}`);

// 2. Función que reciba 2 números como entrada y determine cuál es el mayor.

function numeroMayor(a, b) {
  if (a > b) {
    return `${a} es mayor que ${b}`;
  }
  if (a < b) {
    return `${b} es mayor que ${a}`;
  } else {
    return `${a} es igual a ${b}`;
  }
}

num1 = Number(prompt('*Mayor/Menor que...*\ndeclare num1: '));
num2 = Number(prompt('*Mayor/Menor que...*\ndeclare num2: '));
let res = numeroMayor(num1, num2);
alert(res);

// 3. Función que reciba un número y retorne si es un número dado es par o impar.

function esPar(a) {
  if (a % 2 === 0) {
    return `El numero ${a} es par`;
  } else {
    return `El numero ${a} es impar`;
  }
}

num1 = Number(prompt('*Par o impar*\ndeclare un numero: '));
res = esPar(num1);
alert(res);

// 4. Función que calcula el precio final de un producto después de aplicar un descuento basado en el precio original y el porcentaje de descuento.

function precioConDescuento(a, b) {
  if (a <= 100 && a > 0) {
    let res = (1 - (a / 100).toFixed(3)) * b;
    return res.toFixed(2);
  } else {
    alert('Porcentaje fuera de rango');
  }
}
num1 = Number(prompt('*Precio final con descuento*\ndeclare descuento: '));
num2 = Number(prompt('declare costo del producto: '));
res = precioConDescuento(num1, num2);
alert(`Costo producto: $${num2}\nDescuento: ${num1}%\nTotal a pagar: $${res}`);

// 5. Función para Calcular Área: Crea una función que reciba el radio de un círculo y devuelva su área.

function areaCirculo(radio) {
  let area = Math.PI * radio ** 2;
  return area.toFixed(1);
}

let areaCir = Number(prompt('*Area de un circulo*\ndeclare radio del circulo'));
alert(`El area de un circulo con radio ${areaCir} es: ${areaCirculo(areaCir)}`);

// 6. Función para Convertir Temperatura: Crea una función que convierta de Celsius a Fahrenheit.

function CelsiusToFarenheit(grados) {
  return grados * (9 / 5) + 32;
}

num1 = Number(prompt('*Celsius a Farenheit*\ndeclare grados'));
alert(`${num1} grados centígrados, son ${CelsiusToFarenheit(num1)} grados Farenheit`);

// 7. Bucle for: Utiliza un bucle for para imprimir los números del 1 al 10.

alert('*Bucle for: Imprimir números del 1 al 10*');
for (let i = 1; i <= 10; i++) {
  alert([i]);
}

// 8. Bucle while: Utiliza un bucle while para pedir al usuario números hasta que ingrese un número negativo.

num1 = Number(prompt('Declara un numero: \n*Si el número es negativo terminara la aplicación*'));
while (num1 >= 0) {
  num1 = Number(prompt('Declara un numero: \n*Si el número es negativo terminara la aplicación*'));
}
alert('Ciclo while terminado por número negativo');

// 9. Tabla de Multiplicar: Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10.

const tabla = {};
num1 = Number(prompt('*Tabla de Multiplicar*\ndeclara un numero: '));
// debugger
for (let i = 1; i <= 10; i++) {
  tabla[`${[i]} x ${num1}`] = num1 * [i];
}

let tablaJson = JSON.stringify(tabla, null, 4); //! JSON.stringify convierte un objeto o valor JS a una cadena de texto JSON que se puede imprimir con alert. opcionalmente reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un array de reemplazo. (objeto(value),replacer(si es null no reemplaza o agrega nada), space(numero de espacios entre los datos del objeto, máximo 10))
alert(`*Tabla del ${num1}*\n${tablaJson}`);

// 10. Suma de Números Pares: Calcula la suma de los números pares del 1 al 100.

let total = 0;
alert('*Suma de los números pares del 1 al 100*');
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    // debugger;
    total = total + i;
  }
}
alert(`* Total *: ${total}`);

// 11. Objeto Persona: Crea un objeto persona con propiedades como nombre, edad, ciudad y un método presentarse() que muestre un mensaje de presentación.

const Persona = {
  nombre: 'Wilman',
  apellido: 'Conde',
  edad: 41,
  ciudad: 'Cali',
  pais: 'Colombia',

  presentarse() {
    alert(
      `*Método presentarse()*\nHola, soy ${this.nombre} ${this.apellido}, tengo ${this.edad} años y vivo en ${this.ciudad} - ${this.pais}`,
    );
  },
};

Persona.presentarse();

// 12. Array de Objetos: Crea un array de objetos persona y utiliza un bucle para mostrar la información de cada persona.

const arrayPersonas = [
  { nombre: 'Wilman', apellido: 'Conde', edad: 41, ciudad: 'Cali', pais: 'Colombia' },
  { nombre: 'Maximiliano', apellido: 'Principe', edad: 35, ciudad: 'Buenos Aires', pais: 'Argentina' },
  { nombre: 'Tania', apellido: 'Moreno', edad: 31, ciudad: 'Quito', pais: 'Ecuador' },
  { nombre: 'Juan', apellido: 'Guevara', edad: 28, ciudad: 'La Paz', pais: 'Bolivia' },
  { nombre: 'Eduardo', apellido: 'Tascon', edad: 50, ciudad: 'Belo Horizonte', pais: 'Brazil' },
];

const arrayPersonasJson = JSON.stringify(arrayPersonas, null, 4);
//! convierto el array en cadena de texto json para imprimir con alert
alert(`*Array con objetos persona usando alert*\n${arrayPersonasJson}`);

for (let key in arrayPersonas) {
  alert(`*Array con objetos persona usando console.log()*`);
  console.log(key, arrayPersonas[key]); //? imprimo  objetos del array por consola
}

// 13. Función para Calcular Promedio: Crea una función que reciba un array de números y devuelva su promedio.

const arrayNumeros = Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)); //! Inicializa array con valores aleatorios

function promedioArray(array) {
  total = 0;
  for (let i = 0; i < arrayNumeros.length; i++) {
    total += arrayNumeros[i];
  }
  const promedio = total / arrayNumeros.length;
  return promedio;
}

const prom = promedioArray(arrayNumeros);
alert(`*Promedio de arrayNumeros*\n${arrayNumeros}\npromedio ${prom}`);
