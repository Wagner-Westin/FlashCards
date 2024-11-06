function criaCartao(categoria, pergunta, resposta) {
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerName = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo_pergunta">
        <p>${pergunta}</p>
    </div>
    </div>
    `
    let container = document.ElementById('Container')
    container.appendChild(cartao)
}