/** @format */
import { useNavigate } from "react-router";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, totalPrice, updateQuantity, removeFromCart } = useCart();

  return (
    // Removed justify-center to fix the gap
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center px-4 pt-10">
      <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-3xl mt-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h2>

        <div className="space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-700">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white/70 p-4 rounded-xl shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    className="bg-[#ff4757] text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all active:scale-90 cursor-pointer"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="px-2 font-bold">{item.quantity}</span>
                  <button 
                    className="bg-[#ff4757] hover:bg-red-600 transition-all active:scale-90 cursor-pointer text-white px-3 py-1 rounded-lg"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                   <button 
                    className="ml-2 bg-gray-500 hover:bg-gray-900 text-white px-3 py-1 rounded-lg text-xs cursor-pointer transition-colors"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="mt-8 border-t border-gray-400/50 pt-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
            <button
              onClick={() => navigate("/payment")}
              className="bg-[#ff4757] hover:bg-red-700 cursor-pointer text-white px-8 py-2 rounded-xl shadow-md transition-all active:scale-95 font-bold"
            >
              Proceed to Pay
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;