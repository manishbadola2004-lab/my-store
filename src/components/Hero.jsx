import { Link, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade
} from "swiper/modules";

import {
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";

import {
  Sparkles,
  ArrowRight,
  Star,
  ShieldCheck,
  Truck,
  Zap
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./Hero.css";

function Hero() {

  const navigate = useNavigate();

  /* =========================================
      MAIN HERO PRODUCTS
  ========================================= */

  const heroSlides = [

    {
      id: 1,

      image:
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=1800",

      title:
        "Premium Kids Bicycle",

      desc:
        "Safe, stylish and comfortable bicycles specially designed for kids with premium quality build.",

      tag:
        "🔥 MEGA SALE",

      price:
        "₹4,999",

      rating:
        "4.9",

      users:
        "12k+ Happy Customers"
    },

    {
      id: 2,

      image:
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=1800",

      title:
        "Adventure Sports Bike",

      desc:
        "Powerful sports bikes crafted for adventure lovers with smooth riding experience.",

      tag:
        "⚡ TRENDING",

      price:
        "₹7,999",

      rating:
        "4.8",

      users:
        "9k+ Orders Delivered"
    },

    {
      id: 3,

      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1800",

      title:
        "Smart Electric Cycle",

      desc:
        "Modern electric bicycles with advanced comfort, battery backup and stylish design.",

      tag:
        "🚴 NEW ARRIVAL",

      price:
        "₹9,999",

      rating:
        "5.0",

      users:
        "Best Seller 2026"
    }

  ];

  /* =========================================
      SIDE PRODUCTS
  ========================================= */

  const sideSlides = [

    {
      id: 4,

      image:
        "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=900",

      title:
        "Sports Bike",

      offer:
        "70% OFF"
    },

    {
      id: 5,

      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=900",

      title:
        "Kids Collection",

      offer:
        "BUY 1 GET 1"
    },

    {
      id: 6,

      image:
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=900",

      title:
        "Adventure Bike",

      offer:
        "LIMITED OFFER"
    }

  ];

  return (

    <section className="hero-section">

      {/* =========================================
          LEFT SIDE SLIDER
      ========================================= */}

      <div className="side-slider left-slider">

        <Swiper
          modules={[Autoplay]}
          direction="vertical"
          autoplay={{
            delay: 2400,
            disableOnInteraction: false
          }}
          speed={1000}
          loop={true}
        >

          {sideSlides.map((item) => (

            <SwiperSlide key={item.id}>

              <div
                className="poster-card"
                onClick={() =>
                  navigate(`/products/${item.id}`)
                }
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="poster-overlay">

                  <span>

                    <Sparkles size={14} />

                    SPECIAL DEAL

                  </span>

                  <h2>

                    {item.offer}

                  </h2>

                  <p>

                    {item.title}

                  </p>

                  <button>

                    Shop Now

                  </button>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

      {/* =========================================
          MAIN HERO SLIDER
      ========================================= */}

      <div className="hero-slider">

        <Swiper
          modules={[
            Autoplay,
            Pagination,
            Navigation,
            EffectFade
          ]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn"
          }}
          effect="fade"
          speed={1200}
          loop={true}
        >

          {heroSlides.map((slide) => (

            <SwiperSlide key={slide.id}>

              <div
                className="main-slide"
                onClick={() =>
                  navigate(`/products/${slide.id}`)
                }
              >

                {/* IMAGE */}

                <img
                  src={slide.image}
                  alt={slide.title}
                />

                {/* OVERLAY */}

                <div className="dark-overlay"></div>

                {/* HERO CONTENT */}

                <div className="hero-content">

                  {/* TAG */}

                  <span className="hero-tag">

                    <Sparkles size={15} />

                    {slide.tag}

                  </span>

                  {/* TITLE */}

                  <h1>

                    {slide.title}

                  </h1>

                  {/* DESC */}

                  <p>

                    {slide.desc}

                  </p>

                  {/* PRICE */}

                  <h3>

                    Starting From {slide.price}

                  </h3>

                  {/* STATS */}

                  <div className="hero-stats">

                    <div className="hero-stat-box">

                      <Star size={16} />

                      <span>

                        {slide.rating} Rating

                      </span>

                    </div>

                    <div className="hero-stat-box">

                      <ShieldCheck size={16} />

                      <span>

                        Premium Quality

                      </span>

                    </div>

                    <div className="hero-stat-box">

                      <Truck size={16} />

                      <span>

                        Free Delivery

                      </span>

                    </div>

                  </div>

                  {/* BUTTONS */}

                  <div className="hero-buttons">

                    <Link
                      to={`/products/${slide.id}`}
                      className="btn primary-btn"
                    >

                      Buy Now

                      <ArrowRight size={18} />

                    </Link>

                    <Link
                      to={`/products/${slide.id}`}
                      className="btn secondary-btn"
                    >

                      View Details

                    </Link>

                  </div>

                  {/* BOTTOM INFO */}

                  <div className="hero-bottom-info">

                    <Zap size={16} />

                    <span>

                      {slide.users}

                    </span>

                  </div>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

        {/* =========================================
            NAVIGATION BUTTONS
        ========================================= */}

        <button className="nav-btn prev-btn">

          <FaArrowLeft />

        </button>

        <button className="nav-btn next-btn">

          <FaArrowRight />

        </button>

      </div>

      {/* =========================================
          RIGHT SIDE SLIDER
      ========================================= */}

      <div className="side-slider right-slider">

        <Swiper
          modules={[Autoplay]}
          direction="vertical"
          autoplay={{
            delay: 2400,
            disableOnInteraction: false
          }}
          speed={1000}
          loop={true}
        >

          {sideSlides.map((item) => (

            <SwiperSlide key={item.id}>

              <div
                className="poster-card"
                onClick={() =>
                  navigate(`/products/${item.id}`)
                }
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="poster-overlay">

                  <span>

                    ⚡ HOT OFFER

                  </span>

                  <h2>

                    {item.offer}

                  </h2>

                  <p>

                    {item.title}

                  </p>

                  <button>

                    Explore

                  </button>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default Hero;