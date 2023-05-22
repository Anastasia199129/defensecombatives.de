// import DemoCarousel  from '../New'
import Link from 'next/link'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import s from './Hero.module.sass'
import { useRef } from 'react'

import Slider from 'react-slick'
import Carusel from '../Carusel/Carusel'
import Container from '../Container/Container'

interface Props {
  data: {
    title?: string
    subtitle?: string
    text?: string
    backgroundImmage?: string
  }
  type?: string | undefined
}

export default function Hero({ data, type }: Props) {
  const sliderRef = useRef<Slider>(null)

  // const handlePrevArrowClick = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickPrev(); // Пролистывание слайдера назад
  //   }
  // };

  // const handleNextArrowClick = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickNext(); // Пролистывание слайдера вперед
  //   }
  // };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    // customPadding:  (i:any) => <button>{i + 1}</button>,
    // nextArrow: <button className={s.nextArrow} onClick={handleNextArrowClick}><img src='/img/facebook.svg'/></button>,
    // prevArrow: <button onClick={handlePrevArrowClick}><img src='/img/facebook.svg'/></button>
    // arrow: true
  }

  const items = [
    { id: 0, path: '/kinder', imageUrl: 'photo_2023-05-01_13-51-14.jpg' },
    { id: 1, path: '/kinder', imageUrl: 'photo_2023-05-01_13-51-17.jpg' },
    { id: 2, path: '/kinder', imageUrl: 'photo_2023-05-01_13-51-20.jpg' },
    { id: 3, path: '/kinder', imageUrl: 'photo_2023-05-01_13-51-23.jpg' },
  ]

  return (
    <>
      {!data.title && !data.text ? (
        <div className={s.wrapper}>
          <Slider ref={sliderRef} {...settings}>
            {items.map((item) => (
              <Link
                href='/kinder'
                // className={s.wrapperImg}
                key={item.id}
              >
                <img src={item.imageUrl} alt={`Slide ${item.id}`} />
              </Link>
            ))}
          </Slider>
        </div>
      ) : (
        <div
          className={`${s.baner} ${type === 'kinder' ? s.kinder : ''}`}
          style={{ backgroundImage: `url(${data.backgroundImmage})` }}
        >
          <Container>
            <h1>{data?.title}</h1>
            <h2>{data.subtitle}</h2>
            {data.text && (
              <div
                className={s.text}
                dangerouslySetInnerHTML={{
                  __html: data.text,
                }}
              />
            )}
          </Container>
        </div>
      )}
    </>
  )
}

// {/* <Carusel /> */}
