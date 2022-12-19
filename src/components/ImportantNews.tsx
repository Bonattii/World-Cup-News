interface ImportantNewsProps {
  bannerUrl: string;
  title: string;
  description: string;
  altDesc: string;
}

export default function importantNews(props: ImportantNewsProps) {
  return (
    <div className="container mx-auto mt-4 relative hover:scale-105 duration-1000">
      <a
        href="https://www.marca.com/en/world-cup/2022/03/26/623e73d046163f4b128b4594.html"
        target="_blank"
      >
        <img
          src={props.bannerUrl}
          alt={props.altDesc}
          className="rounded-xl shadow-primary_alpha shadow-xl max-w-5xl mx-auto"
        />
      </a>

      <h1 className="absolute top-10 left-44 text-4xl text-background font-semibold">
        {props.title}
      </h1>
      <p className="absolute bottom-10 max-w-lg left-44 text-background text-2xl font-semibold">
        {props.description}
      </p>
    </div>
  );
}
