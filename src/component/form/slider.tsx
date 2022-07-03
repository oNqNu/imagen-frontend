import {
  Text,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from '@chakra-ui/react'
import { useState } from 'react'

export const MySlider = ({ label, ...props }) => {
  const [sliderValue, setSliderValue] = useState(50)

  return (
    <>
      <Text pb='8' fontWeight='bold'>
        {label}
      </Text>
      <Slider
        aria-label='slider-ex-6'
        min={0}
        max={100}
        onChange={(val) => setSliderValue(val)}
      >
        <SliderMark
          value={sliderValue}
          textAlign='center'
          bg='blue.500'
          color='white'
          mt='-10'
          ml='-5'
          w='12'
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </>
  )
}
