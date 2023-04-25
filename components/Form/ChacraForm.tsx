import { sendContactForm } from '@/lib/api'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Container,
  Heading,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react'
import axios from 'axios'
import { log } from 'console'
// import { Button } from '@material-ui/core'
import { useState } from 'react'

const initValues = {
  name: '',
  nachname: '',
  email: '',
  number: '',
  nachricht: '',
}

const initialState = { values: initValues, isLoading: false }

export default function ChacraForm() {
  const [state, setState] = useState(initialState)
  const [touched, setTouched] = useState({
    name: false,
    nachname: false,
    email: false,
  })
  const { values, isLoading } = state

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.target as HTMLButtonElement
    setTouched((prev) => ({
      ...prev,
      [target.name]: true,
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target //as HTMLButtonElement | HTMLTextAreaElement
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))
  }

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))
  }

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }))
    if (values.name && values.email && values.nachname) {

      const result = await sendContactForm(values)

      if(result.ok){
        setState((prev) => ({
          ...prev,
          isLoading: false,
        }))
      }      

      const res = await axios.post('https://defensecombatives-de.vercel.app/api/users/addUser', {
       ...values
      })
       console.log({res});
       
    } else alert('qweqweqwe')
  }

  const getAllUsers = async() => {
    const {data} = await axios.get('https://defensecombatives-de.vercel.app/api/users/getAllUsers')
    console.log({data});
  }

  return (
    <Container maxW='450' mt={12}>
      <button onClick={getAllUsers}>get All</button>
      <Heading>ChacraForm</Heading>
      <FormControl isRequired isInvalid={!values.name && touched.name} mb={5}>
        <FormLabel>Name</FormLabel>
        <Input
          type='text'
          name='name'
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={!values.nachname && touched.nachname} mb={5}>
        <FormLabel>Nachname</FormLabel>
        <Input
          type='text'
          name='nachname'
          value={values.nachname}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={!values.email && touched.email} mb={5}>
        <FormLabel>E-Mail</FormLabel>
        <Input
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        // isRequired
        // isInvalid={!values.number && touched.number}
        mb={5}
      >
        <FormLabel>Telefon</FormLabel>
        <Input
          type='number'
          name='number'
          // errorBorderColor='red.300'
          value={values.number}
          onChange={handleChange}
          // onBlur={onBlur}
        />
        {/* <FormErrorMessage>Required</FormErrorMessage> */}
      </FormControl>
      <FormControl mb={5}>
        <FormLabel>Nachricht</FormLabel>
        <Textarea
          name='nachricht'
          rows={4}
          value={values.nachricht}
          onChange={handleChangeTextarea}
        />
      </FormControl>

      <Button
        variant='outline'
        colorScheme='blue'
        isLoading={isLoading}
        disabled={!values.name || !values.email || !values.nachname}
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Container>
  )
}
