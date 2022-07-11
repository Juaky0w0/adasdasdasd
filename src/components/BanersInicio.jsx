import React from 'react';
import { Carousel } from 'react-bootstrap';
import './BanersInicio.css';
import banerI1 from '../img/baner-inicio-one.png';
import banerI2 from '../img/baner-inicio-two.png';
import banerI3 from '../img/baner-inicio-tree.png';
import banerI4 from '../img/baner-inicio-four.png';




export const BanerInicioone = () => {
    return (
 
      <>
      <div className='BanerIn'>
        <img
          className="d-block w-100"
          src={banerI1}
          alt="fondo services"
        />
        </div>
        <div className='container-baner-home'>
          <div className='homes'>
          <h3>Alambres de cobre</h3>
          <a href="/Catalogo"><button className='boton-personalizado-home'>VER PRODUCTOS</button></a>
          </div>
        </div>

      <div className='BanerIn'>
          <img
            className="d-block w-100"
            src={banerI2}
            alt="fondo services"
          />
           </div>
          <div className='container-baner-home'>
            <div className='homes'>
            <h3>Fierro silicoso</h3>
            <a href="/Catalogo"><button className='boton-personalizado-home'>VER PRODUCTOS</button></a>
            </div>
          </div>


          <div className='BanerIn'>
          <img
            className="d-block w-100"
            src={banerI3}
            alt="fondo services"
          />
           </div>
          <div className='container-baner-home'>
            <div className='homes'>
            <h3>Aisladores</h3>
            <a href="/Catalogo"><button className='boton-personalizado-home'>VER PRODUCTOS</button></a>
            </div>
          </div>

          <div className='BanerIn'>
          <img
            className="d-block w-100"
            src={banerI4}
            alt="fondo services"
          />
           </div>
          <div className='container-baner-home'>
            <div className='homes'>
            <h3>Ventiladores</h3>
            <a href="/Catalogo"><button className='boton-personalizado-home'>VER PRODUCTOS</button></a>
            </div>
          </div>

          </>
    )
  }
 