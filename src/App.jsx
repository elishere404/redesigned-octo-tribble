import { CartProvider } from './context/CartContext'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import products from './data/data.json'
import './App.css'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <div className="max-w-[1440px] mx-auto px-6 py-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-secondary">Desserts</h1>
          </header>

          <main className="grid lg:grid-cols-[1fr,400px] gap-8">
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard 
                    key={product.name} 
                    product={product}
                  />
                ))}
              </div>
            </section>

            <aside className="lg:sticky lg:top-8">
              <Cart />
            </aside>
          </main>
        </div>
      </div>
    </CartProvider>
  )
}

export default App
