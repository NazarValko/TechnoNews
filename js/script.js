window.onscroll = function(){scrollFunction()};

let header = document.getElementById("header");
let fixedHeader = header.offsetTop;

function scrollFunction(){
    if(window.pageYOffset >= fixedHeader){
        header.classList.add("header-fixed");
    
    } else{
        header.classList.remove("header-fixed");
    }
}

