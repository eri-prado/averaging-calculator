// Dark Mode
const html = document.querySelector("html");
const checkbox = document.querySelector("#switch");

checkbox.addEventListener("change", function () {
  html.classList.toggle("dark-mod");
});

// Script
const calcular = document.querySelector(".calcular");
const resultado = document.querySelector(".resultado");

function calculo() {
  const nota1 = Number(document.querySelector("#nota1").value);
  const nota2 = Number(document.querySelector("#nota2").value);
  const nota3 = Number(document.querySelector("#nota3").value);
  const nota4 = Number(document.querySelector("#nota4").value);
  const resultadoFinal = Number((nota1 + nota2 + nota3 + nota4) / 4);

  if (nota1 && nota2 && nota3 && nota4 !== "") {
    if (resultadoFinal >= 7 && resultadoFinal <= 10) {
      resultado.textContent = `Você foi APROVADO! Sua nota final é ${resultadoFinal.toFixed(2)}.`;
    } else {
      resultado.textContent = `Você foi REPROVADO! Sua nota final é ${resultadoFinal.toFixed(2)}.`;
    }
  } else {
    resultado.textContent = "Preencha todos os valores!";
  }
}

calcular.addEventListener("click", calculo);
