let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;


btnMenu.addEventListener('click',() => {
document.querySelector('.btn-menu i').classList.toggle('fa-times')

//menu de navegacion active

if(activador){
    menu.style.left = "0";
    menu.style.transition = "0.5s";

    activador = false;
}else{
    activador = false;

    menu.style.left = "-100%";
    menu.style.transition = "0.5s";

    activador = true;

}

});

let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach ((element) => {
    element.addEventListener('click',(event) =>{

        enlaces.forEach ((link)=>{

            link.classList.remove('activo');

        });

        event.target.classList.add('activo');
  
    });
    
});
// efecto scroll
let preScrollPos = window.pageXOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = ()=>{

    let curreScrollPos = window.pageYOffset;

 // Mostrar y ocultar menu 

 if (preScrollPos > curreScrollPos) {

    containerMenu.style.top = "0";
    containerMenu.style.transition = "0.5s";

 }else{

    containerMenu.style.top = "-60px";
    containerMenu.style.transition = "0.5s";

 }
 preScrollPos = curreScrollPos;


 //Mostrar y ocultar scroll estilos

    let arriba = window.pageYOffset;
    if (arriba <= 600) {

    containerMenu.style.borderBottom = "none";
    goTop.style.right = "-100px"
    }else{
    containerMenu.style.borderBottom = "3px solid #ff2e63";
    
    goTop.style.right = "0";
    goTop.style.transition = "0.5s";
    }   
}

goTop.addEventListener('click', () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () =>{

    document.body.scrollTop = 800;
    document.documentElement.scrollTop = 800;;

})

