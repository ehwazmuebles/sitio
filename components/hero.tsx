'use client'
import React from 'react'
import Carousel from 'react-material-ui-carousel'

export type HeroItem = {
  image: string,
  url: string
}
export type HeroProps = {
  images: HeroItem[]
}

export default (props: HeroProps) => {
  return (
    <Carousel animation={"fade"} indicators={false} navButtonsAlwaysVisible={true}>
      {
        props.images.map((item: HeroItem, index: number) =>
          <a key={`slide-${index}`} href={item.url}>
            <img src={item.image} alt={`slide-${index}`} />
          </a>
        )
      }
    </Carousel>
  );
};
