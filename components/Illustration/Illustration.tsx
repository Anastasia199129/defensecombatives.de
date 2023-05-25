import Container from '../Container/Container'
import s from './Illustration.module.sass'

interface Props {
  img: {
    src: string
    alt: string
    title: string
  }
}

export default function Illustration({ img }: Props) {
  return (
    <Container>
    <div className={s.wrapperImg}>
      <img 
        src={img.src} 
        alt={img.alt} 
        title={img.title} 
      />
    </div>
    </Container>
  )
}
