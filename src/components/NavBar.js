import '../styles/NavStyle.css';

function NavBar() {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <h1 className='logo'>Ecommerce</h1>
        <div className='nav-links'>
          <a href="/" className="nav-link">Dashboard</a>
          <a href="/addproduct" className="nav-link">Add Product</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
