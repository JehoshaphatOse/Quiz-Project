console.log("clicked")


var dropDown = document.getElementById("menu");
// var close = window.addEventListener("click", closeMenu)

function showMenu (){
        var dropDown = document.getElementById("menu");

        dropDown.style.display = "block"
}

function closeMenu (){
    var dropDown = document.getElementById("menu");

    console.log(" Close")
    dropDown.style.display = "none"
}
