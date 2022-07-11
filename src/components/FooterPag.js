import React from "react";
import "./FooterPag.css";
import Logo from "../img/logo-imcetron.png";


export function FooterPag() {


  return (
    <>
      <div className="footerp">
        <div class="footer-content">

          <div className="footer-img-f">
            <img className="logoFooter"
              src={Logo}
              alt="fireSpot"
            />
            <div className="midnel"><a>IMPORTADOR Y DISTRUBUIDOR DE MATERIALES Y EQUIPOS ELECTRONICOS</a></div>
            <div class="sociales">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
            </div>
          </div>

          <div class="footer-menu">
            <ul className="conte">
              <li><a href=""><i class="fa fa-map-marker" aria-hidden="true"></i>Calle La Colonia Nro. 116, Rimac </a></li>
              <li><a href=""><i class="fa fa-envelope-o" aria-hidden="true"></i>ventas@imcetron.com.pe </a></li>
              <li><a href=""><i class="fa fa-whatsapp " aria-hidden="true"></i>+51 994 013 327</a></li>
              <li className="boo"><a href="/Book"><i class="fa fa-book " aria-hidden="true"></i>Libro de Reclamos</a></li>
            </ul>

          </div>

        </div>


        <div class="footer-bottom">
          <p><a href="#">imcetron </a> &copy; {new Date().getFullYear()} | Todos los Derechos Reservados</p>
        </div>
      </div>

    </>

  );
}