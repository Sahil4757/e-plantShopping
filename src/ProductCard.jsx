import React from 'react';
import './ProductList.css';

function ProductCard({ plant, onAddToCart, addedToCart }) {
    return (
        <div className="product-card">
            <img
                className="product-image"
                src={plant.image}
                alt={plant.name}
            />
            <div className="product-title">{plant.name}</div>
            <div className="product-description">{plant.description}</div>
            <div className="product-cost">{plant.cost}</div>
            <button
                className={`product-button ${addedToCart ? 'added' : ''}`}
                onClick={() => onAddToCart(plant)}
            >
                {addedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
        </div>
    );
}

export default ProductCard;
