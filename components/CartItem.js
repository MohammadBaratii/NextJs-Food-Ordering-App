import Image from "next/image";

const CartItem = ({ title, img, extras, amount, price }) => {
  return (
    <li className="flex justify-evenly items-center py-2 sm:justify-between">
      <Image src={img} alt={title} width={80} height={80} />
      <div className="flex flex-col p-1 border-x border-neutral-300 md:flex-1 md:flex-row md:justify-evenly md:border-none">
        <h4 className="text-neutral-800">{title}</h4>
        <p>
          {extras.map((extra) => (
            <span key={extra._id}>{extra.text}, </span>
          ))}
        </p>
      </div>
      <div className="flex flex-col md:flex-1 md:flex-row md:justify-evenly">
        <p>{amount}</p>
        <p>${(price * amount).toFixed(2)}</p>
      </div>
    </li>
  );
};

export default CartItem;
