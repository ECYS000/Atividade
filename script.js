//Atividade 
// 1 - Selecionassem um elemento 
// 2 - Alterar o conteúdo de um elemento
// 3 - Removerem um elemento
// 4 - Desafio! Criar um botão que mostre algo na tela

let texto = document.querySelector(' .texto1' );

function traducao() {
    texto.innerHTML = "Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galera de tipos e os embaralhou para fazer um livro de espécimes de tipos. Ele sobreviveu não apenas a cinco séculos, mas também ao salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker, incluindo versões de Lorem Ipsum.";
}
let removeTraducao = texto;
function apagar() {

removeTraducao.remove()}

function ok(){
    alert("Atividade tudo esta ok")
}