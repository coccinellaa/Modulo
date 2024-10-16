// Importando as funções dos módulos
import { somar } from './somar.mjs'; 
import { multiplicar } from './multiplicar.mjs';
import { subtrair } from './subtrair.mjs';
import { dividir } from './dividir.mjs';
import { potenciar } from './potenciar.mjs';

// Utlizando as funções importadas
const numero1 = 5;
const numero2 = 3;

const resultadoSoma = somar(numero1, numero2);
const resultadoMultiplicacao = multiplicar(numero1, numero2);
const resultadoSubtração = subtrair(numero1, numero2);
const resultadoDivisao = dividir(numero1, numero2);
const resultadoPotenciacao = potenciar(numero1, numero2);

console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
console.log(`${numero1} * ${numero2} = ${resultadoMultiplicacao}`);
console.log(`${numero1} - ${numero2} = ${resultadoSubtração}`);
console.log(`${numero1} / ${numero2} = ${resultadoDivisao}`);
console.log(`${numero1} ^ ${numero2} = ${resultadoPotenciacao}`);