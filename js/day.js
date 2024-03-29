const textDay = document.querySelector(".text-changer");



switch (new Date().getDay()) {
  case 0:
    day = "Promocion Domingo: ";
    textDay.classList.add("domingo");
    break;
  case 1:
    day = "Promocion Lunes: ";
    textDay.classList.add("lunes");
    break;
  case 2:
     day = "Promocion Martes: ";
     textDay.classList.add("martes");
    break;
  case 3:
    day = "Promocion Miercoles: ";
    textDay.classList.add("miercoles");
    break;
  case 4:
    day = "Promocion Jueves: ";
    textDay.classList.add("jueves");
    break;
  case 5:
    day = "Promocion de Viernes: ";
    textDay.classList.add("viernes");
    break;
  case 6:
    day = "Promocion Sabado: ";
    textDay.classList.add("sabado");
}
textDay.textContent = day;

/*//////// Switch menu Button ///////// */

const buttonSwitchMenu = document.querySelector(".switch-menu");
const textSwitchMenu = document.querySelector(".text-switch")
let menu = true;

const menuCartaContainer = document.querySelector(".menu-carta-container");
const webMenuContainer = document.querySelector(".menu-container");

buttonSwitchMenu.addEventListener("click", ()=> {
  if (menu == true) {
    textSwitchMenu.textContent = "Ver menú web";
    /*//////// menu carta aparece ///////// */
    webMenuContainer.classList.add("hide-web-menu");
    setTimeout(function(){
      menuCartaContainer.removeAttribute("hidden");
    },100);
    setTimeout(function(){
      menuCartaContainer.classList.add("menu-carta-on")
      menu = false;
      webMenuContainer.setAttribute("hidden", "true");
    },200);
  } else {
    textSwitchMenu.textContent = "Ver menú como carta";
    /*//////// menu web aparece ///////// */
    webMenuContainer.removeAttribute("hidden");
    setTimeout(function(){
      webMenuContainer.classList.remove("hide-web-menu");
    },1)
    menuCartaContainer.classList.remove("menu-carta-on");
    menu = true;
    setTimeout(function(){
    menuCartaContainer.setAttribute("hidden", "true")
    },120)
  }
})



const daiquiri = document.querySelector(".daiquiri");
const tequila = document.querySelector(".tequila");
const margarita = document.querySelector(".margarita");
const colada = document.querySelector(".colada");
const manhattan = document.querySelector(".manhattan");

function showMenuImg(menuItem) {
  switch (menuItem) {
    case 'Daiquiri':
      daiquiri.classList.toggle("show-img-list");
      break;
    case 'Tequila':
      tequila.classList.toggle("show-img-list");
      break;
    case 'Margarita':
       margarita.classList.toggle("show-img-list");
       textDay.classList.add("martes");
      break;
    case 'Colada':
      colada.classList.toggle("show-img-list");
      break;
    case 'Manhattan':
      manhattan.classList.toggle("show-img-list");
      break;
    case 5:
      day = "Promocion de Viernes: ";
      textDay.classList.add("viernes");
      break;
    case 6:
      day = "Promocion Sabado: ";
      textDay.classList.add("sabado");
  }
}

const daiquiriDescription = document.querySelector(".daiquiri-description");
const tequilaDescription = document.querySelector(".tequila-description");
const margaritaDescription = document.querySelector(".margarita-description");
const coladaDescription = document.querySelector(".colada-description");
const manhattanDescription = document.querySelector(".manhattan-description");

function showMenuDescription(menuItem) {
  switch (menuItem) {
    case 'Daiquiri':
      daiquiriDescription.classList.toggle("show-description-list");
      break;
    case 'Tequila':
      tequilaDescription.classList.toggle("show-description-list");
      break;
    case 'Margarita':
       day = "Promocion Martes: ";
       margaritaDescription.classList.toggle("show-description-list");
      break;
    case 'Colada':
      coladaDescription.classList.toggle("show-description-list");
      break;
    case 'Manhattan':
      manhattanDescription.classList.toggle("show-description-list");
      break;
    case 5:
      day = "Promocion de Viernes: ";
      textDay.classList.add("viernes");
      break;
    case 6:
      day = "Promocion Sabado: ";
      textDay.classList.add("sabado");
  }
}