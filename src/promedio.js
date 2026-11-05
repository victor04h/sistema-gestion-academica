function calcularPromedio(nota1, nota2, nota3) { 
const notas = [nota1, nota2, nota3]; 
if (!notas.every(nota => 
typeof nota === "number" && 
Number.isFinite(nota) && 
nota >= 0 && 
nota <= 20 
)) { 
} 
throw new Error("Nota fuera del rango permitido"); 
return Number( 
((nota1 + nota2 + nota3) / 3).toFixed(2) 
); 
} 
module.exports = { calcularPromedio };