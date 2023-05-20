import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { useRouter } from 'next/router';


import s from './Carusel.module.sass'
import Link from 'next/link'
import { log } from 'console'

const items = [
  { id: 0, path: '/kinder', imageUrl: 'photo_2023-05-01_13-51-14.jpg' },
  { id: 1, path: '/kinder', imageUrl: 'photo_2023-05-01_13-51-17.jpg' },
  { id: 2, path: '/kinder', imageUrl: 'photo_2023-05-01_13-51-20.jpg' },
  { id: 3, path: '/kinder', imageUrl: 'photo_2023-05-01_13-51-23.jpg' },
]

export default function Carusel() {

  const router = useRouter();

  const onClickItem = (e:number) => {
    console.log(e);
    router.push(items[e].path)
  }

  return (
      <Carousel
        dynamicHeight={true}
        transitionTime={500}
        showThumbs={false}
        showStatus={false}
        interval={2500}
        autoPlay={true}
        infiniteLoop={true}
        onClickItem={onClickItem}
      >
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
      </Carousel>
  )
}
