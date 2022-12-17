import Navbar from './components/Navbar';
import ImportantNews from './components/ImportantNews';
import CommonNews from './components/CommonNews';

function App() {
  return (
    <div className="bg-background h-full w-full">
      <Navbar />
      <ImportantNews
        bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/26/16482599142258.jpg"
        title="Will Messi finally win a World Cup Title?"
        description="That Messi is one of the best players in the world is something that we all known already, but this is going to be the time that he will pass Maradona and win finally a World Cup title with the Argentina National Team?"
        altDesc="Messi with a big smile after going to the World Cup Final"
      />
      <div className="grid grid-cols-10 mt-20 ">
        <CommonNews
          bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/26/16482599142258.jpg"
          title="Will Messi finally win a World Cup Title?"
          description="That Messi is one of the best players in the world is something that we all known already, but this is going to be the time that he will pass Maradona and win finally a World Cup title with the Argentina National Team?"
          altDesc="Messi with a big smile after going to the World Cup Final"
        />
        <CommonNews
          bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/26/16482599142258.jpg"
          title="Will Messi finally win a World Cup Title?"
          description="That Messi is one of the best players in the world is something that we all known already, but this is going to be the time that he will pass Maradona and win finally a World Cup title with the Argentina National Team?"
          altDesc="Messi with a big smile after going to the World Cup Final"
        />
        <CommonNews
          bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/26/16482599142258.jpg"
          title="Will Messi finally win a World Cup Title?"
          description="That Messi is one of the best players in the world is something that we all known already, but this is going to be the time that he will pass Maradona and win finally a World Cup title with the Argentina National Team?"
          altDesc="Messi with a big smile after going to the World Cup Final"
        />
        <CommonNews
          bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/26/16482599142258.jpg"
          title="Will Messi finally win a World Cup Title?"
          description="That Messi is one of the best players in the world is something that we all known already, but this is going to be the time that he will pass Maradona and win finally a World Cup title with the Argentina National Team?"
          altDesc="Messi with a big smile after going to the World Cup Final"
        />
        <CommonNews
          bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/26/16482599142258.jpg"
          title="Will Messi finally win a World Cup Title?"
          description="That Messi is one of the best players in the world is something that we all known already, but this is going to be the time that he will pass Maradona and win finally a World Cup title with the Argentina National Team?"
          altDesc="Messi with a big smile after going to the World Cup Final"
        />
        <CommonNews
          bannerUrl="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/03/26/16482599142258.jpg"
          title="Will Messi finally win a World Cup Title?"
          description="That Messi is one of the best players in the world is something that we all known already, but this is going to be the time that he will pass Maradona and win finally a World Cup title with the Argentina National Team?"
          altDesc="Messi with a big smile after going to the World Cup Final"
        />
      </div>
    </div>
  );
}

export default App;

// SOCIAL MEDIAS ON THE NAVBAR AND A LINK TO SIGN UP ON THE NEWSLETTER
