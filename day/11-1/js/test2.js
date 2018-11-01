// var img4=document.querySelector('#images a:nth-child(4)');
var imagesA=document.getElementById("images").children;
// console.log(imagesA);
//通过行内式更换样式
// document.querySelector('#images a:nth-child(1)').style.display='none';
// document.querySelector('#images a:nth-child(5)').style.display='block';
// imagesA[0].style.display='none';
// imagesA[4].style.display='block';
var txtlist=document.querySelectorAll(".txt-box>li");
console.log(txtlist);

//通过更换css类名改变样式
// imagesA[0].className='hiddenImg';
// imagesA[4].className='displayImg';

//设置定时器
var currentNo=0;
 const nodeLength=8;
function changeImg(){
//排他原理
var nodeLength=txtlist.length;
    for(var i=0;i<nodeLength;i++){
        imagesA[i].className="hiddenImg";
        // console.log(imagesA[i]);
        txtlist[i].className="txtItem normalColor";
    }
    txtlist[currentNo].className="txtItem heighlightColor"



    imagesA[currentNo].className='displayImg';
    if(currentNo<7){
    currentNo++;}
    else{
        currentNo=0;
    }

}



// for(var i=0; i<txtlist.length ;i++){
//      txtlist[i].className="normalColor";
    // console.log(txtbox[i]);
//  }
//  txttxtlistbox[i].className='.txt-box li:hover ,.heightenColor';


var timer=window.setInterval(changeImg,1000);

// var imgB=document.getElementById("");

var imagesB=document.querySelector(".slider");

function startchange(){
    timer=window.setInterval(changeImg,1000);
    
}
function stopchange(){
    window.clearInterval(timer);
    
}
imagesB.addEventListener('mouseover',stopchange);
// imagesB.addEventListener('mouseover',()=>{ window.clearInterval(timer) ;  });
imagesB.addEventListener('mouseout',startchange);




//为li注册移入事件
for(var i=0;i<txtlist.length;i++){
    txtlist[i].addEventListener('mouseover',gotoImg);

    txtlist[i].no=i;
}
function gotoImg(){
    // console.log(this.no);
    currentNo=this.no;
    changeImg();
}

var leftbtn=document.querySelector(".leftButton");
// console.log(leftbtn);
var rigthbtn=document.querySelector(".rightButton")
// console.log(rigthbtn);

leftbtn.addEventListener('click',leftImg);
rigthbtn.addEventListener('click',rigImg);
function leftImg(){
    for(var i=0;i<nodeLength;i++){
        imagesA[i].className="hiddenImg";
        // console.log(imagesA[i]);
        txtlist[i].className="txtItem normalColor";
    }



    if(currentNo>0) {currentNo--;}
    else{
        currentNo=7;
    }
    imagesA[currentNo].className='displayImg';
    txtlist[currentNo].className="txtItem heighlightColor"



    

}
function rigImg(){
    if(currentNo<7) {currentNo++;}
    else{
        currentNo=0;
    }
    changeImg();

}


// rigthbtn.addEventListener('click',rigthbtnclick);
// function rigthbtnclick(){
    
// }
 






// leftbtn.addEventListener('click',leftclick);
// function leftclick(){

// }










