/** @format */

import {useNavigate} from "react-router";
import {useAuth} from "../hooks/useAuth";
import {useCart} from "../hooks/useCart";
import {useState} from "react";
import {orderService} from "../api/orderService";

const Payment = () => {
  const {token} = useAuth();
  const {totalPrice, clearCart} = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) return;

    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      await orderService.placeOrder(token);

      clearCart();
      alert("payment successful! Order placed");
      navigate("/profile");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center custom-bg-image px-4">
      <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Payment Details
        </h2>

        <form className="space-y-4" onSubmit={handlePayment}>
          <div>
            <label className="block font-medium mb-1 text-gray-800">
              Cardholder Name
            </label>
            <input
              required
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md bg-gray-700/80 text-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-800">
              Card Number
            </label>
            <input
              required
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-2 rounded-md bg-gray-700/80 text-white focus:outline-none"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block font-medium mb-1 text-gray-800">
                Expiry Date
              </label>
              <input
                required
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-2 rounded-md bg-gray-700/80 text-white focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="block font-medium mb-1 text-gray-800">
                CVV
              </label>
              <input
                required
                type="password"
                placeholder="•••"
                className="w-full px-4 py-2 rounded-md bg-gray-700/80 text-white focus:outline-none"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-600 text-center font-bold bg-white/50 p-2 rounded">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-2 rounded-lg shadow-md transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#ff4757] hover:bg-red-700 cursor-pointer"
            }`}
          >
            {loading ? "Processing..." : `Pay ₹${totalPrice}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
