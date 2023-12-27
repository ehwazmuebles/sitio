'use client'
import * as React from 'react';

import Gallery, {EhwazImage} from '@/components/gallery';
import ItemModal from '@/components/itemModal';

const images: EhwazImage[] = [
  {
    url: '/cocina/1.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
    width: 617,
    height: 458
  },
  {
    url: '/cocina/2.jpg',
    title: 'Burger',
    width: 586,
    height: 451
  },
  {
    url: '/cocina/3.jpg',
    title: 'Camera',
    width: 874,
    height: 610
  },
  {
    url: '/cocina/4.jpg',
    title: 'Coffee',
    cols: 2,
    width: 1034,
    height: 709
  },
  {
    url: '/cocina/5.jpg',
    title: 'Hats',
    cols: 2,
    width: 1006,
    height: 666
  },
  {
    url: '/cocina/6.jpg',
    title: 'Honey',
    rows: 2,
    cols: 2,
    width: 703,
    height: 488
  },
  {
    url: '/cocina/7.jpg',
    title: 'Basketball',
    width: 653,
    height: 495
  },
  {
    url: '/cocina/8.jpg',
    title: 'Fern',
    width: 443,
    height: 479
  }
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