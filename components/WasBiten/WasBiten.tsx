import Container from '../Container/Container'
import data from './wasBiten.json'

import s from './WasBiten.module.sass'

export default function WasBiten() {
  return (
    <section className={s.section}>
      <Container>
        <h2>{data.title}</h2>
      </Container>
      <div className={s.wrapper}>
        {data.cards.map(({ id, price, content, title, img }) => (
          <div className={s.cardWrapper} key={id}>
            <Container>
              <div className={s.card}>
                <div className={s.imgWrapper}>
                  <img src={img.src} alt={img.alt} title={img.title} />
                </div>

                <div className={s.contentWrapper}>
                  <h3>{title}</h3>
                  <p>{content}</p>
                  <div 
                    className={s.price}
                    dangerouslySetInnerHTML={{
                      __html: price,
                    }}
                  />
                </div>
              </div>
            </Container>
          </div>
        ))}
      </div>
    </section>
  )
}
