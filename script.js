nav = document.querySelector("nav").querySelectorAll("a");
console.log(nav);

nav.forEach(element => {
	element.addEventListener("click", function(){
		nav.forEach(nav=>nav.classList.remove("active"))

		this.classList.add("active")
		// body...
	})
})