import Container from '../Container/Container'
import RegistrationAndTraining from '../RegistrationAndTraining/RegistrationAndTraining'

import s from './Trainingsplan.module.sass'

export default function Trainingsplan() {
  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.section}>
          <h1>Trainingsplan</h1>
        </div>

        <div className={s.imgSection}>
          {/* <Container> */}
          <div className={s.imgWrapper}>
            <img src='img/schedule.jpg' title='schedule' alt='schedule' />
          </div>
          {/* </Container> */}
        </div>
      </Container>
      {/* <div className={s.absolute}>
        <RegistrationAndTraining />
      </div> */}
    </div>
  )
}
