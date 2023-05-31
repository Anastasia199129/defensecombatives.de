import Container from '../Container/Container'
import data from './medalsAndText.json'

import s from './MedalsAndText.module.sass'

export default function MedalsAndText() {
  return (
    <section>
      <Container>
        <div className={s.cardWrapper}>
          {data.map(({ id, img, text }) => (
            <div key={id} className={s.card}>
              <img 
                src={img.src} 
                alt={img.alt} 
                title={img.text} 
              />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
