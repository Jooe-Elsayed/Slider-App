//! ---------- Global Data ---------------
// Element - Event - Action(Function)
var imgs = Array.from(document.querySelectorAll('.item img'));  //node list
var lightBox = document.getElementById('lightBox');
var closeIcon = document.getElementById('close');
var boxData = document.getElementById('boxData');
var nextSlide = document.getElementById('next');
var prevSlide = document.getElementById("prev")
var currentIndex =0 ;




//! -------------- Functions ----------------
function closeSlide(){
lightBox.classList.add('d-none')
}

function next(){
    currentIndex++;    //next index
    if(currentIndex == imgs.length){  // last Element
        currentIndex=0;            //first Element
    }
    var currentElementSrc = imgs[currentIndex].getAttribute('src')
    boxData.style.backgroundImage = `url(${currentElementSrc})`;
}

function prev(){
    currentIndex--;    //prev index
    if(currentIndex  < 0){
        currentIndex = imgs.length-1;
    }
    
    var currentElementSrc = imgs[currentIndex].getAttribute('src')
    boxData.style.backgroundImage = `url(${currentElementSrc})`;
}


//! --------------- Events ---------------- 
for(var i = 0; i < imgs.length ; i++){
imgs[i].addEventListener('click' , function(e){
    var currentTarget = e.target; //element kolo
    currentIndex=imgs.indexOf(currentTarget); //index img

    lightBox.classList.remove('d-none'); //lightBox Show
    // Select Element 
        var currentSrc =e.target.getAttribute('src');  //src img 
        boxData.style.backgroundImage=`url(${currentSrc})`
}) 
}

closeIcon.addEventListener('click',function(){
    closeSlide();
})


nextSlide.addEventListener('click',function(){
    next();
})

prevSlide.addEventListener('click' , function(){
    prev();
})

document.addEventListener('click',function(e){
    if(e.target == lightBox){
        closeSlide();
    }
})

document.addEventListener('keydown', function(e){
    switch(e.key){
        case "ArrowRight":
            next();
            break;

            case "ArrowLeft":
                prev();
                break;

                case "Escape":
                    closeSlide();
                    break;
    }
})






