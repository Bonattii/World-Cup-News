interface ImportantNewsProps {
  bannerUrl: string;
  title: string;
  description: string;
  altDesc: string;
  newsLink: string;
}

export default function importantNews(props: ImportantNewsProps) {
  return (
    <div className="relative mx-auto mt-0 hover:scale-95 duration-2000 py-8 min-w-20 max-w-6xl h-32 lg:h-32 2xl:h-44 w-full 2xl:max-w-[100rem]">
      <a href={props.newsLink} target="_blank" rel="noreferrer">
        <img
          src={props.bannerUrl}
          alt={props.altDesc}
          className="rounded-xl mb-10 shadow-[10px_10px_5px] brightness-50 shadow-primary w-full h-full hover:shadow-accent object-cover object-right-center sm:object-fill"
        />
      </a>

      <h1 className="absolute top-12 left-6 text-md sm:top-16 sm:left-16 sm:text-4xl text-background font-bold mr-1 max-w-4xl md:max-w3xl uppercase">
        {props.title}
      </h1>
      <p className="absolute left-6 bottom-16 sm:bottom-16 max-w-xl sm:left-16 text-background sm:text-2xl font-semibold md:max-w-lg 2xl:max-w-3xl">
        {props.description}
      </p>
    </div>
  );
}
