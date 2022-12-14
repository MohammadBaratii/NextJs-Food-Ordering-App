import Image from "next/image";
import Link from "next/link";

const PizzaItem = ({ _id, img, title, desc, prices }) => {
  return (
    <li className="relative grid gap-1 max-w-md mx-auto p-3 pb-11 bg-gray-200 rounded-md">
      <Image
        src={img}
        alt={title}
        layout="responsive"
        width={500}
        height={500}
        className="m-auto"
      />
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{title}</h3>
        <p className="text-rose-500 text-base">${prices[0]}</p>
      </div>
      <p className="text-neutral-600 text-base">{desc.substring(0, 70)}...</p>
      <Link href={`/product/${_id}`}>
        <a
          className="absolute block bottom-3 right-3 p-5 py-1 bg-rose-500 text-white rounded-full transition text-lg hover:bg-rose-400
        "
        >
          Order
        </a>
      </Link>
    </li>
  );
};

export default PizzaItem;
