import { useState, useMemo } from "react";

import { Link } from "react-router-dom";

import {
  SlidersHorizontal,
  Star,
  Heart,
  ShoppingCart,
  Eye
} from "lucide-react";

import "./Products.css";

function Products({

  products = [],
  addToCart,
  addToWishlist,
  cart = [],
  searchTerm

}) {

  /* =========================================
      STATES
  ========================================= */

  const [category, setCategory] =
    useState("All");

  const [sort, setSort] =
    useState("");

  const [budget, setBudget] =
    useState("");

  const [brand, setBrand] =
    useState("");

  const [brake, setBrake] =
    useState("");

  /* =========================================
      FILTER PRODUCTS
  ========================================= */

  const filteredProducts =
    useMemo(() => {

      let filtered = [...products];

      /* CATEGORY */

      if (category !== "All") {

        filtered = filtered.filter(

          (p) =>
            p.category === category

        );

      }

      /* SEARCH */

      if (searchTerm) {

        filtered = filtered.filter(

          (p) =>

            p.name
              .toLowerCase()
              .includes(
                searchTerm.toLowerCase()
              )

        );

      }

      /* BUDGET */

      if (budget) {

        filtered = filtered.filter(

          (p) =>
            p.price <= Number(budget)

        );

      }

      /* BRAND */

      if (brand) {

        filtered = filtered.filter(

          (p) =>

            p.brand
              ?.toLowerCase()
              ===
            brand.toLowerCase()

        );

      }

      /* BRAKES */

      if (brake) {

        filtered = filtered.filter(

          (p) =>

            p.brake
              ?.toLowerCase()
              ===
            brake.toLowerCase()

        );

      }

      /* SORT */

      if (sort === "low") {

        filtered.sort(
          (a, b) =>
            a.price - b.price
        );

      }

      if (sort === "high") {

        filtered.sort(
          (a, b) =>
            b.price - a.price
        );

      }

      if (sort === "rating") {

        filtered.sort(
          (a, b) =>
            b.rating - a.rating
        );

      }

      return filtered;

    }, [
      products,
      category,
      sort,
      searchTerm,
      budget,
      brand,
      brake
    ]);

  return (

    <section className="products-container">

      <div className="container">

        {/* =========================================
            TITLE
        ========================================= */}

        <div className="products-top">

          <h2 className="section-title">

            Premium Bicycle Collection

          </h2>

          <p>

            Discover stylish and premium
            bicycles for every rider.

          </p>

        </div>

        {/* =========================================
            FILTERS
        ========================================= */}

        <div className="filters-wrapper">

          <div className="filter-title">

            <SlidersHorizontal size={18} />

            <span>
              Smart Filters
            </span>

          </div>

          <div className="filters">

            {/* CATEGORY */}

            <select
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
            >

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

            </select>

            {/* SORT */}

            <select
              value={sort}
              onChange={(e) =>
                setSort(
                  e.target.value
                )
              }
            >

              <option value="">
                Sort By
              </option>

              <option value="low">
                Price Low → High
              </option>

              <option value="high">
                Price High → Low
              </option>

              <option value="rating">
                Top Rated
              </option>

            </select>

            {/* BUDGET */}

            <select
              value={budget}
              onChange={(e) =>
                setBudget(
                  e.target.value
                )
              }
            >

              <option value="">
                Budget Range
              </option>

              <option value="3500">
                Under ₹3,500
              </option>

              <option value="4500">
                Under ₹4,500
              </option>

              <option value="6500">
                Under ₹6,500
              </option>

              <option value="9500">
                Under ₹9,500
              </option>

              <option value="12500">
                Under ₹12,500
              </option>

              <option value="18500">
                Under ₹18,500
              </option>

            </select>

            {/* BRAND */}

            <select
              value={brand}
              onChange={(e) =>
                setBrand(
                  e.target.value
                )
              }
            >

              <option value="">
                Brand
              </option>

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

            </select>

            {/* BRAKES */}

            <select
              value={brake}
              onChange={(e) =>
                setBrake(
                  e.target.value
                )
              }
            >

              <option value="">
                Brake Type
              </option>

              <option value="disc">
                Disc Brake
              </option>

              <option value="hydraulic">
                Hydraulic Brake
              </option>

              <option value="rim">
                Rim Brake
              </option>

            </select>

          </div>

        </div>

        {/* =========================================
            PRODUCT GRID
        ========================================= */}

        <div className="products-grid">

          {filteredProducts.length > 0 ? (

            filteredProducts.map(
              (product) => {

                const inCart =
                  cart.find(
                    (item) =>
                      item.id ===
                      product.id
                  );

                return (

                  <div
                    className="product-card"
                    key={product.id}
                  >

                    {/* IMAGE */}

                    <div className="product-image">

                      <img
                        src={product.image}
                        alt={product.name}
                      />

                      {/* BADGE */}

                      <div className="product-badge">

                        Premium

                      </div>

                    </div>

                    {/* INFO */}

                    <div className="product-info">

                      <div className="product-rating">

                        <Star
                          size={15}
                          fill="gold"
                        />

                        <span>

                          {product.rating}

                        </span>

                      </div>

                      <h3 className="product-title">

                        {product.name}

                      </h3>

                      <div className="price-box">

                        <span className="product-price">

                          ₹
                          {product.price.toLocaleString()}

                        </span>

                      </div>

                      {/* BUTTONS */}

                      <div className="product-buttons">

                        {/* CART */}

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

                          <ShoppingCart size={16} />

                          {inCart
                            ? "Added"
                            : "Add To Cart"}

                        </button>

                        {/* DETAILS */}

                        <Link

                          to={`/products/${product.id}`}

                          className="btn btn-dark"
                        >

                          <Eye size={16} />

                          Details

                        </Link>

                        {/* WISHLIST */}

                        <button

                          className="wishlist-btn"

                          onClick={() =>
                            addToWishlist(
                              product
                            )
                          }
                        >

                          <Heart size={18} />

                        </button>

                      </div>

                    </div>

                  </div>

                );

              }
            )

          ) : (

            <div className="no-products">

              <h2>
                No Products Found 😢
              </h2>

              <p>

                Try changing filters
                or search keyword.

              </p>

            </div>

          )}

        </div>

      </div>

    </section>

  );

}

export default Products;