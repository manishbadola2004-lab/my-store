import "./AuthModal.css";

function AuthModal({
  isLogin,
  setIsLogin,
  formData,
  setFormData,
  onLogin,
  onRegister,
  onClose
}) {

  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        {/* HEADER */}

        <div className="modal-header">

          <h2 className="modal-title">
            {isLogin
              ? "Login"
              : "Create Account"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ×
          </button>

        </div>

        {/* FORM */}

        <form
          className="auth-form"
          onSubmit={
            isLogin
              ? onLogin
              : onRegister
          }
        >

          {/* FULL NAME */}

          {!isLogin && (

            <div className="form-group">

              <input
                className="form-input"
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value
                  })
                }
                required
              />

            </div>

          )}

          {/* EMAIL */}

          <div className="form-group">

            <input
              className="form-input"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value
                })
              }
              required
            />

          </div>

          {/* PHONE */}

          {!isLogin && (

            <div className="form-group">

              <input
                className="form-input"
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value
                  })
                }
                required
              />

            </div>

          )}

          {/* ADDRESS */}

          {!isLogin && (

            <div className="form-group">

              <input
                className="form-input"
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    address: e.target.value
                  })
                }
                required
              />

            </div>

          )}

          {/* CITY */}

          {!isLogin && (

            <div className="form-group">

              <input
                className="form-input"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    city: e.target.value
                  })
                }
                required
              />

            </div>

          )}

          {/* STATE */}

          {!isLogin && (

            <div className="form-group">

              <input
                className="form-input"
                type="text"
                placeholder="State"
                value={formData.state}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    state: e.target.value
                  })
                }
                required
              />

            </div>

          )}

          {/* PINCODE */}

          {!isLogin && (

            <div className="form-group">

              <input
                className="form-input"
                type="text"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pincode: e.target.value
                  })
                }
                required
              />

            </div>

          )}

          {/* PASSWORD */}

          <div className="form-group">

            <input
              className="form-input"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value
                })
              }
              required
            />

          </div>

          {/* CONFIRM PASSWORD */}

          {!isLogin && (

            <div className="form-group">

              <input
                className="form-input"
                type="password"
                placeholder="Confirm Password"
                value={
                  formData.confirmPassword
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    confirmPassword:
                      e.target.value
                  })
                }
                required
              />

            </div>

          )}

          {/* BUTTON */}

          <button
            type="submit"
            className="btn btn-primary btn-full"
          >
            {isLogin
              ? "Login"
              : "Register"}
          </button>

        </form>

        {/* TOGGLE */}

        <div className="auth-toggle">

          <span>
            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}
          </span>

          <button
            type="button"
            className="toggle-btn"
            onClick={() =>
              setIsLogin(!isLogin)
            }
          >
            {isLogin
              ? "Register"
              : "Login"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default AuthModal;