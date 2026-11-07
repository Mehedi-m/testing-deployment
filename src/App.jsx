
import { useState } from 'react'


function App() {

  const [filter, setFilter] = useState("all")

  const [product, setProduct] = useState([
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mouse", price: 800 },
  { id: 3, name: "Keyboard", price: 1500 },
  { id: 4, name: "Monitor", price: 12000 },
  { id: 5, name: "Headphone", price: 2500 }
])

  const deleteProduct = (id) => {
  setProduct(
    product.filter(product => product.id !== id)
  )
}

  const filteredProducts =
    filter === "all"
      ? product
      : filter === "under"
        ? product.filter(product => product.price < 2000)
        : product.filter(product => product.price > 2000)

  return (
    <div className="p-5">

      <h1 className="text-2xl font-bold mb-4">
        Shop Products
      </h1>

      <div className="flex gap-3 mb-5">

        <button onClick={() => setFilter("all")}>
          All
        </button>

        <button onClick={() => setFilter("under")}>
          Under ৳2,000
        </button>

        <button onClick={() => setFilter("above")}>
          Above ৳2,000
        </button>

      </div>

      <div>
        {filteredProducts.map(product => (
          <div key={product.id} className="mb-3">

            <h2>{product.name}</h2>

            <p>Price: ৳{product.price.toLocaleString()}</p>

            <button onClick={() => deleteProduct(product.id)}>
              Delete
            </button>

          </div>
        ))}
      </div>

    </div>
  )
}

export default App
