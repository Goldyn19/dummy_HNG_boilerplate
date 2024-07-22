'use client'
import PaymentMethodCard from "~/components/PaymentMethod/PaymentMethodCard"
import React, { useState } from "react";
import Sidebar from  "~/components/layouts/Sidebar"

const PaymentPage = () => {
  const [billingOption, setBillingOption] = useState("monthly");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  return (
   <div className="flex">
   <Sidebar />
     <div className=" w-full max-w-2xl  p-6 ">
    {/* Header */}
    <div className="justify mb-6 flex flex-col">
      <div className="flex gap-2">
        {/* <Image src="/Icon.svg" alt="back arrow" width={14} height={14} /> */}
        <h2 className="text-[24px] font-bold text-[#0a0a0a]">
         Upgrade To Basic
        </h2>
      </div>
      <p className="mt-2 text-[14px] font-[400] text-[#1e1e1e]">
      Do more with unlimited users and Integration when you upgrade
      </p>
    </div>
    <div className="mb-16">
      <h3 className="mb-2 text-[16px] font-medium text-[#0a0a0a]">
        Billing Option
      </h3>
      <div
        className="mb-4 flex cursor-pointer rounded-md border p-4 shadow-sm"
        onClick={() => setBillingOption("monthly")}
      >
        <input
          type="radio"
          name="billing"
          
          className="peer mr-3 h-6 w-6 border-[#f97317] focus:ring-[#f97317]"
        />
        <div>
          <p className="text-[12px] font-medium text-[#0a0a0a]">
          Pay monthly
          </p>
          <p className="text-[12px] font-normal text-[#525252]">
          $20/ month/membe
          </p>
        </div>
      </div>
      <div
        className="flex cursor-pointer rounded-md border p-4 shadow-sm"
        onClick={() => setBillingOption("yearly")}
      >
        <input
          type="radio"
          name="billing"
          
          className="peer mr-3 h-6 w-6 border-[#f97317] focus:ring-[#f97317]"
        />
        <div>
          <p className="text-[12px] font-medium text-[#0a0a0a]">
          Pay Yearly
          </p>
          <p className="text-[12px] font-normal text-[#525252]">
          $200/ year/member 
          </p>
        </div> 
      </div>
      <div className="mb-8 mt-4 flex items-center justify-between">
        <span className="text-[16px] font-medium text-[#0a0a0a]">
        $20 /month
        </span>
      </div>
    </div>
    <div className="mb-6">
      <PaymentMethodCard/>
    </div>

    {/* Upgrade Button */}
    <div className="mt-6 flex justify-center">
      <button className="w-[400px] rounded-lg bg-[#f97316] py-2 text-white">
       upgrade To Basics
      </button>
    </div>
  </div>
   </div>
  )
}

export default PaymentPage
