function verificador() {
    var data= new Date() // é um comando essencial para demarcar datas e horas
    var ano= data.getFullYear() 
    var fano= document.getElementById('txida') // é uma variavel que tem o input type number
    var res = document.querySelector('div#res') /* é uma variavel que tem a div  da mensagem */
    if (fano.value.length==0 || (fano.value) >                                                                                                                                                                                                                                                                            ano) {
        /* o parametro diz que: se o valor da variavel fano nao ter nada preechino  no fano  ou ser igual a 0 ||  se o valor da var fano for maior que o ano actual ele execuda:Error */
    window.alert('[ERRO] verifique os dados e tente novamente')
    }else{
       var fsex= document.getElementsByName('Sexu') /* aqui nessa variavel pegou por name e não por ID porque o name da area de genero é o mesmo, ou seja os dois input( masculino e femenino) tem o mesmo name */ 
       var idade= ano- Number(fano.value) /*aquin vez se uma logiquinha, que é de criar uma variavel que recebe a variavel ano menos o NUmber(deve-se avizar a maquina que estara a lhe dar com um numero inteiro ou relativo) (valor da var fano)   */
       var genero = '' /*criou-se essa variavel para poder receber varias coisas, como vemos o genero as vezes recebe Homem e as vezes recebe Mulher*/
       var img= document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0]. checked) { //se fsex estiver marcado (checked)
         // oque importa aqui não é o nome que o genero recebe mais sim o componente, neste caso homem é o pprimeiro componente na var fsex( lembrar que a contagem começa de [0])
           genero='Homem'
           if (idade>=0 && idade<10) {
               // crianca
               img.setAttribute('src', 'images/menino.png')
           }else if (idade>=10 && idade<21 ) {
               // adolescente
               img.setAttribute('src', 'images/moco.png')
           }else if(idade<50) {
               //adulto
               img.setAttribute('src', 'images/adulto.png')
           }else {
               //idoso
               img.setAttribute('src', 'images/velho.png')
           }
       }else if (fsex[1].checked) {
           genero='Mulher'
           if (idade>=0 && idade<10) {
            // crianca
            img.setAttribute('src', 'images/menina.png')
        }else if (idade>=10 && idade<21 ) {
            // adolescente
            img.setAttribute('src', 'images/moca.png')
        }else if(idade<50) {
            //adulto
            img.setAttribute('src', 'images/adulta.png')
        }else {
            //idoso
            img.setAttribute('src', 'images/velha.png')
        }
       }
       res.style.textAlign='center' /* comando para alinhar um texto quendo clikar em verificar*/
       res.innerHTML=`Detectamos ${genero} com ${idade} anos de idade`
       res.appendChild(img) // comando para chamar as imagens para aparecerem na tela
       
    }
}