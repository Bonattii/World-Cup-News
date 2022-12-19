interface ImportantNewsProps {
  bannerUrl: string;
  title: string;
  description: string;
  altDesc: string;
  newsLink: string;
}

export default function importantNews(props: ImportantNewsProps) {
  return (
    <div className=" mx-auto mt-0 relative hover:scale-105 duration-1000 py-8">
      <a href={props.newsLink} target="_blank" className="flex justify-center">
        <img
          src={props.bannerUrl}
          alt={props.altDesc}
          className="rounded-xl mb-10 w-[64rem] h-[36rem] shadow-[10px_10px_5px] shadow-primary opacity-90"
        />
      </a>

      <h1 className="absolute top-16 left-12 text-4xl text-background font-semibold mr-1">
        {props.title}
      </h1>
      <p className="absolute bottom-24 max-w-lg left-12 text-background text-2xl font-semibold">
        {props.description}
      </p>
    </div>
  );
}
