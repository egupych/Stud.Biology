const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("mouseover", () => {
    clearActiveClasses();
    
    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}


const cursor1 = document.querySelector(".cursor1");
document.addEventListener("mousemove", (e) => {
  cursor1.style.left= e.pageX+"px";
  cursor1.style.top= e.pageY+"px";
})

const cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", (e) => {
  cursor2.style.left= e.pageX+"px";
  cursor2.style.top= e.pageY+"px";
})

const cursor3 = document.querySelector(".cursor3");
document.addEventListener("mousemove", (e) => {
  cursor3.style.left= e.pageX+"px";
  cursor3.style.top= e.pageY+"px";
})

const cursor4 = document.querySelector(".cursor4");
document.addEventListener("mousemove", (e) => {
  cursor4.style.left= e.pageX+"px";
  cursor4.style.top= e.pageY+"px";
})

if (window.matchMedia("(max-width: 576px)").matches) {
  document.getElementById("logo").innerHTML = "Svetlana Podergina";
} 


  
