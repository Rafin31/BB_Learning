
window.onscroll = function() {

    scrollFunctionForTopButton();
};



mybutton = document.getElementById("myBtn");

function scrollFunctionForTopButton() {
   
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = 1;
    } else {
        mybutton.style.opacity = 0;
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}