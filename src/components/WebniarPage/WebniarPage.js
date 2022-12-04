import React from "react";
import InfoArea from "../toolbox/InfoArea";
import { Link } from "react-router-dom";

function WebniarPage() {
  return (
    <div className="webniarPage">
      <div className="area1">
        <InfoArea
          data={{
            src: "/image/santiago_main.jpg",
            alt: "photo1",
            bar: "bar",
            p: [
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.",
                0,
              ],
            ],
            title: "Conoce mi cartera de propiedades",
            type: "right",
            button: "Publica mi propiedad! ",
            buttonTo: "/contactus",
          }}
        ></InfoArea>
      </div>
      <div className="area2">
        <br></br>
        <br></br>
        <br></br>
        <h1>Una de estas propiedades podria la tuya</h1>
        <div className="webniarInfoRow">
         {/* <div className="webniarInfo">
            <img src="/icon/check_circle.png" alt="check"></img>
            <div>
              <h2>Pre Marital Talk</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>*/} 

          <div className="area1" >Departamento en Macul
          <a href="https://nexxospropiedades.cl//fichaPropiedad.aspx?i=69032" target="_blank" >
            
           <img
            style={{ 
              maxWidth:"50%" ,
              maxLength:"22%"
            } }
            src="/image/macul.jpeg"
            alt="example"
          />
          </a>
          </div>
          <div >Casa en La Reina
          <a href="https://nexxospropiedades.cl//fichaPropiedad.aspx?i=67690" target="_blank" >
            
          <img
           style={{ 
            maxWidth:"50%",
            maxLength:"22%"
          
          } }
            src="/image/lareina.jpeg"
            alt="example"
          />
          </a>
          </div>

      


         {/*   <div className="webniarInfo">
            <img src="/icon/check_circle.png" alt="check"></img>
            <div>
              <h2>Pre Marital Talk</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>

        <div className="webniarInfoRow">
          <div className="webniarInfo">
            <img src="/icon/check_circle.png" alt="check"></img>
            <div>
              <h2>Pre Marital Talk</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="webniarInfo">
            <img src="/icon/check_circle.png" alt="check"></img>
            <div>
              <h2>Pre Marital Talk</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          */} 
        </div>
        <Link to="/contactus">Quiero publicar con Uds.</Link>
      </div>
      {/*  
      <div className="area3">
        <div>
          <div>
            <div>
              <img src="/icon/calendar.png" alt="calender"></img>
              <h2>Date</h2>
              <p>November 12th</p>
            </div>
            <div>
              <img src="/icon/time.png" alt="time"></img>
              <h2>Time</h2>
              <p>10 am GMT+1</p>
            </div>
          </div>
          <div>
            <div>
              <img src="/icon/mic.png" alt="mic"></img>
              <h2>Duration</h2>
              <p>2 Hours</p>
            </div>
            <div>
              <img src="/icon/price.png" alt="price"></img>
              <h2>Price</h2>
              <p>Free</p>
            </div>
          </div>
        </div>

        <Link to="/">Reserve Your Spot</Link>
      </div>
      */}  
    </div>
  );
}

export default WebniarPage;
