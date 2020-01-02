function verificar (){
    let data = new Date ()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano') 
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else {
        var fsex=document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero= ''
        var fase = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade>=0 && idade <=13){
                var fase ='criança'
                img.setAttribute('src','imagens/dustin.jpg')
                
            }
            else if (idade >13 && idade < 21 ){
                var fase='Adolescente'
                img.setAttribute('src','imagens/steve.jpg')
            }
            else if (idade >=21){
                var fase ='Adulto'
                img.setAttribute('src','imagens/hopper.jpg')
                
            }
            
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade>=0 && idade <=13){
                var fase ='criança'
                img.setAttribute('src','imagens/eleven.jpg')
            }
            else if (idade >13 && idade < 21 ){
                var fase ='Adolescente'
                img.setAttribute('src','imagens/nancy.jpg')
            }
            else if (idade >=21){
                var fase ='Adulto'
                img.setAttribute('src','imagens/joyce.jpg')
            }
            

        }
    }
    res.style.textAlign='center'
    res.innerHTML = ` ${genero} , com  ${idade} anos, você é um(a) ${fase}`
    res.appendChild(img)
}
