import { Button, ButtonProps } from '@chakra-ui/react'

export const MyButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      bgColor='blue.500'
      color='white'
      _hover={{
        color: 'blue.500',
        bgColor: 'white',
        border: '1px',
        borderColor: 'blue.500',
      }}
    />
  )
}
