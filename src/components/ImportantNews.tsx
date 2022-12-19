interface ImportantNewsProps {
  bannerUrl: string;
  title: string;
  description: string;
  altDesc: string;
}

export default function importantNews(props: ImportantNewsProps) {
  return (
    <div className=" mx-auto mt-2 relative hover:scale-105 duration-1000 py-8">
      <a
        href="https://www.marca.com/en/world-cup/2022/03/26/623e73d046163f4b128b4594.html"
        target="_blank"
        className="flex justify-center"
      >
        <img
          src={props.bannerUrl}
          alt={props.altDesc}
          className="rounded-xl mb-10 m-2-5xl shadow-[10px_10px_5px] shadow-primary"
        />
      </a>

      <h1 className="absolute top-16 left-12 text-4xl text-background font-semibold">
        {props.title}
      </h1>
      <p className="absolute bottom-24 max-w-lg left-12 text-background text-2xl font-semibold">
        {props.description}
      </p>
    </div>
  );
}
