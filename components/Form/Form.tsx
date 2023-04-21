import { useState } from 'react'
import Input from './Input/Input'
import s from './Form.module.sass'
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'

export default function Form() {
  const [form, setForm] = useState({ state: '', message: '' })
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => {
      console.log({ prev }, { [e.target.id]: e.target.value })

      return {
        ...prev,
        [e.target.id]: e.target.value,
      }
    })
  }

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (inputs.name && inputs.email && inputs.number) {
      setForm({ state: 'loading', message: '' })
      try {
        const res = await fetch(`api/nodemailer/nodemailer`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        })

        const { error } = await res.json()

        if (error) {
          setForm({
            state: 'error',
            message: error,
          })
          return
        }

        setForm({
          state: 'success',
          message: 'Your message was sent successfully.',
        })
        setInputs({
          name: '',
          email: '',
          number: '',
          message: '',
        })
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Something went wrong',
        })
      }
    }
  }

  return (
    <div className={s.container}>
      <Button>buton</Button>

      <form className={s.form} onSubmit={(e) => onSubmitForm(e)}>
        <Input
          className={s.inputField}
          placeholder='Name'
          type='text'
          value={inputs.name}
          id='name'
          onChange={onChange}
        />
        <Input
          className={s.inputField}
          placeholder='Email'
          type='email'
          value={inputs.email}
          id='email'
          onChange={onChange}
        />
        <Input
          className={s.inputField}
          placeholder='Number'
          type='number'
          value={inputs.number}
          id='number'
          onChange={onChange}
        />
        <button className={s.button} type='submit'>
          Ok
        </button>
        {form.state === 'loading' ? (
          <div>Sending....</div>
        ) : form.state === 'error' ? (
          <div>{form.message}</div>
        ) : (
          form.state === 'success' && <div>Sent successfully</div>
        )}
      </form>
    </div>
  )
}
