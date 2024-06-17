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

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotal = (subtotal, shippingCost, vat) => {
    return subtotal + shippingCost + vat;
  };

  const shippingCost = 4.9;
  const subtotal = calculateSubtotal();
  const estimatedVAT = subtotal * 0.21;
  const total = calculateTotal(subtotal, shippingCost, estimatedVAT);

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
          {cartItems.length > 0 && (
            <div className="receiptCart">
              <h3>Order Summary</h3>
              <div className="receiptData">
                <div className="orderData">
                  <p>Subtotal</p>
                  <p>Shipping costs</p>
                  <p>estimated VAT</p>
                  <p>Total estimated</p>
                </div>
                <div className="costData">
                  <p className="subtotal">{subtotal.toFixed(2)} €</p>
                  <p className="shippingCost">€ 4.90</p>
                  <p>Including</p>
                  <p className="totalEstimated">{total.toFixed(2)} €</p>
                  <p className="monthPayment">
                    or € {(total / 3).toFixed(2)}/month with 3 monthly
                    installments *
                  </p>
                </div>
              </div>
              <button className="completePurchase">Complete Purchase</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
