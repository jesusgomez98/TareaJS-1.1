  
  
function eliminarDuplicados(array, propiedad) {
  const vistos = new Set(); 
  return array.filter((elemento) => {
    const valor = elemento[propiedad];
    if (vistos.has(valor)) {
      return false; 
    }
    vistos.add(valor); 
    return true;
  });
}

const elementos = [
  { id: 1, nombre: 'A' },
  { id: 2, nombre: 'B' },
  { id: 1, nombre: 'A' }
];

const resultado = eliminarDuplicados(elementos, 'id');
console.log(resultado);


