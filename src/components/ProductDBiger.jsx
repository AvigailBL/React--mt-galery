import { useParams } from "react-router-dom";
import '../css/productDBiger.css';

function ProductDBiger() {
    const { name, img, descibe, size, price } = useParams();

    return (
        <div className="product-detail-container">
            <div className="product-showcase">
                <div className="image-container">
                    <img src={`/IMG/${img}`} alt={name} className="product-image" />
                </div>
                
                <div className="product-info">
                    <h1 className="product-title">{name}</h1>
                    
                    <div className="product-description">
                        <p className="description-text">{descibe}</p>
                    </div>
                    
                    <div className="product-specs">
                        <div className="spec-item">
                            <span className="spec-label">מידות:</span>
                            <span className="spec-value">{size}</span>
                        </div>
                        
                        <div className="spec-item price">
                            <span className="spec-label">מחיר:</span>
                            <span className="spec-value price-value">{price} ₪</span>
                        </div>
                    </div>
                    
                    <div className="purchase-section">
                        <button className="purchase-btn">
                            רכישת היצירה
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDBiger;