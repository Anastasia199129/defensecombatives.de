// import DemoCarousel  from '../New'
import Link from 'next/link'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Carusel from '../Carusel/Carusel'
import Container from '../Container/Container'
import s from './Hero.module.sass'

import Slider from "react-slick";

export default function Hero() {

  // function SampleNextArrow(props:any) {
  //   const { style, onClick } = props;
  //   return (
  //     <div
  //       className={s.next}
  //       style={{ ...style, display: "block", background: "red" }}
  //       // onClick={onClick}
  //     />
  //   );
  // }
  
  // function SamplePrevArrow(props:any) {
  //   const { style, onClick } = props;
  //   return (
  //     <div
  //       className={s.prev}
  //       style={{ ...style, display: "block", background: "green" }}
  //       // onClick={onClick}
  //     />
  //   );
  // }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    // customPadding:  (i:any) => <button>{i + 1}</button>,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
    // arrow: true
  };

  
const items = [
  { id: 0, path: '/kinder', imageUrl: 'photo_2023-05-01_13-51-14.jpg' },
  { id: 1, path: '/kinder', imageUrl: 'photo_2023-05-01_13-51-17.jpg' },
  { id: 2, path: '/kinder', imageUrl: 'photo_2023-05-01_13-51-20.jpg' },
  { id: 3, path: '/kinder', imageUrl: 'photo_2023-05-01_13-51-23.jpg' },
]

  return <div className={s.wrapper}>
     <Slider {...settings}>
     {items.map((item) => (
          <Link 
            href='/kinder' 
            // className={s.wrapperImg} 
            key={item.id}
          >
            <img 
              src={item.imageUrl} 
              alt={`Slide ${item.id}`} 
            />
          </Link>
        ))}
    </Slider>
      {/* <Carusel /> */}
    </div>
}
