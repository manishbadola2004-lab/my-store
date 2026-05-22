import { useState } from "react";

import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  CreditCard,
  Wallet,
  Smartphone
} from "lucide-react";

import "./Checkout.css";

function Checkout({ cart = [] }) {

  const [payment, setPayment] =
    useState("cod");

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: ""
    });

  /* TOTAL */

  const subtotal = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const shipping = 0;

  const total = subtotal + shipping;

  /* HANDLE CHANGE */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };

  /* PLACE ORDER */

  const handlePlaceOrder = () => {

    if (

      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.pincode

    ) {

      alert(
        "Please fill all details"
      );

      return;

    }

    const orderData = {

      items: cart,

      user: formData,

      paymentMethod: payment,

      total,

      orderDate:
        new Date().toLocaleString()

    };

    localStorage.setItem(
      "orders",
      JSON.stringify(orderData)
    );

    alert(
      "Order Placed Successfully 🎉"
    );

  };

  return (

    <section className="checkout-page">

      <div className="checkout-container">

        {/* HEADER */}

        <div className="checkout-header">

          <span>
            SECURE CHECKOUT
          </span>

          <h1>
            Complete Your Order
          </h1>

          <p>
            Fast delivery • Secure payment • Premium bikes
          </p>

        </div>

        {/* GRID */}

        <div className="checkout-grid">

          {/* LEFT SIDE */}

          <div className="checkout-left">

            {/* BILLING */}

            <div className="checkout-card">

              <h2>
                Billing Details
              </h2>

              <div className="form-grid">

                <div className="checkout-group">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                </div>

                <div className="checkout-group">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                </div>

                <div className="checkout-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                </div>

                <div className="checkout-group">

                  <label>
                    Pincode
                  </label>

                  <input
                    type="text"
                    name="pincode"
                    placeholder="Enter pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                  />

                </div>

                <div className="checkout-group">

                  <label>
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                  />

                </div>

                <div className="checkout-group">

                  <label>
                    State
                  </label>

                  <input
                    type="text"
                    name="state"
                    placeholder="Enter state"
                    value={formData.state}
                    onChange={handleChange}
                  />

                </div>

                <div className="checkout-group full-width">

                  <label>
                    Full Address
                  </label>

                  <textarea
                    name="address"
                    placeholder="Enter delivery address"
                    value={formData.address}
                    onChange={handleChange}
                  />

                </div>

              </div>

            </div>

            {/* PAYMENT */}

            <div className="checkout-card">

              <h2>
                Payment Method
              </h2>

              <div className="payment-methods">

                {/* COD */}

                <label
                  className={
                    payment === "cod"
                    ? "payment-box active-payment"
                    : "payment-box"
                  }
                >

                  <input
                    type="radio"
                    checked={payment === "cod"}
                    onChange={() =>
                      setPayment("cod")
                    }
                  />

                  <div className="payment-info">

                    <Wallet size={24} />

                    <div>

                      <h4>
                        Cash On Delivery
                      </h4>

                      <p>
                        Pay after delivery
                      </p>

                    </div>

                  </div>

                </label>

                {/* UPI */}

                <label
                  className={
                    payment === "upi"
                    ? "payment-box active-payment"
                    : "payment-box"
                  }
                >

                  <input
                    type="radio"
                    checked={payment === "upi"}
                    onChange={() =>
                      setPayment("upi")
                    }
                  />

                  <div className="payment-info">

                    <Smartphone size={24} />

                    <div>

                      <h4>
                        UPI Payment
                      </h4>

                      <p>
                        Google Pay / PhonePe / Paytm
                      </p>

                    </div>

                  </div>

                </label>

                {/* CARD */}

                <label
                  className={
                    payment === "card"
                    ? "payment-box active-payment"
                    : "payment-box"
                  }
                >

                  <input
                    type="radio"
                    checked={payment === "card"}
                    onChange={() =>
                      setPayment("card")
                    }
                  />

                  <div className="payment-info">

                    <CreditCard size={24} />

                    <div>

                      <h4>
                        Credit / Debit Card
                      </h4>

                      <p>
                        Visa • Mastercard • Rupay
                      </p>

                    </div>

                  </div>

                </label>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="checkout-summary">

            <h2>
              Order Summary
            </h2>

            {/* PRODUCTS */}

            <div className="summary-products">

              {
                cart.length === 0 ?

                <p>
                  Cart is empty
                </p>

                :

                cart.map((item) => (

                  <div
                    className="checkout-item"
                    key={item.id}
                  >

                    <div className="checkout-image">

                      <img
                        src={
                          item.image || item.img
                        }
                        alt={item.name}
                      />

                    </div>

                    <div className="checkout-info">

                      <h4>
                        {item.name}
                      </h4>

                      <p>
                        Qty :
                        {item.quantity}
                      </p>

                    </div>

                    <div className="checkout-price">

                      ₹
                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString()}

                    </div>

                  </div>

                ))
              }

            </div>

            {/* TOTAL */}

            <div className="checkout-total">

              <div className="checkout-row">

                <span>
                  Subtotal
                </span>

                <span>
                  ₹{subtotal.toLocaleString()}
                </span>

              </div>

              <div className="checkout-row">

                <span>
                  Shipping
                </span>

                <span>
                  Free
                </span>

              </div>

              <div className="checkout-final">

                <span>
                  Total
                </span>

                <span>
                  ₹{total.toLocaleString()}
                </span>

              </div>

            </div>

            {/* FEATURES */}

            <div className="checkout-features">

              <div>

                <ShieldCheck size={18} />

                Secure Payment

              </div>

              <div>

                <Truck size={18} />

                Free Delivery

              </div>

              <div>

                <BadgeCheck size={18} />

                Warranty Included

              </div>

            </div>

            {/* BUTTON */}

            <button
              className="place-order-btn"
              onClick={handlePlaceOrder}
            >

              Place Order

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Checkout;