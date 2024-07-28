import React from "react";
import portfolio from "../../assets/Imagenes/portfolio.png";
import barra from "../../assets/Imagenes/barra.png";
import facebook from "../../assets/Iconos/facebook.svg";
import twitter from "../../assets/Iconos/twitter.svg";
import linkedin from "../../assets/Iconos/linkedin.svg";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Presentacion">
        <h2>Bienvenidos yo soy</h2>

        <h1>Belén Cabezas</h1>

        <h3>Diseñadora Web</h3>

        <p>
          Soy una persona entusiasta,motivada,responsable y trabajadora con
          muchas ganas de seguir aprendiendo todo lo que pueda dentro del mundo
          it.
        </p>
      </div>
      <img
        className="ImagenPresentacion"
        src={portfolio}
        alt="Imagen Personal"
      />

      <div className="Redes">
        <div className="sigueme">
          <img src={barra} />

          <div className="IconosRedes">
            <a href="https://www.facebook.com/profile.php?id=100011000144769">
              <img src={facebook} alt="Logo facebook" />
            </a>

            <a href="https://x.com/be3elu">
              <img src={twitter} alt="Logo twitter" />
            </a>

            <a href="https://ar.linkedin.com/">
              <img src={linkedin} alt="Logo linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
