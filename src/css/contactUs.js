export const h1ContactUs = {
    textAlign: "center",
    color: "#6C3483", // צבע סגול אומנותי
    fontFamily: "'Georgia', serif",
    fontSize: "2.5rem",
    marginBottom: "20px",
};

export const inputStyle = {
    width: "50%", // רוחב קצר יותר
    padding: "10px",
    margin: "10px auto",
    display: "block",
    border: "2px solid #D7BDE2", // צבע עדין למסגרת
    borderRadius: "8px",
    fontSize: "1rem",
};

export const textareaStyle = {
    ...inputStyle,
    height: "150px",
    resize: "none", // ביטול שינוי גודל
};

export const buttonStyle = {
    backgroundColor: "#6C3483", // סגול אומנותי
    color: "#FFF",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.2rem",
    marginTop: "10px",
    display: "block",
    margin: "20px auto",
};

export const buttonDisabledStyle = {
    ...buttonStyle,
    backgroundColor: "#BFC9CA", // צבע אפור למצב מנוטרל
    cursor: "not-allowed",
};
