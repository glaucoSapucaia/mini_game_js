// variaveis globais
var largura = null
var altura = null
var vidas = 1
var tempo = 15
var criaMoscaTempo = 1500

// incluindo dificuldade do jogo
// .search -> retorna a "?" e o que vem após ela da url
var nivel = window.location.search

// com replace, retiramos o caractere '?'
nivel = nivel.replace('?', '')

// indicando dificuldade
if(nivel === 'normal') {
    criaMoscaTempo = 1500
} else if(nivel === 'dificil') {
    criaMoscaTempo = 1000
} else if(nivel === 'dengue_nunca_mais') {
    criaMoscaTempo = 750
}

// funcao do cronometro
var cronometro = setInterval(
    function() {
        tempo--

        // logica tempo negativo | vitoria
        if(tempo < 0) {
            // limpanado cronometro apos vitoria
            clearInterval(cronometro)

            // parando a criação de moscas e a perda de vidas
            clearInterval(cria_mosca)

            // fluxo da vitória
            window.location.href = '../pages/vitoria.html'
        } else {
            // innerHTML -> insere valores dentro de uma tag HTML
            document.getElementById('cronometro').innerHTML = tempo
        }
    }, 1000
)

// BOM - window
function ajustaTela() {
    largura = window.innerWidth
    altura = window.innerHeight

    // test
    // console.log(largura, altura)
}

ajustaTela()

// posição randomica | mosca alvo
function moscaAlvoPosicao() {
    // removendo mosquito anterior
    if(document.getElementById('mosca')) {
        document.getElementById('mosca').remove()

        // interação com vidas
        if(vidas > 3) {
            // game over logica
            window.location.href = '../pages/game_over.html'

        } else {
            document.getElementById('v' + vidas).src = '../img/vida_vazia.png'
            vidas++
        }
    }
    
    // -90 = reduz eixos da img para não criar efeito crossover, ultrapassando a tela
    var eixo_x = Math.floor(Math.random() * largura) - 90
    var eixo_y = Math.floor(Math.random() * altura) - 90

    // agora, evitamos valores negativos, ja que sumirão da tela visivel
    eixo_x = eixo_x < 0 ? 0 : eixo_x
    eixo_y = eixo_y < 0 ? 0 : eixo_y
    
    // test
    // console.log(eixo_x, eixo_y)
    
    // DOM
    // cirando e definindo elemento img-HTML
    var mosca = document.createElement('img')
    mosca.src = '../img/mosca_sem_fundo.png'
    mosca.className = moscaAlvoTamanho() + ' ' + moscaAlvoRotacao()
    
    mosca.style.left = eixo_x + 'px'
    mosca.style.top = eixo_y + 'px'
    mosca.style.position = 'absolute'

    mosca.id = 'mosca'

    // acao de matar a mosca
    mosca.onclick = function() {
        // this -> ajusta o contexto de uma ação para o elemento na chamada (no caso, mosca)
        this.remove()
    }

    document.body.appendChild(mosca)
}

// tamanhos mosca_alvo
function moscaAlvoTamanho() {
    // possiveis retornos - 0, 1 e 2
    var classe = Math.floor(Math.random() * 3)
    
    // selecao de tamanho
    switch(classe) {
        case 0:
            return 'mosca_alvo'

        case 1:
            return 'mosca_alvo1'

        case 2:
            return 'mosca_alvo2'
    }
}

// rotação aleatoria mosca_alvo
function moscaAlvoRotacao() {
    // possiveis retornos => 0 e 1
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        
        case 1:
            return 'ladoB'
    }
}