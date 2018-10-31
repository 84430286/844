var timer;//设计定时器的变量
//启动定时器函数定义--若在启动定时器有很多附加操作可以一并写入该函数。
//若启动定时器动作单一，可以直接调用window定时器。
// function startTimer(speed){
//     timer=window.setInterval(changeNnm,speed);
// }
//调用定时器，使用程序从一开始就i执行变化
// startTimer(100);

timer=window.setInterval(changeNnm,1000);
//获取h2元素

var h2Obj=document.querySelector('h2');
var imgobj=document.querySelector('h2>img')
console.log(imgobj);
var currentNo=1;
function changeNnm
(){
    if(currentNo<8) currentNo++;
    else currentNo=1;
    // h2Obj.textContent=currentNo;
    h2Obj.innerHTML='<img src="images/0'+currentNo+'.jpg" alt=""></img>';
    // console(currentNo);
   
}
// console.log(timer);
var btnObj=document.getElementById("btn");

function startchange(){
    startTimer(500);
    btnObj.textContent='停止';
}
function stopchange(){
    window.clearInterval(timer);
    btnObj.textContent="启动";
}
btnObj.addEventListener('mouseover',stopchange);
btnObj.addEventListener('mouseout',startchange);


