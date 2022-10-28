import { useRef, useState } from "react";

const ProductDetail = () => {
  const [priceIndex, setPriceIndex] = useState(0);
  const priceRef = useRef();

  const pizza = {
    id: 1,
    image: "../images/pizza.png",
    name: "Pepperoni",
    price: [18.99, 23.55, 26.99],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cumque voluptatum, rem doloremque magnam facere expedita eum, explicabo debitis voluptates accusamus accusantium quasi. Mollitia repellendus a nam voluptatibus ea alias!",
  };

  return (
    <section className="wrapper flex flex-col justify-center items-center gap-5 md:flex-row md:gap-20">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="max-w-xs m-auto md:m-0"
      />
      <div className="grid gap-3 max-w-2xl">
        <h3 className="font-bold">{pizza.name}</h3>
        <p className="text-neutral-600 text-base">{pizza.description}</p>
        <p
          className="w-fit p-2 py-1 bg-rose-500 text-white rounded-full text-base"
          ref={priceRef}
        >
          ${pizza.price[priceIndex]}
        </p>
        <div className="mt-4">
          <p className="mb-2 text-center">Choose a size</p>
          <div className="flex justify-evenly">
            {pizza.price.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    priceIndex === index
                      ? "bg-primary/30 ring ring-inset ring-primary"
                      : undefined
                  } grid justify-items-center items-start w-24 p-2 rounded-lg transition hover:bg-primary/30`}
                  onClick={() => {
                    setPriceIndex(index);
                    priceRef.current.style.animation = "none";
                    setTimeout(() => {
                      priceRef.current.style.animation = "bump 0.6s forwards";
                    }, 0);
                  }}
                >
                  <span className="text-teal-600 text-base">
                    {index === 0 && "small"}
                    {index === 1 && "medium"}
                    {index === 2 && "large"}
                  </span>
                  <img
                    src="../images/pizza.svg"
                    alt="pizza"
                    style={{ width: 3 + index + "rem" }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
