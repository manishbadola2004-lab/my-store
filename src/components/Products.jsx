import { useState } from "react";
import { Link } from "react-router-dom";
function Products({
 
  products,
  addToCart,
  addToWishlist,
  cart,
  searchTerm
})


 {

  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  // FILTER

  let filteredProducts = [...products];

  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === category
    );
  }

if (searchTerm) {

  filteredProducts = filteredProducts.filter(
    (p) =>
      p.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        )
  );

}
  // SORT

  if (sort === "low") {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  if (sort === "rating") {
    filteredProducts.sort(
      (a, b) => b.rating - a.rating
    );
  }

  return (

    <section className="products-container">

      <div className="container">

        <h2 className="section-title">
          Our Premium Bicycles
        </h2>

        {/* FILTERS */}

        <div className="filters">

<select>

  {/* CATEGORY */}

  <option value="All">
    All Categories
  </option>

  <option value="Mountain">
    Mountain Bikes
  </option>

  <option value="Road">
    Road Bikes
  </option>

  <option value="Electric">
    Electric Bikes
  </option>

  <option value="Kids">
    Kids Bikes
  </option>

  <option value="Hybrid">
    Hybrid Bikes
  </option>

  <option value="BMX">
    BMX Bikes
  </option>

  {/* PRICE */}

  <option value="Under10000">
    Under ₹10,000
  </option>

  <option value="10000-20000">
    ₹10,000 - ₹20,000
  </option>

  <option value="20000-50000">
    ₹20,000 - ₹50,000
  </option>

  <option value="Above50000">
    Above ₹50,000
  </option>

  {/* BRAND */}

  <option value="Hero">
    Hero
  </option>

  <option value="Firefox">
    Firefox
  </option>

  <option value="Montra">
    Montra
  </option>

  <option value="Btwin">
    Btwin
  </option>

  <option value="Trek">
    Trek
  </option>

  {/* BRAKES */}

  <option value="Disc">
    Disc Brake
  </option>

  <option value="Hydraulic">
    Hydraulic Brake
  </option>

  <option value="Rim">
    Rim Brake
  </option>

  {/* GEAR */}

  <option value="Gear">
    Geared
  </option>

  <option value="NonGear">
    Non-Geared
  </option>

  {/* WHEEL SIZE */}

  <option value="24T">
    24T Wheel
  </option>

  <option value="26T">
    26T Wheel
  </option>

  <option value="27T">
    27.5T Wheel
  </option>

  <option value="29T">
    29T Wheel
  </option>

</select>

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >

            <option value="">
              Sort By
            </option>

            <option value="low">
              Price Low to High
            </option>

            <option value="high">
              Price High to Low
            </option>

            <option value="rating">
              Top Rated
            </option>

          </select>

        </div>

        {/* PRODUCTS */}

        <div className="products-grid">

          {filteredProducts.map((product) => {

            const inCart = cart?.find(
              (item) => item.id === product.id
            );

            return (

              <div
                className="product-card"
                key={product.id}
              >

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </div>

                <div className="product-info">

                  <h3 className="product-title">
                    {product.name}
                  </h3>

                  <div className="rating">
                    ⭐ {product.rating}
                  </div>

                  <div className="price-box">

                    <span className="product-price">
                      ₹{product.price.toLocaleString()}
                    </span>

                  </div>
<div className="product-buttons">

  <button
    className={`btn ${
      inCart
        ? "btn-dark"
        : "btn-primary"
    }`}
    onClick={() =>
      addToCart(product)
    }
  >

    {inCart
      ? "Added ✓"
      : "Add To Cart"}

  </button>

  {/* VIEW DETAILS BUTTON */}

  <Link
    to={`/products/${product.id}`}
    className="btn btn-dark"
  >
    View Details
  </Link>

  <button
    className="wishlist-btn"
    onClick={() =>
      addToWishlist(product)
    }
  >
    ❤️
  </button>

           </div>
                  </div>

                </div>

            

            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Products;