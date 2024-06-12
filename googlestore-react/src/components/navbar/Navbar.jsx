import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <div id="nav-left">
          <img id="logo" src="src\assets\images\google-logo.png" alt="Google" />
          <ul id="nav-list">
            <li>Phones</li>
            <li id="active-item">Earbuds</li>
            <li>
              <a id="smartwatch">Watches</a>
            </li>
            <li>Smart Home</li>
            <li>Accesories</li>
            <li>Subscriptions</li>
          </ul>
        </div>
        <div id="nav-icons">
          <img src="src\assets\images\icons\Search.svg" alt="Search" />
          <img src="src\assets\images\icons\Help.svg" alt="Help" />
          <img src="src\assets\images\icons\Cart.svg" alt="Cart" />
          <img src="src\assets\images\icons\Avatar.svg" alt="Avatar" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
