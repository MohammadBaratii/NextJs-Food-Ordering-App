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
    <section className="wrapper max-w-6xl flex flex-col justify-center items-center gap-5 md:flex-row md:gap-20">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="max-w-xs m-auto md:m-0"
      />
      <div className="grid gap-8 max-w-2xl sm:gap-4 md:gap-8">
        <div className="grid gap-3">
          <h3 className="font-bold">{pizza.name}</h3>
          <p className="text-neutral-600 text-base">{pizza.description}</p>
          <p
            className="w-fit p-2 py-1 bg-rose-500 text-white rounded-full text-base"
            ref={priceRef}
          >
            ${pizza.price[priceIndex]}
          </p>
        </div>
        <div>
          <p className="mb-1 text-center md:text-start">Choose a size</p>
          <div className="flex justify-evenly md:justify-start md:gap-8">
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
        <div>
          <p className="mb-1 text-center md:text-start">
            Additional Ingredients
          </p>
          <div className="flex flex-col justify-evenly items-center sm:flex-row md:justify-start md:gap-8">
            <label className="flex items-center gap-1 p-1 text-base cursor-pointer">
              <input type="checkbox" />
              <span>Extra Cheese</span>
            </label>
            <label className="flex items-center gap-1 p-1 text-base cursor-pointer">
              <input type="checkbox" />
              <span>Spicy Sauce</span>
            </label>
            <label className="flex items-center gap-1 p-1 text-base cursor-pointer">
              <input type="checkbox" />
              <span>Garlic Sauce</span>
            </label>
          </div>
        </div>
        <div className="flex justify-center gap-2 md:justify-start">
          <input
            type="number"
            step={1}
            min={1}
            defaultValue={1}
            className="w-12 p-1 py-0 border border-neutral-400 rounded outline-primary/70"
          />
          <button className="p-2 py-1 bg-primary text-white rounded-md">
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
