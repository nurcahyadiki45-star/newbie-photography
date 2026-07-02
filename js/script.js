const header = document.querySelector("header");
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        if(header){
            header.style.background="#0F172A";
        }

        if(topBtn){
            topBtn.style.display="block";
        }

    }else{

        if(header){
            header.style.background="rgba(15,23,42,.25)";
        }

        if(topBtn){
            topBtn.style.display="none";
        }

    }

});

if(topBtn){

    topBtn.addEventListener("click",()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if(menuBtn && navbar){

    menuBtn.addEventListener("click",()=>{

        navbar.classList.toggle("active");

    });

}