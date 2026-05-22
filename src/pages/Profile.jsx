import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Globe,
  Briefcase,
  Camera,
  Heart,
  ShoppingCart,
  Package,
  LogOut,
  Trash2,
  Save
} from "lucide-react";

import "./Profile.css";

function Profile({ user, setUser }) {

  const navigate = useNavigate();

  /* =========================
     USER CHECK
  ========================= */

  if (!user) {

    return (

      <div className="profile-empty">

        <div className="profile-empty-card">

          <h1>
            Please Login First
          </h1>

          <p>
            Access your orders,
            wishlist and profile.
          </p>

          <Link
            to="/"
            className="go-home-btn"
          >

            Go Home

          </Link>

        </div>

      </div>
    );
  }

  /* =========================
     STATES
  ========================= */

  const [formData, setFormData] =
    useState({

      name:
        user.name || "",

      email:
        user.email || "",

      phone:
        user.phone || "",

      dob:
        user.dob || "",

      occupation:
        user.occupation || "",

      city:
        user.city || "",

      state:
        user.state || "",

      country:
        user.country || "",

      pincode:
        user.pincode || "",

      address:
        user.address || "",

      bio:
        user.bio || "",

      profileImage:
        user.profileImage || ""

    });

  /* =========================
     HANDLE CHANGE
  ========================= */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value

    });

  };

  /* =========================
     IMAGE UPLOAD
  ========================= */

  const handleImage = (e) => {

    const file =
      e.target.files[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onloadend = () => {

      setFormData((prev)=>({

        ...prev,

        profileImage:
          reader.result

      }));

    };

    reader.readAsDataURL(file);

  };

  /* =========================
     SAVE PROFILE
  ========================= */

  const handleUpdate = () => {

    const updatedUser = {

      ...user,

      ...formData

    };

    setUser(updatedUser);

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    alert(
      "Profile Updated Successfully ✅"
    );

  };

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {

    localStorage.removeItem("user");

    setUser(null);

    navigate("/");

    alert("Logged Out 👋");

  };

  /* =========================
     DELETE ACCOUNT
  ========================= */

  const handleDelete = () => {

    const confirmDelete =
      window.confirm(
        "Delete your account permanently?"
      );

    if (confirmDelete) {

      localStorage.removeItem("user");

      setUser(null);

      navigate("/");

      alert(
        "Account Deleted ❌"
      );

    }

  };

  return (

    <section className="profile-page">

      {/* SIDEBAR */}

      <div className="profile-sidebar">

        <div className="profile-top">

          <div className="profile-image-box">

            {
              formData.profileImage ?

              <img
                src={formData.profileImage}
                alt="profile"
                className="profile-image"
              />

              :

              <div className="default-avatar">

                <User size={55} />

              </div>
            }

            <label className="camera-btn">

              <Camera size={16} />

              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImage}
              />

            </label>

          </div>

          <h2>

            {
              formData.name ||
              "Your Name"
            }

          </h2>

          <p>

            {
              formData.email ||
              "your@email.com"
            }

          </p>

        </div>

        {/* QUICK LINKS */}

        <div className="profile-links">

          <Link
            to="/orders"
            className="profile-link"
          >

            <Package size={19} />

            My Orders

          </Link>

          <Link
            to="/wishlist"
            className="profile-link"
          >

            <Heart size={19} />

            Wishlist

          </Link>

          <Link
            to="/cart"
            className="profile-link"
          >

            <ShoppingCart size={19} />

            My Cart

          </Link>

        </div>

      </div>

      {/* MAIN */}

      <div className="profile-main">

        {/* HEADER */}

        <div className="profile-header">

          <div>

            <h1>
              My Profile
            </h1>

            <p>
              Manage your account details
            </p>

          </div>

          <button
            className="save-top-btn"
            onClick={handleUpdate}
          >

            <Save size={18} />

            Save Profile

          </button>

        </div>

        {/* FORM */}

        <div className="profile-form">

          {/* NAME */}

          <div className="profile-group">

            <label>
              Full Name
            </label>

            <div className="input-box">

              <User size={18} />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Full Name"
              />

            </div>

          </div>

          {/* EMAIL */}

          <div className="profile-group">

            <label>
              Email
            </label>

            <div className="input-box">

              <Mail size={18} />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
              />

            </div>

          </div>

          {/* PHONE */}

          <div className="profile-group">

            <label>
              Phone Number
            </label>

            <div className="input-box">

              <Phone size={18} />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
              />

            </div>

          </div>

          {/* DOB */}

          <div className="profile-group">

            <label>
              Date Of Birth
            </label>

            <div className="input-box">

              <Calendar size={18} />

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />

            </div>

          </div>

          {/* OCCUPATION */}

          <div className="profile-group">

            <label>
              Occupation
            </label>

            <div className="input-box">

              <Briefcase size={18} />

              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="Occupation"
              />

            </div>

          </div>

          {/* CITY */}

          <div className="profile-group">

            <label>
              City
            </label>

            <div className="input-box">

              <MapPin size={18} />

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />

            </div>

          </div>

          {/* STATE */}

          <div className="profile-group">

            <label>
              State
            </label>

            <div className="input-box">

              <MapPin size={18} />

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
              />

            </div>

          </div>

          {/* COUNTRY */}

          <div className="profile-group">

            <label>
              Country
            </label>

            <div className="input-box">

              <Globe size={18} />

              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
              />

            </div>

          </div>

          {/* PINCODE */}

          <div className="profile-group">

            <label>
              Pincode
            </label>

            <div className="input-box">

              <MapPin size={18} />

              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Pincode"
              />

            </div>

          </div>

          {/* ADDRESS */}

          <div className="profile-group full-width">

            <label>
              Address
            </label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Full Address"
            />

          </div>

          {/* BIO */}

          <div className="profile-group full-width">

            <label>
              Bio
            </label>

            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Write something..."
            />

          </div>

        </div>

        {/* BUTTONS */}

        <div className="profile-actions">

          <button
            className="profile-btn save-btn"
            onClick={handleUpdate}
          >

            <Save size={18} />

            Save Changes

          </button>

          <button
            className="profile-btn logout-btn"
            onClick={handleLogout}
          >

            <LogOut size={18} />

            Logout

          </button>

          <button
            className="profile-btn delete-btn"
            onClick={handleDelete}
          >

            <Trash2 size={18} />

            Delete Account

          </button>

        </div>

      </div>

    </section>
  );
}

export default Profile;