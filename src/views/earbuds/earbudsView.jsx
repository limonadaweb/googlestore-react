import "./earbudsView.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import { useState } from "react";

const Earbuds = () => {
  const [cart, setCart] = useState([]);

  const handleAdd = () => {
    setCart([...cart, "earbud"]);
    console.log("Added to cart:", [...cart, "earbud"]);
  };

  const handleRemove = () => {
    setCart(cart.slice(0, -1));
    console.log("Removed from cart:", cart.slice(0, -1));
  };

  return (
    <>
      <Navbar />
      <div id="productDetails">
        <p id="detailsText">🡨 See product details</p>
      </div>
      <main>
        <section id="images-section">
          <div id="samples">
            <input
              id="model-earbud"
              type="image"
              src="src\assets\images\earbuds\earbuds_01.png"
            />
            <input
              id="model-earbud"
              type="image"
              src="src\assets\images\earbuds\earbuds_02.png"
            />
            <input
              id="model-earbud"
              type="image"
              src="src\assets\images\earbuds\earbuds_03.png"
            />
            <input
              id="model-earbud"
              type="image"
              src="src\assets\images\earbuds\earbuds_04.png"
            />
          </div>
        </section>
        <img
          id="main-banner"
          src="src\assets\images\earbuds\earbuds_01.png"
          alt="Earbuds"
        />
        <section id="main-aside">
          <article id="description">
            <h1>Google Pixel Buds Pro</h1>
            <span>Music & Sound</span>
            <p id="price">229 €</p>
            <hr />
          </article>
          <article id="choose">
            <span>Choose a color</span>
            <div id="colors">
              <input id="blue" type="text" />
              <input id="white" type="text" />
              <input id="black" type="text" />
              <input id="grey" type="text" />
              <input id="green" type="text" />
              <input id="orange" type="text" />
            </div>
          </article>
          <article id="delivery">
            <h2>229 €</h2>
            <hr />
            <div id="cart-form">
              <select name="number" id="number">
                <option value="1">1</option>
              </select>
              <Button handleAdd={handleAdd} handleRemove={handleRemove} />
            </div>
            <span>
              <img src="src\assets\images\icons\Delivery.svg" alt="Delivery" />
              Delivers 29 Apr to 08023
            </span>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Earbuds;
