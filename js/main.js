
// 1

let Navbar = document.querySelector("nav");
let Entro = document.querySelector(".entro");
let IconUp = document.querySelector(".icon-up");
let Progres = document.querySelector("#progBox");
let Progs = document.querySelectorAll(".progs span");
let CoungBox = document.querySelector("#coungBox");
let Count = document.querySelectorAll(".count h5");
let started = false;
 
window.onscroll = function(){
    if(this.scrollY >= Entro.offsetTop){
        Navbar.style.backgroundColor = "#1B1B1B";
        IconUp.style.display ="block";
    }
    else{
        Navbar.style.backgroundColor = "transparent";
        IconUp.style.display ="none";
    }
    if(this.scrollY >= Progres.offsetTop - 500){
        Progs.forEach( (span)=> {
            span.style.width = span.dataset.width;
        });
    }
    if(this.scrollY >= CoungBox.offsetTop - 390){
        if(!started){
            Count.forEach((num)=>{
                startCount(num);
            })
            started = true;
        }
    }
};
IconUp.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
};
function startCount(el){
    let gold = el.dataset.gold;
    let count = setInterval(()=>{
       let incr = el.textContent++;
        if(incr == gold){
            clearInterval(count);
        }
    },2000 / gold)
};

// 2

let Switcher = document.querySelectorAll(".switcher li");
let MyImages = document.querySelectorAll("#myimage");
 
    Switcher.forEach((li)=>{
        li.addEventListener("click",mangui);
        li.addEventListener("click",mangimages);
    })

function mangui(){
    Switcher.forEach((li)=>{
        li.classList.remove("active");
        this.classList.add("active");
    });
};

function mangimages(){
    MyImages.forEach((img)=>{
        img.style.display = "none";
    });

    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
};