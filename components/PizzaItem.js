import Link from "next/link";

const PizzaItem = ({ _id, img, title, desc, prices }) => {
  return (
    <li className="grid gap-1 max-w-md m-auto p-3 bg-gray-200  rounded-md">
      <img src={img} alt={title} className="m-auto" />
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{title}</h3>
        <p className="text-rose-500 text-base">${prices[0]}</p>
      </div>
      <p className="text-neutral-600 text-base">{desc}</p>
      <Link href={`/product/${_id}`}>
        <a
          className="block ml-auto p-5 py-1 bg-rose-500 text-white rounded-full transition text-lg hover:bg-rose-400
        "
        >
          Order
        </a>
      </Link>
    </li>
  );
};

export default PizzaItem;
