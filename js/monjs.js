var i=0;
var IMAGE=[];
var time=3000;

IMAGE [0]="img1.jpg"
IMAGE [1]="img2.jpg"
IMAGE [2]="img3.jpg"
IMAGE [3]="img4.jpg"
IMAGE [4]="img5.jpg"
IMAGE [5]="img6.jpg"


function changeImag(){
    document.slide.src=IMAGE[i];
    if(i<IMAGE.length -1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout ("changeImag()",time);
    }
window.onload=changeImag;



