import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

import pinMap from './assets/pinMap.svg';

function App() {
  return (
    <div
      className="bg-background h-full
    min-w-[61.25]"
    >
      <Navbar />
      <header>
        <div className="container mx-auto flex justify-center">
          <h1 className="text-5xl mt-12 mb-8 text-primary font-bold">
            Stay on top of all the world cup news!
          </h1>
        </div>
        <Carousel />
      </header>
      <main className="overflow-hidden">
        <div id="divider"></div>
        <article className="bg-primary pt-16 px-2 mx-auto pb-20 flex gap-36 sm:px-4 justify-center text-background">
          <h2 className="text-4xl self-center max-w-sm font-bold">
            Don't lose any news about the World Cup! And enjoy the most of you
            can of this beautiful event!
          </h2>
          <ul className="flex flex-col gap-4 self-center">
            <li className="flex items-center gap-4 text-xl font-semibold">
              <img
                className=" h-10"
                src={pinMap}
                alt="Pin icon with the Qatar flag inside"
              />{' '}
              Receive the most up to date news
            </li>
            <li className="flex items-center gap-4 text-xl font-semibold">
              <img
                className=" h-10"
                src={pinMap}
                alt="Pin icon with the Qatar flag inside"
              />
              Get the results of the matches
            </li>
            <li className="flex items-center gap-4 text-xl font-semibold">
              <img
                className=" h-10"
                src={pinMap}
                alt="Pin icon with the Qatar flag inside"
              />
              Facts about the next games
            </li>
            <li className="flex items-center gap-4 text-xl font-semibold">
              <img
                className=" h-10"
                src={pinMap}
                alt="Pin icon with the Qatar flag inside"
              />
              Be part of the biggest soccer fans group
            </li>
          </ul>
        </article>
      </main>
    </div>
  );
}

export default App;

// SOCIAL MEDIAS ON THE NAVBAR AND A LINK TO SIGN UP ON THE NEWSLETTER
