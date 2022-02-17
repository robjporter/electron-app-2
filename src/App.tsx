import { Greetings } from './components/Greetings'
import {
  Button,
  Center,
  ChakraProvider,
  Container,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import { theme } from './theme'

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
            src={'https://vectorified.com/images/icon-react-native-24.png'}
            alt="ReactJS logo"
          />
          <Text>
            An Electron boilerplate including TypeScript, React, Jest and
            ESLint.
          </Text>
          <Button colorScheme={'brand'} onClick={handleSayHello}>
            Send message to main process
          </Button>
        </VStack>
      </Center>
    </ChakraProvider>
  )
}
