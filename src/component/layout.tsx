import {
  Button,
  Center,
  chakra,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { init, send } from 'emailjs-com'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BiMailSend } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'

export const MyLayout = ({ children, ...props }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const precesses = [
    { name: 'グレースケール', label: 'grayscale' },
    { name: '平滑化', label: 'smoothing' },
    { name: 'エッジ検出', label: 'edge-detection' },
  ]
  const router = useRouter()
  const pushRoute = (e, href: string) => {
    e.preventDefault()
    router.push(href)
  }
  const sendMail = () => {
    console.log('send')

    const userID = process.env.NEXT_PUBLIC_USER_ID
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID

    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init(userID)

      const template_param = {
        from_name: name,
        from_email: mail,
        title: title,
        message: message,
      }

      send(serviceID, templateID, template_param)
        .then(() => {
          toast({
            title: '送信完了.',
            description: 'あなたのお問い合わせは正常に処理されました.',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })

          setName('')
          setMail('')
          setMessage('')
          setTitle('')
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
  const handleClick = (e) => {
    e.preventDefault()
    sendMail()
  }

  const handleCanceled = () => {
    setName('')
    setMail('')
    setMessage('')
    setTitle('')
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
      <chakra.header
        bgColor='black'
        w='100%'
        h='60px'
        display='flex'
        alignItems='center'
      >
        <Container
          maxW='60%'
          h='60px'
          justifyContent='space-between'
          display='flex'
          alignItems='center'
        >
          <Text
            color='white'
            textAlign='center'
            lineHeight='60px'
            w='32'
            fontSize='4xl'
            fontFamily='fantasy'
            cursor='pointer'
            onClick={(e) => pushRoute(e, `/`)}
            display='inline-block'
          >
            Imagen
          </Text>
          <HStack display='flex' gap='4'>
            <BsGithub size='40px' color='white' />
            <BiMailSend
              size='40px'
              color='white'
              onClick={onOpen}
              cursor='pointer'
            />
          </HStack>
        </Container>
      </chakra.header>
      <Center w='100%' h='70px'>
        <HStack gap='4' mt='4'>
          {precesses.map((process, i) => (
            <Button
              key={i}
              w='32'
              textAlign='center'
              lineHeight='70px'
              color='gray.500'
              variant='link'
              onClick={(e) => pushRoute(e, `/processes/${process.label}`)}
            >
              {process.name}
            </Button>
          ))}
        </HStack>

        <Modal isOpen={isOpen} onClose={onClose} size='xl' isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>お問い合わせ</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isRequired>
                <FormLabel htmlFor='name'>お名前</FormLabel>
                <Input
                  id='name'
                  placeholder='山田太郎'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor='email'>メールアドレス</FormLabel>
                <Input
                  id='email'
                  type='email'
                  placeholder='sample@sample.com'
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor='title'>件名</FormLabel>
                <Input
                  id='title'
                  placeholder=''
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor='message'>お問い合わせ内容</FormLabel>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme='blue'
                mr={3}
                onClick={() => {
                  onClose()
                  handleCanceled()
                }}
              >
                キャンセル
              </Button>
              <Button variant='ghost' onClick={handleClick}>
                送信する
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </>
  )
}
