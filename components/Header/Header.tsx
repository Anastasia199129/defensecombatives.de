import Link from 'next/link'
import data from './header.json'

interface Data {
  name: string,
  link: string
}

export default function Header () {
  return (
    <div>
      {data &&
        data.map(({ name, link }:Data, i:number) => 
        <Link key={i} href={`${link}`}>
          {name}
        </Link>)
      }
    </div>
  )
}
