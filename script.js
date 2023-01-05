function carregar() {

    var data = new Date()
    var hora = data.getHours()
    var mi = data.getMinutes()  
    var msg = document.getElementById('msg')
    var boxlink = document.getElementById('box-link')
    //var hora = 19
    //msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        document.body.style.background = '#ccdee9'
        msg.innerHTML = `Bom dia agora são ${hora}:${mi} h`
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        document.body.style.background = 'linear-gradient(349deg, rgba(163,157,115,1) 0%, rgba(230,230,230,1) 98%)'
        msg.innerHTML = `Boa tarde agora são ${hora}:${mi} h.`
        
    } else {
        //BOA NOITE
        document.body.style.background = 'linear-gradient(349deg, rgba(106,105,103,1) 0%, rgba(18,12,86,1) 98%)'
        msg.innerHTML = `Boa noite agora são ${hora}:${mi} h.`
    }

}

