import React from "react";
import { Link } from "react-router-dom";
import CommentArea from "../toolbox/CommentArea";
import InfoArea from "../toolbox/InfoArea";
import SubscribeArea from "../toolbox/SubscribeArea";

function ServicesPage() {
  return (
    <div className="servicesPage">
      <div className="area1">
        <InfoArea
          data={{
            src: "/image/55.jpeg",
            alt: "photo3",
            bar: "none",
            p: [
              [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel. In venenatis nisi orci, non accumsan nisl tempus ut.",
                0,
              ],
            ],
            title: "Dejando que mi trabajo hable por mí",
            type: "right",
            button: "",
            buttonTo: "/"
          }}
        ></InfoArea>
      </div>

      <div className="area2">
        <InfoArea
          data={{
            src: "/image/11.jpeg",
            alt: "photo4",
            bar: "none",
            p: [
              [
                ,
                0,
              ],
            ],
            title: " ",
            type: "left",
            button: "",
            buttonTo: "/"
          }}
        ></InfoArea>
        <InfoArea
          data={{
            src: "/image/22.jpeg",
            alt: "photo4",
            bar: "none",
            p: [
              [
                ,
                0,
              ],
            ],
            title: " ",
            type: "right",
            button: "",
            buttonTo: "/"
          }}
        ></InfoArea>
        <InfoArea
          data={{
            src: "/image/33.jpeg",
            alt: "photo4",
            bar: "none",
            p: [
              [
                ,
                0,
              ],
            ],
            title: " ",
            type: "left",
            button: "",
            buttonTo: "/"
          }}
        ></InfoArea>
        <br></br>
        <InfoArea
          data={{
            src: "/image/44.jpeg",
            alt: "photo4",
            bar: "none",
            p: [
              [
                ,
                0,
              ],
            ],
            title: " Siempre un proceso grato",
            type: "right",
            button: "",
            buttonTo: "/"
          }}
        ></InfoArea>
      </div>
      {/*
      <div className="area3">
        <h1>Are you ready to transfrom your Marriage and Relationship Book a  session with us</h1>
        <Link to="/" >Make an Appointment</Link>
      </div>
*/}
      <div className="area4">
        <CommentArea></CommentArea>
      </div>

       {/* <div className="area5">
        <SubscribeArea></SubscribeArea>
      </div>*/}
    </div>
  );
}

export default ServicesPage;
