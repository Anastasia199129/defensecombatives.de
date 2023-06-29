import Image from 'next/image'

import Container from '../Container/Container'
import Title from '../Title/Title'
import Link from 'next/link'
import Arrow from '../SpezAngebote/Arrow'

import data from './data.json'

import s from './UnsereKurse.module.sass'

export default function UnsereKurse() {
  return (
    <Container>
      <section>
        <Title title='unsere kurse' />
        <ul className={s.wrapper}>
          {data.map(({ id, text = '', link = {}, img }) => (
            <li className={`${link.link && s.itemWithLink}`} key={id}>
              {/* <img src={img.src} alt={img.alt} /> */}
              <Image
                layout='responsive'
                width={1000}
                height={120}
                src={img.src}
                alt={img.alt}
              />
              {text && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: text,
                  }}
                />
              )}
              {link.text && link.link && (
                <Link className={s.link} href={link.link}>
                  {link.text}
                  <Arrow />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}
