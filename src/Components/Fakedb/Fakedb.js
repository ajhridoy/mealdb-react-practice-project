const addToDb = (id) =>{
    let orderList;
    const storedList = localStorage.getItem('Order-list')
    if(storedList){
        orderList = JSON.parse(storedList)
    }
    else{
        orderList = {};
    }
    
    const quantity = orderList[id];
    if(quantity){
        const newQuantity = quantity + 1
        orderList[id] = newQuantity
    }
    else{
        orderList[id] = 1;
    }
    localStorage.setItem('Order-list', JSON.stringify(orderList));
}

const getOrderList = () =>{
    let orderList;
    const storedList = localStorage.getItem('Order-list')
    if(storedList){
        orderList = JSON.parse(storedList)
    }
    else{
        orderList = {};
    }
    return orderList
}
export {addToDb, getOrderList};