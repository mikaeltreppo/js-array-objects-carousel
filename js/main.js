const imageList = [

    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }

]
console.log(imageList)

// entro in html su imgSpace e button
let buttonNextDom = document.getElementById("next")
let buttonPrevDom = document.getElementById("prev")
let imgSpaceDom = document.querySelector(".imgSpace");
const sideDom = document.querySelector(".side");
let slider = "";
// creo un creatore di img su js
for (let i = 0; i < imageList.length ; i++) {
    let sliderDone = `
    <div class="image" >
    <img class='imgInDiv' src=${imageList[i].image} alt="img">
    </div>
    `;
    slider += sliderDone;
}



//sidebar creatore img


// stampo le img su html
imgSpaceDom.innerHTML = slider;
//creo array di classe e creo variabile con numeraione per incrementare in for
const callImg = document.getElementsByClassName("image");



let start = 0;

callImg[start].classList.add("show");
buttonNextDom.addEventListener('click', function () {

    if (start < imageList.length - 1) {
        callImg[start].classList.remove("show");
       
        start++;
        callImg[start].classList.add("show");
        
    }
    else {
        callImg[start].classList.remove("show");
 
        start = 0;
        callImg[start].classList.add("show");
      
    }

})

buttonPrevDom.addEventListener('click', function () {

    if (start > 0) {
        callImg[start].classList.remove("show");
     
        start--;
        callImg[start].classList.add("show");
 
    }
    else {
        callImg[start].classList.remove("show");
    
        start = imageList.length - 1;
        callImg[start].classList.add("show");

    }

})


// creo array per sideimg





