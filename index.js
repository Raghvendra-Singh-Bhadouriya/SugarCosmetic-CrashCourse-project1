let imgArr=[
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9b433ecb-a223-4887-85a6-cc0958f16bae.jpg&w=1080&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F3ee81e9c-6293-4a28-a76f-84e58f0e8dad.gif&w=1080&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff250a209-bc85-476d-b494-b6f6660af6ca.gif&w=1080&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F2463947b-abca-4deb-bf6c-3fd9267bb12e.jpg&w=1080&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F941bbe82-9194-4ac9-9f15-1d27780fbc02.gif&w=1080&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff2f896f0-0134-446d-b9ad-b35d2fe5267d.jpg&w=1080&q=75",
]
currentImg=0;
let image = document.getElementById('slide-img');
    image.setAttribute("src", imgArr[currentImg])

const autoSlideImg=() => {
    id = setInterval(() => {

            currentImg++;
        if(currentImg >= imgArr.length){
            currentImg=0;
        };
        image.setAttribute("src", imgArr[currentImg])
        
    }, 5000);
}
autoSlideImg();


let next = document.querySelector(".button-right");
next.addEventListener("click", function(){
    currentImg++;
    if(currentImg >= imgArr.length){
        currentImg=0;
    }
    image.setAttribute("src", imgArr[currentImg])
    clearInterval(id);
})

let previous=document.querySelector(".button-left");
previous.addEventListener("click",function(){
    currentImg--;
    if(currentImg<0){
        currentImg=imgArr.length-1;
    }
    image.setAttribute("src",imgArr[currentImg]);
    clearInterval(id); 
});



/*=============================================================================*/

imageArr=[
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fb90c025f-22a4-4f30-bfbf-8a045fdf023e.jpg&w=1080&q=75",
    "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F7a6f082b-d4ba-4b93-93b7-aa79cc63d877.jpg&w=1080&q=75",
]

let currentImage=0;
let images=document.querySelector(".two-image");
images.src = imageArr[currentImage];

const twoImageSlide = () => {
    id=setInterval(() => {
        currentImage++;
        if(currentImage >= imageArr.length){
            currentImage=0;
        }
        images.src = imageArr[currentImage];
    }, 5000);
}
twoImageSlide();

let nxt = document.querySelector(".button-nxt");
nxt.addEventListener("click",function(){
    currentImage++;
    if(currentImage >= imageArr.length){
        currentImage=0;
    }
    images.src= imageArr[currentImage];
})

let pre = document.querySelector(".button-pre");
pre.addEventListener("click",function(){
    currentImage--;
    if(currentImage < 0){
        currentImage= imageArr.length-1;
    }
    images.src= imageArr[currentImage];
})