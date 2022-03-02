import { Text, TextProps } from '@chakra-ui/react'

export const MyDiscription = (props: TextProps) => {
  return <Text fontSize='md' lineHeight='8' {...props} />
}

export const MyHeading = (props: TextProps) => {
  return (
    <Text
      fontSize={['2xl', '4xl']}
      fontWeight='900'
      display='inline-block'
      {...props}
    />
  )
}

export const MySubHeading = (props: TextProps) => {
  return <Text fontSize={['xl', '3xl']} fontWeight='600' {...props} />
}
