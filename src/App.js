// src/App.js
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductDetailPage from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfile from './pages/UserProfilePage'; // Import UserProfile
import Header from './components/Header';
import { CartProvider } from './context/CartContext'; // Import your CartProvider

function App() {
  return (
    <CartProvider> {/* Wrap your application with the CartProvider */}
      <Router>
        <Header />
        <div style={{ paddingTop: '64px' }}> {/* Add padding to prevent overlap with fixed header */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile" element={<UserProfile />} /> {/* Add UserProfile route */}
            {/* Redirect undefined routes to home or a NotFound component */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
