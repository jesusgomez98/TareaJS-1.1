 
 function filtrarDisponibles(productos, categoriaBuscada) {
  return productos.filter(producto => 
    producto.categoria === categoriaBuscada && producto.stock > 0
  );
}

const productos = [
  { nombre: 'Camisa', categoria: 'ropa', stock: 10 },
  { nombre: 'Pantalon', categoria: 'ropa', stock: 0 },
  { nombre: 'Televisor', categoria: 'electronica', stock: 5 }
];

const resultado = filtrarDisponibles(productos, 'ropa');
console.log(resultado);

