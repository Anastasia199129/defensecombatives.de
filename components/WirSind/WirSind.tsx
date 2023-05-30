import Container from '../Container/Container'
import data from './wirSind.json'

import s from './WirSind.module.sass'

export default function WirSind() {
  return (
    <section className={s.section}> 
      <Container>
        <h2>{data.title}</h2>
        <div
          className={s.subtitle}
          dangerouslySetInnerHTML={{
            __html: data.subtitle,
          }}
        />
        <div className={s.wrapper}>

          <div>
            <img src={data.img.src} alt={data.img.alt} title={data.title}/>
          </div>
          <div
          className={s.subtitle}
          dangerouslySetInnerHTML={{
            __html: data.textList,
          }}
        />

        </div>
      </Container>
    </section>
  )
}
