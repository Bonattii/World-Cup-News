import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import { Autoplay, Navigation } from 'swiper';

import Navbar from './components/Navbar';
import ImportantNews from './components/ImportantNews';

function App() {
  return (
    <div className="bg-background h-fyll w-full">
      <Navbar />
      <header>
        <div className="container mx-auto flex justify-center">
          <h1 className="text-5xl mt-8 mb-2 text-primary font-bold">
            Stay on top of all the world cup news!
          </h1>
        </div>
      </header>
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
    </div>
  );
}

export default App;

// SOCIAL MEDIAS ON THE NAVBAR AND A LINK TO SIGN UP ON THE NEWSLETTER
