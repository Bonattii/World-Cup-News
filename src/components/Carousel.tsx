import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import ImportantNews from './ImportantNews';

export default function Carousel() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      effect="fade"
      className="mySwiper"
      autoplay={{ disableOnInteraction: false, delay: 7000 }}
      slidesPerView={1.5}
      centeredSlides={true}
      spaceBetween={100}
    >
      <SwiperSlide className="w-[60rem]">
        <ImportantNews
          bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/26/16482599142258.jpg"
          title="Messi hints at retirement after World Cup on his final game in Argentina"
          description="It's hard to accept but Leo Messi's career with Argentina is going through its final year, he played his very last official game for the national team inside his country."
          altDesc="Messi with a big smile after going to the World Cup Final"
          newsLink="https://www.marca.com/en/world-cup/2022/03/26/623e73d046163f4b128b4594.html"
        />
      </SwiperSlide>
      <SwiperSlide className="w-[60rem]">
        <ImportantNews
          bannerUrl="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1213%2Fr1106029_1296x729_16%2D9.jpg&w=1140&cquality=40&format=jpg"
          title="Ronaldo says Neymar should have psychological support after World Cup pressure cooker"
          description="Brazil great Ronaldo believes Neymar and other Brazilian players should have psychological help to deal with the disproportionate pressure from the World Cup."
          altDesc="Neymar crying after lose"
          newsLink="https://www.espn.com/soccer/fifa-world-cup/story/4831335/ronaldo-says-neymar-should-have-psychological-support-after-world-cup-pressure-cooker"
        />
      </SwiperSlide>
      <SwiperSlide className="w-[60rem]">
        <ImportantNews
          bannerUrl="https://www.aljazeera.com/wp-content/uploads/2022/12/SSS17519_1.jpg?resize=770%2C513&quality=80"
          title="France fans hail Mbappe’s dazzling World Cup final performance"
          description="Mbappe secured the golden boot with his hat-trick in the final and came close to winning a second World Cup."
          altDesc="Mbappe celebrating after a goal"
          newsLink="https://www.aljazeera.com/sports/2022/12/18/france-fans-hail-mbappes-dazzling-world-cup-final-performance"
        />
      </SwiperSlide>
      <SwiperSlide className="w-[60rem]">
        <ImportantNews
          bannerUrl="https://i2-prod.mirror.co.uk/incoming/article28757763.ece/ALTERNATES/s615b/0_GettyImages-1449847576.jpg"
          title="Luka Modric's reaction speaks volumes as Croatia hero"
          description="Modric himself, even at 37, still covers the ground. Often he looks fatigued, as though he’s not got one more sprint left in him."
          altDesc="Modric running with the ball"
          newsLink="https://www.mirror.co.uk/sport/football/match-reports/luka-modric-world-cup-croatia-28757741"
        />
      </SwiperSlide>
      <SwiperSlide className="w-[60rem]">
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
