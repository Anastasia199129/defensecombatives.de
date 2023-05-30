import Container from '../Container/Container'

import data from './trainingsplan.json'

import s from './Trainingsplan.module.sass'

export default function Trainingsplan() {
  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.section}>
          <h1>{data.title}</h1>
        </div>

        <div className={s.imgSection}>
          <div className={s.imgWrapper}>
            <img src={data.img.src} title={data.img.title} alt={data.img.alt} />
          </div>
        </div>
        
      </Container>
    </div>
  )
}
