import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-background h-fyll w-full">
      <Navbar />
      <header>
        <div className="container mx-auto flex justify-center">
          <h1 className="text-5xl mt-8 mb-0 text-primary font-bold">
            Stay on top of all the world cup news!
          </h1>
        </div>
      </header>
      <Carousel />
    </div>
  );
}

export default App;

// SOCIAL MEDIAS ON THE NAVBAR AND A LINK TO SIGN UP ON THE NEWSLETTER
