import './App.css'
const products = [
  {
    id: 1,
    name: 'iPhone 14',
    price: 1000,
    description: 'This is a great phone',
    imageURL:
      'https://www.magnific.com/free-photos-vectors/new-phone.jpg',
  },
  {
    id: 2,
    name: 'laptop',
    price: 12000,
    description: 'This is a great laptop',
    imageURL: 'https://www.magnific.com/free-photos-vectors/new-laptop.jpg',
  },
];
const productInfo =products.filter(
  (product) => product.id === parseInt(id)
)[0];

function App() {
  return (
  <div>
    <h1>This is a Ecommerece store</h1>
    <div className="products">
      {products.map((product) => (
        <div key={product.imageURL} className="product">
          <img src={product.imageURL} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  </div>  
  
  )
}

export default App
