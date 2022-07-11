
import m1 from '../../img/prod1.png';
import React, { useState } from 'react';
import { Modal } from '../Modal';
import Slider from "react-slick";
import styled from 'styled-components';
import { listadePro } from '../data';

export function CataProd(props) {
    const [estadoModal3, cambiarEstadoModal3] = useState(false);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
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
        <>
            <div class="itemss ">
                <div className='names'>
                    <h3>{props.name}</h3>
                    <p>{props.des}</p>
                    <p className='mrcs'>{props.mark}</p>
                </div>
                <img className="d-block w-100" src={m1} />

                <div className='container-buton'>
                    <div className='button'>
                        <a href='#'><i class="fa fa-whatsapp" aria-hidden="true"></i> CONSULTAR</a>
                    </div>
                    <div className='button-trans'>
                        <a onClick={() => cambiarEstadoModal3(!estadoModal3)}>VER PRODUCTO</a>
                    </div>

                </div>
            </div>
            <Modal
                estado={estadoModal3}
                cambiarEstado={cambiarEstadoModal3}
                titulo="Aceite Distro DT-11"
                mostrarHeader={true}
                mostrarOverlay={true}
                posicionModal={'start'}
                padding={'20px'}
            >
                <Contenido>

                    <Slider {...settings}>
                        {listadePro.map(item => (
                            <div className="carttopPro">
                                <img src={item.linkimg} />
                            </div>
                        ))}
                    </Slider>

                    <div className='descri'>
                        <div className='descrip'>
                            <h4>Aceite Dieléctrico</h4>
                            <p className='m'>Distro DT-11<br></br>NYNAS</p>
                            <p className='des'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)</p>
                        </div>
                        <div className='container-butonDos'>
                            <div className='buttone'>
                                <a href='#'><i class="fa fa-whatsapp" aria-hidden="true"></i> CONSULTAR</a>
                            </div>
                            <div className='button-transe'>
                                <a href='#'>FICHA TECNICA</a>
                            </div>
                        </div>
                    </div>
                </Contenido>
            </Modal>
        </>
    )
};
const Contenido = styled.div`
	display: flex;    
	margin: auto;
    width: auto;
    .carttopPro img{
    width: 100%; 
    background-size:cover ;
    } 
    .descri{
        width: 100% ;
        height: 10%;
        margin: 0 40px 100px 40px;
        font-family: Montserrat;
    }
    .descrip p{
        font-size: 0.9rem;
        font-family: Montserrat;
        color: #181B21;
        font-size: 100;
    }
    .descrip .des{
        font-size: 0.9rem;
        font-family: Montserrat;
        color: #181B21;
        font-size: 100;
    }
	.descrip h4{
        font-size: 1.4rem;
        font-weight: 600;
        font-family: Montserrat;
    }
    .slick-slider{
        width: 30%;
        margin: 0 40px 100px 40px;
        padding-top: 30px;
        height: 20%;
        
    }
    /*botones*/
    .container-butonDos{
        display: flex;
        box-sizing: border-box;
        padding: 10px 0px;
        margin: auto;

        flex-wrap: wrap;
    }
    
	.buttone {
        background-color: #0378FB;
        margin: auto;
        border-radius: 50px;
        padding-right: 30px;
        border: none;
        padding-left: 30px;
        padding-top: 5px;
        padding-bottom: 5px;
       
    }
    .button-transe {
        background-color: none;
        margin: auto;
        border-radius: 50px;
        padding-right: 30px;
        border: solid 0.1rem black;
        padding-left: 30px;
        padding-top: 3px;
        padding-bottom: 3px;
        cursor: pointer;
    }
    .buttone a{
        text-decoration: none;
        color: white;
        font-size: 0.8rem;
        font-family: Montserrat;
    }
    .button-transe a {
        text-decoration: none;
        color: black;
        font-size: 0.8rem;
        font-weight: bold;
        font-family: Montserrat;
    }

/*Scream @media*/

@media screen  and (max-width: 1200px) {        

    .slick-slider{
        width: 40%;
        margin: 0 40px 100px 40px;  
    }
    .descri{
        margin: 0 20px 100px 20px;
    }
    }
    @media screen  and (max-width: 1020px) {        

.slick-slider{
    width: 50%;
    margin: 0 40px 100px 40px;
}
.buttone {
        margin-bottom: 10px; 
    }
.descri{
    margin: 0 10px 100px 10px;
}
}
    @media screen  and (max-width: 940px) {        
        flex-direction: column;
        .slick-slider{
        width: 50%;
        margin: auto;
}
.descri{
    padding-top: 50px;
    margin: auto;
}
    }

@media screen  and (max-width: 650px) {        
        .slick-slider{
        width: 70%;
        margin: auto;
}
.descri{
    padding-top: 30px;
    padding-bottom: 0;
}
.descrip .des{
        font-size: 0.8rem;
    }
	.descrip h4{
        font-size: 1rem;
    }
    }
    @media screen  and (max-width: 480px) {        
        .slick-slider{
        width: 80%;
}
.buttone {
    width: 100%;
    text-align: center;
    }
    .button-transe {
        width: 100%;
        text-align: center;
    }
    .buttone a{
        font-size: 0.6rem;
    }
    .button-transe a {
        font-size: 0.6rem;
    }
    }
    @media screen  and (max-width: 380px) {        
        .slick-slider{
        width: 90%;
    }
    .descrip .des{
       display: none;
    }
    .buttone {
        padding: 0;    
    }
    .button-transe {

        padding: 0;
    }
    .buttone a{
        font-size: 0.5rem;
    }
    .button-transe a {
        font-size: 0.5rem;
    }
    }

`;