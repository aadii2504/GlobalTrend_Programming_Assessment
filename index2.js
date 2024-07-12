function evaluateExpression(expression) {
    return expression.split(/(\+|\-)/).reduce((acc, cur) => {
      if (cur === '+') return acc;
      if (cur === '-') return acc;
      return eval(`${acc}${cur}`);
    });
  }

console.log(evaluateExpression("5+3-2"));