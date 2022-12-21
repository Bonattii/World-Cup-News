import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import ImportantNews from './ImportantNews';

SwiperCore.use([EffectCoverflow]);

export default function Carousel() {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1.2}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
      }}
      modules={[Autoplay]}
      className="mySwiper"
      autoplay={{ disableOnInteraction: false, delay: 7000 }}
      loop={true}
      spaceBetween={0}
      breakpoints={{
        640: {
          spaceBetween: 100
        },
        768: {
          spaceBetween: 80
        },
        1024: {
          spaceBetween: 60
        },
        1200: {
          spaceBetween: 100
        },
        1400: {
          spaceBetween: 150
        },
        1600: {
          spaceBetween: 190
        },
        1800: {
          spaceBetween: 230
        },
        2000: {
          spaceBetween: 280
        },
        2200: {
          spaceBetween: 350
        },
        2400: {
          slidesPerView: 1.5,
          spaceBetween: 420
        }
      }}
    >
      <SwiperSlide>
        <ImportantNews
          bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/26/16482599142258.jpg"
          title="Messi hints at retirement after World Cup on his final game in Argentina"
          description="It's hard to accept but Leo Messi's career with Argentina is going through its final year, he played his very last official game for the national team inside his country."
          altDesc="Messi with a big smile after going to the World Cup Final"
          newsLink="https://www.marca.com/en/world-cup/2022/03/26/623e73d046163f4b128b4594.html"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImportantNews
          bannerUrl="https://images.seattletimes.com/wp-content/uploads/2022/12/urnpublicidap.orgd78ded409153fd46442d3efed954a3a6APTOPIX_WCup_Croatia_Brazil_Soccer_47685.jpg?d=780x520"
          title="Ronaldo says Neymar should have psychological support after World Cup pressure cooker"
          description="Brazil great Ronaldo believes Neymar and other Brazilian players should have psychological help to deal with the disproportionate pressure from the World Cup."
          altDesc="Neymar crying after lose"
          newsLink="https://www.espn.com/soccer/fifa-world-cup/story/4831335/ronaldo-says-neymar-should-have-psychological-support-after-world-cup-pressure-cooker"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImportantNews
          bannerUrl="https://www.thesun.co.uk/wp-content/uploads/2022/12/crop-20801453.jpg?w=1320"
          title="France fans hail Mbappe's dazzling World Cup final performance"
          description="Mbappe secured the golden boot with his hat-trick in the final and came close to winning a second World Cup."
          altDesc="Mbappe holding his golden boot"
          newsLink="https://www.aljazeera.com/sports/2022/12/18/france-fans-hail-mbappes-dazzling-world-cup-final-performance"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImportantNews
          bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/12/06/16703200321820.jpg"
          title="Luka Modric's reaction speaks volumes as Croatia hero"
          description="Modric himself, even at 37, still covers the ground. Often he looks fatigued, as though he's not got one more sprint left in him."
          altDesc="Modric raising the arm and using the captain's armband"
          newsLink="https://www.mirror.co.uk/sport/football/match-reports/luka-modric-world-cup-croatia-28757741"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ImportantNews
          bannerUrl="https://i2-prod.mirror.co.uk/incoming/article28759930.ece/ALTERNATES/s1200d/0_GettyImages-1245679959.jpg"
          title="Morocco star Achraf Hakimi confronted FIFA president"
          description="Morocco star Achraf Hakimi confronting president Gianni Infantino following the World Cup third-place play-off to Croatia."
          altDesc="Hakimi trying to scream some words in the field"
          newsLink="https://www.mirror.co.uk/sport/football/news/hakimi-infantino-fifa-morocco-croatia-28759754"
        />
      </SwiperSlide>
    </Swiper>
  );
}
