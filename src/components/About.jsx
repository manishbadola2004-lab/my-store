import {
  Bike,
  ShieldCheck,
  Truck,
  Award,
  Users,
  Star
} from "lucide-react";

function About() {

  const features = [

    {
      icon: <Bike size={35} />,
      title: "Premium Bicycles",
      desc: "High-quality mountain, road, and hybrid bikes."
    },

    {
      icon: <ShieldCheck size={35} />,
      title: "Trusted Quality",
      desc: "Every bicycle is tested for safety and durability."
    },

    {
      icon: <Truck size={35} />,
      title: "Fast Delivery",
      desc: "Quick shipping across India with secure packaging."
    },

    {
      icon: <Award size={35} />,
      title: "Best Prices",
      desc: "Affordable prices with premium quality service."
    }

  ];

  return (

    <section className="about-page">

      {/* HERO */}

      <div className="about-hero">

        <div className="container">

          <h1>
            About ShivShakti Bicycle Shop
          </h1>

          <p>
            We provide premium bicycles for
            every rider — from beginners to
            professionals. Our mission is to
            make cycling stylish, affordable,
            and enjoyable for everyone.
          </p>

        </div>

      </div>

      {/* FEATURES */}

      <div className="about-features container">

        {features.map((item, index) => (

          <div
            className="about-card"
            key={index}
          >

            <div className="about-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

      {/* STORY */}

      <div className="about-story container">

        <div className="about-story-content">

          <h2>Our Journey 🚴‍♂️</h2>

          <p>
            ShivShakti Bicycle Shop started
            with a simple dream —
            providing high-quality bicycles
            at affordable prices.
          </p>

          <p>
            Today, we proudly serve hundreds
            of happy riders across India with
            trusted products and excellent
            customer support.
          </p>

        </div>

        <div className="about-story-image">

          <img
            src="https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=800"
            alt="Bike Shop"
          />

        </div>

      </div>

      {/* STATS */}

      <div className="about-stats">

        <div className="container stats-grid">

          <div className="stat-box">
            <Users size={40} />
            <h2>10K+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="stat-box">
            <Bike size={40} />
            <h2>500+</h2>
            <p>Bikes Sold</p>
          </div>

          <div className="stat-box">
            <Star size={40} />
            <h2>4.9</h2>
            <p>Customer Rating</p>
          </div>

        </div>

      </div>

      {/* CTA */}

      <div className="about-cta">

        <div className="container">

          <h2>
            Ready For Your Next Ride?
          </h2>

          <p>
            Explore our premium bicycle
            collection today.
          </p>

          <a
            href="/products"
            className="btn-primary"
          >
            Explore Bikes
          </a>

        </div>

      </div>

    </section>

  );
}

export default About;