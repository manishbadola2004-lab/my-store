import { Link, useNavigate } from "react-router-dom";

import {
  Trash2,
  ShoppingBag,
  Plus,
  Minus,
  ShieldCheck,
  Truck,
  BadgeCheck,
  ArrowRight,
  Star
} from "lucide-react";

import "./Cart.css";

function Cart({
  cart,
  total,
  updateQuantity,
  removeFromCart
}) {

  const navigate = useNavigate();

  /* EMPTY CART */

  if (cart.length === 0) {

    return (

      <section className="cart-page">

        <div className="empty-cart">

          <div className="empty-icon">

            <ShoppingBag size={70} />

          </div>

          <h1>
            Your Cart is Empty
          </h1>

          <p>
            Add premium bicycles to start shopping.
          </p>

          <Link
            to="/products"
            className="shop-btn"
          >

            Continue Shopping

          </Link>

        </div>

      </section>

    );
  }

  return (

    <section className="cart-page">

      <div className="cart-container">

        {/* HEADER */}

        <div className="cart-header">

          <div>

            <span className="cart-tag">
              PREMIUM SHOPPING CART
            </span>

            <h1>
              Your Cart
            </h1>

            <p>
              {cart.length} premium products added.
            </p>

          </div>

          <div className="cart-count">

            <ShoppingBag size={18} />

            {cart.length} Items

          </div>

        </div>

        {/* MAIN LAYOUT */}

        <div className="cart-layout">

          {/* LEFT */}

          <div className="cart-items">

            {cart.map((item) => (

              <div
                className="cart-card"
                key={item.id}
              >

                {/* IMAGE */}

                <div
                  className="cart-image-box"
                  onClick={() =>
                    navigate(`/products/${item.id}`)
                  }
                >

                  <img
                    src={item.image || item.img}
                    alt={item.name}
                  />

                </div>

                {/* INFO */}

                <div className="cart-info">

                  <div className="product-top">

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

                  <h2>
                    {item.name}
                  </h2>

                  <p className="product-desc">

                    Lightweight premium bicycle
                    with stylish design and smooth
                    riding experience.

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

                  <div className="price-row">

                    <h3>

                      ₹
                      {item.price.toLocaleString()}

                    </h3>

                    <span>

                      ₹
                      {(
                        item.price + 4000
                      ).toLocaleString()}

                    </span>

                  </div>

                  {/* QUANTITY */}

                  <div className="bottom-row">

                    <div className="quantity-box">

                      <button
                        className="qty-btn"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                      >

                        <Minus size={15} />

                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        className="qty-btn"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                      >

                        <Plus size={15} />

                      </button>

                    </div>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >

                      <Trash2 size={18} />

                    </button>

                  </div>

                </div>

                {/* TOTAL */}

                <div className="item-total">

                  <h2>

                    ₹
                    {(
                      item.price *
                      item.quantity
                    ).toLocaleString()}

                  </h2>

                </div>

              </div>

            ))}

          </div>

          {/* RIGHT */}

          <div className="summary-box">

            <h2>
              Order Summary
            </h2>

            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <span>
                ₹{total.toLocaleString()}
              </span>

            </div>

            <div className="summary-row">

              <span>
                Shipping
              </span>

              <span>
                Free
              </span>

            </div>

            <div className="summary-row">

              <span>
                Tax
              </span>

              <span>
                Included
              </span>

            </div>

            <div className="summary-total">

              <span>
                Total
              </span>

              <h3>
                ₹{total.toLocaleString()}
              </h3>

            </div>

            <Link
              to="/checkout"
              className="checkout-btn"
            >

              Checkout Now

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Cart;