let menuVisible = false;
//FUNCIÓN QUE OCULTA O MUESTRA EL MENU
function  mostrarOcultarMenu(){
if(menuVisible){
    document.getElementById("nav").classList ="";
    menuVisible = false;
}else{
    document.getElementById("nav").classList ="responsive";
    menuVisible = true;
}
}

function seleccionar(){
    //oculta el menu cuando selecciona una opcion
    document.getElementById("nav").classList=""
    menuVisible= false;
}
