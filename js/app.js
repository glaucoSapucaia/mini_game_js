// BOM - window
var altura = null
var largura = null

function ajustaTela() {
    var altura = window.innerHeight
    var largura = window.innerWidth

    console.log(altura, largura)
}

ajustaTela()