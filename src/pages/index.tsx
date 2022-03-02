import { Box, Center, chakra, Container, HStack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { MyLayout } from '../component/layout'
export default function Home() {
  const router = useRouter()
  const pushRoute = (e, href: string) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <>
      <MyLayout />
      <Center
        w='100%'
        fontSize='6xl'
        // fontFamily='"M PLUS Rounded 1c", sans-serif'
        fontWeight='700'
        mt='12'
      >
        <Text textAlign='center'>
          こんにちは，<chakra.span color='blue.600'>Imagen </chakra.span>
          は様々な
          <br />
          画像処理を
          {/* <br /> */}
          体験できるサイトです．
        </Text>
      </Center>
      <Center mt='12' flexDirection='column'>
        <HStack gap='4'>
          <chakra.img src='../dog.jpg' alt='description of image' h='32' />
          <chakra.img src='../dog_gray.jpg' alt='description of image' h='32' />
          <chakra.img
            src='../dog_smooth.jpg'
            alt='description of image'
            h='32'
          />
          <chakra.img src='../dog_edge.jpg' alt='description of image' h='32' />
        </HStack>
        <Box
          m='-10'
          h='20'
          w='6xl'
          bgColor='blue.100'
          borderRadius='50%'
          zIndex='-1'
        ></Box>
      </Center>
    </>
  )
}
