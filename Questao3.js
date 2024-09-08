/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.*/

const faturamento = [0, 0, 0, 0, 0, 0, 0, 2457.24, 3790.54, 2934.72, 2124.23, 2900.12, 3105.62, 0, 0, 0, 2830.42, 0, 3342.09, 3198.63, 2789.92, 2991.32, 3230.09, 2589.11, 2748.56, 2565.45, 2865.87, 2970.33, 2782.92, 3092.76, 0, 0, 0, 0, 2989.76, 0, 3134.34, 2895.48, 2742.84, 2521.38, 0, 0, 0, 2998.65, 0, 0, 0];

let valoresValidos = faturamento.filter(valor => valor > 0);
let menor = Math.min(...valoresValidos);
let maior = Math.max(...valoresValidos);
let media = valoresValidos.reduce((a, b) => a + b, 0) / valoresValidos.length;
let diasAcimaMedia = valoresValidos.filter(valor => valor > media).length;

console.log("Menor valor de faturamento:", menor);
console.log("Maior valor de faturamento:", maior);
console.log("Número de dias com faturamento acima da média:", diasAcimaMedia);
