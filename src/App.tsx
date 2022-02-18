import {
  Button,
  Center,
  ChakraProvider,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { theme } from './theme'
import { color, detectDeviceType, isBrowser, stringNormalise } from './utils'

export function App() {
  function handleSayHello() {
    window.Main.sendMessage('Hello World')
    console.log(color.red('Message sent! Check main process log in terminal.'))
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
          <Text>{stringNormalise('Crème brulée')}</Text>
          <Text>{detectDeviceType()}</Text>
          <Text>{isBrowser()}</Text>
          <Button colorScheme={'brand'} onClick={handleSayHello}>
            Send message to main process
          </Button>
        </VStack>
      </Center>
    </ChakraProvider>
  )
}
