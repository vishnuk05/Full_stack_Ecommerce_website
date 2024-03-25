export const addItemToCart = (item, next) => {
    let cart = []
    if (typeof window !== undefined) {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }

        cart.push({ ...item });
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem(`item_${item.id}_added`, 'true');
        next();
    }
}

export const loadCart = () => {
    if (typeof window !== "undefined") {
        if (localStorage.getItem("cart")) {
            return JSON.parse(localStorage.getItem("cart"));
        }
    }
}

export const removeItemFromCart = (productId) => {
    let cart = [];
    if (typeof window !== "undefined") {
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
            cart = cart.filter((product) => product.id !== productId); // Remove the item with matching productId
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
    return cart;
};


export const cartEmpty = (next) => {
    if (typeof window != "undefined") {
        localStorage.removeItem("cart")
        let cart = []
        localStorage.setItem("cart", JSON.stringify(cart))
        next();
    }
}

// In Carthelper.js or wherever you manage your cart logic
export const isInCart = (productId) => {
    // Logic to check if the product with the given productId is in the cart
    // For example, you might check localStorage or a state variable that stores cart items
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    return cartItems.some(item => item.productId === productId);
};
