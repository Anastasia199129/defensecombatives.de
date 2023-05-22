import Container from '../Container/Container';
import Title from '../Title/Title';

import s from './GoodForKinder.module.sass'

import data from './goodForKinder.json'
import Lapka from './img/Lapka';

export default function GoodForKinder() {
  return <div className={s.section}>
    <Container>
      <Title title={data.title}/>
      <ul>
        {data?.content.map((text, i) => (
          <li key={i}>
            <div className={s.wrapperImg}>
              <Lapka/>
              <span>{i + 1}</span>
            </div>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </Container>
  </div>
}
