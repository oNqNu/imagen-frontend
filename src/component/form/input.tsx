import { Input, Text } from '@chakra-ui/react'

export const MyInput = ({ label, ...props }) => {
  return (
    <>
      <Text mb='8px' fontWeight='bold'>
        {label}
      </Text>
      <Input variant='outline' placeholder='Outline' />
    </>
  )
}
