import React from "react";
import InfoArea from "../toolbox/InfoArea";
import { Link } from "react-router-dom";

function PricingPage() {
  return (
    <div className="pricingPage">
      <div className="area1">
        <InfoArea
          data={{
            src: "/image/servicios.jpeg",
            alt: "photo2",
            bar: "bar",
            p: [
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.",
                0,
              ],
            ],
            title: "Esta pagina puede ser usada para otro apartado que desees",
            type: "right",
            button: "Contactanos",
            buttonTo: "/contactus",
          }}
        ></InfoArea>
      </div>

      <div className="area2">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum
            urna et diam Lorem ipsum dolor sit amet
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum
            urna et diam Lorem ipsum dolor sit amet
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum
            urna et diam Lorem ipsum dolor sit amet
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum
            urna et diam Lorem ipsum dolor sit amet
          </p>
        </div>
        <Link to="/contactus">Contactanos</Link>
      </div>

      <div className="area3">
        <InfoArea
          data={{
            src: "/image/servicios2.jpeg",
            alt: "photo3",
            bar: "none",
            p: [
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.",
                0,
              ],
              [
                "Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.",
                1,
              ],
              [
                "Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.",
                2,
              ],
            ],
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            type: "left",
            button: "",
            buttonTo: "/",
          }}
        ></InfoArea>
      </div>

      <div className="area2">
        <h1>Por que elegirme para gestionar la venta/arriendo de tu propiedad</h1>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum urna et diam
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum urna et diam
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum urna et diam
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum urna et diam
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum urna et diam
          </p>
        </div>
        <div>
          <img src="/icon/check_circle.png" alt="check"></img>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elited elementum urna et diam
          </p>
        </div>
        <Link to="/">Empezar</Link>
      </div>

      <div className="area5">
          <h1>Comisiones</h1>
          <div className="priceBar">
            <div>
                <h2>Venta</h2>
                <h3>3%</h3>
                <div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <button type="button">Choose Plan</button>
            </div>
            <div>
                <h2>Arriendo</h2>
                <h3>50%</h3>
                <div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <button type="button">Mas detalles</button>
            </div>
            <div>
                <h2>Locales Comerciales</h2>
                <h3>3%</h3>
                <div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div>
                        <div className="circle"></div>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <button type="button">Contactame</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default PricingPage;
