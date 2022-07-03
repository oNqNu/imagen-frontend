import { Box, Center, chakra, Flex, SlideFade } from '@chakra-ui/react'
import { BsFillForwardFill } from 'react-icons/bs'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  styleFitContainer,
} from 'react-compare-slider'

export const MySampleImages = ({
  originalSrc,
  resultSrc,
  imgSize = ['24', '40'],
  ...props
}: any) => {
  return (
    <Center {...props}>
      <chakra.img src={`${originalSrc}`} alt='original image' h={imgSize} />
      <SlideFade
        in
        offsetX='-40px'
        transition={{ enter: { duration: 1.0, delay: 1.0 } }}
      >
        <BsFillForwardFill size='50px' />
      </SlideFade>
      <SlideFade
        in
        offsetX='-40px'
        transition={{ enter: { duration: 1.0, delay: 1.0 } }}
      >
        <chakra.img src={`${resultSrc}`} alt='result image' h={imgSize} />
      </SlideFade>
    </Center>
  )
}

export const MyPreviewImage = ({ image, key, ...props }: any) => {
  return (
    <chakra.img
      key={key}
      src={URL.createObjectURL(image)}
      alt='description of image'
      w='96'
    />
  )
}

export const MyImageSlider = ({
  originalImage,
  resulImage,
  key,
  ...props
}: any) => {
  styleFitContainer['objectFit'] = 'contain'
  styleFitContainer['objectPosition'] = 'center'
  return (
    <Box w='80%'>
      {/* <Box w={['64', 'xl']}> */}
      <ReactCompareSlider
        style={{ width: '100%' }}
        {...styleFitContainer}
        key={key}
        itemOne={
          <ReactCompareSliderImage src={originalImage} alt='Image one' />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={`data:image/jpeg;base64,${resulImage}`}
            alt='Image two'
          />
        }
      />
    </Box>
  )
}

export const FadeInImage = ({ image, delay }: any) => {
  return (
    <SlideFade
      in
      offsetY='40px'
      transition={{ enter: { duration: 1.0, delay } }}
    >
      <chakra.img
        src={`https://imagen.yuma-gz.com/${image}`}
        alt='description of image'
        h={['28', '32']}
      />
    </SlideFade>
  )
}
