'use client'

import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <div className="space-y-12 bg-gray-50 p-4 rounded-lg">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Calculator
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This form calculates your mortgage payment based on the loan
              amount, interest rate, payment frequency and term.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-5">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Property Price
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="property-price"
                    className="block pl-1.5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Down Payment
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="down-payment"
                    min={5}
                    max={35}
                    className="block pl-1.5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Annual Interest Rate
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="annual-interest-rate"
                    className="block pl-1.5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Amortization Period
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="amortization-period"
                    className="block pl-1.5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="payment-frequency"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Payment Frequency
                </label>
                <div className="mt-2">
                  <select
                    id="payment-frequency"
                    name="payment-frequency"
                    autoComplete="country-name"
                    className="block pl-1.5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value={"bi_weekly"}>Bi weekly</option>
                    <option value={"accelerated_bi_weekly"}>
                      Accelerated bi weekly
                    </option>
                    <option value={"monthly"}>Monthly</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Calculate
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
