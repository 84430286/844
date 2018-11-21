
 
//商品类
 class Product{
   constructor(id,title,price,imgpath){
     this.id=id;
     this.title=title;
     this.price=price;
     this.imgpath=imgpath;
   }
 
 }
//  var pr=new Product('123','书',50,'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=905749043,1080517866&fm=200&gp=0.jpg');
// var pr2=new Product('01','牙刷',10,'images/01.jpg')
// console.log(pr);


// class Order{
//   constructor(product,qty){
//     this.product=product;
//     this.qty=qty;
//   }

// }


//订单类
class Order{
  constructor(product,qty,selectStatus){
    this.id=product.id;
     this.title=product.title;
     this.price=product.price;
     this.imgpath=product.imgpath;
    this.qty=qty;
    this.selectStatus=selectStatus;
  }

}
// var or=new Order(pr,2);
// console.log(or);

// console.log(pr.title);
// console.log(pr2.title,pr2.price);
// console.log(or.product.title);

// var or2= new Order(pr2,5);
// console.log(or2);
// console.log(or2);
// console.log(or2.product.title);


// var prod=new Array();
// prod.push(pr);

// console.log(prod);

// var orde=new Array();
// orde.push(or);
// console.log(orde);
 //购物车数据类
class CartData{
  constructor(){
    this.orderList=new Array();
    this.units=0;
    this.totalQty=0;
    this.totalAmount=0;
  }
}
function addtoCart(or){
  var flag=true;//标记商品状态为新商品
  for (const i in ca.orderList) {
    if(or.id==ca.orderList[i].id){
      flag=false;
      ca.orderList[i].qty+=or.qty;
      break;
    }
    
  }
  if(flag){
    ca.orderList.push(or);
    ca.units++;
  }
  ca.totalQty+=or.qty;
  ca.totalAmount+=or.price*or.qty;
}
// var ca=new CartData();
//订单1
// ca.orderList.push(or);
// ca.units=1;
// ca.totalQty=or.qty;
// ca.totalAmount=or.price*or.qty;

// //多条订单
// or=new Order(pr2,1);
// addtoCart(or)
// or=new Order(pr2,3);
// addtoCart(or)
// console.log(ca);




// var x=10;
// var y=5;
// localStorage.setItem('kx',x);
// var xfroms=localStorage.getItem('kx');
// console.log(xfroms*y);
// console.log(parseInt( xfroms)+y);
//  localStorage.removeItem('kx',cartData);
//     localStorage.setItem('kx',JSON.stringify(cartData));
// localStorage.setItem('p1',JSON.stringify(pr));

class ShoppingCart
{
  getDateFromLocalSatorge(){
    // return localStorage.getItem('satorgetext');
    let kx = localStorage.getItem('kx');
    // 判断购物车是否为空
    if (kx == null || kx == '') {
        return new CartData();
    }
    else {
        return JSON.parse(kx);
    }

  }

  setDataTolocalSatorge(cartData){
    // var satorge=JSON.stringify(cartData);
    // localStorage.setItem('satorgetext',satorge);
    	//清除原有存储写入新列表
    localStorage.removeItem('kx');
    //写入本地存储
   localStorage.setItem('kx',JSON.stringify(cartData));


   




  }
  getSelectedList(){

  }
  getSelectedQty(){

  }
  getSelectedAmount(){

  }
  // getSelectedUnits(){

  // }
}



