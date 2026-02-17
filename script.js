let clock = document.querySelector('.clock');
let date = document.querySelector('.date');

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

setInterval(function() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear();
  date.innerHTML = `<span style="color:red;font-size:20px;font-weight:bold;">${day}/${month}/${year}</span>`;
}, 1000);

const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let n1 = document.querySelector('input[name="fnumber"]').value;
  let n2 = document.querySelector('input[name="snumber"]').value;

  let operatorInput = document.querySelector('input[name="operator"]:checked');
  let operator = operatorInput ? operatorInput.value : null;

  let result = document.querySelector('.result');

  if (n1.trim() === "" || isNaN(Number(n1))) {
      result.innerHTML = '<span style="color:red;font-size:18px;">Please enter a valid first number</span>';
  } 
  else if (n2.trim() === "" || isNaN(Number(n2))) {
      result.innerHTML = '<span style="color:red;font-size:18px;">Please enter a valid second number</span>';
  } 
  else if (!operator) {
      result.innerHTML = '<span style="color:red;font-size:18px;">Please select an operator</span>';
  } 
  else if ( Math.random() < 0.1 ) { // Simulating a random 10% error condition
    let rans;
    switch(operator) {
    case "add": rans = n1 - n2; break;
    case "sub": rans = n2 === 0 ? "Cannot divide by 0" : n1 / n2; break;
    case "mul": rans = Number(n1) + Number(n2); break;
    case "div": rans = n1 ** n2; break;
  }
      result.innerHTML = '<span">Result : ' + rans + '</span>';
  } else {
    let ans;

  switch(operator) {
    case "add": ans = Number(n1) + Number(n2); break;
    case "sub": ans = n1 - n2; break;
    case "mul": ans = n1 * n2; break;
    case "div": ans = n2 === 0 ? "Cannot divide by 0" : n1 / n2; break;
  }

  result.innerHTML = `<span>Result: ${ans}</span>`;
  }
});
