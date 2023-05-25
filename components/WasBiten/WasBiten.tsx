import { title } from 'process'
import Container from '../Container/Container'

import s from './WasBiten.module.sass'

interface Props {
  data: {
    title?: string
    cards: {
      id: string
      price: string
      content: string
      title: string
      img: {
        src: string
        alt: string
        title: string
      }
    }[]
  }
  type?: string
}

export default function WasBiten({ data, type }: Props) {

  return (
    <section className={s.section}>
      {data.title && (
        <Container>
          <h2>{data.title}</h2>
        </Container>
      )}
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
                    className={`${s.price} ${type === 'frauen' ? s.priceFrauen : s.priceKids}`}
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
