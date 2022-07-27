let string = " ";
let buttons = document.querySelectorAll('.button')
Array.from(buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        }
        else if (e.target.innerHTML == "AC") {
            console.log(e.target)
            string = " ";
            document.querySelector("input").value = string;

        }
        else if(e.target.innerHTML == "C"){
            console.log(e.target)
            string = string.substring(0, string.length - 1);
            document.querySelector("input").value = string;

        }

        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
}))

fetch("https://source.unsplash.com/random/1600x1800/?wallpaper,landscape").then( data => {
	console.log(data.url);                
});