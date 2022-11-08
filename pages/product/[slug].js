import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/cartSlice";

const ProductDetail = ({ pizza }) => {
  const [priceIndex, setPriceIndex] = useState(0);
  const [success, setSuccess] = useState(false);
  const [extras, setExtras] = useState([]);
  const [amount, setAmount] = useState(1);

  const [finalPrice, setFinalPrice] = useState(pizza.prices[0]);
  const priceRef = useRef();
  const dispatch = useDispatch();

  const changePrice = (num) => {
    setFinalPrice(finalPrice + num);
  };

  const handleSize = (index) => {
    const difference = pizza.prices[index] - pizza.prices[priceIndex];
    setPriceIndex(index);
    changePrice(difference);
  };

  const handleAdditionalIngredients = (e, item) => {
    handleAnimatePrice();
    const isChecked = e.target.checked;
    if (isChecked) {
      changePrice(item.price);
      setExtras((prev) => [...prev, item]);
    } else {
      changePrice(-item.price);
      setExtras((prev) => prev.filter((extra) => extra._id !== item._id));
    }
  };

  const handleAnimatePrice = () => {
    priceRef.current.style.animation = "none";
    setTimeout(() => {
      priceRef.current.style.animation = "bump 0.6s forwards";
    }, 0);
  };

  const handleAddToCart = () => {
    setSuccess(true);
    dispatch(
      addProduct({
        _id: pizza._id,
        title: pizza.title,
        img: pizza.img,
        price: finalPrice,
        amount: +amount,
        extras,
      })
    );
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="wrapper max-w-6xl flex flex-col justify-center items-center gap-5 md:flex-row md:gap-20">
      <img
        src={pizza.img}
        alt={pizza.title}
        className="max-w-xs m-auto md:m-0"
      />
      <div className="grid gap-8 max-w-2xl sm:gap-4 md:gap-8">
        <div className="grid gap-3">
          <h3 className="font-bold">{pizza.title}</h3>
          <p className="text-neutral-600 text-base">{pizza.desc}</p>
          <p
            className="w-fit p-2 py-1 bg-rose-500 text-white rounded-full text-base"
            ref={priceRef}
          >
            ${finalPrice}
          </p>
        </div>
        <div>
          <p className="mb-1 text-center md:text-start">Choose a size</p>
          <div className="flex justify-evenly md:justify-start md:gap-8">
            {pizza.prices.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`${
                    priceIndex === index
                      ? "bg-primary/30 ring ring-inset ring-primary"
                      : undefined
                  } grid justify-items-center items-start w-24 p-2 rounded-lg transition hover:bg-primary/30`}
                  onClick={() => {
                    handleSize(index);
                    handleAnimatePrice();
                  }}
                >
                  <span className="text-teal-600 text-base">
                    {index === 0 && "small"}
                    {index === 1 && "medium"}
                    {index === 2 && "large"}
                  </span>
                  <img
                    src="../images/pizzas/pizza.svg"
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
            {pizza.extras.map((item) => {
              return (
                <label
                  key={item._id}
                  className="flex items-center gap-1 p-1 text-base cursor-pointer"
                >
                  <input
                    type="checkbox"
                    onChange={(e) => handleAdditionalIngredients(e, item)}
                  />
                  <span>{item.text}</span>
                </label>
              );
            })}
          </div>
        </div>
        <div className="grid gap-1">
          <div className="flex justify-center items-center gap-2 md:justify-start">
            <input
              type="number"
              className="w-12 p-1 ring-1 ring-neutral-400 ring-inset rounded outline-primary/70"
              step={1}
              min={1}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button
              className="p-2 py-1 bg-primary text-white rounded-md"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          {success && (
            <p className="text-emerald-600 text-center md:text-start">
              Added to cart successfully!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  const response = await fetch(`http://localhost:3000/api/products/${slug}`);
  const data = await response.json();

  return {
    props: {
      pizza: data.product,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();

  const paths = data.products.map((item) => {
    return {
      params: {
        slug: item._id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default ProductDetail;
