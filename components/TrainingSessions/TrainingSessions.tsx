import Title from '../Title/Title'
import Container from '../Container/Container'

import s from './TrainingSessions.module.sass'

export default function TrainingSessions() {
  return (
    <section className={s.section}>
      <Container>
      <Title title='WIE SIND DIE TRAININGSEINHEITEN'/>
      <div className={s.imgWrapper}>
        <img src="/img/trainings_kids.jpg" alt="trainings_kids" title='trainings_kids'/>
      </div>
      </Container>
    </section>
  )
}
