import React from "react";
import { useNavigate } from "react-router-dom";
import CheckoutPage from "../components/checkout-page";

export default function CheckoutPageRoute() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return <CheckoutPage onBack={handleBack} />;
}
