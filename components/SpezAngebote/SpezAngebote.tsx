import Link from 'next/link'
import Container from '../Container/Container'
import data from './data.json'

import s from './SpezAngebote.module.sass'
import Title from '../Title/Title'
import Arrow from './Arrow'

export default function SpezAngebote() {
  return (
    <div className={s.wrapper}>
    <Container>
  
        <Title title='unsere speziellen angebote'/>
        <ul className={s.ul}>
          {data &&
            data.map(({ id, idLink= '', title, description, img, button }) => (
              <li key={id}>
                <div>
                <div className={s.imgWrapper}>
                <img src={img.src} alt='' />
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
                </div>
                <Link 
                  id={idLink}
                  className={s.link} 
                  href={button.link}>
                    {button.text}
                    <Arrow/>
                    {/* <img 
                      src='/img/link_arrow.svg' 
                      alt="" 
                    /> */}
                  </Link>
              </li>
            ))}
        </ul>
  
    </Container>
    </div>
  )
}
