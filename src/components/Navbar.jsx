import { Link, useNavigate } from "react-router-dom";

import {
  ShoppingCart,
  Heart,
  Search,
  Menu,
  X,
  ChevronDown,
  User,
  LogOut,
  Package,
  Bell,
  Sparkles,
  Lock,
  Bike,
  ShieldCheck
} from "lucide-react";

import {
  useState,
  useMemo,
  useEffect
} from "react";

import "./Navbar.css";

function Navbar({
  cart = [],
  wishlist = [],
  user,
  searchTerm,
  setSearchTerm,
  onLogin,
  onLogout
}) {

  const navigate = useNavigate();

  /* =========================================
      STATES
  ========================================= */

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const [authPopup, setAuthPopup] =
    useState(false);

  /* =========================================
      SCROLL EFFECT
  ========================================= */

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 10) {

        setScrolled(true);

      } else {

        setScrolled(false);

      }

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  /* =========================================
      TOTAL
  ========================================= */

  const total = useMemo(() => {

    return cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );

  }, [cart]);

  const cartCount = cart.length;

  const wishlistCount = wishlist.length;

  /* =========================================
      PROTECTED ROUTE
  ========================================= */

  const handleProtectedRoute = (
    path
  ) => {

    if (!user) {

      setAuthPopup(true);

      return;

    }

    navigate(path);

  };

  return (

    <>
      {/* =========================================
          LOGIN POPUP
      ========================================= */}

      {authPopup && (

        <div className="auth-overlay">

          <div className="auth-popup">

            <div className="auth-icon">

              <Lock size={42} />

            </div>

            <h2>
              Login Required
            </h2>

            <p>

              Cart aur Wishlist access karne
              ke liye pehle login kijiye.

            </p>

            <button
              className="popup-login-btn"
              onClick={() => {

                setAuthPopup(false);

                onLogin();

              }}
            >

              Login Now

            </button>

            <button
              className="popup-close-btn"
              onClick={() =>
                setAuthPopup(false)
              }
            >

              Cancel

            </button>

          </div>

        </div>

      )}

      {/* =========================================
          TOPBAR
      ========================================= */}

      <div className="topbar">

        <div className="topbar-left">

          <Sparkles size={14} />

          <span>
            India's Most Premium Bike Store
          </span>

        </div>

        <div className="topbar-right">

          <ShieldCheck size={15} />

          <span>
            Trusted By 25K+ Riders
          </span>

        </div>

      </div>

      {/* =========================================
          NAVBAR
      ========================================= */}

      <nav
        className={
          scrolled
            ? "navbar navbar-scroll"
            : "navbar"
        }
      >

        <div className="nav-glow"></div>

        <div className="nav-container">

          {/* =========================================
              LOGO
          ========================================= */}

          <Link
            to="/"
            className="logo"
          >

            <div className="logo-circle">

              <Bike size={28} />

            </div>

            <div className="logo-text">

              <h2>
                ShivShakti
              </h2>

              <span>
                Ride Beyond Limits
              </span>

            </div>

          </Link>

          {/* =========================================
              NAV LINKS
          ========================================= */}

          <div className="nav-links">

            <Link to="/">
              Home
            </Link>

            <div className="dropdown">

              <button className="dropdown-btn">

                Products

                <ChevronDown size={16} />

              </button>

              <div className="dropdown-menu">

                <div className="dropdown-title">

                  Explore Collection

                </div>

                <div className="dropdown-grid">

                  <Link to="/products?category=premium">
                    🚴 Premium Bikes
                  </Link>

                  <Link to="/products?category=electric">
                    ⚡ Electric Bikes
                  </Link>

                  <Link to="/products?category=racing">
                    🏁 Racing Bikes
                  </Link>

                  <Link to="/products?category=mountain">
                    🚵 Mountain Bikes
                  </Link>

                  <Link to="/products?category=scooters">
                    🛴 Scooters
                  </Link>

                  <Link to="/products?category=gear">
                    👕 Riding Gear
                  </Link>

                </div>

              </div>

            </div>

            <Link to="/about">
              About
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>

          {/* =========================================
              RIGHT SIDE
          ========================================= */}

          <div className="nav-right">

            {/* SEARCH */}

            <div className="search-box">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search dream bike..."
                value={searchTerm || ""}
                onChange={(e) =>
                  setSearchTerm(
                    e.target.value
                  )
                }
              />

            </div>

            {/* ICONS */}

            <div className="desktop-icons">

              <button className="icon-btn">

                <Bell size={20} />

              </button>

              {/* WISHLIST */}

              <button
                className="icon-btn"
                onClick={() =>
                  handleProtectedRoute(
                    "/wishlist"
                  )
                }
              >

                <Heart size={20} />

                {wishlistCount > 0 && (

                  <span className="badge">

                    {wishlistCount}

                  </span>

                )}

              </button>

              {/* CART */}

              <button
                className="icon-btn cart-btn"
                onClick={() =>
                  handleProtectedRoute(
                    "/cart"
                  )
                }
              >

                <ShoppingCart size={20} />

                {cartCount > 0 && (

                  <span className="badge">

                    {cartCount}

                  </span>

                )}

              </button>

            </div>

            {/* TOTAL */}

            {total > 0 && (

              <div className="cart-total">

                ₹{total.toLocaleString()}

              </div>

            )}

            {/* =========================================
                USER PROFILE
            ========================================= */}

            {user ? (

              <div
                className="profile-wrapper"
                onMouseEnter={() =>
                  setProfileOpen(true)
                }
                onMouseLeave={() =>
                  setProfileOpen(false)
                }
              >

                <button className="profile-btn">

                  <div className="profile-avatar">

                    {user.name?.charAt(0)}

                  </div>

                  <div className="profile-info">

                    <span>
                      Welcome Back
                    </span>

                    <h4>
                      {user.name}
                    </h4>

                  </div>

                  <ChevronDown size={16} />

                </button>

                {profileOpen && (

                  <div className="profile-dropdown">

                    <div className="profile-top">

                      <div className="big-avatar">

                        {user.name?.charAt(0)}

                      </div>

                      <div>

                        <h3>
                          {user.name}
                        </h3>

                        <p>
                          {user.email}
                        </p>

                      </div>

                    </div>

                    <Link to="/profile">

                      <User size={18} />

                      My Profile

                    </Link>

                    <Link to="/orders">

                      <Package size={18} />

                      My Orders

                    </Link>

                    <button
                      className="logout-btn"
                      onClick={onLogout}
                    >

                      <LogOut size={18} />

                      Logout

                    </button>

                  </div>

                )}

              </div>

            ) : (

              <button
                className="login-btn"
                onClick={onLogin}
              >

                Login

              </button>

            )}

            {/* MOBILE MENU BUTTON */}

            <button
              className="mobile-btn"
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
            >

              {mobileOpen
                ? <X size={30} />
                : <Menu size={30} />}

            </button>

          </div>

        </div>

        {/* =========================================
            MOBILE MENU
        ========================================= */}

        {mobileOpen && (

          <div className="mobile-menu">

            <div className="mobile-search">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search bikes..."
                value={searchTerm || ""}
                onChange={(e) =>
                  setSearchTerm(
                    e.target.value
                  )
                }
              />

            </div>

            <Link to="/">
              Home
            </Link>

            <Link to="/products">
              Products
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/contact">
              Contact
            </Link>

            <button
              className="mobile-link-btn"
              onClick={() =>
                handleProtectedRoute(
                  "/wishlist"
                )
              }
            >

              Wishlist ({wishlistCount})

            </button>

            <button
              className="mobile-link-btn"
              onClick={() =>
                handleProtectedRoute(
                  "/cart"
                )
              }
            >

              Cart ({cartCount})

            </button>

            {user ? (

              <>
                <Link to="/profile">
                  Profile
                </Link>

                <Link to="/orders">
                  Orders
                </Link>

                <button
                  className="mobile-logout"
                  onClick={onLogout}
                >

                  Logout

                </button>
              </>

            ) : (

              <button
                className="mobile-login"
                onClick={onLogin}
              >

                Login

              </button>

            )}

          </div>

        )}

      </nav>
    </>
  );
}

export default Navbar;