"use client";
import { useState } from "react";
import PaymentMethod from "./PaymentMethod";
import CreditCardForm from "./CreditCardForm";
import StripeForm from "./StripeForm";
import PaypalForm from "./Paypal";

const PaymentMethodCard = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("Credit Card"); // Set default value here

  const handleChange = (value: string) => {
    setSelectedMethod(value);
  };

  return (
    <div className="mx-auto w-full max-w-2xl rounded-lg border p-6 shadow-lg">
      <h3 className="mb-2 text-[16px] font-medium text-[#0a0a0a]">
        Choose payment method
      </h3>
      <PaymentMethod
        image="/images/Group (1).svg"
        header="Credit Card"
        selectedValue={selectedMethod}
        onChange={handleChange}
        forms={selectedMethod === "Credit Card" ? <CreditCardForm /> : null}
        height={40}
        width={65}
      />
      <PaymentMethod
        image="/images/Group.svg"
        header="Stripe"
        selectedValue={selectedMethod}
        onChange={handleChange}
        forms={selectedMethod === "Stripe" ? <StripeForm /> : null}
        height={28}
        width={66}
      />
      <PaymentMethod
        image="/images/paypal_logo.svg.svg"
        header="Paypal"
        selectedValue={selectedMethod}
        onChange={handleChange}
        forms={selectedMethod === "Paypal" ? <PaypalForm /> : null}
        height={40}
        width={154}
      />
    </div>
  );
};

export default PaymentMethodCard;
