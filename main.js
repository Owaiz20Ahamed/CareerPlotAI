// ===============================
// CareerPilot AI - main.js
// ===============================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });
});

// ===============================
// Navbar Shadow
// ===============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.boxShadow="0 10px 30px rgba(0,0,0,0.12)";
        navbar.style.transition=".3s";

    }

    else{

        navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

    }

});

// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".stats h2");

const speed=150;

counters.forEach(counter=>{

    const updateCounter=()=>{

        const target=counter.innerText.replace(/\D/g,'');

        const count=+counter.getAttribute("data-count") || 0;

        const increment=Math.ceil(target/speed);

        if(count<target){

            const newCount=Math.min(count+increment,target);

            counter.innerText=counter.innerText.replace(/\d+/,newCount);

            counter.setAttribute("data-count",newCount);

            setTimeout(updateCounter,15);

        }

    }

    updateCounter();

});

// ===============================
// Scroll To Top Button
// ===============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#6C63FF";
topBtn.style.color="white";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 8px 20px rgba(0,0,0,.2)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};

// ===============================
// Card Hover Animation
// ===============================

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// ===============================
// Button Ripple Effect
// ===============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(this.clientWidth,this.clientHeight);

        circle.style.width=circle.style.height=diameter+"px";

        circle.style.position="absolute";

        circle.style.borderRadius="50%";

        circle.style.background="rgba(255,255,255,.4)";

        circle.style.transform="scale(0)";

        circle.style.animation="ripple .6s linear";

        circle.style.left=e.offsetX-diameter/2+"px";

        circle.style.top=e.offsetY-diameter/2+"px";

        this.style.position="relative";

        this.style.overflow="hidden";

        this.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});

// ===============================
// Console Message
// ===============================

console.log("CareerPilot AI Loaded Successfully 🚀");