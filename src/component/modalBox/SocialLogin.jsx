import React from 'react'

const SocialLogin = () => {
  return (
    <div>
      <div className="google-login">
        <button>
          <span>
            <i className="bi bi-google"></i>
          </span>
          <span>Sign Up with Google</span>
        </button>
        <button>
          <span>
            <i className="bi bi-facebook"></i>
          </span>
          <span>Sign Up with Facebook</span>
        </button>
      </div>
    </div>
  );
}

export default SocialLogin