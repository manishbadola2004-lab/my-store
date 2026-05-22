import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  useState,
  useEffect
} from "react";

import {
  FaHeart,
  FaShoppingCart,
  FaBolt,
  FaStar,
  FaCheckCircle
} from "react-icons/fa";

import "./ProductDetails.css";

function ProductDetails({
  products,
  addToCart,
  addToWishlist,
  setMessage
}) {

  const { id } = useParams();

  const navigate = useNavigate();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {

    return (

      <div className="not-found-page">

        <h2>
          Product Not Found 😢
        </h2>

      </div>

    );

  }

  /* =========================================
      4 PRODUCT IMAGES
  ========================================= */

  const gallery = [

    product.image,

    "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=1400",

    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1400",

    "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1400"

  ];

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [mainImage, setMainImage] =
    useState(gallery[0]);

  /* =========================================
      AUTO IMAGE CHANGE
  ========================================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveIndex((prev) => {

        const next =
          prev === gallery.length - 1
            ? 0
            : prev + 1;

        setMainImage(gallery[next]);

        return next;

      });

    }, 2500);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="details-page">

      <div className="details-container">

        <div className="details-grid">

          {/* =========================================
              LEFT SIDE
          ========================================= */}

          <div className="details-left">

            {/* BADGE */}

            <div className="trending-badge">

              🔥 Trending Product

            </div>

            {/* MAIN IMAGE */}

            <div className="details-image-box">

              {product.discount && (

                <span className="discount-badge">

                  -{product.discount}% OFF

                </span>

              )}

              <img
                key={mainImage}
                src={mainImage}
                alt={product.name}
                className="details-image fade-animation"
              />

            </div>

            {/* THUMBNAILS */}

            <div className="image-gallery">

              {gallery.map((img, index) => (

                <div
                  key={index}
                  className={
                    activeIndex === index
                      ? "gallery-item active-gallery"
                      : "gallery-item"
                  }
                  onClick={() => {

                    setMainImage(img);

                    setActiveIndex(index);

                  }}
                >

                  <img
                    src={img}
                    alt=""
                  />

                </div>

              ))}

            </div>

            {/* EXTRA BENEFITS */}

            <div className="benefits-box">

              <div className="benefit-card">

                🚚 Free Delivery

              </div>

              <div className="benefit-card">

                🔒 Secure Payment

              </div>

              <div className="benefit-card">

                💳 COD Available

              </div>

              <div className="benefit-card">

                ↩ Easy Return

              </div>

            </div>

          </div>

          {/* =========================================
              RIGHT SIDE
          ========================================= */}

          <div className="details-content">

            <span className="details-category">

              {product.category}

            </span>

            <h1 className="details-title">

              {product.name}

            </h1>

            {/* RATING */}

            <div className="details-rating">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              <span>

                {product.rating} Rating
                ({product.reviews}+ Reviews)

              </span>

            </div>

            {/* PRICE */}

            <div className="details-price">

              <div className="new-price">

                ₹
                {product.price.toLocaleString()}

              </div>

              <div className="old-price">

                ₹
                {product.originalPrice.toLocaleString()}

              </div>

            </div>

            {/* SAVE */}

            <div className="save-price">

              🎉 You Save ₹
              {(
                product.originalPrice -
                product.price
              ).toLocaleString()}

            </div>

            {/* STOCK */}

            <div className="stock-status">

              <FaCheckCircle />

              {product.inStock
                ? " In Stock"
                : " Out Of Stock"}

            </div>

            {/* DESCRIPTION */}

            <p className="details-description">

              Premium bicycle with sporty
              design, smooth riding,
              durable alloy frame and
              high-performance comfort.
              Perfect for kids adventure,
              outdoor fun and daily rides.

            </p>

            {/* FEATURES */}

            <div className="details-features">

              <h3>

                Product Highlights

              </h3>

              <ul>

                <li>
                  ✔ Lightweight Alloy Body
                </li>

                <li>
                  ✔ Premium Disc Brakes
                </li>

                <li>
                  ✔ Smooth Suspension
                </li>

                <li>
                  ✔ Comfortable Long Ride
                </li>

                <li>
                  ✔ Sports Premium Design
                </li>

              </ul>

            </div>

            {/* SPECIAL OFFER */}

            <div className="special-offer">

              🎁 Extra 10% OFF On Online Payment

            </div>

            {/* BUTTONS */}

            <div className="details-buttons">

              {/* CART */}

              <button
                className="cart-btn-big"
                onClick={() => {

                  addToCart({
                    ...product,
                    quantity: 1
                  });

                  if (setMessage) {

                    setMessage(
                      `${product.name} added to cart ✅`
                    );

                    setTimeout(() => {

                      setMessage("");

                    }, 2000);

                  }

                }}
              >

                <FaShoppingCart />

                Add To Cart

              </button>

              {/* BUY */}

              <button
                className="buy-btn-big"
                onClick={() => {

                  addToCart({
                    ...product,
                    quantity: 1
                  });

                  navigate("/checkout");

                }}
              >

                <FaBolt />

                Buy Now

              </button>

              {/* WISHLIST */}

              <button
                className="wishlist-big"
                onClick={() => {

                  addToWishlist(product);

                  if (setMessage) {

                    setMessage(
                      `${product.name} added to wishlist ❤️`
                    );

                    setTimeout(() => {

                      setMessage("");

                    }, 2000);

                  }

                }}
              >

                <FaHeart />

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default ProductDetails;