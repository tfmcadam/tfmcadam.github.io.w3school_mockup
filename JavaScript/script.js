

// * dropdown button
// * loopthrough all the dropdown buttons to toggle between hiding and showing its dropdown content - this will allow multiple dropdowns without any conflict 

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++){
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block"
        }
    });
}


// ! back to top set up
// get the button
let mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display= "block";
    }else{
        mybutton.style.display = "none"
    }
}

// * skip up

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// *smooth scroll up

function ScrollToTop(){
    window.scrollTo({top:0, behavior:"smooth"})
}
