const item = {
    name: 'Apple iPhone',
    orignialPrice: 15
}

function total(item, amount) {
    const totalprice = amount * item.orignialPrice;
    
    return totalprice;
}

console.log(total(item, 2));