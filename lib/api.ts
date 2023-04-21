export const sendContactForm = async(data) => fetch('/api/nodemailer/nodemailer',
{
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})