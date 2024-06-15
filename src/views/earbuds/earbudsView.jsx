import "./earbudsView.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import Selector from "../../components/selector/selector";
import { useState } from "react";

const Earbuds = () => {
  const [cart, setCart] = useState([]);
  const [mainImage, setMainImage] = useState(
    "src/assets/images/earbuds/earbuds_01.png"
  );

  const handleAdd = () => {
    setCart([...cart, "earbud"]);
    console.log("Added to cart:", [...cart, "earbud"]);
  };

  const handleRemove = () => {
    setCart(cart.slice(0, -1));
    console.log("Removed from cart:", cart.slice(0, -1));
  };

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return( 
    <>
      <Navbar />
      <main>
        <section id="seeMore">
            <img id="arrow" src="src/assets/images/icons/Arrow.svg" />
            <div id="seeProductDetails">See product details</div>
        </section>
        <section id="all">
          <section id="images-section">
            <div id="samples">
              <input
                id="model-earbud"
                type="image"
                src="src/assets/images/earbuds/earbuds_01.png"
                onClick={() =>
                  handleImageClick("src/assets/images/earbuds/earbuds_01.png")
                }
              />
              <input
                id="model-earbud"
                type="image"
                src="src/assets/images/earbuds/earbuds_02.png"
                onClick={() =>
                  handleImageClick("src/assets/images/earbuds/earbuds_02.png")
                }
              />
              <input
                id="model-earbud"
                type="image"
                src="src/assets/images/earbuds/earbuds_03.png"
                onClick={() =>
                  handleImageClick("src/assets/images/earbuds/earbuds_03.png")
                }
              />
              <input
                id="model-earbud"
                type="image"
                src="src/assets/images/earbuds/earbuds_04.png"
                onClick={() =>
                  handleImageClick("src/assets/images/earbuds/earbuds_04.png")
                }
              />
            </div>
          
            <div id="imagen-earbuds">
              <img id="main-banner" src={mainImage} alt="Earbuds" />
            </div>
          </section>
          <section id="right">
              <section id="information">
                  <div id="title">
                      <div id="googlePixelBuds">Google Pixel Buds Pro</div>
                    
                      <div id="music-sound">Music & Sound</div>
                      <div id="price">229 €</div>
                      <hr id="separator"></hr>
                      <div id="choose-a-color">Choose a color</div> 
                  
                  </div>
              </section>
               
              <div id="slowSection">
                <section id="slowInfo">
                  <div id="colors">
                    <button id="blue"></button>
                    <button id="white"></button>
                    <button id="black"></button>
                    <button id="grey"></button>
                    <button id="green"></button> 
                    <button id="orange"></button>
                  </div>
                </section>
                <section id="salesSpace">
                  <div id="first">
                      <div id="priceUpp">229 €</div>
                      <hr id="separator2"></hr>
                      <div id="add">
                        <Selector id="quantityButton"/>
                        <Button handleAdd={handleAdd} handleRemove={handleRemove} />
                      </div>
                  </div>
                  <div id="second">
                    <img src="src\assets\images\icons\Delivery.svg" id="delivery" alt="delivery"/>
                    <p id="deliver">Delivers 29 Apr to</p> <p id="num">08023</p>
                  </div>
                </section> 
              </div>   
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Earbuds;
