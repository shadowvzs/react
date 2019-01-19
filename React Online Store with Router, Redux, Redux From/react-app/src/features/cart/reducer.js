const addToCart = (cart, index, item) => {
    if (cart[index]) {
        cart[index].quantity++;
    } else {
        item.quantity = 1;
        cart.push(item);
    }
    return [...cart];   
}

const removeFromCart = (cart, index) => {
    cart[index].quantity--;
    cart[index].quantity < 1 && cart.splice(index, 1);
    return [...cart];
}

const removeAllFromCart = (cart, index) => {
    cart.splice(index, 1);
    return [...cart];
}


const cartReducer = (state = [], action) => {
    
    const index = action.payload 
        ? state.findIndex(e => e.id === action.payload.id)
        : -1;
    switch(action.type) {
        case "ADD":
            return addToCart(state, index, action.payload);
        case "REMOVE":
            if (index === -1) { return state; }    
            return removeFromCart(state, index);
        case "REMOVE_ALL":
            if (index === -1) { return state; }    
            return removeAllFromCart(state, index);
        default:
            return state;
    }

}

export default cartReducer;