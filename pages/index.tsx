import { Box, Center, chakra, Text } from '@chakra-ui/react'
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
      <Box h='52'></Box>
      <Center
        w='100%'
        fontSize='7xl'
        // fontFamily='"M PLUS Rounded 1c", sans-serif'
        fontWeight='700'
      >
        <Text textAlign='center'>
          こんにちは，<chakra.span color='blue.600'>Imagen</chakra.span>
          は様々な画像処理を
          <br />
          体験できるサービスです．
        </Text>
      </Center>
    </>
  )
}
