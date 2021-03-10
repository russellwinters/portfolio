import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StMarks from '../../Assets/AboutMeSlide/StMarks.jpg';
import QMBBAnthem from '../../Assets/AboutMeSlide/QMBBAnthem.jpg';
import FalseCreek from '../../Assets/AboutMeSlide/FalseCreek.jpg';
import CarouselItem from './CarouselItem';

const Carousel = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 1000,
    accessibility: true,
  };

  const CAROUSEL_CONTAINER = styled.section`
    height: 50vh;
    width: 50vw;
    margin: 0 auto;
    overflow: hidden;
    position: static;
    border-radius: 8px;
  `;

  // <div>
  return (
    <CAROUSEL_CONTAINER>
      <Slider {...settings}>
        <CarouselItem
          src={FalseCreek}
          alt={'Me, out on a stroll around False Creek.'}
          top="-92%"
          description={
            'Me, out on a stroll around False Creek in the fall of 2020. It was a tough year for everyone but getting out for walks like that have been extremely helpful for my own mental health.'
          }
        />
        <CarouselItem
          src={StMarks}
          alt={'St. Marks Peak on a Sunny Thursday evening in August'}
          top="-100px"
          description={
            "The stunning Howe Sound from atop St. Marks Summit. You can see me acting like I'm not terrified of heights."
          }
        />
        <CarouselItem
          src={QMBBAnthem}
          alt={'The QMBB team embracing for the anthem before a game my third year. We always stood arm in arm.'}
          top="-125px"
          description={
            "Sports have alwasy been a big part of my life. This is the Queen's Men's Basketball Team before a game during my third year. I'm fourth from the right, standing between two of my housemates. "
          }
        />
      </Slider>
    </CAROUSEL_CONTAINER>
  );
};

{
  /* </div> */
}
export default Carousel;
{
  /* <img src={StMarks} alt="St. Marks Peak on a Sunny Thursday evening in August" />
<img src={FalseCreek} alt="Me, out on a stroll around False Creek."/>
<img src={QMBBAnthem} alt="The QMBB team embracing for the anthem before a game my third year. We always stood arm in arm."/>
</Slider>
</div> */
}
