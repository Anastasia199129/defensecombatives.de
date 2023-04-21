export const sendContactForm = async (data: {
  name: string
  email: string
  number: string
  message: string
}) =>
  fetch('/api/nodemailer/nodemailer', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
