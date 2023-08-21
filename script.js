let userRating = 0; 
const button = document.querySelectorAll(".btn");
for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", function(){
        this.classList.toggle("clicked");
    userRating = this.innerHTML
    console.log(userRating);
    });
}

function test(e){
    console.log("hello");
    document.querySelector("#one").classList.add("hidden");
    document.querySelector("#two").classList.remove("hidden");
    document.querySelector(".rating").innerHTML = "You selected " + userRating + " out of  5";
}