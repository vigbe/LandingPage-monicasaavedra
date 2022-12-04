import React from "react";
import { Link } from "react-router-dom";
import CommentArea from "../toolbox/CommentArea";
import PhotoArea from "../toolbox/PhotoArea";

import InfoArea from "../toolbox/InfoArea";

function MainPage() {
  return (
    <div className="mainPage">
      <div className="area1">
      <InfoArea
        data={{
          src: "/image/monica2.jpeg",
          alt: "photo1",
          bar: "bar",
          p: [
            ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.",0]
          ],
          title:"Monica Saavedra, corredora de propiedades certificada",
          type:"right",
          button:"Acerca de mí",
          buttonTo:"/about"
        }}
      ></InfoArea>
      </div>

      <div className="area2">
        <PhotoArea
          data={{ src: "/image/monica3.jpeg", alt: "photo2", type: "none" }}
        ></PhotoArea>
        <div className="rightArea">
          <h1>Ofrecemos el mejor servicio</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
            et hendrerit in, accumsan tempus erat.Nullam ornare blandit urna.
          </p>
          <div>
            <div>
              <img src="/icon/check_circle.png" alt="check"></img>
              <p>Alta visibilidad en las publicacioes</p>
            </div>
            <div>
              <img src="/icon/check_circle.png" alt="check"></img>
              <p>Asistencia legal</p>
            </div>
            <div>
              <img src="/icon/check_circle.png" alt="check"></img>
              <p>Cercania con nuestros clientes</p>
            </div>
          </div>
          <Link to="/contactus">Contactanos</Link>
        </div>
      </div>

      {/*<div className="area3">
        <h1>The Perfect Solution to your Relationship Issues</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet
          et hendrerit in, accumsan tempus{" "}
        </p>
        <div>
          <div>
            <img src="/icon/ring.png" alt="ring"></img>
            <h2>Pre Marital Coaching</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              consectetur justo quis euismod vehicula. Quisque diam dui,
              imperdiet et hendrerit in, accumsan tempus erat.{" "}
            </p>
            <Link to="/">Learn More</Link>
          </div>
          <div>
            <img src="/icon/ring.png" alt="ring"></img>
            <h2>Pre Marital Coaching</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              consectetur justo quis euismod vehicula. Quisque diam dui,
              imperdiet et hendrerit in, accumsan tempus erat.{" "}
            </p>
            <Link to="/">Learn More</Link>
          </div>
          <div>
            <img src="/icon/ring.png" alt="ring"></img>
            <h2>Pre Marital Coaching</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              consectetur justo quis euismod vehicula. Quisque diam dui,
              imperdiet et hendrerit in, accumsan tempus erat.{" "}
            </p>
            <Link to="/">Learn More</Link>
          </div>
        </div>
      </div>*/}
      <br></br>
      <br></br>
      <br></br>
      <CommentArea></CommentArea>

      {/* <div className="area4">
        <h1>What our customers say about us</h1>
        <div className="circles1">
          <Circles7x10></Circles7x10>
        </div>
        <div className="circles2">
          <Circles7x10></Circles7x10>
        </div>

        <div className="commentArea">
          <div>
            <div className="commentTitle">
              <div className="commentTitleLeft">
                <img src="/image/user1.png" alt="user"></img>
                <div>
                  <h2>Queen Rita</h2>
                  <p>USA</p>
                </div>
              </div>
              <img src='/icon/tirnak.png' alt='"'></img>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et</p>
          </div>

          <div>
            <div className="commentTitle">
              <div className="commentTitleLeft">
                <img src="/image/user2.png" alt="user"></img>
                <div>
                  <h2>Gloria Uko</h2>
                  <p>Nigeria</p>
                </div>
              </div>
              <img src='/icon/tirnak.png' alt='"'></img>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et</p>
          </div>

          <div>
            <div className="commentTitle">
              <div className="commentTitleLeft">
                <img src="/image/user3.png" alt="user"></img>
                <div>
                  <h2>ChiChi</h2>
                  <p>South Africa</p>
                </div>
              </div>
              <img src='/icon/tirnak.png' alt='"'></img>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et</p>
          </div>
        </div>
      </div> */}
{/* 
      <div className="area5">
        <h1>Subscribe to our newsletter</h1>
        <p>We recommend you to subscribe to our newsletter , drop your email below to get daliy update about us</p>
          <form>
            <input type="text" placeholder="Enter Your Email Adress"></input>
            <button type="submit">Subscribe</button>
          </form>
      </div> 
      <SubscribeArea></SubscribeArea>*/}
    </div>
  );
}

export default MainPage;
