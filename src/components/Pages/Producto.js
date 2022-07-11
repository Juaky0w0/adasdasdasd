import React from "react";
import {CarouselContainer} from '../CarouselContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Producto.scss';
import { SliderProd } from "../Sliderprod";
import  { BanerInicioone } from "../BanersInicio";
import { SliderInfinite } from "./sliderInfinito.jsx";
import homeFinal from '../../img/home-final.png';
import $ from "jquery";



export const Producto = () => {


  var isAlreadyRun = false;


  $(window).scroll( function(){
  
      $('.container-numero').each( function(){
  
          var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
  
  
              if( bottom_of_window > ( bottom_of_object + 50 )  ){
          if (!isAlreadyRun) {
            $('.count-number').each(function () {
                  
                    $(this).prop('box',300).animate({
                      box: $(this).text()
                    }, {
                            duration: 1500,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                  });
          }
                  isAlreadyRun = true;
              }
      }); 
  
  });
  
  return (
    <>
    <div className="container-carrusel">
    <CarouselContainer />
    <div class="arrow bounce">
            <i class="fa fa-chevron-down arrow-down-slider" aria-hidden="true"></i>
        </div>
    </div>

   <div className="products">
    <h2>Productos Destacados</h2>
  </div>

  <SliderProd  />
  <BanerInicioone  />

  
  <div className="contenido">
  <div className="marcas">
    <h2>Ellos confían en nosotros</h2>
  </div>

  <div className="container-marcas">


  <SliderInfinite />



  </div>
  </div>

  <div className="container-boto">
  <a href=""><button className='boton-personalizado-contact'>CONTÁCTANOS</button></a>
  </div>

  <div className="container-numero">

       <img
          className="d-block w-100"
          src={homeFinal}
          alt="imcetron"
        />
    <div className='contador'>
    <div className="box">
    <div className="signo"><p>+</p>
    <h3 className="count-number">100</h3>
    </div>
    <p>clientes satifechos por nuestra atencion</p>
    </div>   
    <div className="box">
    <div className="signo"><p>+</p>
    <h3 className="count-number">20</h3>
    </div>
    <p>años de experiencia en el mercado</p>
    </div>  
    <div className="box">
    <div className="signo"><p>+</p>
    <h3 className="count-number">700</h3>
    </div>
    <p>productos importados y comercializados</p>
    </div>  
     <div className="box-button">
    <a href=""><button className='boton-personalizado-conocenos'>CONÓCENOS</button></a>
    </div>
    </div>
    <div className="box-button-activate">
    <a href=""><button className='boton-personalizado-activate'>CONÓCENOS</button></a>
    </div>
 
</div>

</>
  );
};

