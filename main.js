//Maddox C / 3 April 2024 / Simple JS Slideshow

let count = 0;

const images = [];

images[0] = 'goofycat1.jpg';
images[1] = 'goofycat2.jpg';
images[2] = 'goofycat3.jpg';
images[3] = 'goofycat4.jpg';

const captions = [
    'Silly Goofy Woofy Doofus Cat 1',
    'Silly Goofy Woofy Doofus Cat 2',
    'Silly Goofy Woofy Doofus Cat 3',
    'Silly Goofy Woofy Doofus Cat 4'
];
const timer = 4000;

function changeImg(){
    document.slide.src = images[count];
    const myCaption = document.querySelector('#cat-caption');
    myCaption.innerHTML = captions[count];

    if (count < images.length-1){
        count++;
    } else{
        count= 0;
    }
        setTimeout("changeImg()", timer);
}

window.onload = changeImg;