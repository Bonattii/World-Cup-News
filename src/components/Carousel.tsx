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
          title="Will Messi finally win a World Cup Title?"
          description="That Messi is one of the best players in the world is something that we all known already, but this is going to be the time that he will pass Maradona and win finally a World Cup title with the Argentina National Team?"
          altDesc="Messi with a big smile after going to the World Cup Final"
        />
      </SwiperSlide>
      <SwiperSlide className="w-[60rem]">
        <ImportantNews
          bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/26/16482599142258.jpg"
          title="Will Messi finally win a World Cup Title?"
          description="That Messi is one of the best players in the world is something that we all known already, but this is going to be the time that he will pass Maradona and win finally a World Cup title with the Argentina National Team?"
          altDesc="Messi with a big smile after going to the World Cup Final"
        />
      </SwiperSlide>
      <SwiperSlide className="w-[60rem]">
        <ImportantNews
          bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/26/16482599142258.jpg"
          title="Will Messi finally win a World Cup Title?"
          description="That Messi is one of the best players in the world is something that we all known already, but this is going to be the time that he will pass Maradona and win finally a World Cup title with the Argentina National Team?"
          altDesc="Messi with a big smile after going to the World Cup Final"
        />
      </SwiperSlide>
      <SwiperSlide className="w-[60rem]">
        <ImportantNews
          bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/26/16482599142258.jpg"
          title="Will Messi finally win a World Cup Title?"
          description="That Messi is one of the best players in the world is something that we all known already, but this is going to be the time that he will pass Maradona and win finally a World Cup title with the Argentina National Team?"
          altDesc="Messi with a big smile after going to the World Cup Final"
        />
      </SwiperSlide>
      <SwiperSlide className="w-[60rem]">
        <ImportantNews
          bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/26/16482599142258.jpg"
          title="Will Messi finally win a World Cup Title?"
          description="That Messi is one of the best players in the world is something that we all known already, but this is going to be the time that he will pass Maradona and win finally a World Cup title with the Argentina National Team?"
          altDesc="Messi with a big smile after going to the World Cup Final"
        />
      </SwiperSlide>
    </Swiper>
  );
}
