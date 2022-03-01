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
      <Box h='28'></Box>
      <Center
        w='100%'
        fontSize='7xl'
        // fontFamily='"M PLUS Rounded 1c", sans-serif'
        fontWeight='700'
      >
        <Text textAlign='center'>
          こんにちは，<chakra.span color='blue.600'>Imagen </chakra.span>
          は様々な画像処理を
          <br />
          体験できるサイトです．
        </Text>
      </Center>
      <Center mt='20' flexDirection='column'>
        <HStack gap='4'>
          <chakra.img src='../dog.jpg' alt='description of image' h='48' />
          <chakra.img src='../dog_gray.jpg' alt='description of image' h='48' />
          <chakra.img
            src='../dog_smooth.jpg'
            alt='description of image'
            h='48'
          />
          <chakra.img src='../dog_edge.jpg' alt='description of image' h='48' />
        </HStack>
        <Box
          m='-10'
          h='20'
          w='7xl'
          bgColor='blue.100'
          borderRadius='50%'
          zIndex='-1'
        ></Box>
      </Center>
    </>
  )
}
