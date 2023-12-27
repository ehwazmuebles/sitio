'use client'
import * as React from 'react';

import Gallery, {EhwazImage} from '@/components/gallery';
import ItemModal from '@/components/itemModal';

const images: EhwazImage[] = [
  {
    url: '/dormitorio/1.jpg',
    title: 'chifonier',
    rows: 2,
    cols: 2,
    width: 557, 
    height: 840
  },
  {
    url: '/dormitorio/2.jpg',
    title: 'cama',
    width: 816,
    height: 547
  },
  {
    url: '/dormitorio/3.jpg',
    title: 'cama',
    width: 760,
    height: 540
  },
  {
    url: '/dormitorio/4.jpg',
    title: 'cama',
    cols: 2,
    width: 560,
    height: 457
  },
  {
    url: '/dormitorio/5.jpg',
    title: 'cama',
    cols: 2,
    width: 838,
    height: 562
  },
  {
    url: '/dormitorio/6.jpg',
    title: 'cama',
    rows: 2,
    cols: 2,
    width: 737,
    height: 458
  },
  {
    url: '/dormitorio/7.jpg',
    title: 'cama',
    width: 659,
    height: 591
  },
  {
    url: '/dormitorio/8.jpg',
    title: 'cama',
    width: 764,
    height: 480
  },
  {
    url: '/dormitorio/9.jpg',
    title: 'cama',
    rows: 2,
    cols: 2,
    width: 997, 
    height: 658
  },
  {
    url: '/dormitorio/10.jpg',
    title: 'cama',
    width: 993,
    height: 650
  },
  {
    url: '/dormitorio/11.jpg',
    title: 'mueble',
    width: 241,
    height: 464
  },
  {
    url: '/dormitorio/12.jpg',
    title: 'mueble',
    cols: 2,
    width: 890,
    height: 569
  },
];

export default function QuiltedImageList() {
  const [imgSelected, setImgSelected] = React.useState(null as EhwazImage | null);

  const handleClose = () => {
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