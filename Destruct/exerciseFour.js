const item = {
    name: 'Apple iPhone',
    orignialPrice: 20,
    discount: 0.5
}

function total(item, amount) {
    const totalprice = amount * item.orignialPrice * item.discount;
    
    return totalprice;
}

console.log(total(item, 2));