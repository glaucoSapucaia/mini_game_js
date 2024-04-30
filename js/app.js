// BOM - window
var largura = null
var altura = null

function ajustaTela() {
    largura = window.innerWidth
    altura = window.innerHeight

    console.log(largura, altura)
}

ajustaTela()

// posição randomica | mosca alvo
function moscaAlvoPosicao() {
    // -90 = reduz eixos da img para não criar efeito crossover, ultrapassando a tela
    var eixo_x = Math.floor(Math.random() * largura) - 90
    var eixo_y = Math.floor(Math.random() * altura) - 90

    // agora, evitamos valores negativos, ja que sumirão da tela visivel
    eixo_x = eixo_x < 0 ? 0 : eixo_x
    eixo_y = eixo_y < 0 ? 0 : eixo_y
    
    console.log(eixo_x, eixo_y)
    
    // DOM
    // cirando e definindo elemento img-HTML
    var mosca = document.createElement('img')
    mosca.src = '../img/mosca_sem_fundo.png'
    mosca.className = 'mosca_alvo'
    
    mosca.style.left = eixo_x + 'px'
    mosca.style.top = eixo_y + 'px'
    mosca.style.position = 'absolute'

    document.body.appendChild(mosca)
}
