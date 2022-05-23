function carregar() {
    msg = document.getElementById('msg')
    img = document.getElementById('imagem')
    data = new Date()
    hora = data.getHours()
       
    msg.innerText = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.innerHTML = '<img src="img1.jpg">'
        document.body.style.background = 'green'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.innerHTML = '<img src="img2.jpg">'
        document.body.style.background = 'brown'
    } else {
        //Boa noite
        img.innerHTML = '<img src="img3.jpg">'
        document.body.style.background = 'blue'
    }
}