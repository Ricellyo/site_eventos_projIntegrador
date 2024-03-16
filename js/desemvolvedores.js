const info = [
       
    //primeiro dev

   
    {
        // img: "imgDevs/Avatar.png",
        img: "imgDevs/91381008.png",
        desc: "💜 Olá, meu nome é Pedro Vitor!",
        texto: "Formado em Análise e Desenvolvimento de Sistemas, sou apaixonado por tecnologia e estou no início da minha jornada como desenvolvedor, meu objetivo é aprender e crescer na área de desenvolvimento Backend.",
        formacao: "<strong>Desenvolvedor: </strong> Backend | Node JS | JavaScript | MySQL",
        habilidades: "🚀 Habilidades em Destaque:",
        habilidade1: "Bagds/HTML5-E34F26.svg",
        habilidade2: "Bagds/CSS-239120.svg",
        habilidade3: "Bagds/GIT-E44C30.svg",
        habilidade3: "Bagds/TypeScript-007ACC.svg",
    },
     //Segundo dev

     
    {
        // img: "imgDevs/Avatar.png",
        img: "imgDevs/93790694.jpg",
        desc: "Hi, I’m Manuela",
        texto: " 👀 I’m interested in nature, animals and code🌱 I’m currently learning JavaScript, Typescript and Reac✨ She/Ella/Ela<br>👩‍💻 Working at Corebiz - Front-end Developer<br><br> ",
        formacao: " Hiring Coders #3 | Gama Academy XP41 | Front-end Jr | Javascript | Typescript | React",

        habilidades: "🚀 Habilidades em Destaque:",
        habilidade1: "Bagds/HTML5-E34F26.svg",
        habilidade2: "Bagds/CSS-239120.svg",
        habilidade3: "Bagds/React-20232A.svg",
        habilidade4: "Bagds/MySQL-00000F.svg",
        habilidade5: "Bagds/TypeScript-007ACC.svg"

    },

    // Terceiro dev

    {
        // img: "imgDevs/Avatar.png",
        img: "imgDevs/152100863.png",
        desc: "🔸 Fernanda Polyanna barancho.",
        texto: "Graduada em Administração. Meu objetivo é ser empreendedora de sucesso e acredito que a tecnologia me ajudará.🚀",
        
        formacao: "Graduada em Administração | Front-End | GitHub | HTML | CSS ",
        habilidades: "🚀 Habilidades em Destaque:",
        habilidade1: "Bagds/HTML5-E34F26.svg",
        habilidade2: "Bagds/CSS-239120.svg",
        habilidade3: "Bagds/GIT-E44C30.svg"
    },

    // Quarto dev

   
    {
        // img: "imgDevs/Avatar.png",
        img: "imgDevs/Avatar.png",
        desc: "🔸 Óla, Eu sou Ricellyo Cruz Silva.",
        texto: "Tecnologo em Analista e Desemvolvedor de Sistemas pela FACAM(Faculdade do Maranhão) . Minha paixão por tecnologia iniciou 2017, Das diversas areas que estudei Mi indentifiquei melhor com desenvolvimento Web (Front-End). Estou no inicio da minha carreira  e tenho como objetivo crescer  e mi tornar um desevolvedor Web Front-End. 🚀",
        formacao: "Analise e Desenvolvimento de Sistemas | Front-End | GitHub | HTML | CSS ",
        habilidades: "🚀 Habilidades em Destaque:",
        habilidade1: "Bagds/HTML5-E34F26.svg",
        habilidade2: "Bagds/CSS-239120.svg",
        habilidade3: "Bagds/GIT-E44C30.svg",
        habilidade4: "Bagds/javascript.svg"
    },

    //  Quinto dev

    
   

]


// testando 


// let div = document.createElement("section");

// div.innerHTML = `<div id="dev">
// <img class="avatar" src=${info[0].img} alt="">

// <div class="descricao">
//     <h2>${info[0].desc}</h2>
//     <p>${info[0].texto}</p><br>

//     <P>${info[0].formacao}</P><br>

//     <strong>${info[0].habilidades}</strong><br>

//     <img src=${info[0].habilidade1} alt="">
//     <img src=${info[0].habilidade2} alt="">
//     <img src=${info[0].habilidade3} alt="">
// </div>
// </div> `

// let main = document.querySelector("main");
// main.appendChild(div); 






for(let i = 0; i < info.length; i++ ){
    // crir elemento
    let div = document.createElement("section");

div.innerHTML = `<div id="dev">
<img class="avatar" src=${info[i].img} alt="">

<div class="descricao">
    <h2>${info[i].desc}</h2>
    <p>${info[i].texto}</p><br>

    <P>${info[i].formacao}</P><br>

    <strong>${info[i].habilidades}</strong><br>

    <img src=${info[i].habilidade1} alt="">
    <img src=${info[i].habilidade2} alt="">
    <img src=${info[i].habilidade3} alt="">
</div>
</div> <br> `

let main = document.querySelector("main");
main.appendChild(div); 
    
} 

