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
import ld from 'lodash'

export function App() {
  function handleSayHello() {
    window.Main.sendMessage('HELLO')
    console.log(color.red('Message sent! Check main process log in terminal.'))
  }
  function handleSayHello2() {
    window.Main.sendMessage('TEST')
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
          <Text>{ld.join(['Hello', 'World', 'From', 'React'], ' ')}</Text>
          <Button colorScheme={'brand'} onClick={handleSayHello}>
            Send message 1
          </Button>
          <Button colorScheme={'brand'} onClick={handleSayHello2}>
            Send message 2
          </Button>
        </VStack>
      </Center>
    </ChakraProvider>
  )
}
