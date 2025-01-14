import {
  h1Basket,
  emptyBasketText,
  ulStyle,
  liStyle,
  buttonStyle,
  totalSumText,
  payButton,
} from "../css/shoppingBasket";

function ShoppingBasket({ myCart, lessFromCart, calculateSum }) {
  return (
      <>
          <h1 style={h1Basket}>העגלה שלי</h1>
          {myCart.length === 0 ? (
              <p style={emptyBasketText}>העגלה ריקה</p>
          ) : (
              <ul style={ulStyle}>
                  {myCart.map((item) => (
                      <li key={item.code} style={liStyle}>
                          <span>
                              {item.name} - {item.price} ש"ח
                          </span>
                          <button 
                              style={buttonStyle} 
                              onClick={() => lessFromCart(item.code)}
                          >
                              הסר
                          </button>
                      </li>
                  ))}
              </ul>
          )}
          <p style={totalSumText}>סה"כ לתשלום: {calculateSum(myCart)} ש"ח</p>

          {myCart.length > 0 && (
              <button
                  style={payButton}
                  onClick={() => alert("התשלום התקבל בהצלחה!")}
              >
                  לתשלום
              </button>
          )}
      </>
  );
}

export default ShoppingBasket;
