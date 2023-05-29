import Container from '../Container/Container'
import data from './forNurseriesAndSchools.json'

import s from './ForNurseriesAndSchools.module.sass'

export default function ForNurseriesAndSchools() {
  return <section className={s.section}>
    <Container>
      <h3>{data.title}</h3>
      <p>{data.text}</p>
    </Container>
  </section>
}
