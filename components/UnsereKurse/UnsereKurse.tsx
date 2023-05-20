import data from './data.json'

import Container from '../Container/Container'

import s from './UnsereKurse.module.sass'
import Title from '../Title/Title'


export default function UnsereKurse() {
  return <Container>
    <section>
      <Title title='unsere kurse'/>
    <ul className={s.wrapper}>
      {data.map(({id, text, img}) => (
        <li key={id}>
         <img src={img.src} alt={img.alt} />
           <div
              dangerouslySetInnerHTML={{
                __html: text
              }}
            />
          </li>
      ))}
    </ul>
    </section>
  </Container>
}
