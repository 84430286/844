// var img4=document.querySelector('#images a:nth-child(4)');
var imagesA=document.getElementById("images").children;
//通过行内式更换样式
// document.querySelector('#images a:nth-child(1)').style.display='none';
// document.querySelector('#images a:nth-child(5)').style.display='block';
// imagesA[0].style.display='none';
// imagesA[4].style.display='block';


//通过更换css类名改变样式
// imagesA[0].className='hiddenImg';
// imagesA[4].className='displayImg';

//设置定时器
var currentNo=0;
function changeImg(){
//排他原理
    for(var i=0;i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
        console.log(imagesA[i]);
    }



    imagesA[currentNo].className='displayImg';
    if(currentNo<7){
    currentNo++;}
    else{
        currentNo=0;
    }

}
var timer=window.setInterval(changeImg,1000);

// var imgB=document.getElementById("");

var imagesB=document.getElementById("images");

function startchange(){
    timer=window.setInterval(changeImg,1000);
    
}
function stopchange(){
    window.clearInterval(timer);
    
}
imagesB.addEventListener('mouseover',stopchange);
imagesB.addEventListener('mouseout',startchange);










