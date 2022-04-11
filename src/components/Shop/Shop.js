import './Shop.css';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import useProducts from '../../hooks/useProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products] = useProducts();

    const [cart, setCart] = useState([]);

    

    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for(const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        let newCart;
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    };

    const handleClearCart = () => {
        setCart([])
    };

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product handleAddToCart={handleAddToCart} product={product} key={product.id}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handleClearCart} className='clear-cart-btn'>
                        Clear Cart <FontAwesomeIcon className='clear-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                    <Link to='/orders'>
                        <button className='review-cart-btn'>
                            Review Order <FontAwesomeIcon className='review-icon' icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;