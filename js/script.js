
// let menu = document.getElementById("menu");
// function mostrarMenu() {
//     if(menu.style.display != "flex") {
//         menu.style.display = "flex"
//     }else{
//         menu.style.display = "none"
//     } 
// }



let email = document.getElementById("campo-email");

function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado)
}

let listaNoticias = [
    {
        titulo: "Olá",
        descricao: "Tudo bem?"
    },
    {
        titulo: "Olá",
        descricao: "Tudo bem?"
    },
    {
        titulo: "Olá",
        descricao: "Tudo bem?"
    }
    
    ]

function renderizarNoticias(){
    let espaco = document.getElementById("espaco-noticias")

    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) {
        const noticia = listaNoticias[index];

        template += `<div class="cardnews">
        <img src="Img/noticias.png" alt="cardnew">
        <h3>${noticia.titulo}</h3>
        <p>${noticia.descricao}</p>
      </div>`
    }
    espaco.innerHTML = template;
}



let listaVods = [
    {
        titulo: "Olá",
        descricao: "Tudo bem?"
    },
    {
        titulo: "Olá",
        descricao: "Tudo bem?"
    },
    {
        titulo: "Olá",
        descricao: "Tudo bem?"
    }
    
    ]

function renderizarVods(){
    let espaco = document.getElementById("espaco-vods")

    let template = "";

    for (let index = 0; index < listaVods.length; index++) {
        const vods = listaVods[index];

        template += `<div class="cardnews">
        <img src="Img/noticias.png" alt="cardnew">
        <h3>${vods.titulo}</h3>
        <p>${vods.descricao}</p>
      </div>`
    }
    espaco.innerHTML = template;
}



$(document).ready(function(){

    $("#barras").click(function(){
        $("#menu").toggle();
      });

})

