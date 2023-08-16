interface Props {
  name: string
  nachname: string
  number: string
  email: string
  nachricht: string
}

export const createSendGrMsg = ({ name, nachname, number, email, nachricht }: Props) => {
  console.log('here', name, nachname, nachricht, email, number)

  return {
    to: 'kontakt@defensecombatives.de',
    from: 'defensecombatives.de@gmail.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: `Name: ${name}, Email: ${email}, Number: ${number}, Message: ${nachricht}`,
    html: `<h1>Name</h1>
      <p>${name}</p>
      <h1>Nachname</h1>
      <p>${nachname}</p>
      <h1>Number</h1>
      <p>${email}</p>
      <h1>Number</h1>
      <p>${number}</p>
      <h1>Nachricht</h1>
      <p>${nachricht}</p>`,
  }
}
