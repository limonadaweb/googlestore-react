import "./cartView.css";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = [];
    const earbuds = localStorage.getItem("earbuds");
    const smartwatch = localStorage.getItem("smartwatch");

    if (earbuds) {
      const [image, name, price] = earbuds.split("-");
      storedItems.push({
        image,
        name,
        price: parseFloat(price),
        id: "earbuds",
        quantity: 1,
      });
    }

    if (smartwatch) {
      const [image, name, price] = smartwatch.split("-");
      storedItems.push({
        image,
        name,
        price: parseFloat(price),
        id: "smartwatch",
        quantity: 1,
      });
    }

    setCartItems(storedItems);
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = parseInt(newQuantity, 10);
    setCartItems(newCartItems);
  };

  const handleRemove = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
    localStorage.removeItem(id);
  };

  return (
    <>
      <Navbar />
      <div className="cartLayout">
        <div className="cartTitle">
          <h2>Cart</h2>
          <p>({cartItems.length} items)</p>
        </div>
        <div className="bodyCart">
          <div className="productsCart">
            {cartItems.map((item, index) => (
              <div className="productItem" key={item.id}>
                <div className="productInformation">
                  <img
                    className="productImage"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="productTitle">
                    <p>{item.name}</p>
                    <label>
                      Cant:
                      <input
                        min={1}
                        max={20}
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(index, e.target.value)
                        }
                        type="number"
                      />
                    </label>
                  </div>
                  <div className="productPrice">
                    <p>{(item.price * item.quantity).toFixed(2)} €</p>
                    <button
                      className="removeItem"
                      type="button"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="productDeliver"></div>
              </div>
            ))}
          </div>

          <div className="receiptCart"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
