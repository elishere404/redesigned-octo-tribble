import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-square">
        <img 
          src={product.image.desktop} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <button
            onClick={() => addToCart(product)}
            className="bg-white/90 text-primary px-6 py-2 rounded-full hover:bg-white transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="text-lg font-semibold text-secondary mb-2">{product.name}</h3>
        <p className="text-primary font-medium">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductCard 