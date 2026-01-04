# Paradise Nursery - Premium Plant Shopping Experience 🌿

A modern, visually stunning, and responsive e-commerce application for plant enthusiasts. Built with **React** and **Redux Toolkit**, this application features a premium "Glassmorphism" UI, smooth animations, and a seamless shopping experience.

## 🌐 Live Demo

**[Click here to visit Paradise Nursery](https://sahilgulunjkar.github.io/e-plantShopping/)**

## ✨ Key Features

- **Premium UI/UX Design**:
    - Modern "Green Paradise" theme with glassmorphism effects.
    - Smooth `fadeIn` and `slideIn` animations for an engaging user experience.
    - Responsive layout that works perfectly on Desktop, Tablet, and Mobile.

- **Dynamic Product Catalog**:
    - **Categorized Display**: Plants are organized into clear categories (Air Purifying, Aromatic, Medicinal, etc.).
    - **Smart Navigation**: Navbar links smoothly scroll to specific categories using custom anchoring logic.
    - **Reusable Components**: Modular architecture using `ProductCard` for consistent design.

- **Advanced Cart Management**:
    - Real-time updates using **Redux Toolkit**.
    - Add, Remove, and Update item quantities instantly.
    - Visual cues (Disabled "Add to Cart" buttons) for items already in the cart.

- **Streamlined Checkout Flow**:
    - Dedicated Checkout page with an order summary.
    - Custom navigation to return to Cart or complete the purchase.
    - User-friendly confirmation messages.

## 🛠️ Tech Stack

- **Frontend**: [React.js](https://reactjs.org/) (Vite)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: Modern CSS3 (Flexbox, Grid, CSS Variables, Animations)
- **Deployment**: GitHub Pages

## 🚀 Getting Started

Follow these steps to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/sahilgulunjkar/e-plantShopping.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd e-plantShopping
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```bash
e-plantShopping/
├── src/
│   ├── assets/           # Images and static assets
│   ├── AboutUs.jsx       # Landing page "About" section
│   ├── App.jsx           # Main application layout
│   ├── CartItem.jsx      # Shopping cart view and logic
│   ├── CartSlice.jsx     # Redux slice for cart management
│   ├── Checkout.jsx      # Order summary and checkout view
│   ├── Navbar.jsx        # Navigation bar with smooth scroll
│   ├── plantsData.js     # Static data for plant catalog
│   ├── ProductCard.jsx   # Reusable card component for plants
│   ├── ProductList.jsx   # Main shop page component
│   ├── store.js          # Redux store configuration
│   └── main.jsx          # App entry point
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## 🤝 Contributing

Contributions are welcome!
1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Requs es.

## 👤 Author

**Sahil Gulunjkar**
- GitHub: [@sahilgulunjkar](https://github.com/sahilgulunjkar)

---
*Created with ❤️ for plant lovers.*