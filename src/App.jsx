import { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import AuthModal from "./components/AuthModal";
import Protected from "./components/Protected";
import About from "./components/About";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AIChat from "./components/AIChat";
import ChildCare from "./pages/ChildCare";
import Orders from "./pages/Orders";

import "./App.css";

const products = [

  {
    id: 1,
    category: "Mountain",
    name: "Mountain Warrior X1",
    price: 25999,
    originalPrice: 32000,
    rating: 4.5,
    reviews: 120,
    image:
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=1000",
    inStock: true,
    discount: 15,
    description:
      "Premium mountain bicycle with strong alloy frame and disc brakes."
  },

  {
    id: 2,
    category: "City",
    name: "Urban Rider Pro",
    price: 18999,
    originalPrice: 22000,
    rating: 4.6,
    reviews: 90,
    image:
      "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1000",
    inStock: true,
    discount: 10,
    description:
      "Stylish city bike designed for smooth daily rides."
  },

  {
    id: 3,
    category: "Road",
    name: "Speed Racer Elite",
    price: 35999,
    originalPrice: 42000,
    rating: 4.8,
    reviews: 145,
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1000",
    inStock: true,
    discount: 18,
    description:
      "Ultra lightweight road bike built for speed and racing."
  },

  {
    id: 4,
    category: "Hybrid",
    name: "Hybrid Explorer",
    price: 21999,
    originalPrice: 27000,
    rating: 4.4,
    reviews: 80,
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1000",
    inStock: true,
    discount: 12,
    description:
      "Comfortable hybrid bike for both city and off-road rides."
  },

  {
    id: 5,
    category: "Electric",
    name: "Volt E-Bike Max",
    price: 55999,
    originalPrice: 62000,
    rating: 4.9,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1000",
    inStock: true,
    discount: 8,
    description:
      "Powerful electric bicycle with long battery backup."
  },

  {
    id: 6,
    category: "Kids",
    name: "Kids Fun Rider",
    price: 9999,
    originalPrice: 12999,
    rating: 4.3,
    reviews: 65,
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1000",
    inStock: true,
    discount: 20,
    description:
      "Safe and colorful bicycle specially made for kids."
  }

];

function App() {

  /* =========================
     STATES
  ========================= */

  const [cart, setCart] = useState(() => {

    const savedCart =
      localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  const [wishlist, setWishlist] =
    useState(() => {

      const savedWishlist =
        localStorage.getItem("wishlist");

      return savedWishlist
        ? JSON.parse(savedWishlist)
        : [];
    });

  const [user, setUser] =
    useState(() => {

      const savedUser =
        localStorage.getItem("user");

      return savedUser
        ? JSON.parse(savedUser)
        : null;
    });

  const [searchTerm, setSearchTerm] =
    useState("");

  const [showAuthModal, setShowAuthModal] =
    useState(false);

  const [isLogin, setIsLogin] =
    useState(true);

  const [message, setMessage] =
    useState("");

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: ""
    });

  /* =========================
     SAVE LOCAL STORAGE
  ========================= */

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  useEffect(() => {

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

  }, [wishlist]);

  useEffect(() => {

    if (user) {

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

    }

  }, [user]);

  /* =========================
     TOAST MESSAGE
  ========================= */

  const showToast = (text) => {

    setMessage(text);

    setTimeout(() => {

      setMessage("");

    }, 2500);
  };

  /* =========================
     CART FUNCTIONS
  ========================= */

  const addToCart = (product) => {

    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      const updatedCart =
        cart.map((item) =>

          item.id === product.id

            ? {
                ...item,
                quantity:
                  item.quantity + 1
              }

            : item
        );

      setCart(updatedCart);

    } else {

      const newItem = {

        ...product,

        quantity: 1,

        img:
          product.img ||
          product.image
      };

      setCart([
        ...cart,
        newItem
      ]);
    }

    showToast(
      `${product.name} added to cart 🛒`
    );
  };

  const removeFromCart = (id) => {

    const updatedCart =
      cart.filter(
        (item) => item.id !== id
      );

    setCart(updatedCart);

    showToast(
      "Product removed from cart ❌"
    );
  };

  const updateQuantity = (
    id,
    quantity
  ) => {

    if (quantity <= 0) {

      removeFromCart(id);

      return;
    }

    const updatedCart =
      cart.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity
            }

          : item
      );

    setCart(updatedCart);
  };

  /* =========================
     WISHLIST
  ========================= */

  const addToWishlist = (
    product
  ) => {

    const exists =
      wishlist.find(
        (item) =>
          item.id === product.id
      );

    if (exists) {

      showToast(
        "Already in wishlist ❤️"
      );

      return;
    }

    const updatedWishlist = [

      ...wishlist,

      {
        ...product,
        img:
          product.img ||
          product.image
      }
    ];

    setWishlist(updatedWishlist);

    showToast(
      `${product.name} added to wishlist ❤️`
    );
  };

  const removeFromWishlist = (
    id
  ) => {

    const updatedWishlist =
      wishlist.filter(
        (item) => item.id !== id
      );

    setWishlist(updatedWishlist);

    showToast(
      "Removed from wishlist ❌"
    );
  };

  /* =========================
     TOTAL
  ========================= */

  const total = cart.reduce(

    (sum, item) =>

      sum +
      item.price *
      item.quantity,

    0

  );

  /* =========================
     FILTER PRODUCTS
  ========================= */

  const filteredProducts =
    products.filter((product) =>

      product.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )

    );

  /* =========================
     LOGIN
  ========================= */

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      !formData.email ||
      !formData.password
    ) {

      showToast(
        "Please fill all fields ❌"
      );

      return;
    }

    const loggedUser = {

      id: Date.now(),

      fullName:
        formData.name ||
        formData.email.split("@")[0],

      username:
        formData.email.split("@")[0],

      email: formData.email,

      profileImage: ""
    };

    setUser(loggedUser);

    localStorage.setItem(
      "user",
      JSON.stringify(loggedUser)
    );

    setShowAuthModal(false);

    showToast(
      "Login Successful ✅"
    );
  };

  /* =========================
     REGISTER
  ========================= */

  const handleRegister = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {

      showToast(
        "Please fill all fields ❌"
      );

      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      showToast(
        "Passwords do not match ❌"
      );

      return;
    }

    const newUser = {

      id: Date.now(),

      fullName:
        formData.name,

      username:
        formData.name
          .toLowerCase()
          .replace(/\s+/g, ""),

      email:
        formData.email,

      profileImage: ""
    };

    setUser(newUser);

    localStorage.setItem(
      "user",
      JSON.stringify(newUser)
    );

    setShowAuthModal(false);

    showToast(
      "Account Created Successfully 🎉"
    );
  };

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {

    setUser(null);

    localStorage.removeItem("user");

    showToast(
      "Logged Out Successfully 👋"
    );
  };

  return (

    <Router>

      <div className="app">

        {/* NAVBAR */}

        <Navbar
          cart={cart}
          wishlist={wishlist}
          user={user}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onLogin={() => {

            setIsLogin(true);

            setShowAuthModal(true);

          }}
          onLogout={handleLogout}
        />

        {/* TOAST */}

        {message && (

          <div className="toast-message">

            {message}

          </div>

        )}

        {/* AUTH MODAL */}

        {showAuthModal && (

          <AuthModal
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            formData={formData}
            setFormData={setFormData}
            onLogin={handleLogin}
            onRegister={handleRegister}
            onClose={() =>
              setShowAuthModal(false)
            }
          />

        )}

        {/* MAIN */}

        <main className="main-content">

          <Routes>

            {/* HOME */}

            <Route
              path="/"
              element={
                <>
                  <Hero />

                  <AIChat />

                  <Features />

                  <Products
                    products={products}
                    addToCart={addToCart}
                    addToWishlist={
                      addToWishlist
                    }
                    cart={cart}
                    searchTerm={searchTerm}
                  />
                </>
              }
            />

            {/* PRODUCTS */}

            <Route
              path="/products"
              element={
                <Products
                  products={
                    filteredProducts
                  }
                  addToCart={addToCart}
                  addToWishlist={
                    addToWishlist
                  }
                  cart={cart}
                />
              }
            />

            {/* PRODUCT DETAILS */}

            <Route
              path="/products/:id"
              element={
                <ProductDetails
                  products={products}
                  addToCart={addToCart}
                  addToWishlist={
                    addToWishlist
                  }
                />
              }
            />

            {/* CHILD CARE */}

            <Route
              path="/child-care"
              element={
                <ChildCare
                  addToCart={addToCart}
                  addToWishlist={
                    addToWishlist
                  }
                />
              }
            />

            {/* CHECKOUT */}

            <Route
              path="/checkout"
              element={
                <Checkout
                  cart={cart}
                />
              }
            />

            {/* CONTACT */}

            <Route
              path="/contact"
              element={<Contact />}
            />

            {/* ABOUT */}

            <Route
              path="/about"
              element={<About />}
            />

            {/* ADMIN */}

            <Route
              path="/admin"
              element={<Admin />}
            />

            {/* PROFILE */}

            <Route
              path="/profile"
              element={
                user ? (

                  <Profile
                    user={user}
                    setUser={setUser}
                  />

                ) : (

                  <Protected
                    title="Login Required"
                    message="Please login first"
                    onLogin={() => {

                      setIsLogin(true);

                      setShowAuthModal(true);

                    }}
                  />

                )
              }
            />

            {/* CART */}

            <Route
              path="/cart"
              element={
                user ? (

                  <Cart
                    cart={cart}
                    total={total}
                    updateQuantity={
                      updateQuantity
                    }
                    removeFromCart={
                      removeFromCart
                    }
                  />

                ) : (

                  <Protected
                    title="Access Your Cart"
                    message="Please login first"
                    onLogin={() => {

                      setIsLogin(true);

                      setShowAuthModal(true);

                    }}
                  />

                )
              }
            />

            {/* WISHLIST */}

            <Route
              path="/wishlist"
              element={
                user ? (

                  <Wishlist
                    wishlist={wishlist}
                    addToCart={addToCart}
                    removeFromWishlist={
                      removeFromWishlist
                    }
                  />

                ) : (

                  <Protected
                    title="Access Wishlist"
                    message="Please login first"
                    onLogin={() => {

                      setIsLogin(true);

                      setShowAuthModal(true);

                    }}
                  />

                )
              }
            />

            {/* ORDERS */}

            <Route
              path="/orders"
              element={
                <Orders />
              }
            />

            {/* NOT FOUND */}

            <Route
              path="*"
              element={
                <Navigate to="/" />
              }
            />

          </Routes>

        </main>

        {/* FOOTER */}

        <Footer />

      </div>

    </Router>

  );
}

export default App;