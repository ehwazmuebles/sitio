'use client'
import * as React from 'react';

import Gallery, {EhwazImage} from '@/components/gallery';
import ItemModal from '@/components/itemModal';

const images: EhwazImage[] = [
  {
    url: '/living/1.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
    width: 365, 
    height: 332
  },
  {
    url: '/living/2.jpg',
    title: 'Burger',
    width: 400,
    height: 297
  },
  {
    url: '/living/3.jpg',
    title: 'Camera',
    width: 565,
    height: 391
  },
  {
    url: '/living/4.jpg',
    title: 'Coffee',
    cols: 2,
    width: 672,
    height: 505
  },
  {
    url: '/living/5.jpg',
    title: 'Hats',
    cols: 2,
    width: 563,
    height: 423
  },
  {
    url: '/living/6.jpg',
    title: 'Honey',
    rows: 2,
    cols: 2,
    width: 453,
    height: 462
  },
  {
    url: '/living/7.jpg',
    title: 'Basketball',
    width: 568,
    height: 288
  },
  {
    url: '/living/8.jpg',
    title: 'Fern',
    width: 458,
    height: 246
  },
  {
    url: '/living/9.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
    width: 486, 
    height: 490
  },
  {
    url: '/living/10.jpg',
    title: 'Burger',
    width: 334,
    height: 449
  },
  {
    url: '/living/11.jpg',
    title: 'Camera',
    width: 505,
    height: 506
  },
  {
    url: '/living/12.jpg',
    title: 'Coffee',
    cols: 2,
    width: 432,
    height: 261
  },
];

export default function QuiltedImageList() {
  const [imgSelected, setImgSelected] = React.useState(null as EhwazImage | null);

  const handleClose = () => {
    console.log("entro")
    setImgSelected(null)
  }
  const handleShow = (image: EhwazImage) => {
    setImgSelected(image)
  }
  return (
    <>
      <ItemModal image={imgSelected} onClose={handleClose}></ItemModal>
      <Gallery images={images} onClick={handleShow} />
    </>
  );
}