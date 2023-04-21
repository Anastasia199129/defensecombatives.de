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
  Button
} from '@chakra-ui/react'
// import { Button } from '@material-ui/core'
import { useState } from 'react'

const initValues = {
  name: '',
  email: '',
  number: '',
  message: '',
}

const initialState = { values: initValues, isLoading: false }

export default function ChacraForm() {
  const [state, setState] = useState(initialState)
  const [touched, setTouched] = useState({name: false, number: false, email: false})
  const { values, isLoading } = state

  const onBlur = ({target}) => {
    setTouched((prev) => ({
    ...prev,
    [target.name]: true
    }))
  }

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }))

    const onSubmit = async(e) => {
      setState((prev) => ({
        ...prev,
        isLoading: true
      }))
      await sendContactForm(values)
    }

  return (
    <Container maxW='450' mt={12}>
      <Heading>ChacraForm</Heading>
      <FormControl isRequired isInvalid={!values.name && touched.name}  mb={5}>
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
      <FormControl isRequired isInvalid={!values.email && touched.email} mb={5}>
        <FormLabel>Email</FormLabel>
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
        isRequired 
        isInvalid={!values.number && touched.number} 
        mb={5}
      >
        <FormLabel>Number</FormLabel>
        <Input
          type='number'
          name='number'
          errorBorderColor='red.300'
          value={values.number}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <FormControl mb={5}>
        <FormLabel>Message</FormLabel>
        <Textarea
          name='message'
          rows={4}
          value={values.message}
          onChange={handleChange}
        />
      </FormControl>

      <Button 
        variant='outline'
        colorScheme='blue'
        isLoading={isLoading}
        disabled={!values.name || !values.email || !values.number}
        onClick={onSubmit}
      >
        Submit
      </Button>

    </Container>
  )
}
