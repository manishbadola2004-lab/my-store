// src/pages/Admin.jsx

import { useState, useEffect } from "react";

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  Pencil,
  Trash2,
  Plus,
  IndianRupee,
  Image as ImageIcon,
  Layers3,
  FileText,
  Search
} from "lucide-react";

import "./Admin.css";

function Admin() {

  /* ===================================
     DEFAULT PRODUCTS
  =================================== */

  const defaultProducts = [

    {
      id: 1,
      name: "Mountain Bike",
      price: 25000,
      category: "Mountain",
      image:
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=900",
      description:
        "Powerful mountain bike for adventure rides."
    },

    {
      id: 2,
      name: "Road Bike",
      price: 32000,
      category: "Road",
      image:
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=900",
      description:
        "Fast and lightweight road bike."
    }

  ];

  /* ===================================
     STATES
  =================================== */

  const [products, setProducts] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "adminProducts"
        );

      return saved
        ? JSON.parse(saved)
        : defaultProducts;
    });

  const [formData, setFormData] =
    useState({
      name: "",
      price: "",
      category: "",
      image: "",
      description: ""
    });

  const [editingId, setEditingId] =
    useState(null);

  const [search, setSearch] =
    useState("");

  /* ===================================
     SAVE LOCAL STORAGE
  =================================== */

  useEffect(() => {

    localStorage.setItem(
      "adminProducts",
      JSON.stringify(products)
    );

  }, [products]);

  /* ===================================
     HANDLE CHANGE
  =================================== */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value
    });
  };

  /* ===================================
     SUBMIT
  =================================== */

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.price ||
      !formData.category ||
      !formData.image
    ) {

      alert(
        "Please fill all required fields"
      );

      return;
    }

    if (editingId) {

      setProducts(

        products.map((item) =>

          item.id === editingId

            ? {
                ...item,
                ...formData,
                price:
                  Number(formData.price)
              }

            : item
        )
      );

      alert(
        "Product Updated ✅"
      );

      setEditingId(null);

    } else {

      const newProduct = {

        id: Date.now(),

        ...formData,

        price:
          Number(formData.price)
      };

      setProducts([
        newProduct,
        ...products
      ]);

      alert(
        "Product Added ✅"
      );
    }

    /* RESET */

    setFormData({
      name: "",
      price: "",
      category: "",
      image: "",
      description: ""
    });
  };

  /* ===================================
     EDIT
  =================================== */

  const handleEdit = (product) => {

    setFormData(product);

    setEditingId(product.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  /* ===================================
     DELETE
  =================================== */

  const handleDelete = (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this product permanently?"
      );

    if (confirmDelete) {

      setProducts(

        products.filter(
          (item) => item.id !== id
        )
      );
    }
  };

  /* ===================================
     FILTER
  =================================== */

  const filteredProducts =
    products.filter((item) =>

      item.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (

    <section className="admin-page">

      {/* ===================================
          SIDEBAR
      =================================== */}

      <aside className="admin-sidebar">

        <div className="admin-logo">

          🚴 ShivShakti

        </div>

        <ul>

          <li className="active">

            <LayoutDashboard size={18} />

            Dashboard

          </li>

          <li>

            <Package size={18} />

            Products

          </li>

          <li>

            <ShoppingCart size={18} />

            Orders

          </li>

          <li>

            <Users size={18} />

            Users

          </li>

          <li>

            <Settings size={18} />

            Settings

          </li>

        </ul>

      </aside>

      {/* ===================================
          MAIN
      =================================== */}

      <div className="admin-content">

        {/* TOP */}

        <div className="admin-top">

          <div>

            <h1>
              Admin Dashboard
            </h1>

            <p>
              Manage products,
              inventory and orders.
            </p>

          </div>

          {/* SEARCH */}

          <div className="search-box">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e)=>
                setSearch(
                  e.target.value
                )
              }
            />

          </div>

        </div>

        {/* ===================================
            STATS
        =================================== */}

        <div className="stats-grid">

          <div className="stats-card">

            <div className="stats-icon orange">

              <Package size={28} />

            </div>

            <div>

              <h2>
                {products.length}
              </h2>

              <p>
                Total Products
              </p>

            </div>

          </div>

          <div className="stats-card">

            <div className="stats-icon blue">

              <ShoppingCart size={28} />

            </div>

            <div>

              <h2>
                1,250
              </h2>

              <p>
                Orders
              </p>

            </div>

          </div>

          <div className="stats-card">

            <div className="stats-icon green">

              <IndianRupee size={28} />

            </div>

            <div>

              <h2>
                ₹12L+
              </h2>

              <p>
                Revenue
              </p>

            </div>

          </div>

        </div>

        {/* ===================================
            FORM
        =================================== */}

        <div className="admin-form-box">

          <div className="form-header">

            <h2>

              {
                editingId
                ? "Edit Product"
                : "Add New Product"
              }

            </h2>

          </div>

          <form
            className="admin-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <div className="input-group">

              <label>

                Product Name

              </label>

              <div className="input-box">

                <Package size={18} />

                <input
                  type="text"
                  name="name"
                  placeholder="Enter product name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* PRICE */}

            <div className="input-group">

              <label>

                Price

              </label>

              <div className="input-box">

                <IndianRupee size={18} />

                <input
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  value={formData.price}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* CATEGORY */}

            <div className="input-group">

              <label>

                Category

              </label>

              <div className="input-box">

                <Layers3 size={18} />

                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={formData.category}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* IMAGE */}

            <div className="input-group">

              <label>

                Image URL

              </label>

              <div className="input-box">

                <ImageIcon size={18} />

                <input
                  type="text"
                  name="image"
                  placeholder="Paste image url"
                  value={formData.image}
                  onChange={handleChange}
                />

              </div>

            </div>

            {/* DESCRIPTION */}

            <div className="input-group full-width">

              <label>

                Description

              </label>

              <div className="textarea-box">

                <FileText size={18} />

                <textarea
                  name="description"
                  rows="5"
                  placeholder="Write product description..."
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>

              </div>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="submit-btn"
            >

              <Plus size={18} />

              {
                editingId
                ? "Update Product"
                : "Add Product"
              }

            </button>

          </form>

        </div>

        {/* ===================================
            PRODUCT LIST
        =================================== */}

        <div className="products-section">

          <div className="section-top">

            <h2>
              All Products
            </h2>

            <span>

              {
                filteredProducts.length
              } Products

            </span>

          </div>

          <div className="product-grid">

            {
              filteredProducts.map(
                (product) => (

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

                    <span className="category-badge">

                      {
                        product.category
                      }

                    </span>

                  </div>

                  {/* INFO */}

                  <div className="product-info">

                    <h3>
                      {product.name}
                    </h3>

                    <h4>

                      ₹{
                        product.price
                        .toLocaleString()
                      }

                    </h4>

                    <p>

                      {
                        product.description
                      }

                    </p>

                    {/* BUTTONS */}

                    <div className="card-buttons">

                      <button
                        className="edit-btn"
                        onClick={() =>
                          handleEdit(
                            product
                          )
                        }
                      >

                        <Pencil size={16} />

                        Edit

                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(
                            product.id
                          )
                        }
                      >

                        <Trash2 size={16} />

                        Delete

                      </button>

                    </div>

                  </div>

                </div>

              ))
            }

          </div>

        </div>

      </div>

    </section>
  );
}

export default Admin;