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

function setScrollIntoView5(top) {
	const offer = document.querySelector('.offer');
	offer.scrollIntoView(top);
}

function setScrollIntoView5Options(top) {
	const offer = document.querySelector('.offer');
	offer.scrollIntoView({
		//"start", "center", "end" или "nearest". По умолчанию "center".
		block: "start",
		//"start", "center", "end" или "nearest". По умолчанию "nearest".
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView1(top) {
	const me = document.querySelector('.me');
	me.scrollIntoView(top);
}

function setScrollIntoView1Options(top) {
	const me = document.querySelector('.me');
	me.scrollIntoView({
		//"start", "center", "end" или "nearest". По умолчанию "center".
		block: "start",
		//"start", "center", "end" или "nearest". По умолчанию "nearest".
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView2(top) {
	const lesson = document.querySelector('.lesson');
	lesson.scrollIntoView(top);
}

function setScrollIntoView2Options(top) {
	const lesson = document.querySelector('.lesson');
	lesson.scrollIntoView({
		//"start", "center", "end" или "nearest". По умолчанию "center".
		block: "start",
		//"start", "center", "end" или "nearest". По умолчанию "nearest".
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView3(top) {
	const boxprice = document.querySelector('.boxprice');
	boxprice.scrollIntoView(top);
}

function setScrollIntoView3Options(top) {
	const boxprice = document.querySelector('.boxprice');
	boxprice.scrollIntoView({
		//"start", "center", "end" или "nearest". По умолчанию "center".
		block: "start",
		//"start", "center", "end" или "nearest". По умолчанию "nearest".
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView4(top) {
	const themes = document.querySelector('.themes');
	themes.scrollIntoView(top);
}

function setScrollIntoView4Options(top) {
	const themes = document.querySelector('.themes');
	themes.scrollIntoView({
		//"start", "center", "end" или "nearest". По умолчанию "center".
		block: "start",
		//"start", "center", "end" или "nearest". По умолчанию "nearest".
		inline: "nearest",
		behavior: "smooth"
	});
}


// const cursor1 = document.querySelector(".cursor1");
// document.addEventListener("mousemove", (e) => {
//   cursor1.style.left= e.pageX+"px";
//   cursor1.style.top= e.pageY+"px";
// })

// const cursor2 = document.querySelector(".cursor2");
// document.addEventListener("mousemove", (e) => {
//   cursor2.style.left= e.pageX+"px";
//   cursor2.style.top= e.pageY+"px";
// })

// const cursor3 = document.querySelector(".cursor3");
// document.addEventListener("mousemove", (e) => {
//   cursor3.style.left= e.pageX+"px";
//   cursor3.style.top= e.pageY+"px";
// })

// const cursor4 = document.querySelector(".cursor4");
// document.addEventListener("mousemove", (e) => {
//   cursor4.style.left= e.pageX+"px";
//   cursor4.style.top= e.pageY+"px";
// })

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length>0) {
	window.addEventListener("scroll", animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems [index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 1;
		
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY> animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			}  else {
				animItem.classList.remove('_active');
			}

		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	animOnScroll();
}

  
