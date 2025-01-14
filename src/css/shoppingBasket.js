export const h1Basket = {
    textAlign: "center",
    color: "#6C3483", // צבע סגול אומנותי
    fontFamily: "'Georgia', serif",
    fontSize: "2.5rem",
    marginBottom: "20px",
};

export const emptyBasketText = {
    textAlign: "center",
    color: "#A9A9A9", // אפור עדין
    fontStyle: "italic",
    fontSize: "1.2rem",
};

export const ulStyle = {
    listStyleType: "none", // ביטול תבליטים
    padding: "0",
    margin: "20px auto",
    width: "80%",
    textAlign: "left",
};

export const liStyle = {
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#F8F9F9", // צבע רקע עדין
    border: "1px solid #D7BDE2", // מסגרת בצבע עדין
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

export const buttonStyle = {
    backgroundColor: "#6C3483", // סגול אומנותי
    color: "#FFF",
    border: "none",
    padding: "8px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
};

export const totalSumText = {
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "20px",
};

export const payButton = {
    ...buttonStyle,
    display: "block",
    margin: "20px auto",
    padding: "10px 20px",
    fontSize: "1.2rem",
};
