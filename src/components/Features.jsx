import "./Features.css";

function Features() {

  const features = [

    {
      icon: "🚚",
      title: "Free Shipping",
      desc: "Free delivery on all orders above ₹5000",
      color: "blue"
    },

    {
      icon: "🛡️",
      title: "1 Year Warranty",
      desc: "100% genuine products with warranty",
      color: "green"
    },

    {
      icon: "💰",
      title: "Easy Returns",
      desc: "Hassle-free 30 days return policy",
      color: "orange"
    },

    {
      icon: "💳",
      title: "No Cost EMI",
      desc: "Easy monthly installments available",
      color: "purple"
    }

  ];

  return (

    <section className="features-section">

      <div className="features-container">

        <div className="features-top">

          <span>
            WHY CHOOSE US
          </span>

          <h2>
            Every Buddies Shopping Experience
          </h2>

          <p>
            We provide the best quality
            bicycles with modern features
            and trusted service.
          </p>

        </div>

        <div className="features-grid">

          {features.map((item, index) => (

            <div
              className={`feature-card ${item.color}`}
              key={index}
            >

              <div className="feature-icon">

                {item.icon}

              </div>

              <h3>

                {item.title}

              </h3>

              <p>

                {item.desc}

              </p>

              <div className="feature-glow"></div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;