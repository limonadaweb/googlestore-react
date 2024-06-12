import "../smartwatch/smartwatchView.css";

const Smartwatch = () => {
  return (
    <>
      <main>
        <section id="seeMore">
          <img id="arrow" src="src/assets/images/icons/Arrow.svg" />
          <div id="seeProductDetails">See product details</div>
        </section>
        <section id="all">
          <div id="watchImage">
            <img
              id="imageIconWatch"
              src="src/assets/images/smartwatch/smartwatch_black.png"
            />
          </div>

          <seccion id="imageRight">
            <section id="information">
              <div id="title">
                <div id="fitbitInspire3">Fitbit Inspire 3</div>

                <div id="health">Health & Fitness Tracker</div>
                <div id="price">99,95 €</div>
              </div>
            </section>
            <seccion id="watchSpace">
              <div id="info">
                <hr id="separator"></hr>
                <div id="chooseAColor">Choose a color</div>
                <div id="watchColor">
                  <div id="color">
                    <img
                      id="iconPhoto"
                      src="src/assets/images/smartwatch/smartwatch_black.png"
                    />{" "}
                    <p id="sizePhotoText">Midnight Zen</p>
                  </div>
                  <div id="color">
                    <img
                      id="iconPhoto"
                      src="src/assets/images/smartwatch/smartwatch_pink.png"
                    />{" "}
                    <p id="sizePhotoText">Lilac Bliss</p>
                  </div>
                  <div id="color">
                    <img
                      id="iconPhoto"
                      src="src/assets/images/smartwatch/smartwatch_yellow.png"
                    />
                    <p id="sizePhotoText">Morning Glow</p>
                  </div>
                </div>
              </div>

              <seccion id="salesSpace">
                <div id="first">
                  <div id="upperPrice">99,95 €</div>
                  <hr id="separator2"></hr>
                  <div id="add">
                    <select id="botonCantidad" name="unidades">
                      <option value="unidades">1</option>
                      <option value="unidades">2</option>
                      <option value="unidades">3</option>
                      <option value="unidades">4</option>
                      <option value="unidades">5</option>
                      <option value="unidades">6</option>
                      <option value="unidades">7</option>
                      <option value="unidades">8</option>
                      <option value="unidades">9</option>
                      <option value="unidades">10</option>
                    </select>
                  </div>
                </div>
                <div id="segundo">
                  <img
                    id="camion"
                    src="src/assets/images/icons/Delivery.svg"
                    alt="logo-camion"
                  />
                  <p id="envio">Delivers 29 Apr to &nbsp;</p>{" "}
                  <p id="numero">08023</p>
                </div>
              </seccion>
            </seccion>
          </seccion>
        </section>
      </main>
    </>
  );
};

export default Smartwatch;
