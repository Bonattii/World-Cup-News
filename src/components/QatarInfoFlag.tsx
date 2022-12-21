interface QatarInfoFlagProps {
  title: string;
  description: string;
}

export default function QatarInfoFlag(props: QatarInfoFlagProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-full border py-6 bg-qatar pl-10 bg-no-repeat relative w-40 h-40 border-primary shadow-md shadow-primary30 bg-[center_top_-0.2px]">
      <dt className="absolute top-14 mb-2 text-3xl font-extrabold">
        {props.title}
      </dt>
      <dd className="absolute top-24 font-light text-background text-center">
        {props.description}
      </dd>
    </div>
  );
}
