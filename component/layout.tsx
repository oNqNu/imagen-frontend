import Head from 'next/head'
import { chakra, Text, Center, HStack, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const MyLayout = ({ children, ...props }: any) => {
  const precesses = [
    { name: 'グレースケール', label: 'grayscale' },
    { name: '平滑化', label: 'grayscale2' },
    { name: 'エッジ検出', label: 'grayscale3' },
    // { name: 'グレースケール4', label: 'grayscale4' },
    // { name: 'グレースケール5', label: 'grayscale5' },
  ]
  const router = useRouter()
  const pushRoute = (e, href: string) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <>
      <Head>
        <title>Imagen</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        {
          // eslint-disable-next-line @next/next/no-page-custom-font
          <link
            href='https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap'
            rel='stylesheet'
          />
        }
      </Head>
      <chakra.header bgColor='black' w='100%' h='60px'>
        <Text
          color='white'
          textAlign='center'
          lineHeight='60px'
          w='32'
          fontSize='4xl'
          my='auto'
          ml='60'
          fontFamily='fantasy'
          cursor='pointer'
          onClick={(e) => pushRoute(e, `/`)}
        >
          Imagen
        </Text>
      </chakra.header>
      <Center w='100%' h='70px'>
        <HStack gap='4'>
          {precesses.map((process, i) => (
            <Box
              key={i}
              w='32'
              textAlign='center'
              lineHeight='70px'
              color='gray.500'
              cursor='pointer'
              onClick={(e) => pushRoute(e, `/processes/${process.label}`)}
              _hover={{
                color: 'black',
                transition: '0.5s',
                fontSize: 'lg',
              }}
            >
              {process.name}
            </Box>
          ))}
        </HStack>
      </Center>
    </>
  )
}
