import { useCart } from "../context/CartContext";

export default function Checkout() {
  const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();

  const cartItems = getCartItemsWithProducts();
  const total = getCartTotal();

  function placeOrder() {
    alert("successful Order!");
    clearCart();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl mb-8 text-[#333] font-semibold">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Order Summary */}
        <div className="bg-white p-5 md:p-8 rounded-xl shadow-md">
          <h2 className="text-xl md:text-2xl mb-6 text-[#333] font-semibold">
            Order Summary
          </h2>

          {cartItems && cartItems.length > 0 ? (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 py-5 border-b border-[#eee] last:border-b-0"
                >
                  <img
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shrink-0"
                    src={item.product.image}
                    alt={item.product.name}
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-lg font-medium text-[#333] leading-tight mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base mb-3">
                      ${item.product.price} each
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-9 h-9 border border-[#ddd] rounded-lg flex items-center justify-center text-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
                      >
                        −
                      </button>
                      <span className="font-semibold text-lg w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-9 h-9 border border-[#ddd] rounded-lg flex items-center justify-center text-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between text-right">
                    <p className="font-bold text-lg text-[#333]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-700 text-sm font-medium mt-2 active:scale-95 transition-all"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-12">
              Your cart is empty.
            </p>
          )}
        </div>

        {/* Order Total Sidebar */}
        <div className="bg-white p-5 md:p-8 rounded-xl shadow-md lg:sticky lg:top-24 h-fit">
          <h2 className="text-xl md:text-2xl mb-6 text-[#333] font-semibold">
            Order Total
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between text-base md:text-lg">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold text-[#007bff]">
                ${total.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-xl font-bold border-t border-[#eee] pt-4">
              <span>Total</span>
              <span className="text-[#007bff]"> ${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={placeOrder}
            className="w-full mt-8 bg-[#007bff] hover:bg-[#0066cc] active:bg-[#0055aa] text-white py-4 rounded-xl text-lg font-semibold transition-all duration-200 active:scale-[0.98]"
          >
            Place Order
          </button>

          <p className="text-center text-xs text-gray-500 mt-4">
            Secure checkout • Free shipping on orders over $50
          </p>
        </div>
      </div>
    </div>
  );
}
