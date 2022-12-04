import React from "react";
import Circles7x10 from "../toolbox/Circles7x10";

function CommentArea() {
  return (
    <div className="commentAreaTool">
      <h1>La opinión de nuestros clientes</h1>
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
              <img src="/image/user_icon.png" alt="user"></img>
              <div>
                <h2>Rodrigo Salinas González</h2>
                <p>Santiago</p>
              </div>
            </div>
            <img src="/icon/tirnak.png" alt='"'></img>
          </div>
          <p>
          Una Profesional muy comprometida, con muy buena disposición y empatía
          </p>
        </div>

        <div>
          <div className="commentTitle">
            <div className="commentTitleLeft">
              <img src="/image/user_icon.png" alt="user"></img>
              <div>
                <h2>Juan Alvarez</h2>
                <p>Santiago</p>
              </div>
            </div>
            <img src="/icon/tirnak.png" alt='"'></img>
          </div>
          <p>
          Mónica me ayudo a vender mi casa,  se dedicó mucho más allá de su responsabilidad, muy comprometida, con una puntualidad inglesa.
          </p>
        </div>

        <div>
          <div className="commentTitle">
            <div className="commentTitleLeft">
              <img src="/image/user_icon.png" alt="user"></img>
              <div>
                <h2>Cristobal</h2>
                <p>Santiago</p>
              </div>
            </div>
            <img src="/icon/tirnak.png" alt='"'></img>
          </div>
          <p>
          La verdad es raro evaluar a alguien con solo 5 estrellas, pero Monica las merece. Nos acompaño en todo el proceso de compra, nos guío y estuvo cada vez que la necesitamos, incluso una vez finalizada la venta durante los meses siguientes fue parte en solucionar pagos pendientes de cuentas, etc. 

          </p>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div className="commentArea">
        <div>
          <div className="commentTitle">
            <div className="commentTitleLeft">
              <img src="/image/user_icon.png" alt="user"></img>
              <div>
                <h2>Anita Cox</h2>
                <p>Santiago</p>
              </div>
            </div>
            <img src="/icon/tirnak.png" alt='"'></img>
          </div>
          <p>
          He trabajado con otros corredores y nunca había tenido el trato humano además de el ejecutivo que corresponde, destaco la puntualidad y rapidez para aclarar dudas, coordinar visitas, búsqueda de información de clientes entre otros puntos propios de la venta y post venta. Agradecemos como familia el apoyo en este proceso! ! 
          </p>
        </div>

        <div>
          <div className="commentTitle">
            <div className="commentTitleLeft">
              <img src="/image/user_icon.png" alt="user"></img>
              <div>
                <h2>Patricio Monsalve</h2>
                <p>Santiago</p>
              </div>
            </div>
            <img src="/icon/tirnak.png" alt='"'></img>
          </div>
          <p>
            El trabajo y servicio de Mónica  son de un excelente nivel,  tratando de velar siempre por su cliente, con un trato muy amable y una forma de trabajar muy ágil.  Siempre dio respuesta rápida a mis consultas y requerimientos, y me mantuvo permanentemente informado respecto a las visitas realizadas y llamadas recibidas. Muy puntual siempre y con excelente disposición y amabilidad para mostrar la propiedad y responder las preguntas de los interesados.
Gran preocupación por que la publicación de la propiedad en los portales fuera de gran calidad y apareciera en los primeros lugares de las búsquedas.
Siempre preocupada del proceso completo de venta de la propiedad, lo que da mucha tranquilidad al propietario.
Verdaderamente merece 5 estrellas.
          </p>
        </div>

        <div>
          <div className="commentTitle">
            <div className="commentTitleLeft">
              <img src="/image/user_icon.png" alt="user"></img>
              <div>
                <h2>David Sovarso</h2>
                <p>Santiago</p>
              </div>
            </div>
            <img src="/icon/tirnak.png" alt='"'></img>
          </div>
          <p>
          Muy buena profesional amable muy comprometida me ayudo mucho cuando necesitaba algo respondió siempre con  muy buena disposición Monica se merece muchas estrellas gracias por todo.......
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentArea;
