let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

/*Habilita el scroll para navegar en la pagina (subir y bajar) */
window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
}

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


/*CARRUSEL */


