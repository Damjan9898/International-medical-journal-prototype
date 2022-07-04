//Definisem varijable koju cu kasnije koristiti
let white1 = document.querySelector(".drop");

//Ovo omogucava animaciju pojave iksa prilikom klika na hamburger, a zatim sledecim klikom vracanje hamburgera i tako u krug
function hamburger(x) {
  x.classList.toggle("change");
}

//Takodje klikom na hamburger izazivam spustanje saktivenog menija
function white(){
  document.querySelector(".drop").classList.toggle("white");
};


//Ovaj deo koda pozivam u slucaju da se promeni sirina ekrana.
//Iz razloga sto nije bilo skrolovanja nece se pozvati funkcija fixed(). Nakon ovog koda hoce svejedno
$(document).ready(function(){
  $(window).resize(function(){
    //Dodatak za drop meni
    if(screen.height <= 500){
      document.querySelector(".drop").style.overflowY = "scroll";
    }
  });
});