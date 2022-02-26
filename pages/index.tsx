import { Box, Button, chakra, Container, Input } from '@chakra-ui/react'
import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

export default function Home() {
  const [images, setImages] = useState<File[]>([])
  const [resultImage, setResultImage] = useState<string>('')
  const [isPreviewing, setIsPreviewing] = useState<Boolean>(false)
  const inputId = Math.random().toString(32).substring(2)
  const handleOnAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const img: File = e.target.files[0]
    setImages([...images, img])
  }

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
    <Container>
      <Box mt='20'>
        {!isPreviewing && (
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
              <img
                key={i}
                src={URL.createObjectURL(image)}
                alt='description of image'
              />
            ))}
            <Button onClick={submitImage}>画像送信</Button>
            <Button onClick={() => setIsPreviewing(!isPreviewing)}>
              別の画像を選択する．
            </Button>
          </Box>
        )}

        {/*  eslint-disable-next-line @next/next/no-img-element */}
        {resultImage && (
          <img src={`data:image/jpeg;base64,${resultImage}`} alt='aa' />
        )}
      </Box>
    </Container>
  )
}
