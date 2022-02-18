import {
  Button,
  Center,
  ChakraProvider,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { theme } from './theme'
import { norm } from './utils'

export function App() {
  function handleSayHello() {
    window.Main.sendMessage('Hello World')
    console.log('Message sent! Check main process log in terminal.')
  }

  return (
    <ChakraProvider theme={theme}>
      <Center w="100vw" h="100vh">
        <VStack>
          <Image
            src={'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'}
            alt="ReactJS logo"
          />
          <Text>
            An Electron boilerplate including TypeScript, React, Jest and
            ESLint.
          </Text>
          <Text>{norm('Crème brulée')}</Text>
          <Button colorScheme={'brand'} onClick={handleSayHello}>
            Send message to main process
          </Button>
        </VStack>
      </Center>
    </ChakraProvider>
  )
}
