document.getElementById("calculate-button").onclick = function(){
   let elem1 = document.getElementById('elem-1');
   let elem2 = document.getElementById('elem-2');
   let val1 = parseInt (elem1.value);
   let val2 = parseInt (elem2.value);
   let sum = val1 + val2;
   let choice = document.querySelector('input[name="operation"]:checked');
   let operation = choice.value;
   let operationResult = getResult(val1, val2, operation);
    let resultElement = document.getElementById('result');
    resultElement.innerText = operationResult;
function getResult(val1, val2, operation) { 
if(operation ==='+'){
   return val1 + val2;
} else if(operation ==='-'){
   return val1 - val2;
}else if(operation ==='*'){
   return val1 * val2;
}else if (operation ==='/'){
   return val1 / val2;
}
}
}
function sum(num1, num2) {
  let result = num1 + num2;
  return result;
  }