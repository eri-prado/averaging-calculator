// Dark Mode
const html = document.querySelector("html");
const checkbox = document.querySelector("#switch");

checkbox.addEventListener("change", function () {
  html.classList.toggle("dark-mod");
});


// Script
const primeiraNota = Number(document.querySelector('#nota1'))
const segundaNota = Number(document.querySelector('#nota2'))
const terceiraNota = Number(document.querySelector('#nota3'))
const quartaNota = Number(document.querySelector('#nota4'))

const resultadoFinal = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4

resultadoFinal.addEventListener('onclick', function resultado() {
  return 'oi'
})


// if (notaFinal >= 7) {
//   console.log('Você foi APROVADO! Sua nota é ' + notaFinal.toFixed(2)) 
// } else {
//   console.log('Você foi REPROVADO! Infelizmente sua nota é ' + notaFinal.toFixed(2))
//   }
