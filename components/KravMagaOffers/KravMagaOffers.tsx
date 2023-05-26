import Container from '../Container/Container'
import s from './KravMagaOffers.module.sass'

import data from './kravMagaOffers.json'

export default function KravMagaOffers() {
  return (
    <section className={s.outsideWrapper}>
      <Container>
        <div className={s.insideWrapper}>
          <div className={s.imgWrapper}>
            <img 
              src={data.img.src} 
              alt={data.img.alt} 
              title={data.img.title} 
            />
          </div>
          <p>{data.text}</p>
        </div>
      </Container>
    </section>
  )
}
