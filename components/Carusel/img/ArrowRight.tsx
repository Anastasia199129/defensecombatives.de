interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function ArrowRight(props: Props) {
  return (
    <button {...props}>
      <svg
        width='27'
        height='26'
        viewBox='0 0 27 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M15 4L24 13L15 22' stroke='#FFAE12' strokeWidth='3' />
        <path d='M24 13L0 13' stroke='#FFAE12' strokeWidth='3' />
      </svg>
    </button>
  )
}
