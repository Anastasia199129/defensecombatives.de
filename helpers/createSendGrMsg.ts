interface Props {
  name: string
  number: string
  email: string
  message: string
}

export const createSendGrMsg = ({ name, number, email, message }: Props) => {
  console.log('here', name, message, email, number)

  return {
    to: email,
    from: 'defensecombatives.de@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: `Name: ${name}, Email: ${email}, Number: ${number}, Message: ${message}`,
    html: `<h1>Name</h1>
      <p>${name}</p>
      <h1>Email</h1>
      <p>${email}</p>
      <h1>Number</h1>
      <p>${number}</p>
      <h1>Message</h1>
      <p>${message}</p>`,
  }
}
