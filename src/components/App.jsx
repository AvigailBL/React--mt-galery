// In your App.jsx, update the header and footer structure:
<div className="app-container">
    <header className="main-header">
        <div className="logo-section">
            <h1 className="gallery-logo">הגלריה של לואיס</h1>
        </div>
        
        <nav className="main-nav">
            <Link to="/Home" className="nav-link">הבית</Link>
            <Link to="/About" className="nav-link">אודות</Link>
            <Link to="/Product" className="nav-link">מוצרים</Link>
            <Link to="/Connections" className="nav-link">התחברות</Link>
            <Link to="/shoppingBasket" className="nav-link cart">
                העגלה שלי
                <span className="cart-count">({myCart.length})</span>
            </Link>
        </nav>
    </header>

    <main className="main-content">
        <Routing products={products} addCart={addCart} myCart={myCart} lessFromCart={lessFromCart} calculateSum={calculateSum} />
    </main>

    <footer className="main-footer">
        <div className="footer-content">
            <span className="copyright">AVIGAILBL © כל הזכויות שמורות</span>
        </div>
    </footer>
</div>
