
function promedioPonderado(notas) {
  
  return notas.reduce((acumulador, nota) => {
    return acumulador + (nota.valor * nota.peso);
  }, 0);
}


const notas = [
  { valor: 60, peso: 0.5 }, 
  { valor: 95, peso: 0.3 }, 
  { valor: 80, peso: 0.2 }  
];

const resultado = promedioPonderado(notas);
console.log(resultado);
