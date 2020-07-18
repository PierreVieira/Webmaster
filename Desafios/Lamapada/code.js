const img_lamp = document.querySelector('img#lamp')
let broken = false;

function mouseIn() {
    if (!broken){
        console.log('Entrou, estado atual da lâmpada: '+img_lamp.src)
        img_lamp.src = 'lampada-apagada.jpg'
    }
}

function mouseOut() {
    if (!broken){
        console.log('Saiu, estado atual da lâmpada: '+img_lamp.src)
        img_lamp.src = 'lampada-acesa.jpg'
    }
}

function mouseClick() {
    img_lamp.src = 'lampada-quebrada.jpg'
    broken = !broken
    if (!broken){
        mouseIn()
    }
}