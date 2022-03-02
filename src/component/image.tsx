import { Center, chakra } from '@chakra-ui/react'
import { BsFillForwardFill } from 'react-icons/bs'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'

export const MySampleImages = ({ orginalSrc, resultSrc, ...props }: any) => {
  return (
    <Center {...props}>
      <chakra.img src={`${orginalSrc}`} alt='original image' h='40' />
      <BsFillForwardFill size='70px' />
      <chakra.img src={`${resultSrc}`} alt='result image' h='40' />
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
    <ReactCompareSlider
      key={key}
      itemOne={<ReactCompareSliderImage src={originalImage} alt='Image one' />}
      itemTwo={
        <ReactCompareSliderImage
          src={`data:image/jpeg;base64,${resulImage}`}
          alt='Image two'
        />
      }
    />
  )
}
