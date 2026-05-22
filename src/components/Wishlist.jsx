import { Link, useNavigate } from "react-router-dom";

import {
  Heart,
  ShoppingCart,
  Trash2,
  Star,
  ShieldCheck,
  Truck,
  Sparkles,
  Eye,
  BadgeCheck,
  Clock3
} from "lucide-react";

import "./Wishlist.css";

function Wishlist({
  wishlist,
  addToCart,
  removeFromWishlist
}) {

  const navigate = useNavigate();

  /* EMPTY WISHLIST */

  if (wishlist.length === 0) {

    return (

      <section className="wishlist-page">

        <div className="empty-wishlist">

          <div className="empty-circle">
            ❤️
          </div>

          <h1>
            Your Wishlist is Empty
          </h1>

          <p>
            Save your favorite bikes here.
          </p>

          <Link
            to="/products"
            className="browse-btn"
          >
            Browse Bikes
          </Link>

        </div>

      </section>
    );
  }

  return (

    <section className="wishlist-page">

      {/* HEADER */}

      <div className="wishlist-topbar">

        <div>

          <span className="top-small">
            PREMIUM COLLECTION
          </span>

          <h1>
            Your Wishlist
          </h1>

          <p>
            Luxury bikes saved for your next ride.
          </p>

        </div>

        <div className="wishlist-counter">

          <Heart size={18} />

          {wishlist.length} Saved

        </div>

      </div>

      {/* GRID */}

      <div className="wishlist-grid">

        {wishlist.map((product) => (

          <div
            className="wishlist-card"
            key={product.id}
          >

            {/* IMAGE */}

            <div
              className="wishlist-image"
              onClick={() =>
                navigate(`/products/${product.id}`)
              }
            >

              <img
                src={product.image || product.img}
                alt={product.name}
              />

              <div className="glass-badge">

                <Sparkles size={14} />

                Premium Choice

              </div>

              <button
                className="floating-remove"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromWishlist(product.id);
                }}
              >

                <Trash2 size={18} />

              </button>

            </div>

            {/* CONTENT */}

            <div className="wishlist-content">

              <div className="brand-row">

                <span>
                  Premium Bike
                </span>

                <div className="rating-box">

                  <Star
                    size={14}
                    fill="gold"
                  />

                  4.9

                </div>

              </div>

              {/* TITLE */}

              <h2>
                {product.name}
              </h2>

              {/* DESCRIPTION */}

              <p className="product-desc">

                Powerful premium bicycle with
                smooth riding experience,
                lightweight body and modern design.

              </p>

              {/* FEATURES */}

              <div className="feature-grid">

                <div className="feature-item">

                  <Truck size={16} />

                  Free Delivery

                </div>

                <div className="feature-item">

                  <ShieldCheck size={16} />

                  Warranty

                </div>

                <div className="feature-item">

                  <BadgeCheck size={16} />

                  Top Quality

                </div>

                <div className="feature-item">

                  <Clock3 size={16} />

                  Fast Shipping

                </div>

              </div>

              {/* PRICE */}

              <div className="price-section">

                <div>

                  <h3>
                    ₹{product.price.toLocaleString()}
                  </h3>

                  <span>

                    ₹{(
                      product.price + 5000
                    ).toLocaleString()}

                  </span>

                </div>

                <div className="discount-tag">

                  20% OFF

                </div>

              </div>

              {/* BUTTONS */}

              <div className="wishlist-actions">

                <button
                  className="cart-btn"
                  onClick={() =>
                    addToCart(product)
                  }
                >

                  <ShoppingCart size={18} />

                  Add To Cart

                </button>

                <button
                  className="view-btn"
                  onClick={() =>
                    navigate(`/products/${product.id}`)
                  }
                >

                  <Eye size={18} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Wishlist;