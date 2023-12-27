'use client'
import * as React from 'react';

import Gallery, {EhwazImage} from '@/components/gallery';
import ItemModal from '@/components/itemModal';

const images: EhwazImage[] = [
  {
    url: '/comedor/1.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
    width: 503,
    height: 603
  },
  {
    url: '/comedor/2.jpg',
    title: 'Burger',
    width: 523,
    height: 499
  },
  {
    url: '/comedor/3.jpg',
    title: 'Camera',
    width: 674,
    height: 798
  },
  {
    url: '/comedor/4.jpg',
    title: 'Coffee',
    cols: 2,
    width: 984,
    height: 690
  },
  {
    url: '/comedor/5.jpg',
    title: 'Hats',
    cols: 2,
    width: 614,
    height: 628
  },
  {
    url: '/comedor/6.jpg',
    title: 'Honey',
    rows: 2,
    cols: 2,
    width: 999,
    height: 670
  },
  {
    url: '/comedor/7.jpg',
    title: 'Basketball',
    width: 963,
    height: 681
  },
  {
    url: '/comedor/8.jpg',
    title: 'Fern',
    width: 503,
    height: 373
  },
  {
    url: '/comedor/9.jpg',
    title: 'Hats',
    cols: 2,
    width: 497,
    height: 414
  },
  {
    url: '/comedor/10.jpg',
    title: 'Honey',
    rows: 2,
    cols: 2,
    width: 562,
    height: 515
  },
  {
    url: '/comedor/11.jpg',
    title: 'Basketball',
    width: 495,
    height: 545
  },
  {
    url: '/comedor/12.jpg',
    title: 'Fern',
    width: 404,
    height: 452
  },
  {
    url: '/comedor/13.jpg',
    title: 'Hats',
    cols: 2,
    width: 467,
    height: 521
  },
  {
    url: '/comedor/14.jpg',
    title: 'Honey',
    rows: 2,
    cols: 2,
    width: 681,
    height: 538
  },
  {
    url: '/comedor/15.jpg',
    title: 'Basketball',
    width: 392,
    height: 501
  },
  {
    url: '/comedor/16.jpg',
    title: 'Fern',
    width: 1006,
    height: 650
  },
  {
    url: '/comedor/17.jpg',
    title: 'Hats',
    cols: 2,
    width: 556,
    height: 523
  },
  {
    url: '/comedor/18.jpg',
    title: 'Honey',
    rows: 2,
    cols: 2,
    width: 625,
    height: 416
  },
  {
    url: '/comedor/19.jpg',
    title: 'Basketball',
    width: 453,
    height: 530
  },
  {
    url: '/comedor/20.jpg',
    title: 'Fern',
    width: 339,
    height: 533
  },
  {
    url: '/comedor/21.jpg',
    title: 'Hats',
    cols: 2,
    width: 1023,
    height: 707
  },
  {
    url: '/comedor/22.jpg',
    title: 'Honey',
    rows: 2,
    cols: 2,
    width: 341,
    height: 467
  },
  {
    url: '/comedor/23.jpg',
    title: 'Basketball',
    width: 492,
    height: 538
  },
  {
    url: '/comedor/24.jpg',
    title: 'Fern',
    width: 415,
    height: 561
  },
  {
    url: '/comedor/25.jpg',
    title: 'Hats',
    cols: 2,
    width: 286,
    height: 380
  },
  {
    url: '/comedor/26.jpg',
    title: 'Honey',
    rows: 2,
    cols: 2,
    width: 999,
    height: 704
  },
  {
    url: '/comedor/27.jpg',
    title: 'Basketball',
    width: 410,
    height: 414
  },
  {
    url: '/comedor/28.jpg',
    title: 'Fern',
    width: 506,
    height: 464
  },
  {
    url: '/comedor/29.jpg',
    title: 'Hats',
    cols: 2,
    width: 487,
    height: 477
  },
  {
    url: '/comedor/30.jpg',
    title: 'Honey',
    rows: 2,
    cols: 2,
    width: 586,
    height: 485
  },
  {
    url: '/comedor/31.jpg',
    title: 'Basketball',
    width: 152,
    height: 353
  },
  {
    url: '/comedor/32.jpg',
    title: 'Fern',
    width: 273,
    height: 473
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