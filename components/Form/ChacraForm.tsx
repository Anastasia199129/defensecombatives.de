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

import { checkEmail } from '@/helpers/checkEmail'

import s from './Form.module.sass'

interface Props {
  backgroundImage?: boolean
}

const initValues = {
  name: '',
  nachname: '',
  email: '',
  number: '',
  nachricht: '',
}

const initialState = { values: initValues, isLoading: false }

export default function ChacraForm({ backgroundImage = false }: Props) {
  const [state, setState] = useState(initialState)
  const [touched, setTouched] = useState({
    name: false,
    nachname: false,
    email: false,
  })
  const [isValidValues, setIsValidValues] = useState({
    name: true,
    nachname: true,
    email: true,
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

    ////check is Email valid 
    if (!checkEmail(values.email) && values.email.length > 3) {
      setIsValidValues((prev) => ({
        ...prev,
        email: false,
      }))
    } else {
      setIsValidValues((prev) => ({
        ...prev,
        email: true,
      }))
    }

    ////check is Name valid
    if (!values.name) {
      setIsValidValues((prev) => ({
        ...prev,
        name: false,
      }))
    } else {
      setIsValidValues((prev) => ({
        ...prev,
        name: true,
      }))
    }

    ////check is Nachname valid
    if (!values.nachname) {
      setIsValidValues((prev) => ({
        ...prev,
        nachname: false,
      }))
    } else {
      setIsValidValues((prev) => ({
        ...prev,
        nachname: true,
      }))
    }
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
    try {
      if (
        values.name &&
        values.email &&
        values.nachname &&
        checkEmail(values.email)
      ) {
        const result = await sendContactForm(values)

        // if (result.ok) {
        // const res = await axios.post('/api/users/addUser', {
        //   ...values,
        //   headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-Type': 'application/json',
        //   },
        // })
        toast.success('Daten gesendet!')
        setState(initialState)
        setTouched({
          name: false,
          nachname: false,
          email: false,
        })
        setIsValidValues((prev) => ({
          ...prev,
          email: true,
          name: true,
          nachname: true
        }))
        // console.log({ res })
        // }
        setState(initialState)
      } else {
        toast.error('Pflichtfelder ausfüllen!')

        ///invalid email
        if (!checkEmail(values.email)) {
          setIsValidValues((prev) => ({
            ...prev,
            email: false,
          }))
        }

        ///invalid name
        if (!values.name) {
          setIsValidValues((prev) => ({
            ...prev,
            name: false,
          }))
        }

        ///invalid nachname
        if (!values.nachname) {
          setIsValidValues((prev) => ({
            ...prev,
            nachname: false,
          }))
        }
      }
    } catch (error) {
      console.log(error)
    }
    setState((prev) => ({
      ...prev,
      isLoading: false,
    }))
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
    <div className={`${backgroundImage ? s.wrapper : s.section}`}>
      <MyContainer>
        <h4>
          Hinterlassen Sie eine Anfrage und wir sagen Ihnen, was Sie brauchen,
          um bei uns durch zu starten!
        </h4>
        <form
          // onSubmit={onSubmit}
          className={s.formContainer}
        >
          <Container className={s.form} maxW='100%'>
            <FormControl
              isRequired
              isInvalid={!values.name && touched.name || !isValidValues.name}
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
              isInvalid={!values.nachname && touched.nachname || !isValidValues.nachname}
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
              isInvalid={
                (!values.email && touched.email) || !isValidValues.email
              }
              mb={5}
            >
              <FormLabel>E-Mail</FormLabel>
              <Input
                style={{ borderColor: `${isValidValues.email ? '' : 'red'}` }}
                type='email'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              {!isValidValues.email && (
                <FormErrorMessage>ungültige E-Mail</FormErrorMessage>
              )}
              {!values.email && touched.email && (
                <FormErrorMessage>Obligatorisch</FormErrorMessage>
              )}
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
          <Button
            className={s.button}
            isLoading={isLoading}
            disabled={!values.name || !values.email || !values.nachname}
            onClick={onSubmit}
          >
            Schicken
          </Button>
        </form>
      </MyContainer>
    </div>
  )
}
