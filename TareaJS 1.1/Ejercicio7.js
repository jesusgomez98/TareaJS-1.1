 

function contarPalabras(array) {
  return array.reduce((contador, palabra) => {

    contador[palabra] = (contador[palabra] || 0) + 1;
    return contador;
  }, {});
}


const palabras = ['hola', 'adios', 'hola', 'gracias', 'hola', 'gracias'];
const resultado = contarPalabras(palabras);
console.log(resultado);


