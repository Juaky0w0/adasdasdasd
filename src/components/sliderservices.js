import React from "react";
import Slider from "react-slick";
import "./sliderser.css"
import {dataSliderService, dataSliderService2} from '../components/dataServices';


export function SliderServi() {
  const settings = {
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  fadeSpeed: 1000,
  dotsClass: "button__bar",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        dots: true,
        autoplay: true,
        fade: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        fadeSpeed: 1000
      }
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        fadeSpeed: 1000
      }
    }
  ]
};
    return (
      <div className="container-all-services">
      <div className="ServiSlider">
        <Slider {...settings}>        
          {dataSliderService.map(item => ( 
            <>         
            <div className="imgServi">
              <img src={item.imga} />
            </div> 
            <div className="titleServi">
            <h2>{item.titulo}</h2>
            <h4>{item.titleS}</h4>
            </div>  
            </>       
          ))} 
        </Slider>      
      </div>
      </div>
    );
  }

  export function SliderServi2() {
    const settings = {
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      fadeSpeed: 1000,
      dotsClass: "button__bar",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container-all-services">
        <div className="ServiSlider">
          <Slider {...settings}>
            {dataSliderService2.map(item => (
              <>
                <div className="imgServi">
                  <img src={item.imga} />
                </div>
                <div className="titleServi">
                  <h2>{item.titulo}</h2>
                  <h4>{item.titleS}</h4>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
  