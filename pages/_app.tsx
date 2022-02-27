import '../styles/globals.css'
import { IconContext } from 'react-icons'

import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <IconContext.Provider value={{ size: '100px' }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </IconContext.Provider>
  )
}

export default MyApp
