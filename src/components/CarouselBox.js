import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import frank from '../assets/pexels-daniel-frank-572937.jpg';
import lumn from '../assets/pexels-lumn-243945.jpg';
import suomi from '../assets/pexels-suomi-photography-2024889.jpg';

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={frank} alt='Frank' />
          <Carousel.Caption>
            <h3>Image from pexels.com</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
              dolorum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={lumn} alt='Lumn' />
          <Carousel.Caption>
            <h3>Image from pexels.com</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed
              nostrum totam itaque, excepturi repellat asperiores sint
              perspiciatis.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={suomi} alt='Suomi' />
          <Carousel.Caption>
            <h3>Image from pexels.com</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
              magnam reprehenderit et placeat ex quam.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
