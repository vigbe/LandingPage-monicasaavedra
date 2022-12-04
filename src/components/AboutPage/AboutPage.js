import React from "react";
import { Link } from "react-router-dom";
import SubscribeArea from "../toolbox/SubscribeArea";
import InfoArea from "../toolbox/InfoArea";

function AboutPage() {
  return (
    <div className="aboutPage">
      <InfoArea
        data={{
          src: "/image/monica1.jpeg",
          alt: "photo1",
          bar: "none",
          p: [
            ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.",0],
            ["Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.",1],
            ["Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.",2]
          ],
          title:"Sobre mí",
          type:"right",
          button:"",
          buttonTo:"/"
        }}
      ></InfoArea>
    <br></br>
      <br></br>
      <div className="area2">
        <h1>
          Mis primeros pasos
        </h1>
   
      </div>
      <InfoArea
        data={{
          src: "/image/inicio.jpeg",
          alt: "photo1",
          bar: "none",
          p: [
            ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.",0],
            ["Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.",1],
            ["Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.",2]
          ],
          title:"Mi primera propiedad",
          type:"left",
          button:"",
          buttonTo:"/"
        }}
      ></InfoArea>

<br></br>
      <br></br>

      <div className="area2">
        <h1>
          Mi crecimiento
        </h1>
     
      </div>
      <InfoArea
        data={{
          src: "/image/premio.jpeg",
          alt: "photo1",
          bar: "none",
          p: [
            ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.",0],
            ["Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.",1],
            ["Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.",2]
          ],
          title:"Premio a la mejor corredora de Nexxos 2020",
          type:"right",
          button:"",
          buttonTo:"/"
        }}
      ></InfoArea>
      <br></br>
      <br></br>
      <div className="area2">
        <h1>
          Actualidad
        </h1>
        <InfoArea
        data={{
          src: "/image/conso.jpeg",
          alt: "photo1",
          bar: "none",
          p: [
            ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat.",0],
            ["Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.",1],
            ["Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel.",2]
          ],
          title:"Consolidación actual",
          type:"left",
          button:"",
          buttonTo:"/"
        }}
      ></InfoArea>
      </div>
      {/*<SubscribeArea></SubscribeArea>*/}
    </div>
  );
}

export default AboutPage;
