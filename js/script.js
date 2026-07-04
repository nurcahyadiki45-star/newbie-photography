/*====================================================
  NEWBIE PHOTOGRAPHY V4
  SCRIPT.JS
====================================================*/

/*=================================
  HAMBURGER MENU
=================================*/

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector("nav");

if(menuBtn && navbar){

    menuBtn.addEventListener("click",()=>{

        navbar.classList.toggle("active");

    });

}

/*=================================
  HEADER SCROLL
=================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/*=================================
  BACK TO TOP
=================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(!topBtn) return;

    if(window.scrollY > 400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

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

/*=================================
  LOADER
=================================*/

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    if(loader){

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },600);

    }

});

/*=================================
  SCROLL REVEAL
=================================*/

const reveals=document.querySelectorAll(".reveal");

function revealSection(){

    reveals.forEach(section=>{

        const windowHeight=window.innerHeight;

        const top=section.getBoundingClientRect().top;

        if(top < windowHeight-120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealSection);

revealSection();

/*=================================
  GALLERY FILTER
=================================*/

const filterButtons=document.querySelectorAll(".gallery-filter button");
const galleryItems=document.querySelectorAll(".gallery-item");

filterButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        filterButtons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        const filter=button.textContent.toLowerCase();

        galleryItems.forEach(item=>{

            const badge=item.querySelector(".badge");

            if(!badge) return;

            const category=badge.textContent.toLowerCase();

            if(filter==="semua"){

                item.style.display="block";

            }else if(category===filter){

                item.style.display="block";

            }else{

                item.style.display="none";

            }

        });

    });

});

/*=================================
  GLIGHTBOX
=================================*/

if(typeof GLightbox !== "undefined"){

    GLightbox({

        selector:".glightbox",

        touchNavigation:true,

        loop:true,

        zoomable:true,

        openEffect:"zoom",

        closeEffect:"fade"

    });

}

/*=================================
  ACTIVE MENU OTOMATIS
=================================*/

const currentPage=location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

    const href=link.getAttribute("href");

    if(href===currentPage){

        link.classList.add("active");

    }

});

/*=================================
  CLOSE MENU SAAT LINK DIKLIK
=================================*/

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(navbar){

            navbar.classList.remove("active");

        }

    });

});

/*=================================
  IMAGE HOVER PRELOAD
=================================*/

document.querySelectorAll("img").forEach(img=>{

    img.setAttribute("loading","lazy");

});

/*=================================
  COPYRIGHT YEAR OTOMATIS
=================================*/

const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}