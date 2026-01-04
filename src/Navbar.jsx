import React from 'react';
import { useSelector } from 'react-redux';
import './ProductList.css';

function Navbar({ onHomeClick, onPlantsClick, onCartClick }) {
    const cartItems = useSelector(state => state.cart.items);
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleScrollToSection = (e, sectionId) => {
        e.preventDefault();
        onPlantsClick(); // Ensure we are on the plants page
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Small delay to allow rendering if switching from cart
    };

    return (
        <div className="navbar">
            <div className="tag">
                <a href="/" onClick={(e) => { e.preventDefault(); onHomeClick(); }} style={{ textDecoration: 'none' }}>
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" style={{ height: '60px', width: '60px', objectFit: 'contain', borderRadius: '50%', border: '2px solid white' }} />
                        <div className="luxury-text">
                            <h3>Paradise Nursery</h3>
                            <i>Where Green Meets Serenity</i>
                        </div>
                    </div>
                </a>
            </div>
            <div className="navbar-links">
                <div> <a href="#" onClick={(e) => handleScrollToSection(e, 'Air Purifying Plants')} className="nav-link">Air Purifying</a></div>
                <div> <a href="#" onClick={(e) => handleScrollToSection(e, 'Aromatic Fragrant Plants')} className="nav-link">Aromatic Fragrant</a></div>
                <div> <a href="#" onClick={(e) => handleScrollToSection(e, 'Insect Repellent Plants')} className="nav-link">Insect Repellent</a></div>
                <div> <a href="#" onClick={(e) => handleScrollToSection(e, 'Medicinal Plants')} className="nav-link">Medicinal</a></div>
                <div> <a href="#" onClick={(e) => handleScrollToSection(e, 'Low Maintenance Plants')} className="nav-link">Low Maintenance</a></div>
                <div>
                    <a href="#" onClick={(e) => { e.preventDefault(); onCartClick(); }} className="nav-link cart-container-link">
                        <div className="cart-icon-container">
                            <h1 className='cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68">
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path>
                                </svg>
                            </h1>
                            {cartItemCount > 0 && (
                                <div className="cart-counter">{cartItemCount}</div>
                            )}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
