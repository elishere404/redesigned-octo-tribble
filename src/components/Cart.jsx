import { useCart } from '../context/CartContext'
import emptyCartImg from '../assets/empty-img.png'

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    resetCart,
    showConfirmation,
    setShowConfirmation 
  } = useCart()

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleConfirmOrder = () => {
    setShowConfirmation(true)
    resetCart()
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-secondary mb-6 flex justify-between">
        Your Cart 
        <span className="text-primary">
          ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </span>
      </h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <img 
            src={emptyCartImg} 
            alt="Empty cart" 
            className="w-32 h-32 mx-auto mb-4 opacity-50"
          />
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-secondary">{item.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{item.quantity}x</span>
                    <span>@ ${item.price.toFixed(2)}</span>
                    <span className="font-medium text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-gray-400 hover:text-primary"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-secondary">Order Total</span>
              <span className="text-xl font-bold text-primary">
                ${total.toFixed(2)}
              </span>
            </div>
            
            <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
              <span className="w-4 h-4">🌱</span>
              This is a carbon-neutral delivery
            </p>

            <button
              onClick={handleConfirmOrder}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Confirm Order
            </button>
          </div>
        </>
      )}

      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-11/12">
            <h2 className="text-2xl font-bold text-secondary mb-4">Order Confirmed!</h2>
            <p className="mb-6">Thank you for your order.</p>
            <button 
              onClick={() => setShowConfirmation(false)}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart 