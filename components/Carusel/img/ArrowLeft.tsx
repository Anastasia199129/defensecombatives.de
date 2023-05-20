import s from '../Carusel.module.sass'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function ArrowLeft(props: Props) {
  return (
    <button {...props}>
      <svg
        // className={s.arrowLeft}
        width='27'
        height='26'
        viewBox='0 0 27 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M12 4L3 13L12 22' stroke='#FFAE12' strokeWidth='3' />
        <path d='M3 13L27 13' stroke='#FFAE12' strokeWidth='3' />
      </svg>
     </button>
  )
}
