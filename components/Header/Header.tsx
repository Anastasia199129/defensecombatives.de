import Link from 'next/link'
import data from './header.json'
import s from './Header.module.sass'
import { useRouter } from 'next/router'
import { log } from 'console'
import Container from '../Container/Container'

interface Data {
  id: string
  name: string
  link: string
}

export default function Header() {
  const router = useRouter()

  const getActiveLink = (link: string) => {
    if (link === router.pathname) {
      return { color: '#DAA520' }
    } else return {}
  }

  return (
    <Container>
      <div className={s.wrapper}>
        {data &&
          data.map(({ id, name, link }: Data) => (
            <p 
              style={getActiveLink(link)} 
              key={id}
            >
              <Link href={`${link}`}>{name}</Link>
            </p>
          ))}
      </div>
    </Container>
  )
}
