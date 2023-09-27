import { AspectRatio, Box, Center, Flex, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';
//  import '../scss/_slick_theme.scss';
//  import '../scss/_slick.scss';

import {
  AiFillLeftCircle,
  AiFillRightCircle
} from 'react-icons/ai'

const ImageSlider = ({ images }) => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", width: "30px", height: "30px", right: "10px" }}
        onClick={onClick}
      >
        <AiFillRightCircle size={30} style={{ color: "rgba(255,255,255,0.75)" }} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", width: "30px", height: "30px", zIndex: "9", left: "10px" }}
        onClick={onClick}
      >
        <AiFillLeftCircle size={30} style={{ color: "rgba(255,255,255,0.75)" }} />
      </div>
    );
  }

  const settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (

    <Box>
      <Flex>
        <Slider {...settings}>
          {images && images.map((value, index) => (
            <Image objectFit={{ base: 'cover' }} src={value} alt={`image${index}`} borderRadius='lg' />
          ))}
        </Slider>
        {/* <HStack className="justify-content-center" style={{ margin: "40px 0" }}>
          {images && images.map(({ }, index) => (
            <img src={images[index]} style={{ width: "50px", height: "50px", margin: "5px" }} />
          ))}
        </HStack> */}
      </Flex>
    </Box>
  );

}

export default ImageSlider;
