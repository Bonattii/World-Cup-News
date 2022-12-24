import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

import QatarInfoFlag from './components/QatarInfoFlag';
import JoinNewsletter from './components/JoinNewsletter';
import ListItems from './components/ListItems';

function App() {
  return (
    <div
      className="bg-background h-full
    sm:min-w-[61.25]"
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
            <ListItems content="Receive the most up to date news" />
            <ListItems content="Get the results of the matches" />
            <ListItems content="Facts about the next games" />
            <ListItems content="Be part of the biggest soccer fans group" />
          </ul>
        </article>

        <div id="divider-reverse"></div>

        <article className="bg-background pt-0 px-2 mx-auto pb-0 sm:px-4 text-background">
          <h3 className="text-primary text-center text-4xl font-semibold">
            About the Newsletter
          </h3>
          <div
            className="p-4 bg-background md:p-8"
            id="stats"
            role="tabpanel"
            aria-labelledby="stats-tab"
          >
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
              <QatarInfoFlag title="+100" description="News" />
              <QatarInfoFlag title="10" description="Journalists" />
              <QatarInfoFlag title="+1k" description="Subscribers" />
              <QatarInfoFlag title="32" description="Teams" />
              <QatarInfoFlag title="64" description="Matches" />
              <QatarInfoFlag title="24/7" description="Cover" />
            </dl>
          </div>
        </article>

        <article
          id="join"
          className="bg-primary pt-0 px-2 mx-auto pb-20 sm:px-4 text-background"
        >
          <div id="divider2"></div>
          <h2 className="text-center font-bold text-4xl">
            Join the newsletter now for free!
          </h2>
          <div className="flex justify-center mt-14">
            <JoinNewsletter />
          </div>
        </article>

        <footer className="bg-primary pt-0 px-2 mx-auto sm:px-4 text-background text-center pb-10">
          <p>World Cup News &#169; 2022, All Rights Reserved</p>
        </footer>
      </main>
    </div>
  );
}

export default App;

// SOCIAL MEDIAS ON THE NAVBAR AND A LINK TO SIGN UP ON THE NEWSLETTER
