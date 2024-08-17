const botoesCarrosel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");

botoesCarrosel.forEach((botao, indice) => {

        botao.addEventListener("click", () => {

            removerImagemAtiva();

            removerBotaoSelecionado();

            ativarImagem(indice);

        })
        
    })
    
function removerImagemAtiva() {
     botaoSelecionado = document.querySelector(".selecionado");
    imagemAtiva = document.querySelector(".ativa");
    }

function removerBotaoSelecionado() {
    botaoSelecionado.classList.remove("selecionado");
    imagemAtiva.classList.remove("ativa");
    }
    
function ativarImagem(indice) {
    botoesCarrosel[indice].classList.add("selecionado");
    imagens[indice].classList.add("ativa");
}
