import React, { useState } from 'react';
import './ProductList.css'
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

import Navbar from './Navbar';
import { plantsArray } from './plantsData';
import ProductCard from './ProductCard';

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart(prev => ({ ...prev, [product.name]: true }));
    };

    const handleCartClick = () => {
        setShowCart(true);
    };

    const handlePlantsClick = () => {
        setShowCart(false);
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };

    return (
        <div>
            <Navbar
                onHomeClick={onHomeClick}
                onPlantsClick={handlePlantsClick}
                onCartClick={handleCartClick}
            />

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1 id={category.category}><div>{category.category}</div></h1>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <ProductCard
                                        key={plantIndex}
                                        plant={plant}
                                        onAddToCart={handleAddToCart}
                                        addedToCart={addedToCart[plant.name]}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
