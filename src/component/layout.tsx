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
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { init, send } from 'emailjs-com'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BiMailSend } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'

export const MyLayout = ({ children, ...props }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const processes = [
    { name: 'グレースケール', label: 'grayscale' },
    { name: '平滑化', label: 'smoothing' },
    { name: 'エッジ検出', label: 'edge-detection' },
    { name: 'しきい値処理', label: 'binary' },
    { name: '画素値の変更', label: 'change-color' },
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
        <link
          rel='icon'
          href='https://deliver.commons.nicovideo.jp/thumbnail/nc163679?size=l'
        ></link>
      </Head>
      <chakra.header
        bgColor='black'
        w='100%'
        h='50px'
        display='flex'
        alignItems='center'
      >
        <Container
          maxW='7xl'
          h='50px'
          justifyContent='space-between'
          display='flex'
          alignItems='center'
        >
          <Text
            color='white'
            textAlign='center'
            lineHeight='50px'
            w='40'
            fontSize='4xl'
            fontFamily='sans-serif'
            fontWeight='bold'
            cursor='pointer'
            onClick={(e) => pushRoute(e, `/`)}
            display='inline-block'
          >
            Imagen
          </Text>
          <HStack display='flex' gap='4'>
            <IconButton
              as='a'
              colorScheme='white'
              aria-label='hithub'
              icon={<BsGithub size='40px' />}
              size='40px'
              href='https://github.com/oNqNu/imagen-frontend'
              target='_blank'
            />
            <IconButton
              // variant='outline'
              colorScheme='white'
              aria-label='form'
              icon={<BiMailSend size='40px' />}
              size='40px'
              onClick={onOpen}
              display={['none', 'inline-block']}
            />
            <Menu>
              <MenuButton
                color='white'
                as={IconButton}
                aria-label='Options'
                icon={<AiOutlineMenu size='30px' />}
                colorScheme='blackAlpha'
              />

              <MenuList zIndex='2'>
                {processes.map((process, i) => (
                  <MenuItem
                    key={i}
                    onClick={(e) => pushRoute(e, `/processes/${process.label}`)}
                  >
                    {process.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </HStack>
        </Container>
      </chakra.header>
      <Center w='100%' h='60px' display={['none', 'flex']}>
        <HStack gap='4' mt='4'>
          {processes.map((process, i) => (
            <Button
              key={i}
              w='28'
              textAlign='center'
              lineHeight='60px'
              color='gray.500'
              variant='link'
              onClick={(e) => pushRoute(e, `/processes/${process.label}`)}
              fontSize='sm'
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
