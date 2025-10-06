
function verificarMayoresDeEdad(edades) {
  for (const edad of edades) {
    if (edad < 18) {
      return false; 
    }
  }
  return true; 
}

const edades = [32, 21, 16, 26];
const resultado = verificarMayoresDeEdad(edades);
console.log(resultado); 
