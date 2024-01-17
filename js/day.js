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
    textSwitchMenu.textContent = "Ver menu web";
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
    textSwitchMenu.textContent = "Ver menu como carta";
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

function hola() {
  alert("ola")
}