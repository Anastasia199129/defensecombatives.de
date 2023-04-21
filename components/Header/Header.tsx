import Link from 'next/link'
import data from './header.json'
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import s from './Header.module.sass'

interface Data {
  name: string
  link: string
}

// const [dropdownOpen, setDropdownOpen] = useState(false);

// const toggle = () => setDropdownOpen(!dropdownOpen);

export default function Header() {
  return (
    <>
      <Button variant='contained' color='primary'>
        Click me!
      </Button>
      <div>
        {data &&
          data.map(({ name, link }: Data, i: number) => (
            <p key={i} className={s.p}>
              <Link href={`${link}`}>{name}</Link>
            </p>
          ))}
      </div>
    </>
  )
}
