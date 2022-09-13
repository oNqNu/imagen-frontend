import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Input,
  SimpleGrid,
  Spinner,
  VStack,
} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { BiDownload } from 'react-icons/bi'
import { MyButton, MySubButton } from '../../component/button'
import {
  MyImageSlider,
  MyPreviewImage,
  MySampleImages,
} from '../../component/image'
import { MyLayout } from '../../component/layout'
import { MyDiscription, MyHeading, MySubHeading } from '../../component/text'
import { MySlider } from '../../component/form/slider'
import { MyInput } from '../../component/form/input'

export default function Home() {
  const [image, setImage] = useState<File>()
  const [isEasyMode, setIsEasyMode] = useState(true)
  const [originalImage, setOriginalImage] = useState<any>('')
  const [resultImage, setResultImage] = useState<string>('')
  const [isPreviewing, setIsPreviewing] = useState<Boolean>(false)
  const [isViewing, setIsViewing] = useState<Boolean>(false)
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const formItems = [
    { label: 'パラメーター1', name: 'parameter1', type: 'slider' },
    { label: 'パラメーター2', name: 'parameter2', type: 'slider' },
    { label: 'パラメーター3', name: 'parameter3', type: 'slider' },
    { label: 'パラメーター4', name: 'parameter4', type: 'slider' },
    { label: 'パラメーター5', name: 'parameter5', type: 'slider' },
    { label: '埋め込む情報', name: 'parameter3', type: 'input' },
  ]
  const formItemsForEasyMode = [
    { label: '埋め込む情報', name: 'parameter3', type: 'input' },
  ]
  const [formValues, setFormValues] = useState({
    parameter1: null,
    parameter2: null,
    parameter3: null,
  })
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
      'https://agile-fjord-29952.herokuapp.com/processing/change_color'
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

  const changeMode = () => {
    setIsEasyMode(!isEasyMode)
  }

  return (
    <>
      <MyLayout />
      <Center w='100%'>
        <Container maxW='7xl'>
          <SimpleGrid columns={[1, 2]}>
            <Box>
              <MyHeading mt='10'>デザインQRコード</MyHeading>
              <MyDiscription mt='6'>
                QRコードにデザイン性を持たせることで、なんの情報が埋め込まれたQRコードなのか分かりやすくなります.
                <br />
                <br />
                このページでは，任意の画像を背景としたオリジナルのデザインQRコードを作成することができます.
              </MyDiscription>
              <MySampleImages
                mt='8'
                originalSrc={`https://imagen.yuma-gz.com/org.png`}
                resultSrc={`https://imagen.yuma-gz.com/qr.png`}
                imgSize={['48', '48']}
              />
            </Box>
            <Box px='10'>
              <MySubHeading mt={['8', '16']}>
                デザインQRコードを作成する．
              </MySubHeading>
              <MySubButton mt='4' mr='4' onClick={changeMode}>
                {isEasyMode
                  ? 'Advanced Mode に切り替える'
                  : '簡易モードに切り替える'}
              </MySubButton>
              <MyDiscription>
                稀に，処理時間が20秒程かかる場合があります．
                <br />
                QRコードの作成に必要なパラメーター，また埋め込む情報（URLなど）を入力してください．
              </MyDiscription>
              <Box mt='8'>
                {!isViewing && isEasyMode && (
                  <>
                    <VStack align='start'>
                      {formItemsForEasyMode.map((item, index) => {
                        if (item.type == 'slider')
                          return <MySlider key={index} label={item.label} />
                        if (item.type == 'input')
                          return <MyInput key={index} label={item.label} />
                      })}
                    </VStack>
                    <Input
                      type='file'
                      mt='4'
                      accept='image/*,.png,.jpg,.jpeg,.gif'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleOnAddImage(e)
                        setIsPreviewing(true)
                      }}
                    />
                  </>
                )}
                {!isViewing && !isEasyMode && (
                  <>
                    <VStack align='start'>
                      {formItems.map((item, index) => {
                        if (item.type == 'slider')
                          return <MySlider key={index} label={item.label} />
                        if (item.type == 'input')
                          return <MyInput key={index} label={item.label} />
                      })}
                    </VStack>
                    <Input
                      type='file'
                      mt='4'
                      accept='image/*,.png,.jpg,.jpeg,.gif'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleOnAddImage(e)
                        setIsPreviewing(true)
                      }}
                    />
                  </>
                )}
                {isPreviewing && (
                  <Box>
                    <MyPreviewImage image={image} />

                    <Flex mt='4' mb='4'>
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
