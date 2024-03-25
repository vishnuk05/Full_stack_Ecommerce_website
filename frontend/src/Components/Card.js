import React from 'react'
import "../Assests/styles/Card.css"
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { addItemToCart } from '../Pages/helper/Carthelper';
import { removeItemFromCart } from '../Pages/helper/Carthelper';
function Card({ products, addtoCart = true, removefromcart = false }) {
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const { isAuthenticated, cartItemCount, updateCartItemCount } = useContext(AuthContext);

    const addToCartHandler = () => {
        if (isAuthenticated) {
            addItemToCart(products, () => { })
            updateCartItemCount(cartItemCount + 1);
            console.log("Added to cart");
            setIsAddedToCart(true);


        } else {
            alert("Please login")
            console.log("Please login");
        }
    };

    const removeFromCartHandler = () => {
        removeItemFromCart(products.id);
        if (cartItemCount !== 0) {
            updateCartItemCount(cartItemCount - 1);
        }
        console.log("Product removed from cart");
        setIsAddedToCart(false);
    };

    return (
        <div>
            <div className="card" style={{ width: "16rem", height: "400px" }}>
                <img className='p-2' src={products.image} height={150} />

                <div className="card-body">
                    <h5 className="card-title">{products.name}</h5>
                    <p className="card-text">
                        {products.description}
                    </p>
                    {isAddedToCart || removefromcart ? (
                        <button onClick={removeFromCartHandler} className="btn btn-outline-dark">RemoveItem</button>
                    ) : (
                        <button onClick={addToCartHandler} className="btn btn-outline-dark">AddToCart</button>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Card