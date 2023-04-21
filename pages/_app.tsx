import '@/styles/globals.sass'
import type { AppProps } from 'next/app'

// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { ChakraProvider } from '@chakra-ui/react'

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#3f51b5',
//     },
//     secondary: {
//       main: '#f50057',
//     },
//   },
// });


// export default function App({ Component, pageProps }: AppProps) {
//   return <ThemeProvider theme={theme}>
//      <Component {...pageProps} />
//   </ThemeProvider>
// }

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
     <Component {...pageProps} />
  </ChakraProvider>
}