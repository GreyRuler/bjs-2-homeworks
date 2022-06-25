"use strict";
function solveEquation(a, b, c) {
  let d = b**2-4*a*c;
  if (d < 0) return [];
  else if (d === 0) return [-b/(2*a)]
  else return [(-b + Math.sqrt(d) )/(2*a), (-b - Math.sqrt(d) )/(2*a)];
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  if (isNaN(parseInt(percent))) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  } else if (isNaN(parseInt(contribution))) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  } else if (isNaN(parseInt(amount))) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }
  percent = parseInt(percent);
  contribution = parseInt(contribution);
  amount = parseInt(amount);

  let totalAmount;
  let S = amount - contribution;
  let P = percent/12/100;
  let n = Math.floor((date - Date.now())/1000/60/60/24/30);
  totalAmount = +((S * (P + (P / (((1 + P)**n) - 1))) * n).toFixed(2));
  console.log(totalAmount);
  return totalAmount;
}
