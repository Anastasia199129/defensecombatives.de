export const sendContactForm = async (data: {
  name: string
  nachname: string
  email: string
  number: string
  nachricht: string
}) =>
  fetch('/api/nodemailer/nodemailer', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => {
    if(!res.ok) throw new Error('Failed to send message')
    return res.json()
  })
