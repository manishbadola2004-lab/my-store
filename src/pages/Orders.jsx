import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  ShoppingBag,
  Star
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Orders.css";

function Orders() {

  /* GET ORDERS */

  const savedOrders =
    JSON.parse(
      localStorage.getItem("orders")
    ) || [];

  /* FIX ORDER FORMAT */

  const orders = Array.isArray(savedOrders)
    ? savedOrders
    : [savedOrders];

  /* TOTAL SPENT */

  const totalSpent =
    orders.reduce((sum, order) => {

      return sum + Number(order.total || 0);

    }, 0);

  return (

    <section className="orders-page">

      {/* HERO */}

      <div className="orders-hero">

        <div className="orders-overlay">

          <div className="orders-hero-content">

            <span className="orders-badge">

              🚴 Premium Bicycle Orders

            </span>

            <h1>
              My Orders
            </h1>

            <p>
              Track all your purchases,
              delivery status and premium
              bicycle history here.
            </p>

          </div>

        </div>

      </div>

      <div className="orders-container">

        {/* STATS */}

        <div className="orders-stats">

          <div className="stats-card">

            <div className="stats-icon orange">

              <ShoppingBag size={24} />

            </div>

            <div>

              <h2>
                {orders.length}
              </h2>

              <p>
                Total Orders
              </p>

            </div>

          </div>

          <div className="stats-card">

            <div className="stats-icon green">

              <CheckCircle size={24} />

            </div>

            <div>

              <h2>
                Delivered
              </h2>

              <p>
                Successful Orders
              </p>

            </div>

          </div>

          <div className="stats-card">

            <div className="stats-icon blue">

              <Package size={24} />

            </div>

            <div>

              <h2>
                ₹{totalSpent.toLocaleString()}
              </h2>

              <p>
                Total Spent
              </p>

            </div>

          </div>

        </div>

        {/* EMPTY */}

        {
          orders.length === 0 ?

          <div className="empty-orders">

            <div className="empty-icon">

              <Package size={70} />

            </div>

            <h2>
              No Orders Found
            </h2>

            <p>
              Your purchased bicycles
              will appear here.
            </p>

            <Link
              to="/products"
              className="shop-btn"
            >

              Explore Products

            </Link>

          </div>

          :

          <div className="orders-grid">

            {
              orders.map((order,index)=>(

                <div
                  className="order-card"
                  key={index}
                >

                  {/* PRODUCTS */}

                  {
                    order.items?.map((item)=> (

                      <div
                        className="order-product"
                        key={item.id}
                      >

                        {/* IMAGE */}

                        <div className="order-image-box">

                          <img
                            src={
                              item.image || item.img
                            }
                            alt={item.name}
                          />

                          <span className="delivery-badge">

                            Delivered

                          </span>

                        </div>

                        {/* INFO */}

                        <div className="order-info">

                          <div className="order-top">

                            <span className="order-id">

                              Order #{
                                1000 + index
                              }

                            </span>

                            <div className="order-rating">

                              <Star
                                size={14}
                                fill="gold"
                              />

                              <span>
                                4.9
                              </span>

                            </div>

                          </div>

                          <h3>
                            {item.name}
                          </h3>

                          <p className="order-price">

                            ₹
                            {(
                              item.price *
                              item.quantity
                            ).toLocaleString()}

                          </p>

                          <div className="order-status-row">

                            <div className="status delivered">

                              <CheckCircle size={15} />

                              Delivered

                            </div>

                            <div className="status shipping">

                              <Truck size={15} />

                              Fast Delivery

                            </div>

                          </div>

                          <div className="order-date">

                            <Clock size={15} />

                            {
                              order.orderDate
                            }

                          </div>

                          <div className="order-buttons">

                            <Link
                              to={`/products/${item.id}`}
                              className="view-btn"
                            >

                              View Product

                            </Link>

                            <button
                              className="buy-btn"
                            >

                              Buy Again

                            </button>

                          </div>

                        </div>

                      </div>

                    ))
                  }

                </div>

              ))
            }

          </div>
        }

      </div>

    </section>
  );
}

export default Orders;