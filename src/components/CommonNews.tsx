interface CommonNewsProps {
  bannerUrl: string;
  title: string;
  description: string;
  altDesc: string;
}

export default function CommonNews(props: CommonNewsProps) {
  return (
      <div className="mx-auto mt-10 flex gap-6 col-span-5">
        <div>
          <img
            src={props.bannerUrl}
            alt={props.altDesc}
            className="w-72 rounded-xl"
          />
        </div>
        <div className="max-w-lg flex flex-col gap-4 mt-4 mb-6">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
  );
}
