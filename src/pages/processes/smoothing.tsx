import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Input,
  SimpleGrid,
  Spinner,
  Text,
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
      'https://agile-fjord-29952.herokuapp.com/processing/smoothing'
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
              <MyHeading mt='10'>平滑化</MyHeading>
              <MyDiscription mt='6'>
                平滑化は画像をぼやけさせる処理で，画像中のノイズ除去などに効果的です．
                <br />
                画像の高周波成分(エッジやノイズ)を消すことで結果として画像全体がぼやけています．
                このような処理を画像の<b>平滑化</b>といいます．
                <br />
                <br />
                平滑化の中にも様々な種類がありますが，このページでは指定した範囲内の画素値の平均をとることで
                画像の平滑化を行う<b>「平均値フィルタ」</b>
                を使った処理を試せます．
              </MyDiscription>
              <MySampleImages
                mt='8'
                originalSrc={`https://imagen.yuma-gz.com/dog.jpg`}
                resultSrc={`https://imagen.yuma-gz.com/dog_smooth.jpg`}
              />
            </Box>
            <Box px='10'>
              <MySubHeading mt={['8', '16']}>平滑化を試す．</MySubHeading>
              <MyDiscription>
                稀に，処理時間が20秒程かかる場合があります．
              </MyDiscription>
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
