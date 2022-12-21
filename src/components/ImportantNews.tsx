interface ImportantNewsProps {
  bannerUrl: string;
  title: string;
  description: string;
  altDesc: string;
  newsLink: string;
}

export default function importantNews(props: ImportantNewsProps) {
  return (
    <div className="relative mx-auto mt-0 hover:scale-95 duration-2000 py-8 min-w-20 max-w-6xl h-32 lg:h-32 2xl:h-44 w-full hover:opacity-[0.90] hover:brightness-50 2xl:max-w-[100rem]">
      <a href={props.newsLink} target="_blank" rel="noreferrer">
        <img
          src={props.bannerUrl}
          alt={props.altDesc}
          className="rounded-xl mb-10 shadow-[10px_10px_5px] shadow-primary w-full h-full hover:shadow-accent"
        />
      </a>

      <h1 className="absolute top-16 left-16 text-4xl text-background font-bold mr-1 max-w-4xl md:max-w3xl uppercase">
        {props.title}
      </h1>
      <p className="absolute bottom-16 max-w-xl left-16 text-background text-2xl font-semibold md:max-w-lg 2xl:max-w-3xl">
        {props.description}
      </p>
    </div>
  );
}
