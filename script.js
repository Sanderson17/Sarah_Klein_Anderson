//this function allows the hambburger menu to open and close on click 

function myFunction() {
    var y = document.getElementById('Navbar');
    if (y.className === "container") {
        y.className += " responsive";
    } else {
        y.className = "container";
    }
}
