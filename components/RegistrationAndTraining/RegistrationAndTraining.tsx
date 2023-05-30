import Link from 'next/link'
import Container from '../Container/Container'
import s from './RegistrationAndTraining.module.sass'

export default function RegistrationAndTraining() {
  return (
    <div className={s.section}>
      <Container>
        <div className={s.wrapper}>

          <div className={s.card}>
            <h3>Vorherige anmeldung erforderlich</h3>
            <address className={s.address}>
              <ul className={s.list}>
                <li>
                  <Link href='tel:017622651872'>0176-22651872</Link>
                </li>
                <li>
                  <Link href='mailto:kontakt@defensecombatives.de'>
                    kontakt@defensecombatives.de
                  </Link>
                </li>
              </ul>
            </address>
          </div>

          <div className={s.card}>
            <h3>Trainingsort:</h3>
            <p>TUS Kultus | Jahnstraße 20, 64347 Griesheim</p>
          </div>

        </div>
      </Container>
    </div>
  )
}
