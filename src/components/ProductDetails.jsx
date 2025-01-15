import { Link } from "react-router-dom";
import '../css/productDetails.css';

function ProductDetails({product, addCart }) {
    
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img 
                    src={"/IMG/" + product.img} 
                    alt={product.name}
                    className="product-image"
                />
            </div>
            
            <div className="product-info">
                <h2 className="product-title">{product.name}</h2>
                <div className="product-price">{product.price} ₪</div>
                
                <div className="product-actions">
                    <Link 
                        to={`/ProductDBiger/${product.name}/${product.img}/${product.descibe}/${product.price}/${product.price}`}
                        className="details-link"
                    >
                        לפרטים נוספים
                    </Link>
                    
                    <button 
                        className="add-to-cart"
                        onClick={() => addCart({ name: product.name, price: product.price })}
                    >
                        הוסף לסל
                    </button>
                    
                </div>
            </div>
        </div>
        
    );
}

export default ProductDetails;