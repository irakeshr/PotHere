import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ToastContainer,toast } from "react-toastify";

 

function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const {setCartItems} = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [sizeDetail ,setSizeDetail]=useState(product.sizes[0].name);
 

  if (!product) {
    return <div className="text-center text-2xl font-bold text-red-500">Product not found!</div>;
  }

  const handleAddToCart = () => {
    if (quantity > 0){
       
    const sizeDetails = product.sizes.find(size => size.name === sizeDetail); 
    
    
    const finalItem = {
      ...product,
      size: sizeDetail,
      dimensions: sizeDetails.dimensions,
      quantity,
    };
    setCartItems(prev => [...prev, finalItem]);
    toast("Product added to cart!", {
      style: {
        backgroundColor: "#fff",
        color: "#00a326"
      }
    });
    console.log(finalItem);
    }
    else{
      alert("Invalid quantity")
    }
    
  };

  const relatedProducts = products.filter(p =>  p.id !== product.id);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-4">This traditional clay pot is perfect for slow-cooking your favorite dishes, infusing them with rich, earthy flavors and ensuring a tender, delicious result every time.</p>
          <div>
            <h1 className="font-bold mb-2">Size Options</h1>
          <p>
            Small: 8 inches (20 cm) diameter, 6 inches (15 cm) height<br/>
    Medium: 10 inches (25 cm) diameter, 8 inches (20 cm) height <br/>
    Large: 12 inches (30 cm) diameter, 10 inches (25 cm) height
            </p>
          </div>
          <p className="text-xl font-semibold mt-5 mb-4 text-red-500">Price: ₹{product.price}</p>
          <div className="flex items-center mb-4">
            <label className="mr-2">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="border border-gray-300 p-2 w-16 text-center"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Select Size:</label>
            <select
              value={sizeDetail}
              onChange={(e) => setSizeDetail(e.target.value)}
              className="border border-gray-300 p-2 w-full"
            >
              {product.sizes.map(size => (
                <option key={size.name} value={size.name}>
                  {size.name} - {size.dimensions}
                </option>
              ))}
            </select>
          </div>
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:3928546983. */}
         <Link to={""}> 
                  <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
         </Link>

        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {relatedProducts.map((relatedProduct) => (
            <Link to={'/product/' + relatedProduct.id} key={relatedProduct.id} className={'block'}>
             
             
             <div key={relatedProduct.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{relatedProduct.name}</h3>
                <p className="text-gray-700">{relatedProduct.description}</p>
                <p className="text-xl font-semibold">₹{relatedProduct.price}</p>
              </div>
            </div>
            </Link>
           
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;