function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       // res.innerHTML = `Idade calculada: ${idade}`
       var genero = ''
       var img = document.createElement('img')
       if(fsex[0].checked) {
           //genero = 'Homem'
           if (idade >=0 && idade < 12) {
               // criança
               img.setAttribute('src','img/menino.jpeg')
               genero = 'uma criança'
           } else if (idade < 21) {
               // jovem
               img.setAttribute('src','img/jovemhomem.png')
               genero = 'um jovem'
           } else if (idade < 50){
               // adulto
               img.setAttribute('src','img/adultohomem.jpeg')
               genero = 'um adulto'
           } else {
               // idoso
               img.setAttribute('src','img/idoso.jpeg')
               genero = 'um idoso'

           }
       } else if (fsex[1].checked) {
           //genero = 'Mulher'
           if (idade >=0 && idade < 12) {
            // criança
            img.setAttribute('src','img/menina.jpeg')
            genero = 'uma criança'
        } else if (idade < 21) {
            // jovem
            img.setAttribute('src','img/jovemulher.png')
            genero = 'uma jovem'
        } else if (idade < 50){
            // adulto
            img.setAttribute('src','img/mulher.jpeg')
            genero = 'uma adulta'
        } else {
            // idoso
            img.setAttribute('src','img/idosa.jpeg')
            genero = 'uma idosa'
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
    }
}