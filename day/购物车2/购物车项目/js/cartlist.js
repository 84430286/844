//获取购物车数据初始化
var cart = new ShoppingCart();
let cartRoot = document.querySelector('#cartRoot');
// console.log(cart);
//定义json数据
const operatorNameJson = {
    "checkItem": "[data-operator='checkItem']",

};
const operatorGlobal = {
    "clearAll": "[data-operator='clearAll']",
    "deleteAll": "[data-operator='deleteItem']",
}
//显示订单列表
function displOrderlist() {

    let cartList = document.querySelector('#cartList');

    let carData = cart.getDataFromLocalStorage();
    // console.log(carData);
    let orderList = carData.orderList;
    // console.log(orderList);



    for (let i in orderList) {
        let order = orderList[i];
        console.log(order);
        let ordede = document.querySelector('#orderExample').cloneNode(true);
        // console.log(ordede);
        //设置新id
        ordede.id = order.id;
        //获取节点并返回
        //图像
        let imgNode = ordede.querySelector('[data-name="imgSrc"]');
        imgNode.src = 'images/' + order.imgSrc;
        //名字
        let titleNode = ordede.querySelector('[data-name="title"]');
        titleNode.textContent = orderList[i].title;
        //价格
        let priceNode = ordede.querySelector('[data-name="price"]');
        priceNode.textContent = orderList[i].price;
        //数量
        let qtyNode = ordede.querySelector('[data-name="qty"]');
        qtyNode.textContent = orderList[i].qty;
        //选中
        let checkNone = ordede.querySelector('[ data-operator="checkItem"]');
        checkNone.checked = order.selectStatus;
        //小计
        let subQtyNode = ordede.querySelector('[data-name="subPrice"]');
        subQtyNode.textContent = (order.qty * order.price).toFixed(2);
        //挂接到父元素
        cartList.appendChild(ordede);
        ordede.classList.remove('d-none');

        // let deleteElemid = document.querySelectorAll('[data-operator="deleteItem"]');
        element=ordede.querySelector('[data-operator="deleteItem"]');
      
        element.setAttribute("data-id",order.id);
        
        
    }
     


}
//显示商品总样本数。总件数总价格
function displayselectTota() {
    //全部商品
    let unitsNode = document.querySelector('[data-name="units"]');
    unitsNode.textContent = cart.getTotalUnits();

    //总数量
    let selectNode = document.querySelector('[data-name="selectedQty"]');
    selectNode.textContent = cart.getSelectedQty();
    //总价
    let amountNode = document.querySelector('[data-name="selectedAmount"]');
    amountNode.textContent = cart.getSelectedAmount().toFixed(2);
}
//为节点注册事件
function regEvent() {
    // 获取清空购物车节点
    let element = cartRoot.querySelector(operatorGlobal.clearAll);
    // console.log(element);
    // 注册单击事件触发函数
    element.onclick = clearAllEventFun;
    //获取删除节点
    // let deleteElem = cartRoot.querySelector(operatorGlobal.deleteAll);
    let deleteElem = document.querySelectorAll('[data-operator="deleteItem"]');
    //注册删除事件 
    for (const i in deleteElem) {
        deleteElem[i].onclick = deleteItemEventFun;
    }
}

// 清空事件触发函数
function clearAllEventFun() {
    cart.clearCart();
    // 获取订单根节点
    let cartListNode = document.querySelector('#cartList');
    //保留样本节点
    let ExampleNode = (document.querySelector('#orderExample')).cloneNode(true);
    //清除订单根节点的所有元素
    cartListNode.innerHTML = "";
    //将样本节点挂接回列表根节点
    cartListNode.appendChild(ExampleNode);
    // 更新商品总数据
    displaySelectedTotal();
}
//删除事件触发函数
function deleteItemEventFun(e) {
    // 删除购物车数据
    let id = e.target.getAttribute("data-id");
    // console.log(e.target);
    
    // 删除购物车数据
    
    cart.deleteItem(id);
 

    //获取订单根节点
    let cartListNode = document.querySelector('#cartList');
   

   
    //移除子节点
    // cartListNode.removeChild()


}

// 初始化函数
function init() {
    // 显示订单列表
    displOrderlist();
    // 显示总数据
    displayselectTota();
    // 为所有操作节点注册事件
    regEvent();
}

//调用初始化函数
init();


