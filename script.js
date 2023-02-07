//Atividade 
// 1 - Selecionassem um elemento 

let teste1 = document.getElementsByClassName('testeP')
console.log(teste1)

// 2 - Alterar o conteúdo de um elemento

let teste2 = document.querySelector('.testeAlterar')
teste2.textContent = "Atividade concluído"

// 3 - Removerem um elemento

let teste3 = document.querySelector (' .testeAlterar')
teste3.remove()

// 4 - Desafio! Criar um botão que mostre algo na tela

function teste4 (){
    alert("Obrigado pela atenção")
}