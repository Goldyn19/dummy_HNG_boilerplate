"use client"

const CreditCardForm = () => {
    return (
    <div>
        <form className="space-y-4">
            <div>
                <label
                    htmlFor="full-name"
                    className="block text-[16px] font-medium text-[#0a0a0a]"
                >
                    Full Name
                  </label>
                  <input
                      type="text"
                      id="full-name"
                      placeholder="Enter Full Name"
                      className="text-[#939393]block mt-1 w-full rounded-md border p-4 text-[14px] font-medium shadow-sm"
                  />
              </div>
              <div>
                  <label
                      htmlFor="business-name"
                      className="block text-[16px] font-medium text-[#0a0a0a]"
                  >
                      Business Name (Optional)
                  </label>
                  <input
                      type="text"
                      id="business-name"
                      placeholder="Enter Business Name"
                      className="text-[#939393]block mt-1 w-full rounded-md border p-4 text-[14px] font-medium shadow-sm"
                  />
              </div>
              <div>
                  <label
                      htmlFor="card-number"
                      className="block text-[16px] font-medium text-[#0a0a0a]"
                  >
                      Card Number
                  </label>
                  <input
                      type="text"
                      id="card-number"
                      placeholder="1234 5678 9012 3456"
                      className="text-[#939393]block mt-1 w-full rounded-md border p-4 text-[14px] font-medium shadow-sm"
                  />
              </div>
              <div className="flex space-x-4">
                  <div className="w-1/2">
                      <label
                          htmlFor="exp"
                          className="block text-[16px] font-medium text-[#0a0a0a]"
                      >
                          Exp.
                      </label>
                      <input
                          type="text"
                          id="exp"
                          placeholder="12/24"
                          className="text-[#939393]block mt-1 w-full rounded-md border p-4 text-[14px] font-medium shadow-sm"
                      />
                  </div>
                  <div className="w-1/2">
                      <label
                          htmlFor="cvv"
                          className="block text-[16px] font-medium text-[#0a0a0a]"
                      >
                          CVV
                      </label>
                      <input
                          type="text"
                          id="cvv"
                          placeholder="123"
                          className="text-[#939393]block mt-1 w-full rounded-md border p-4 text-[14px] font-medium shadow-sm"
                      />
                  </div>
              </div>
              <div className="mt-4 flex items-center">
                  <label className="">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-[12px] font-normal">
                          By submitting this form, you confirm that you agree to our
                          <span className="font-medium text-[#f97316]">
                              {" "}
                              Terms of Service
                          </span> {" "}
                          and {" "}
                          <span className="font-medium text-[#f97316]">
                              {" "}
                              Privacy Policy.
                          </span>
                      </span>
                  </label>
              </div>
          </form>
    </div>
  )
}

export default CreditCardForm