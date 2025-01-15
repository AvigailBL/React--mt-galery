import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";

function Product({products, addCart,deleteProduct}) {
    const delitProd = (code) => {
        deleteProduct(code);
        alert(code + " נמחק מהמאגר");
      }
    
    
    <button className="delete-button" onClick={() => delitProd(products.code)}>
              🗑️
            </button>
  return (
      <div className="product-grid">
          {products.map(p => <ProductDetails key={p.name} product={p} addCart={addCart}deleteProduct={deleteProduct} />)}
      </div>
  );
  }
export default Product;