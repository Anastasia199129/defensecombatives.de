import Container from '../Container/Container'
import data from './ourOffers.json'

import s from './OurOffers.module.sass'

export default function OurOffers() {
  return <section className={s.section}>
    <Container>
      <h3>{data.title}</h3>
      <ul>
        {data.text.map((item, inx) => (
          <li key={inx}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
}
