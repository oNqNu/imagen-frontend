import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Input,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import { MyButton } from '../../component/button'
import {
  MyImageSlider,
  MyPreviewImage,
  MySampleImages,
} from '../../component/image'
import { MyLayout } from '../../component/layout'
import { MyDiscription, MyHeading, MySubHeading } from '../../component/text'

export default function Home() {
  const [image, setImage] = useState<File>()
  const [originalImage, setOriginalImage] = useState<any>('')
  const [resultImage, setResultImage] = useState<string>('')
  const [isPreviewing, setIsPreviewing] = useState<Boolean>(false)
  const [isViewing, setIsViewing] = useState<Boolean>(false)
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const handleOnAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const img: File = e.target.files[0]
    setImage(img)
  }

  const submitImage = () => {
    setIsLoading(true)
    const header = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
      },
    }
    const data = new FormData()

    data.append('image', image)

    const postImageUri =
      'https://agile-fjord-29952.herokuapp.com/processing/edge_detection'
    axios
      .post(postImageUri, data, header)
      .then((res) => {
        console.log(res.data)
        setResultImage(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
  }
  const onConfirm = () => {
    submitImage()
    setIsViewing(true)
    setIsPreviewing(false)
    const reader = new FileReader()
    reader.onloadend = () => {
      setOriginalImage(reader.result)
    }
    reader.readAsDataURL(image)
  }

  const onRechoose = () => {
    setIsPreviewing(false)
    setImage(null)
  }

  const onRetry = () => {
    setIsPreviewing(false)
    setIsViewing(false)
    setImage(null)
    setResultImage(null)
  }

  return (
    <>
      <MyLayout />
      <Center w='100%'>
        <Container maxW='7xl'>
          <SimpleGrid columns={[1, 2]}>
            <Box>
              <MyHeading mt='10'>エッジ検出</MyHeading>
              <MyDiscription mt='6'>
                <b>エッジ検出</b>
                は画像内にある物体のエッジを見つけるための画像処理技術です．
                <br />
                エッジは輝度の不連続性から検出され、物体の輪郭や特徴抽出等の画像解析に使われます．
                <br />
                具体的な応用例は，道路の白線検出や不良品の検出などに使用されます．
                <br />
                <br />
                エッジ検出の中にも様々な方式がありますが，このページでは輪郭の検出漏れや誤検出が少ないなどの特徴がある
                <b>Canny法</b>でのエッジ検出を試せます．
              </MyDiscription>
              <MySampleImages
                mt='8'
                originalSrc={`https://imagen.yuma-gz.com/dog.jpg`}
                resultSrc={`https://imagen.yuma-gz.com//dog_edge.jpg`}
              />
            </Box>
            <Box px='10'>
              <MySubHeading mt={['8', '16']}>エッジ検出を試す．</MySubHeading>
              <Box mt='8'>
                {!isViewing && (
                  <Input
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
                    <MyPreviewImage image={image} />

                    <Flex mt='4'>
                      <MyButton mr='4' onClick={onConfirm}>
                        確定
                      </MyButton>
                      <MyButton onClick={onRechoose}>
                        別の画像を選択する．
                      </MyButton>
                    </Flex>
                  </Box>
                )}
                {isLoading && (
                  <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                  />
                )}

                {isViewing && !isLoading && (
                  <Box>
                    <MyImageSlider
                      originalImage={originalImage}
                      resulImage={resultImage}
                    />

                    <MyButton mt='4' mr='4' onClick={onRetry}>
                      他の画像を試す
                    </MyButton>
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
                  </Box>
                )}
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Center>
    </>
  )
}
