import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  Input,
  Text,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'
import { BsFillForwardFill } from 'react-icons/bs'
import { BiDownload } from 'react-icons/bi'

export default function Home() {
  const [images, setImages] = useState<File[]>([])
  const [resultImage, setResultImage] = useState<string>('')
  const [isPreviewing, setIsPreviewing] = useState<Boolean>(false)
  const [isViewing, setIsViewing] = useState<Boolean>(false)
  const inputId = Math.random().toString(32).substring(2)
  const handleOnAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const img: File = e.target.files[0]
    setImages([...images, img])
  }

  const precesses = [
    { name: 'グレースケール', label: 'grayscale' },
    { name: '平滑化', label: 'grayscale2' },
    { name: 'エッジ検出', label: 'grayscale3' },
    // { name: 'グレースケール4', label: 'grayscale4' },
    // { name: 'グレースケール5', label: 'grayscale5' },
  ]

  const submitImage = () => {
    const header = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      },
    }
    const data = new FormData()
    images.map((image, i) => {
      data.append(`file${i}`, image)
    })
    console.log(images)
    console.log(data.get('file0'))
    const postImageUri = 'http://localhost:5000/processing/test'
    axios
      .post(postImageUri, data, header)
      .then((res) => {
        console.log(res.data)
        setResultImage(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
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
      <Center w='100%'>
        <Box w='80%'>
          <SimpleGrid columns={2}>
            <Box h='100vh'>
              <Box ml='10' mt='10'>
                <Text
                  fontSize='6xl'
                  fontFamily='"M PLUS Rounded 1c", sans-serif'
                  fontWeight='900'
                  display='inline-block'
                >
                  グレースケール
                </Text>
              </Box>
              <Text
                mt='6'
                mx='10'
                fontSize='xl'
                lineHeight='8'
                fontFamily='"M PLUS Rounded 1c", sans-serif'
                fontWeight='300'
              >
                通常，画像はRGB(赤,緑,青)の3つの値で表されます.
                <br />
                そういった画像を，色見のない明るさの度合いだけで表現することを
                <br />
                <b>グレースケール化</b>といいます．
                <br />
                <br />
                Pythonの画像処理ライブラリである<b>Open CV</b>
                を使うことで簡単に画像をグレースケール化することができます．
              </Text>
              <Center mt='10'>
                <chakra.img src='dog.jpg' alt='description of image' h='48' />
                <BsFillForwardFill size='70px' />
                <chakra.img
                  src='dog_gray.jpg'
                  alt='description of image'
                  h='48'
                />
              </Center>
            </Box>
            <Box h='100vh' px='10'>
              <Text
                fontFamily='"M PLUS Rounded 1c", sans-serif'
                mt='100'
                fontSize='3xl'
                fontWeight='600'
              >
                グレースケール化を試す．
              </Text>
              <Box mt='8'>
                {!isViewing && (
                  <Input
                    // id={inputId}
                    type='file'
                    accept='image/*,.png,.jpg,.jpeg,.gif'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleOnAddImage(e)
                      setIsPreviewing(true)
                    }}
                  />
                )}
                {isPreviewing && (
                  <Box>
                    {images.map((image, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <chakra.img
                        key={i}
                        src={URL.createObjectURL(image)}
                        alt='description of image'
                        h='52'
                      />
                    ))}
                    <Button
                      m='4'
                      onClick={() => {
                        submitImage()
                        setIsViewing(true)
                        setIsPreviewing(false)
                      }}
                      bgColor='blue.500'
                      color='white'
                      _hover={{
                        color: 'blue.500',
                        bgColor: 'white',
                        border: '1px',
                        borderColor: 'blue.500',
                      }}
                    >
                      確定
                    </Button>
                    <Button
                      bgColor='blue.500'
                      color='white'
                      _hover={{
                        color: 'blue.500',
                        bgColor: 'white',
                        border: '1px',
                        borderColor: 'blue.500',
                      }}
                      onClick={() => {
                        setIsPreviewing(false)
                        setImages([])
                      }}
                    >
                      別の画像を選択する．
                    </Button>
                  </Box>
                )}

                {isViewing && (
                  <Box w='xl' h='xl'>
                    {images.map((image, i) => (
                      <ReactCompareSlider
                        key={i}
                        itemOne={
                          <ReactCompareSliderImage
                            src={URL.createObjectURL(image)}
                            alt='Image one'
                          />
                        }
                        itemTwo={
                          <ReactCompareSliderImage
                            src={`data:image/jpeg;base64,${resultImage}`}
                            alt='Image two'
                          />
                        }
                      />
                    ))}
                    <Button
                      as='a'
                      href={`data:image/jpeg;base64,${resultImage}`}
                      download
                      bgColor='blue.500'
                      color='white'
                      mt='4'
                      mr='4'
                      _hover={{
                        color: 'blue.500',
                        bgColor: 'white',
                        border: '1px',
                        borderColor: 'blue.500',
                      }}
                    >
                      <BiDownload size='30px' />
                    </Button>
                    <Button
                      bgColor='blue.500'
                      color='white'
                      mt='4'
                      mr='4'
                      _hover={{
                        color: 'blue.500',
                        bgColor: 'white',
                        border: '1px',
                        borderColor: 'blue.500',
                      }}
                      onClick={() => {
                        setIsPreviewing(false)
                        setIsViewing(false)
                        setImages([])
                      }}
                    >
                      他の画像を試す
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Center>
    </>
  )
}
