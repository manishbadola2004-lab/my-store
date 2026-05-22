import { Link, useNavigate } from "react-router-dom";

import {
  Heart,
  ShoppingCart,
  Trash2,
  Star,
  Eye,
  BadgeCheck,
  Truck,
  ShieldCheck
} from "lucide-react";

import "./Wishlist.css";

function Wishlist({
  wishlist,
  addToCart,
  removeFromWishlist
}) {

  const navigate = useNavigate();

  /* EMPTY */

  if (wishlist.length === 0) {

    return (

      <section className="wishlist-page">

        <div className="empty-box">

          <div className="empty-heart">
            ❤️
          </div>

          <h1>
            Your Wishlist is Empty
          </h1>

          <p>
            Save your favorite bicycles here.
          </p>

          <Link
            to="/products"
            className="shop-btn"
          >
            Explore Products
          </Link>

        </div>

      </section>
    );
  }

  return (

    <section className="wishlist-page">

      {/* HEADER */}

      <div className="wishlist-header">

        <div>

          <span className="wishlist-tag">
            PREMIUM COLLECTION
          </span>

          <h1>
            My Wishlist
          </h1>

          <p>
            Your saved premium bicycles.
          </p>

        </div>

        <div className="wishlist-count">

          <Heart size={18} />

          {wishlist.length} Items

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

              <button
                className="remove-btn"
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

              {/* CATEGORY */}

              <div className="product-top">

                <span className="product-category">
                  Premium Bike
                </span>

                <div className="rating">

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

              <p className="desc">

                Lightweight premium bicycle with
                stylish design, smooth riding
                experience and high durability.

              </p>

              {/* FEATURES */}

              <div className="features">

                <div className="feature">

                  <Truck size={15} />

                  Free Delivery

                </div>

                <div className="feature">

                  <ShieldCheck size={15} />

                  Warranty

                </div>

                <div className="feature">

                  <BadgeCheck size={15} />

                  Top Quality

                </div>

              </div>

              {/* PRICE */}

              <div className="price-box">

                <div>

                  <h3>
                    ₹{product.price.toLocaleString()}
                  </h3>

                  <span>

                    ₹{(
                      product.price + 4000
                    ).toLocaleString()}

                  </span>

                </div>

                <div className="discount">

                  20% OFF

                </div>

              </div>

              {/* BUTTONS */}

              <div className="wishlist-buttons">

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