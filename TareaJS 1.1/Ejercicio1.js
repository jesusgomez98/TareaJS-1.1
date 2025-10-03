
function agruparPorPropiedad(array, propiedad) {
  return array.reduce((acumulador, elemento) => {
  
    const clave = elemento[propiedad];

    
    if (!acumulador[clave]) {
      acumulador[clave] = [];
    }

    
    acumulador[clave].push(elemento);

    return acumulador;
  }, {}); 
}

const datos = [
  { categoria: 'fruta', nombre: 'manzana' },
  { categoria: 'verdura', nombre: 'zanahoria' },
  { categoria: 'fruta', nombre: 'banana' },
  { categoria: 'verdura', nombre: 'lechuga' }
];

const resultado = agruparPorPropiedad(datos, 'categoria');
console.log(resultado);
