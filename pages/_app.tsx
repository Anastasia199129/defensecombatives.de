import '@/styles/global.sass'
import type { AppProps } from 'next/app'

// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { ChakraProvider } from '@chakra-ui/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import store from '@/lib/redux/store'
import myAction from '@/lib/redux/acrions'
import { Provider } from 'react-redux'
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
// store
console.log(store.getState())

console.log(store.dispatch(myAction))

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer autoClose={2000} />
      </Provider>
    </ChakraProvider>
  )
}
