import React from "react";
import visa from "./images/visa.webp";
import masterCard from "./images/master-card.jpeg";
import upi from "./images/upi.png";
import stripe from "./images/stripe.png";
const Securepayment = () => {
  return (
    <div>
      <div className="top-heading-wraper text-center text-muted">
        <span>
          <i className="bi bi-lock me-1"></i>
        </span>
        <span>secure payment</span>
        <div className="payment-card-image mt-2 ">
          <img src={visa} alt="" className="img-fluid " />
          <img src={masterCard} alt="" className="img-fluid " />
          <img src={stripe} alt="" className="img-fluid " />
          <img src={upi} alt="" className="img-fluid " />
        </div>
      </div>
    </div>
  );
};

export default Securepayment;
