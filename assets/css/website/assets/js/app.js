/* =====================================
   SENSI ROLEPLAY PORTAL v1.0
   APP.JS
===================================== */


// Loader

window.addEventListener("load", () => {

    const loader = document.querySelector("#loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(()=>{

            loader.style.display = "none";

        },500);

    }

});




// Navbar efeito ao rolar

const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.background =
        "rgba(7,10,18,.95)";

    }else{

        header.style.background =
        "rgba(7,10,18,.55)";

    }


});





// Scroll suave nos links


document.querySelectorAll('a[href^="#"]').forEach(link=>{


    link.addEventListener("click",function(e){


        const target =
        document.querySelector(this.getAttribute("href"));


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});





// Animação de entrada dos cards


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }


    });


},{
    threshold:.15
});





document.querySelectorAll(".card,.status-card,.about-card")
.forEach(element=>{


    element.style.opacity="0";

    element.style.transform="translateY(40px)";

    element.style.transition="all .6s ease";


    observer.observe(element);


});
