import {
  Box,
  Button,
  Center,
  chakra,
  HStack,
  SimpleGrid,
  SlideFade,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { MyLayout } from '../component/layout'
import { FadeInImage } from '../component/image'
import { BsGithub } from 'react-icons/bs'
export default function Home() {
  const router = useRouter()

  return (
    <>
      <MyLayout />
      <Center w='100%' fontSize={['xl', '6xl']} fontWeight='700' mt='12'>
        <Text textAlign='center'>
          こんにちは，<chakra.span color='blue.600'>Imagen </chakra.span>
          は様々な
          <br />
          画像処理を体験できるサイトです.
        </Text>
      </Center>
      <Center mt='12' flexDirection='column'>
        <SimpleGrid gap='4' zIndex='1' columns={[2, 4]}>
          <FadeInImage image='dog.jpg' delay={0} />
          <FadeInImage image='dog_gray.jpg' delay={0.3} />
          <FadeInImage image='dog_rgb.jpg' delay={0.6} />
          <FadeInImage image='dog_edge.jpg' delay={0.9} />
        </SimpleGrid>
        <SlideFade
          in
          offsetY='20px'
          transition={{ enter: { duration: 1.0, delay: 1.0 } }}
        >
          <Box
            m='-10'
            h='20'
            w='6xl'
            bgColor='#DDD'
            borderRadius='50%'
            display={['none', 'block']}
          ></Box>
        </SlideFade>
        <Center my={['16', '32']}>
          <SimpleGrid spacing={4} columns={[1, 2]}>
            <Button
              as='a'
              leftIcon={<BsGithub size='30px' />}
              bgColor='black'
              colorScheme='blackAlpha'
              color='white'
              variant='solid'
              size='lg'
              href='https://github.com/oNqNu/imagen-frontend'
              target='_blank'
            >
              フロントエンド
            </Button>
            <Button
              as='a'
              leftIcon={<BsGithub size='30px' />}
              variant='outline'
              size='lg'
              borderColor='black'
              href='https://github.com/oNqNu/imagen-backend'
              target='_blank'
            >
              バックエンド
            </Button>
          </SimpleGrid>
        </Center>
      </Center>
    </>
  )
}
