import { Link } from "react-router-dom";
import "./ChildCare.css";


function Hero() {

  const heroSlides = [

    {
      image:
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1400",
      title: "Premium Mountain Bikes",
      desc: "Ride with power and confidence on every trail."
    },

    {
      image:
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=1400",
      title: "Speed Racing Cycles",
      desc: "Built for professionals and speed lovers."
    },

    {
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1400",
      title: "Electric Smart Bikes",
      desc: "Modern technology with ultimate comfort."
    }

  ];

  const leftPosterSlides = [

  "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=900",

  "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=900",

  "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=900"

];

const rightPosterSlides = [

  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900",

  "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900",

  "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=900"

];
  return (

    <section className="hero-section">

      {/* LEFT AUTO SLIDER */}

      <div className="side-slider">

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          loop={true}
        >

          {leftPosterSlides.map((img, index) => (

            <SwiperSlide key={index}>

              <div className="poster-slide">

                <img
                  src={img}
                  alt="bike"
                />

                <div className="poster-overlay">

                  <span>
                    🔥 SUPER SALE
                  </span>

                  <h2>
                    70%
                    <br />
                    OFF
                  </h2>

                  

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

      {/* MAIN CENTER SLIDER */}

      <div className="hero-slider">

        <Swiper
          modules={[
            Autoplay,
            Pagination
          ]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          loop={true}
        >

          {heroSlides.map((slide, index) => (

            <SwiperSlide key={index}>

              <div className="slide">

                <img
                  src={slide.image}
                  alt={slide.title}
                />

                <div className="slide-overlay">

                  <h1>
                    {slide.title}
                  </h1>

                  <p>
                    {slide.desc}
                  </p>

                  <div className="hero-buttons">

                    <Link
                      to="/products"
                      className="btn btn-primary"
                    >
                      Shop Now
                    </Link>

                    <Link
                      to="/about"
                      className="btn btn-dark"
                    >
                      Learn More
                    </Link>

                  </div>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

      {/* RIGHT AUTO SLIDER */}

      <div className="side-slider">

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          loop={true}
        >

          {rightPosterSlides.map((img, index) => (

            <SwiperSlide key={index}>

              <div className="poster-slide">

                <img
                  src={img}
                  alt="bike"
                />

                <div className="poster-overlay">

                  <span>
                    ⚡ NEW ARRIVAL
                  </span>

                  <h2>
                    SMART
                    <br />
                    BIKES
                  </h2>

                  
                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}

function ChildCare({
  addToCart,
  addToWishlist,
  setMessage
}) {

  const products = [

    {
      id: 101,
      category: "Child Care",
      name: "Baby Cycle",
      price: 4500,
      originalPrice: 6000,
      rating: 4.5,
      reviews: 120,
      image:
        "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600",
      inStock: true,
      discount: 25
    },

    {
      id: 102,
      category: "Child Care",
      name: "Baby Stroller",
      price: 3500,
      originalPrice: 5000,
      rating: 4.3,
      reviews: 95,
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600",
      inStock: true,
      discount: 20
    },

    {
      id: 103,
      category: "Child Care",
      name: "Kids Walker",
      price: 2200,
      originalPrice: 3000,
      rating: 4.2,
      reviews: 80,
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600",
      inStock: true,
      discount: 18
    },

    {
      id: 104,
      category: "Child Care",
      name: "Baby Cradle",
      price: 5200,
      originalPrice: 7000,
      rating: 4.6,
      reviews: 150,
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600",
      inStock: true,
      discount: 22
    },

    {
      id: 105,
      category: "Child Care",
      name: "Toy Car",
      price: 900,
      originalPrice: 1200,
      rating: 4.1,
      reviews: 65,
      image:
        "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600",
      inStock: true,
      discount: 15
    },

    {
      id: 106,
      category: "Child Care",
      name: "Remote Control Car",
      price: 1800,
      originalPrice: 2500,
      rating: 4.4,
      reviews: 110,
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
      inStock: true,
      discount: 20
    }

  ];

  return (

    <section className="child-page">

      <div className="child-top">

        <h1 className="child-title">
          Child Care Products
        </h1>

        <p className="child-subtitle">
          Premium baby products, toys,
          cycles and accessories
        </p>

      </div>

      <div className="child-grid">

        {products.map((item) => (

          <div
            className="child-card"
            key={item.id}
          >

            {/* IMAGE */}

            <Link
              to={`/products/${item.id}`}
              className="child-image-box"
            >

              <img
                src={item.image}
                alt={item.name}
                className="child-image"
              />

              <span className="discount-badge">
                -{item.discount}%
              </span>

            </Link>

            {/* INFO */}

            <div className="child-info">

              <span className="child-category">
                {item.category}
              </span>

              <h3 className="child-name">
                {item.name}
              </h3>

              <div className="rating">
                ⭐ {item.rating}

                <span>
                  ({item.reviews} Reviews)
                </span>
              </div>

              <div className="child-price">

                <span className="new-price">
                  ₹{item.price}
                </span>

                <span className="old-price">
                  ₹{item.originalPrice}
                </span>

              </div>

              {/* BUTTONS */}

              <div className="child-buttons">

                {/* ADD TO CART */}

                <button
                  className="cart-btn"
                  onClick={() => {

                    addToCart({
                      ...item,
                      quantity: 1
                    });

                    setMessage(
                      `${item.name} added to cart ✅`
                    );

                    setTimeout(() => {
                      setMessage("");
                    }, 2000);

                  }}
                >
                  Add To Cart
                </button>

                {/* BUY NOW */}

                <button
                  className="buy-btn"
                  onClick={() => {

                    addToCart({
                      ...item,
                      quantity: 1
                    });

                    setMessage(
                      `${item.name} ready for checkout 🚀`
                    );

                    setTimeout(() => {
                      setMessage("");
                    }, 2000);

                    window.location.href =
                      "/checkout";
                  }}
                >
                  Buy Now
                </button>

                {/* WISHLIST */}

                <button
                  className="wish-btn"
                  onClick={() => {

                    addToWishlist(item);

                    setMessage(
                      `${item.name} added to wishlist ❤️`
                    );

                    setTimeout(() => {
                      setMessage("");
                    }, 2000);

                  }}
                >
                  Wishlist
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default ChildCare;