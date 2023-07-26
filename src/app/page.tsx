"use client";

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(0);
  const [propertyPrice, setPropertyPrice] = useState(0);
  const [downPayment, setDownPayment] = useState(5);
  const [interestRate, setInterestRate] = useState(0);
  const [amortizationPeriod, setAmortizationPeriod] = useState(0);
  const [paymentFrequency, setPaymentFrequency] = useState<
    "bi_weekly" | "accelerated_bi_weekly" | "monthly"
  >("bi_weekly");

  const onSumbitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(
        "https://calculator-101-c3264ca28660.herokuapp.com/api/v1/calculate",
        {
          property_price: propertyPrice,
          down_payment: downPayment,
          annual_interest_rate: interestRate,
          amortization_period: amortizationPeriod,
          payment_frequency: paymentFrequency,
        }
      )
      .then(({ data }) => {
        setAmount(data.amount);
      })
      .catch((error) => {});
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={onSumbitForm}>
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
                    value={propertyPrice}
                    onChange={(e) => setPropertyPrice(parseInt(e.target.value))}
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
                    value={downPayment}
                    onChange={(e) => setDownPayment(parseInt(e.target.value))}
                    className="block pl-1.5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <p className="ml-2 text-xs text-gray-500 italic">in %</p>
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
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseInt(e.target.value))}
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
                    value={amortizationPeriod}
                    min={5}
                    step={5}
                    max={30}
                    onChange={(e) =>
                      setAmortizationPeriod(parseInt(e.target.value))
                    }
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
                    value={paymentFrequency}
                    onChange={(e) => setPaymentFrequency(e.target.value as any)}
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
              {amount > 0 && (
                <div className="sm:col-span-3">
                  <div className="block text-lg font-medium leading-6 text-gray-900">
                    Total: {amount}
                  </div>
                </div>
              )}
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
