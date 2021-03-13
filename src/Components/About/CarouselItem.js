import React from 'react';
import styled from 'styled-components';

const CarouselItem = ({ src, alt, top, left, bottom, right, description }) => {
  const ITEM_CONTAINER = styled.div`
    position: relative;
    height: 50vh;
    border-radius: 8px;
  `;

  const IMG = styled.img`
    // height: 100%;
    border-radius: 8px;
    width: 50vw;
    position: absolute;
    ${top ? `top: ${top};` : ''}
    ${left ? `left: ${left};` : ''}
    ${bottom ? `bottom: ${bottom};` : ''}
    ${right ? `right: ${right};` : ''}
  `;

  const DESCRIPTION = styled.p`
    position: absolute;
    bottom: 0;
    font-size: 1rem;
    line-height: 1.2rem;
    background-color: #2c5061;
    background-color: rgba(236, 240, 214, 0.6);
    font-weight: 700;
    // background-color: #352a2d;
    color: #ecf0d6;
    color: #352a2d;
    z-index: 2;
    padding: 4px 12px;
    width: 100%;
    text-indent: 2rem;
  `;

  return (
    <ITEM_CONTAINER>
      <IMG src={src} alt={alt} />
      {description && <DESCRIPTION>{description}</DESCRIPTION>}
    </ITEM_CONTAINER>
  );
};

export default CarouselItem;
