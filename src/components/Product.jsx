import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";

function Product({products, addCart}) {

  
    return <>


        {products.map(p => <ProductDetails product={p} addCart={addCart} />)}
       

    </>
}

export default Product;