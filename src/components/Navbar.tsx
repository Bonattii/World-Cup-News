import logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <nav className="bg-background border-b-4 border-primary10 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-14 mr-3 " alt="World Cup News" />
          <span className="text-primary text-md self-center font-semibold whitespace-nowrap">
            World Cup News
          </span>
        </a>
        <div className="flex md:order-2">
          <a
            href="#join"
            type="button"
            className="text-background bg-primary10 hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Join Newsletter
          </a>
        </div>
      </div>
    </nav>
  );
}
