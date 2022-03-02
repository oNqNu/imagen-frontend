import { Box, Center, chakra, SlideFade } from '@chakra-ui/react'
import { BsFillForwardFill } from 'react-icons/bs'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'

export const MySampleImages = ({ originalSrc, resultSrc, ...props }: any) => {
  return (
    <Center {...props}>
      <chakra.img
        src={`${originalSrc}`}
        alt='original image'
        h={['24', '40']}
      />
      <BsFillForwardFill size='50px' />
      <chakra.img src={`${resultSrc}`} alt='result image' h={['24', '40']} />
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
  return (
    <Box w='80%'>
      <ReactCompareSlider
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
        src={`https://onqnu.github.io/imagen-frontend/${image}`}
        alt='description of image'
        h={['28', '32']}
      />
    </SlideFade>
  )
}
