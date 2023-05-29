import Container from '../Container/Container'
import data from './andre.json'

import s from './Andre.module.sass'

export default function Andre() {
  return (
    <div className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.imgWrapper}>
            <img 
              src={data.img.src} 
              alt={data.img.alt} 
              title={data.img.title} 
            />
          </div>
          <div>
            <p className={s.title}>{data.title}</p>
            <p>{data.text}</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
