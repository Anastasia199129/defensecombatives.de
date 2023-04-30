import { sendContactForm } from '@/lib/api'
import MyContainer from '../Container/Container'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Container,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useState } from 'react'

import s from './Form.module.sass'
import { log } from 'console'

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

  // const notify = (status: string) => {
  //   console.log(status)

  //   switch (status) {
  //     case 'success':
  //       console.log('1')
  //       toast.success('Daten gesendet!')
  //       break
  //     case 'error':
  //       console.log('2')
  //       toast.error('Pflichtfelder ausfüllen!')
  //     default:
  //       console.log('3')
  //       break
  //   }
  // }

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
      try {
        // if (result.ok) {
        const res = await axios.post('/api/users/addUser', {
          ...values,
        })
        toast.success('Daten gesendet!')
        setState(initialState)
        setTouched({
          name: false,
          nachname: false,
          email: false,
        })
        console.log({ res })
        // }
      } catch (error) {
        console.log(error)
      }
    } else {
      toast.error('Pflichtfelder ausfüllen!')
      setState(initialState)
    }
  }

  // const getAllUsers = async () => {
  //   try {
  //     const { data } = await axios.get('/api/users/getAllUsers')
  //     console.log({ data })
  //   } catch (error) {
  //     console.log({ error })
  //   }
  // }
  // return  <button onClick={getAllUsers}>get All</button>

  return (
    <MyContainer>
      <form onSubmit={onSubmit} className={s.formContainer}>
        <Container className={s.form} maxW='100%'>
          <FormControl
            isRequired
            isInvalid={!values.name && touched.name}
            mb={5}
          >
            <FormLabel>Name</FormLabel>
            <Input
              type='text'
              name='name'
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Obligatorisch</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={!values.nachname && touched.nachname}
            mb={5}
          >
            <FormLabel>Nachname</FormLabel>
            <Input
              type='text'
              name='nachname'
              value={values.nachname}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Obligatorisch</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={!values.email && touched.email}
            mb={5}
          >
            <FormLabel>E-Mail</FormLabel>
            <Input
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Obligatorisch</FormErrorMessage>
          </FormControl>

          <FormControl mb={5}>
            <FormLabel>Telefon</FormLabel>
            <Input
              type='number'
              name='number'
              value={values.number}
              onChange={handleChange}
            />
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
        </Container>
        <button>kjojl</button>
        {/* <Button
          className={s.button}
          isLoading={isLoading}
          disabled={!values.name || !values.email || !values.nachname}
          onClick={onSubmit}
        >
          Schicken
        </Button> */}
      </form>
    </MyContainer>
  )
}
