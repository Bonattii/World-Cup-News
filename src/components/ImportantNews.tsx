interface ImportantNewsProps {
  bannerUrl: string;
  title: string;
  description: string;
}

export default function importantNews(props: ImportantNewsProps) {
  return (
    <div className="container mx-auto mt-10 relative hover:scale-105 duration-1000">
      <a
        href="https://www.marca.com/en/world-cup/2022/03/26/623e73d046163f4b128b4594.html"
        target="_blank"
      >
        <img
          src={props.bannerUrl}
          alt="Messi with a big smile after going to the World Cup Final"
          className="w-6/12 rounded-xl shadow-primary_alpha shadow-xl"
        />
      </a>

      <h1 className="absolute top-10 left-8 text-3xl text-background font-semibold">
        {props.title}
      </h1>
      <p className="absolute bottom-10 max-w-md left-8 text-background text-md font-semibold">
        {props.description}
      </p>
    </div>
  );
}
