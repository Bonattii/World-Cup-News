import pinMap from '../assets/pinMap.svg';

interface ListItemsProps {
  content: string;
}

export default function ListItems(props: ListItemsProps) {
  return (
    <li className="flex items-center gap-4 text-xl font-semibold">
      <img
        className=" h-10"
        src={pinMap}
        alt="Pin icon with the Qatar flag inside"
      />{' '}
      {props.content}
    </li>
  );
}
